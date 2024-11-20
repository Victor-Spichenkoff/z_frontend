"use client"

import { baseUrl } from "@/global"
import { getAuthData } from "@/utils/managerAuthStorage"
import axios from "axios"





export const api = axios.create({
    baseURL: baseUrl,
})

// Adiciona ao header antes de cada requisição
api.interceptors.request.use((config) => {
    const token = getAuthData()?.token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, (error) => {
    return Promise.reject(new Error(error))
})