import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export default async function middleware(request) {
  const { pathname } = request.nextUrl;
  const token = await getToken({ req: request });
  const role = token?.role;

  // Define public paths that don't require authentication
  const isPublicPath = pathname === "/Login" || pathname === "/SignUp";

  // Define protected routes
  const isProtectedRoute =
    pathname.startsWith("/Dahborde_company") ||
    pathname.startsWith("/Dahborde_user") ||
    pathname.startsWith("/Explore");

  // If user is not logged in and tries to access protected routes
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/Login", request.url));
  }

  // If user is logged in and tries to access public pages
  if (token && isPublicPath) {
    if (role === "company") {
      return NextResponse.redirect(
        new URL("/Dahborde_company/Dahborde", request.url)
      );
    }
    if (role === "user") {
      return NextResponse.redirect(new URL("/Explore", request.url));
    }
  }

  // If user tries to access company routes
  if (token && role === "user" && pathname.startsWith("/Dahborde_company")) {
    return NextResponse.redirect(new URL("/Explore", request.url));
  }

  // If company tries to access user routes
  if (token && role === "company" && pathname.startsWith("/Explore")) {
    return NextResponse.redirect(
      new URL("/Dahborde_company/Dahborde", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
  ],
};
