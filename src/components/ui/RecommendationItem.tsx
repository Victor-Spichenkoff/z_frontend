import { SuggestionUser } from "@/types/User"
import Link from "next/link"
import { MyButton } from "./MyButton"
import { useState } from "react"
import { api } from "@/lib/api"
import Image from "next/image"

interface RecommendationItemProps {
    user: SuggestionUser
}

export const RecommendationItem = ({ user }: RecommendationItemProps) => {
    const [isStartedFollow, setIsStartedFollow] = useState(false)
    const handleFollowClick = async () => {
        try {
            const res = await api.post(`/user/${user.slug}/follow`)
            if (res.data)
                setIsStartedFollow(res.data.following)
        } catch {
            return null
        }
    }

    return (
        <div className="flex items-center">
            <div className="size-10 mr-2 rounded-full overflow-hidden">
                <Link href={`/${user.slug}`}>
                    <Image
                        src={user?.avatar}
                        alt={user.name}
                        className="size-full"
                        width={100}
                        height={100}
                    />
                </Link>
            </div>
            <div className="flex-1 overflow-hidden ">
                <Link href={`/${user.slug}`} className="block truncate">
                    {user.name}
                    <div className="truncate text-sm text-gray-400">
                        @ {user.slug}
                    </div>
                </Link>
            </div>
            {!isStartedFollow && (
                <div className="pl-2 w-20">
                    <MyButton
                        label="Seguir"
                        onClick={handleFollowClick}
                        size="p"
                        className="px-3 py-2"
                    />
                </div>
            )}
        </div>
    )
}

export const SkelletonRecommendationItem = () => {
    return (
        <div className="animate-pulse flex items-center">
            <div className="size-10 mr-2 rounded-full bg-gray-600">

            </div>
            <div className="flex-1 flex flex-col gap-1">
                <div className="bg-gray-600 w-3/4 h-4"></div>
                <div className="bg-gray-600 w-1/4 h-4"></div>
            </div>
        </div>
    )
}