import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const url = req.nextUrl

  if (url.pathname.startsWith('/dashboard')) {
    const auth = req.cookies.get('dash_auth')

    if (auth?.value === process.env.DASHBOARD_PASSWORD) {
      return NextResponse.next()
    }

    const loginUrl = new URL('/login', req.url)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*'],
}