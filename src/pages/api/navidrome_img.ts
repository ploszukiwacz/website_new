import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  try {
    const images = [
      'vrc1.png',
      'vrc2.png',
      'vrc3.png',
      'vrc4.png',
      'vrc5.png',
      'vrc6.png',
      'vrc7.png',
      'vrc8.png'
    ];

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
    console.error('Error:', error);
    return new Response('Error', { status: 500 });
  }
};