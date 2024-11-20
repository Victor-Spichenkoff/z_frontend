import { api } from "@/lib/api";
import { User } from "@/types/User";

export const getUserData = async (slug: string) => {
    try {
        console.log("HEADERS")
        console.log(api.defaults.headers)
        const res = await api("/user/" + slug)
        let finalUser = res.data
        if(finalUser.user.slug) {
            finalUser = {... finalUser.user,
                tweetsCount: res.data.tweetsCount,
                followingCount: res.data.followingCount

            }
            return finalUser as User//erro aqui
        }

        return null

    } catch {
        return null
    }
}
/**
 * 
 * {
	"user": {
		"avatar": "http://localhost:2006/static/default.png",
		"cover": "http://localhost:2006/static/default.png",
		"slug": "victor",
		"link": "http://google.com",
		"name": "Victor",
		"bio": "nhe minha BIO 2.0"
	},
	"followingCount": 1,
	"followersCount": 1,
	"tweetsCount": 5
}
 */