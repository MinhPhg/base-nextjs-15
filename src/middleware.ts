import createMiddleware from 'next-intl/middleware';

import { routing } from '@/libs/i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ['/', '/(zh|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)'],
};
