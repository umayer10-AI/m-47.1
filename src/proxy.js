import { NextResponse } from "next/server"
import { auth } from "./lib/auth"

export async function proxy(request) {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    console.log(session)

    const isLogged = session
    if(isLogged){
        return NextResponse.next()
    }

    return NextResponse.redirect(new URL('/login', request.url))
}
 
export const config = {
  matcher: ['/career','/about'],
}