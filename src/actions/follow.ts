import { api } from "@/lib/api"
import { SuggestionUser } from "@/types/User"

export const getSuggestions = async () => {
    try {
        const res = await api("/suggestions")
        if(!res)
            return null


        if(res.data.users.length == 0)
            return null

        return res.data.users as SuggestionUser[]
    } catch {
        return null
    }
}