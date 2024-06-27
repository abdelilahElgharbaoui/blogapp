import { withAuth } from '@kinde-oss/kinde-auth-nextjs/middleware';
import { NextRequest } from 'next/server';
import React from 'react'

export default function middleware(req:NextRequest) {
   
  return withAuth(req);
}

export const config = {
    matcher: ["/create-post"],
}
