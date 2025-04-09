import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Define paths that require authentication
const protectedPaths = ["/dashboard", "/profile", "/bookings"]

// Define paths that require admin role
const adminPaths = ["/admin"]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the path is protected
  const isProtectedPath = protectedPaths.some((path) => pathname.startsWith(path))
  const isAdminPath = adminPaths.some((path) => pathname.startsWith(path))

  // If it's not a protected path, continue
  if (!isProtectedPath && !isAdminPath) {
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

  // For admin paths, we would check the user role here
  // In a real app, you would decode the JWT token and check the role
  // For this demo, we'll just continue

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all protected paths
    "/dashboard/:path*",
    "/profile/:path*",
    "/bookings/:path*",
    "/admin/:path*",
  ],
}
