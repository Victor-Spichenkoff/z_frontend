"use client"

import { useEffect, useState, useTransition } from "react"
import { SkeletonTrendingWaitArea, TrendingItem } from "./TrendingItem"
import { Trend } from "@/types/trend"
import { getTrendings } from "@/actions/trends"

export const TrendingArea = () => {
    const [trendings, setTrendings] = useState<Trend[]>()
    const [isLoading, startTransition] = useTransition()
    const [isError, setIsError] = useState(false)

    useEffect(()=> {
        startTransition(async () => {
            const trendings = await getTrendings()
            if(!trendings)
                return setIsError(true)

            setTrendings(trendings)
        })
    }, [])

    return (
        <div className="bg-gray-700 rounded-3xl">
            <h2 className="text-xl p-6">O que está acontecendo</h2>
            <div className="flex flex-col gap-4 p-6 pt-0">
                {isLoading || !trendings?.length && ! isError ? (
                    <SkeletonTrendingWaitArea />
                ) : (
                    <div className="flex flex-col gap-5">
                        {trendings?.map(trend => {
                            return <TrendingItem count={trend.counter} label={trend.hashtag} key={trend.hashtag}/>
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