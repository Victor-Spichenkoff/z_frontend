import { api } from "@/lib/api";
import { User } from "@/types/User";

export const getUserData = async (slug: string) => {
    try {
        const res = await api("/user/" + slug)

        if(res.data.slug)
            return res.data as User//erro aqui

        return null

    } catch {
        return null
    }
}