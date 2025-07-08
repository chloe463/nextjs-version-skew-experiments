import { NextResponse, NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log("middleware", request.nextUrl.pathname);
  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
