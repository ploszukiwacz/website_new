import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  try {
    // List of image files in your public directory  
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

    // Select random image
    const randomImage = images[Math.floor(Math.random() * images.length)];
    
    return new Response('', {
      status: 302,
      headers: {
        'Location': `/vrc/${randomImage}`,
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    });
  } catch (error) {
    return new Response('Internal Server Error', {
      status: 500
    });
  }
};