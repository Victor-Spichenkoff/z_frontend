import { authKey } from "@/global"
import { AuthUSer } from "@/types/AuthUser"

export const writeAuthData = (data: AuthUSer) => {
    localStorage.setItem(authKey, JSON.stringify(data))
}

export const getAuthData = (): AuthUSer | null =>  {
    const storageString = localStorage.getItem(authKey)
    
    

    if(!storageString)
        return null

    const content = JSON.parse(storageString)

    if(!content.token || !content.user.name)
        return null 

    return content as AuthUSer
}

export const clearAuthStorage = () => localStorage.setItem(authKey, "")