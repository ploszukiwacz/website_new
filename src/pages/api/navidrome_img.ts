export const GET: APIRoute = async () => {
  try {
    const images = Array.from({ length: 15 }, (_, i) => `vrc${i + 1}.png`);

    const randomImage = images[Math.floor(Math.random() * images.length)];
    const imagePath = `/vrc/${randomImage}`;

    return new Response('', {
      status: 302,
      headers: {
        'Location': imagePath,
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    });
  } catch (error) {
    return new Response('Error', { status: 500 });
  }
};