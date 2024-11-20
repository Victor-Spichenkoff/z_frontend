"use client"

import { useEffect, useState, useTransition } from "react"
import { RecommendationItem, SkelletonRecommendationItem } from "./RecommendationItem"
import { SuggestionUser } from "@/types/User"
import { getSuggestions } from "@/actions/follow"

export const RecommendationArea = () => {
    const [users, setUsers] = useState<SuggestionUser[]>()
    const [isLoading, startTransition] = useTransition()
    const [isError, setIsError] = useState(false)

    useEffect(()=> {
        startTransition(async () => {
            const suggestions = await getSuggestions()
            if(!suggestions)
                return setIsError(true)

            setUsers(suggestions)
        })
    }, [])


    return (
        <div className="bg-gray-700 rounded-3xl">
            <h2 className="text-xl p-6">Quem seguir</h2>
            <div className="flex flex-col gap-4 p-6 pt-0">
                {isLoading || !users?.length && ! isError ? (
                    <div className="gap-3 flex flex-col">
                        <SkelletonRecommendationItem />
                        <SkelletonRecommendationItem />
                    </div>
                ) : (
                    <div className="flex flex-col gap-5">
                        {users?.map(user => {
                            return <RecommendationItem user={user} key={user.slug}/>
                        })}
                    </div>
                )}

                { isError && (
                    <div>
                        Sem dados 🙁
                    </div>
                ) }
            </div>
        </div>
    )
}