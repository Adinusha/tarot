import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export async function middleware(req: NextRequest) {
  const { nextUrl } = req;
  const sessionCookie = getSessionCookie(req);

  const isRegisterRoute = nextUrl.pathname === "/auth/register";
  const isLoginRoute = nextUrl.pathname === "/auth/login";
  const isLoggedIn = !!sessionCookie;

  if ((isRegisterRoute || isLoginRoute) && isLoggedIn) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};