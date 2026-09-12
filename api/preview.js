// Vercel preview endpoint
// Usage: /api/preview?secret=PREVIEW_SECRET&slug=post-slug

const PREVIEW_COOKIE_NAME = 'sanity_preview'
const PREVIEW_COOKIE_MAX_AGE = 60 * 5 // 5 minutes

module.exports = async (req, res) => {
  try {
    const { secret, slug } = req.query || {}

    if (!secret || secret !== process.env.SANITY_PREVIEW_SECRET) {
      res.status(401).send('Invalid preview secret')
      return
    }

    if (!slug) {
      res.status(400).send('Missing slug')
      return
    }

    const token = process.env.SANITY_PREVIEW_TOKEN
    if (!token) {
      res.status(500).send('Preview token not configured')
      return
    }

    const cookieValue = encodeURIComponent(token)
    const cookie = `${PREVIEW_COOKIE_NAME}=${cookieValue}; Path=/; Max-Age=${PREVIEW_COOKIE_MAX_AGE}; SameSite=Lax; Secure; HttpOnly=false`

    res.setHeader('Set-Cookie', cookie)
    // redirect to the post with preview flag
    res.writeHead(307, { Location: `/blog/${slug}?preview=true` })
    res.end()
  } catch (err) {
    console.error(err)
    res.status(500).send('Preview endpoint error')
  }
}
