"use client"

import { api } from "@/lib/api"
import {  redirect } from "next/navigation"
import { clearAuthStorage, writeAuthData } from "./managerAuthStorage"
import { useEffect } from "react"

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


export const checkIfLoggedAndRedirect = async () => {
    try {
        await api("/private/teste")
    } catch {
        redirect("/signin")
    }
}

export const logout = () => {
    clearAuthStorage()
    redirect("/signin")
}