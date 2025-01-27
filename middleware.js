// File: /middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
  const response = NextResponse.next();

  // Set CORS headers
  response.headers.set('Access-Control-Allow-Origin', 'http://localhost:3000'); // Replace with your frontend's URL
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  response.headers.set('Access-Control-Allow-Credentials', 'true');

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      headers: response.headers,
      status: 204,
    });
  }

  return response;
}
