import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  if (process.env.NODE_ENV === 'production') {
    return new NextResponse(null, { status: 404 });
  }

  const { pathname } = request.nextUrl;
  if (pathname === '/storybook' || pathname === '/storybook/') {
    return NextResponse.redirect(new URL('/storybook/index.html', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/storybook/:path*',
};
