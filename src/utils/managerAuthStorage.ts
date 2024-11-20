"use client"
import { authKey } from "@/global"
import { AuthUSer } from "@/types/AuthUser"

export const writeAuthData = (data: AuthUSer) => {
    // if (typeof window == "undefined") return
    localStorage.setItem(authKey, JSON.stringify(data))
}

export const getAuthData = (): AuthUSer | null => {
    // if (typeof window == "undefined") return null
    const storageString = localStorage.getItem(authKey)

    // console.log("PEGANDO DADPS")
    // console.log(storageString)

    if (!storageString)
        return null

    const content = JSON.parse(storageString)

    if (!content.token || !content.user.name)
        return null
    return content as AuthUSer
}

export const clearAuthStorage = () => {
    if (typeof window == "undefined") return
    localStorage.setItem(authKey, "");
}