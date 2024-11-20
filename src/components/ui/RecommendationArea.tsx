export const RecommendationArea = () => {
    return (
        <div className="bg-gray-700 rounded-3xl">
            <h2 className="text-xl p-6">Quem seguir</h2>
            <div className="flex flex-col gap-4 p-6 pt-0">
                {/* {isLoading || !trendings?.length && ! isError ? (
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
                ) } */}
            </div>
        </div>
    )
}