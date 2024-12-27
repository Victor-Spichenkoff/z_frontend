import { api } from "@/lib/api"
import { Tweet } from "@/types/Tweet"

export const GetFeed = async (page: number = 0) => {
    try {
        const res = await api("/feed?page=" + String(page))
        if(res.data.tweets.length == 0)
            return null

        return res.data.tweets as Tweet[] //erro aqui
    } catch {
        return null
    }
}