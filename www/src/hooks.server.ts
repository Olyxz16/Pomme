import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ resolve, event }) => {
  // Apply CORS header for API routes
  if (event.url.pathname.startsWith('/api/rest') ) {
    // Required for CORS to work
    if(event.request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Methods': 'GET',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
        }
      });
    }
  }
  if (event.url.pathname.startsWith('/add') ) {
    // Required for CORS to work
    if(event.request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
        }
      });
    }
  }

  const response = await resolve(event);
  if (event.url.pathname.startsWith('/api/rest')) {
    response.headers.append('Access-Control-Allow-Origin', `*`);
  }
  if (event.url.pathname.startsWith('/add')) {
    response.headers.append('Access-Control-Allow-Origin', `*`);
  }
  return response;
};