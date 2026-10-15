import { NextRequest, NextResponse } from "next/server";

export function middleware(request :NextRequest) {

        const sessionToken = request.cookies.get("session-token");
        
        const isAuthPage=request.nextUrl.pathname.startsWith("/login");
        const isProtectedRoute=request.nextUrl.pathname.startsWith("/dashboard");

        if(isProtectedRoute && !sessionToken){
            return NextResponse.redirect(new URL("/login",request.url));
        }
if (isAuthPage && sessionToken){
    return NextResponse.redirect(new URL("/dashboard",request.url));
}
return NextResponse.next();
}

export const config={
    matcher: ["dashboard/:path","profile/path"],
}; 