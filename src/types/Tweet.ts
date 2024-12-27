type UsersLikes = {
    userSlug: string
}

export interface Tweet {
    id: number
    user: {
        name: string
        avatar: string
        slug: string
    }
    likes?: UsersLikes[]
    // likes?: [
        // {
        //     "userSlug": "victor"
        // }
    // ]
    userSlug: string
    body: string
    image?: string,
    createdAt: string
    commentCount?: number
    answerOf?: number,
}