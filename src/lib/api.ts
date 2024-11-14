import { baseUrl } from "@/global"
import { getAuthData } from "@/utils/managerAuthStorage"
import axios from "axios"


const token = getAuthData()

export const api = axios.create({
    baseURL: baseUrl,
    headers: {
        Authorization: "bearer "+ token?.token
    }
})
