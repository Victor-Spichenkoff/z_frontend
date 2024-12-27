import { api } from "@/lib/api"
import { Tweet } from "@/types/Tweet"
import {  formatRelativeTimeFromString } from "@/utils/formatTime"
import { getAuthData } from "@/utils/managerAuthStorage"
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons"
import { faRetweet, faHeart as faheartSolid } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

interface FeedItemProps {
  tweet: Tweet
}

export const FeedItem = ({ tweet }: FeedItemProps) => {
  const [isLiked, setIsLiked] = useState(false)
  const [likesCount, setLikesCount] = useState(tweet.likes?.length)

  const handleLikeClick = async (onlyLoadState = false) => {
    if (onlyLoadState) {
      const user = getAuthData()
      let isLikedByUser = false

      if(tweet.likes) {
        for(let likeTweet of tweet.likes)
          if(likeTweet.userSlug == user?.user.slug)
            isLikedByUser = true
      }

      return setIsLiked(isLikedByUser)
    }

    const res = await api.post(`/tweet/${tweet.id}/like`)

    setIsLiked(res.data.like)
    setLikesCount(res.data.likesCount)
  }

  useEffect(() => { handleLikeClick(true) }, [])

  console.log(tweet)

  return (
    <div className="flex gap-6 border-b-2 border-gray-900">
      <div>
        <Link href={`/${tweet.user.slug}`}>
          <Image
            src={tweet.user.avatar}
            alt={tweet.user.name}
            className="size-10 rounded-full"
            width={20}
            height={20}

          />
        </Link>

      </div>
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-x-3">
          <div className="font-bold text-lg">
            <Link href={`/${tweet.user.slug}`}>{tweet.user.name}</Link>
          </div>
          <div className="text-xs text-gray-500">@{tweet.user.slug} - {formatRelativeTimeFromString(tweet.createdAt)}</div>
        </div>
        <div className="py-4 text-lg">{tweet.body}</div>
        {tweet.image && (
          <div className="w-full">
            <Image
              src={tweet.image}
              alt={"Imagem do tweet"}
              className="w-full rounded-2xl"
              width={100}
              height={100}
            />

          </div>
        )}
        <div className="flex mt-6 text-gray-500">

          <div className="flex-1">
            <Link href={`/tweet/${tweet.id}`}>
              <div className="inline-flex items-center gap-2 cursor-pointer">
                <FontAwesomeIcon icon={faComment} className="size-6" />
                <div>{tweet.commentCount}</div>
              </div>
            </Link>
          </div>
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 cursor-pointer">
              <FontAwesomeIcon icon={faRetweet} className="size-6" />
              <div>0</div>
            </div>
          </div>
          <div className="flex-1">
            <button
              className="inline-flex items-center gap-2 cursor-pointer"
              onClick={()=>handleLikeClick(false)}>
              <FontAwesomeIcon icon={isLiked ? faheartSolid : faHeart} className={`size-6 ${isLiked && "text-red-600"}`} />
              <div>{
                likesCount
              }</div>
            </button>
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
    </div>
  )
}