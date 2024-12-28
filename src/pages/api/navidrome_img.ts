import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  try {
    const images = Array.from({ length: 15 }, (_, i) => `vrc${i + 1}.png`);
    const randomImage = images[Math.floor(Math.random() * images.length)];
    const timestamp = Date.now();
    
    return new Response('', {
      status: 302,
      headers: {
        'Location': `/vrc/${randomImage}?t=${timestamp}`,
        'Cache-Control': 'no-store, private, max-age=0, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store',
        'Access-Control-Allow-Origin': '*',
        'Vary': '*'
      }
    });
  } catch (error) {
    return new Response('Error selecting image', { status: 500 });
  }
};