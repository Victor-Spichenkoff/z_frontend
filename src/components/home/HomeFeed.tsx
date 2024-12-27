"use client"
import { GetFeed } from "@/actions/tweet"
import { Tweet } from "@/types/Tweet"
import { useEffect, useState, useTransition } from "react"
import { FeedItem } from "../tweet/FeddItem"

export const HomeFeed = () => {
    const [isLoading, startTransition] = useTransition()

    const [tweets, setTweets] = useState<Tweet[]>([])


    useEffect(() => {
        startTransition(async () => {
            const res = await GetFeed()

            if (!res)
                return

            setTweets(res)
        })
    }, [])


    return (
        <div>
            {isLoading && "Carregando..."}
            <div>
                {tweets?.map(tweet => {
                    return <FeedItem tweet={tweet} key={tweet.id} />
                })}

            </div>
        </div>
    )
}