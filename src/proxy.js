import { NextResponse } from "next/server";
import { auth } from "@/lib/auth"; 

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  const pathname = request.nextUrl.pathname;


  if (!session) {
    const loginUrl = new URL("/login", request.url);

    loginUrl.searchParams.set("callbackURL", pathname);

    return NextResponse.redirect(loginUrl);
  }


  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*", "/courses/:path*"],
};