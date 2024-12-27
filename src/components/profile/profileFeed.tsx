import { useEffect, useState } from "react"
import { FeedItem } from "../tweet/FeddItem"
import { Tweet } from "@/types/Tweet"
import { api } from "@/lib/api"

interface ProfileFeedProps {
    userSlug: string
}




export const ProfileFeed = ({ userSlug }: ProfileFeedProps) => {
    const [tweets, setTweets] = useState<Tweet[] | null>()
    
    const getTweets = async () => {
        const res = await api(`/user/${userSlug}/tweets`)
        if(!res.data)
            return

        setTweets(res.data.tweets)
    }



    useEffect(()=> {
        getTweets()
    }, [])


    if(tweets?.length == 0)
        return <div className="flex justify-center my-5 text-xl">
Usuário sem tweets
        </div>


    if(!tweets)
        return <div className="flex justify-center my-5 text-xl">
    Nada para mostrar aqui
            </div>
    
    
    return (
        <div>
            { tweets.map((tweet)=> (
                <FeedItem tweet={tweet} key={tweet.id}/>
            )) }
        </div>
    )
}