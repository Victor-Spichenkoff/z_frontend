"use client"

import { api } from "@/lib/api"
import {  redirect } from "next/navigation"
import { clearAuthStorage, getAuthData, writeAuthData } from "./managerAuthStorage"
import { getFirstErrorElementMessageFromApiResponse } from "./Message"

/**
 * 
 * @param email 
 * @param password 
 * @returns success: true(pode logar) ou false (error); message: só se der erro
 */
export const makeLogin = async (email: string, password: string) => {
    try {
        const authorizedUser = await api.post("/auth/signin", {
            email, password
        })

        writeAuthData(authorizedUser.data)
        
        return { success: true }
    } catch {
        return { success: false,  error: "Acesso negado" }
    }
}



/**
 * 
 * @param email 
 * @param password 
 * @returns success: true(pode logar) ou false (error); message: só se der erro
 */
export const makeSignUp = async (name: string, email: string, password: string) => {
    try {
        const authorizedUser = await api.post("/auth/signup", {
            name, email, password
        })

        writeAuthData(authorizedUser.data)

        return { success: true }
    } catch(e:any) {
        let errorMessage = getFirstErrorElementMessageFromApiResponse(e)

        return { success: false,  error: errorMessage }
    }
}


export const checkIfLoggedAndRedirect = async () => {
    try {
        await api("/private/teste")
    } catch {
        console.log("Detectado que não está logado")
        redirect("/signin")
    }
}

export const logout = () => {
    console.log("Saindo...")
    clearAuthStorage()
    redirect("/signin")
}


