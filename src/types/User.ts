export type User = {
    slug: string
    name: string
    avatar: string
    cover?: string
    bio?: string
    link: string
    tweetsCount?: number
    followingCount?: number
    followersCount?: number
}

export type SuggestionUser = {
    name: string
    avatar: string
    slug: string
}