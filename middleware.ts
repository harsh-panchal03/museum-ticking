import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Define paths that require authentication
const protectedPaths = ["/dashboard", "/profile", "/bookings"]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the path is protected
  const isProtectedPath = protectedPaths.some((path) => pathname.startsWith(path))

  // If it's not a protected path, continue
  if (!isProtectedPath) {
    return NextResponse.next()
  }

  // Get the authentication token from cookies
  const authToken = request.cookies.get("auth_token")?.value

  // If there's no token, redirect to login
  if (!authToken) {
    const url = new URL("/login", request.url)
    url.searchParams.set("callbackUrl", pathname)
    return NextResponse.redirect(url)
  }

  // Check if token is expired (in a real app, you would decode and check the exp claim)
  // For this demo, we'll just check if it's the demo token
  try {
    // Basic check - in a real app, you would verify the token properly
    const tokenParts = authToken.split(".")
    if (tokenParts.length !== 3) {
      throw new Error("Invalid token format")
    }

    // Try to decode the payload
    const payload = JSON.parse(atob(tokenParts[1]))

    // Check expiration
    if (payload.exp && Date.now() >= payload.exp * 1000) {
      throw new Error("Token expired")
    }
  } catch (e) {
    // Token is invalid or expired, redirect to login
    const url = new URL("/login", request.url)
    url.searchParams.set("callbackUrl", pathname)
    url.searchParams.set("sessionExpired", "true")
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all protected paths
    "/dashboard/:path*",
    "/profile/:path*",
    "/bookings/:path*",
  ],
}
