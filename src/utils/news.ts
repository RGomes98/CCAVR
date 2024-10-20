async function fetchMediaType({ id, newsId, url }: { id: number; newsId: number; url: string }) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  try {
    const response = await fetch(url, { method: 'HEAD', signal: controller.signal });
    clearTimeout(timeout);

    const contentType = response.headers.get('content-type');
    const isVideo = contentType?.startsWith('video') ?? false;

    return { id, newsId, url, isVideo };
  } catch (error) {
    clearTimeout(timeout);
    console.error(`Error fetching URL: ${url}`, error);
    return { id, newsId, url, isVideo: false };
  }
}

export { fetchMediaType };
