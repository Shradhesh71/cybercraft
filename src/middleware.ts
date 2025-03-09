import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("authToken")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }
  console.log("Token exists:", token);
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    if (!secret) {
      console.error("JWT secret is not defined.");
      return NextResponse.redirect(new URL("/auth", request.url));
    }

    // const { payload } = await jwtVerify(token, secret);
    // console.log("JWT verified. Payload:");

    return NextResponse.next();
  } catch (error) {
    console.log("JWT verification failed:", error);
    return NextResponse.redirect(new URL("/auth", request.url));
  }
}

export const config = {
  matcher: ["/phishing"],
};
