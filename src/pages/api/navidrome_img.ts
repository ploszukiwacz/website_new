import type { APIRoute } from 'astro';
import fs from 'node:fs/promises';
import path from 'node:path';

export const GET: APIRoute = async () => {
  try {
    const images = Array.from({ length: 15 }, (_, i) => `vrc${i + 1}.png`);
    const randomImage = images[Math.floor(Math.random() * images.length)];
    const imagePath = path.join(process.cwd(), 'public', 'vrc', randomImage);
    
    const imageBuffer = await fs.readFile(imagePath);
    
    return new Response(imageBuffer, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'no-store, private, max-age=0, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store',
        'Access-Control-Allow-Origin': '*',
        'Vary': '*'
      }
    });
  } catch (error) {
    console.error('Error serving image:', error);
    return new Response('Error loading image', { status: 500 });
  }
};