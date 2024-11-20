import { api } from "@/lib/api"
import { Trend } from "@/types/trend"

export const getTrendings = async () => {
    try {
        const res = await api("/trending")
        if(!res.data.trends)
            return null
    
        return res.data.trends as Trend[]//erro aqui
    } catch {
        return null
    }
}