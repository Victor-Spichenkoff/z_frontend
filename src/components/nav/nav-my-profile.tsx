"use client"

import { getUserData } from "@/actions/user"
import { useCheckLogin } from "@/hooks/useCheckLogin"
import { User } from "@/types/User"
import { getAuthData } from "@/utils/managerAuthStorage"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export const NavMyProfile = () => {
    const router = useRouter()
    const [user, setUser] = useState<User | null>()

    useEffect(() => {
        (async function(){
            const storageAuthData = getAuthData()
            if (!storageAuthData?.user.slug)
                router.push("signin")

            const response = await getUserData(String(storageAuthData?.user.slug))
            if (response == null)
                return router.push("signin")

            setUser(response)
        })()

    }, [])

    if (user == null)
        return null

    return (
        <div className={`flex items-center`}>
            <div className="size-10 mr-2 rounded-full overflow-hidden">
                <Link href={`/${user.slug}`}>
                    <Image
                        src={user?.avatar}
                        alt={user.name}
                        className="size-full"
                    >


                    </Image>
                </Link>
            </div>
            <div className="flex-1 overflow-hidden">

            </div>
        </div>
    )
}