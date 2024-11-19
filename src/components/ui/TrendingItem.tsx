import Link from "next/link"

interface TrendingItemProps {
    label: string
    count: number
}

export const TrendingItem = ({ label, count }: TrendingItemProps) => {
    return (
        <Link
            href={`/search?q=${encodeURIComponent(label)}`}
            className="group/nhe"
        >
            <div className="group-hover/nhe:underline font-bold">{label}</div>
            <div className="">{count} posts</div>
        </Link>
    )
}


export const SkeletonTrendinItem = () => {
    return (
        <div className="animate-pulse flex flex-col gap-1">
            <div className="bg-gray-600 w-3/4 h-4 rounded-md"></div>
            <div className="bg-gray-600 w-1/4 h-4 rounded-md"></div>
        </div>
    )
}

export const SkeletonTrendingWaitArea = () => {
    return (
        <div className="flex flex-col gap-5">
            <SkeletonTrendinItem />
            <SkeletonTrendinItem />
            <SkeletonTrendinItem />
            <SkeletonTrendinItem />
        </div>
    )
}