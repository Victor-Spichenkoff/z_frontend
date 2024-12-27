"use client"

import { getUserData } from "@/actions/user"
import { GeneralHeader } from "@/components/ui/generalHeader"
import { User } from "@/types/User"
import { useParams } from "next/navigation"
import { useEffect, useState, useTransition } from "react"
// import CoverImage from "@/assets/cover_default.jpg"
import CoverImage from "@/assets/default_cover.jpg"
import Image from "next/image"
import { MyButton } from "@/components/ui/MyButton"
import Link from "next/link"
import { getAuthData } from "@/utils/managerAuthStorage"
import { FollowButton } from "@/components/utils/FollowButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { ProfileFeed } from "@/components/profile/profileFeed"


const giveCorretCoverImage = (coverImageUrl: string) => {
    if (!coverImageUrl.includes("default.png"))
        return coverImageUrl

    return CoverImage
}



export default function Profile() {
    const params = useParams()
    const [isLoading, startTransition] = useTransition()
    const [user, setUser] = useState<User | null>()
    const [isMineProfile, setIsMineProfile] = useState(false)
    const { slug } = params

    useEffect(() => {
        startTransition(async () => {
            const dbUser = await getUserData(String(slug))
            setUser(dbUser)

            console.log(dbUser)
            if (dbUser?.slug == getAuthData()?.user.slug)
                setIsMineProfile(true)
        })
    }, [])

    if (isLoading || !user)
        return null


    return (
        <div>
            <GeneralHeader backHref="/home">
                <div className="font-bold text-lg">
                    {user?.name}
                </div>
                <div className="text-xs text-gray-500">{user?.tweetsCount} tweets</div>
            </GeneralHeader>
            <section className="border-b-2 border-gray-900">
                {/* Contêiner de imagem de capa */}
                <div
                    style={{ position: 'relative', width: '100%' }}
                    className="bg-gray-500 h-32 bg-no-repeat bg-cover bg-center z-0"
                >
                    <Image
                        src={giveCorretCoverImage(String(user.cover))}
                        fill
                        alt="cover"
                        style={{ objectFit: 'cover', zIndex: -10 }}
                    />
                </div>

                {/* Contêiner do usuário */}
                <div className="flex justify-between items-end">
                    <div className="relative flex justify-between items-end -mt-12 z-10">
                        {/* Avatar do usuário */}
                        <Image
                            src={user.avatar}
                            alt="avatar"
                            className="rounded-full "
                            height={96}
                            width={96}
                        />
                    </div>

                    {isMineProfile ? (
                        <div className="w-32">
                            <Link href={`/edit?slug=${user.slug}&name=${user.name}&bio=${user.bio}&cover=${user.cover}&avatar=${user.avatar}&link=${user.link}
                            `}>
                                <MyButton label="Editar perfil" size="m" className="p-2 mb-[2px]" />
                            </Link>
                        </div>
                    ) : (
                        <FollowButton otherSlug={String(slug)}/>
                    )}

                </div>

{/* Infos do user */}
                <div className="px-6 mt-4">
                    <div className="text-xl font-bold">{user.name}</div>
                    <div className="text-gray-500">@{user.slug}</div>
                    <div className="py-5 text-lg text-gray-500">
                        {user.bio}</div>  
                        {user.link && (
                            <div className="flex gap-2 items-center">
                                <FontAwesomeIcon icon={faLink} className="size-5"/>
                                <Link href={user.link} className="text-blue-300" target="_blank">{user.link}</Link>
                            </div>
                        )} 

                        <div className="my-5 flex gap-6">
                                <div  className="text-xl text-gray-500">
                                <span className="text-white">{user.followingCount}</span> Seguindo
                                </div>
                                <div  className="text-xl text-gray-500">
                                <span className="text-white">{user.followersCount}</span> Seguidores
                                </div>
                        </div>
                </div>

            </section>

            <ProfileFeed userSlug={String(slug)} />
        </div>
    )
}