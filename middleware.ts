import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const pathname = request.nextUrl.pathname

  // If the pathname is /api/socket/io, handle the Socket.IO polling
  if (pathname.startsWith("/api/socket/io")) {
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set("x-socket-path", pathname)

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/api/socket/io/:path*"],
}
