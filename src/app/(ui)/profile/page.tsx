"use client"

import { getAuthData } from "@/utils/managerAuthStorage"
import { redirect } from "next/navigation"

export default function Profile() {
    const user = getAuthData()

    if(!user)
        return redirect("/auth/signin")

    redirect("/" + user.user.slug)
    
    return null
}