import { useEffect, useState } from "react"
import { MyButton } from "../ui/MyButton"
import { api } from "@/lib/api"

interface FollowButtonProps {
    otherSlug: string
}


export const FollowButton = ({ otherSlug }: FollowButtonProps) => {
    const [isFollowing, setIsFollowing] = useState(false)
    

    const loadInitialState = async () => {
        const isFollowing = (await api("/user/follow/state/" + otherSlug)).data

        console.log(otherSlug)
        console.log(isFollowing)
        setIsFollowing(isFollowing)
    }

    useEffect(()=> {
        loadInitialState()
    }, [])

    const handleClick = async () => {
        const result: any = (await api.post(`/user/${otherSlug}/follow`)).data
    
        setIsFollowing(result.following)
    }

    return (
        <MyButton 
        label={isFollowing ? "Unfollow" : "Follow"}
        onClick={handleClick}
        size="m"
        className="px-2 py-1"
        />
    )
}