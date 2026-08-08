const API_BASE = "https://www.googleapis.com/youtube/v3";

export type YouTubePlaylistVideo = {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  channelTitle: string;
  thumb: string;
  duration: string;
  viewCount?: string;
  videoUrl: string;
};

function formatDuration(isoDuration: string) {
  const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) {
    return "00:00";
  }

  const [, hours = "0", minutes = "0", seconds = "0"] = match;
  const h = Number(hours);
  const m = Number(minutes);
  const s = Number(seconds);

  const parts = [];
  if (h > 0) {
    parts.push(String(h));
    parts.push(String(m).padStart(2, "0"));
  } else {
    parts.push(String(m));
  }
  parts.push(String(s).padStart(2, "0"));

  return parts.join(":");
}

function pickThumbnail(thumbnails: any) {
  return (
    thumbnails?.maxres?.url ||
    thumbnails?.standard?.url ||
    thumbnails?.high?.url ||
    thumbnails?.medium?.url ||
    thumbnails?.default?.url ||
    ""
  );
}

async function getUploadsPlaylistId(apiKey: string, channelId: string) {
  const channelUrl = new URL(`${API_BASE}/channels`);
  channelUrl.searchParams.set("part", "contentDetails");
  channelUrl.searchParams.set("id", channelId);
  channelUrl.searchParams.set("key", apiKey);

  const channelResponse = await fetch(channelUrl.toString());
  if (!channelResponse.ok) {
    const body = await channelResponse.text();
    throw new Error(`YouTube channel lookup failed: ${channelResponse.status} ${channelResponse.statusText} ${body}`);
  }

  const channelData = await channelResponse.json();
  const uploadsPlaylistId = channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;

  if (!uploadsPlaylistId) {
    throw new Error("The provided channel does not expose an uploads playlist.");
  }

  return uploadsPlaylistId;
}

export async function fetchYouTubePlaylistVideos(
  apiKey: string,
  sourceId: string,
  maxResults = 12,
  sourceType: "playlist" | "channel" = "playlist",
): Promise<YouTubePlaylistVideo[]> {
  const playlistId = sourceType === "channel" ? await getUploadsPlaylistId(apiKey, sourceId) : sourceId;

  const playlistUrl = new URL(`${API_BASE}/playlistItems`);
  playlistUrl.searchParams.set("part", "snippet");
  playlistUrl.searchParams.set("playlistId", playlistId);
  playlistUrl.searchParams.set("maxResults", String(maxResults));
  playlistUrl.searchParams.set("key", apiKey);

  const playlistResponse = await fetch(playlistUrl.toString());
  if (!playlistResponse.ok) {
    const body = await playlistResponse.text();
    throw new Error(`YouTube playlist fetch failed: ${playlistResponse.status} ${playlistResponse.statusText} ${body}`);
  }

  const playlistData = await playlistResponse.json();
  const videoIds = playlistData.items
    ?.map((item: any) => item.snippet?.resourceId?.videoId)
    .filter(Boolean);

  if (!videoIds?.length) {
    return [];
  }

  const videosUrl = new URL(`${API_BASE}/videos`);
  videosUrl.searchParams.set("part", "snippet,contentDetails,statistics");
  videosUrl.searchParams.set("id", videoIds.join(","));
  videosUrl.searchParams.set("key", apiKey);

  const videoResponse = await fetch(videosUrl.toString());
  if (!videoResponse.ok) {
    const body = await videoResponse.text();
    throw new Error(`YouTube video details fetch failed: ${videoResponse.status} ${videoResponse.statusText} ${body}`);
  }

  const videoData = await videoResponse.json();
  return videoData.items.map((item: any) => ({
    id: item.id,
    title: item.snippet.title,
    description: item.snippet.description,
    publishedAt: item.snippet.publishedAt,
    channelTitle: item.snippet.channelTitle,
    thumb: pickThumbnail(item.snippet.thumbnails),
    duration: formatDuration(item.contentDetails.duration),
    viewCount: item.statistics?.viewCount,
    videoUrl: `https://youtu.be/${item.id}`,
  }));
}
