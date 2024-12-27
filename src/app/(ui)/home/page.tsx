"use client"

import { HomeHeader } from "@/components/home/Header.home"
import { HomeFeed } from "@/components/home/HomeFeed"
import { TweetPost } from "@/components/tweet/PostTweet"
import { useCheckLogin } from "@/hooks/useCheckLogin"

export default function Home() {
    useCheckLogin()

    return (
        <div>
            <HomeHeader />
            <TweetPost />
            <HomeFeed />
        </div>
    )
}