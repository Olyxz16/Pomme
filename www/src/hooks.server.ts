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
          'Access-Control-Allow-Methods': 'POST, PUT',
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
    if(event.request.method === 'POST') {
      response.headers.append('Access-Control-Allow-Methods', 'POST');
      response.headers.append('Access-Control-Allow-Origin', '*');
      response.headers.append('Access-Control-Allow-Headers', '*');
      return response;
    }
  }
  
  return response;
};