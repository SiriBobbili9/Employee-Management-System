import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");

  const isLoginPage = request.nextUrl.pathname === "/login";

  if (!token && !isLoginPage) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token && isLoginPage) {
    return NextResponse.redirect(new URL("/employees", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/employees/:path*",
    "/departments/:path*",
    "/attendance/:path*",
    "/leaves/:path*",
    "/payroll/:path*",
    "/reports/:path*",
    "/settings/:path*",
    "/dashboard/:path*",
    "/login",
  ],
};