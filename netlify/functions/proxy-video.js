// Simple Netlify Function to proxy video files from Backblaze and add CORS headers.
// Restricts proxied hosts to the Echooroom Backblaze bucket for safety.
const ALLOWED_HOST = 'f005.backblazeb2.com';

exports.handler = async function (event) {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS',
        'Access-Control-Allow-Headers': '*',
      },
      body: '',
    };
  }

  const url = event.queryStringParameters && event.queryStringParameters.url;
  if (!url) {
    return { statusCode: 400, body: 'Missing url query parameter' };
  }

  let parsed;
  try {
    parsed = new URL(url);
  } catch (e) {
    return { statusCode: 400, body: 'Invalid url' };
  }

  if (parsed.host !== ALLOWED_HOST) {
    return { statusCode: 403, body: 'Host not allowed' };
  }

  try {
    const res = await fetch(url);
    const arrayBuffer = await res.arrayBuffer();
    const headers = {
      'Content-Type': res.headers.get('content-type') || 'application/octet-stream',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS',
      'Access-Control-Allow-Headers': '*',
      'Cross-Origin-Resource-Policy': 'cross-origin',
    };

    const base64 = Buffer.from(arrayBuffer).toString('base64');

    return {
      statusCode: res.status || 200,
      headers,
      isBase64Encoded: true,
      body: base64,
    };
  } catch (err) {
    return { statusCode: 502, body: String(err) };
  }
};
