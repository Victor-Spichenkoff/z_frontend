"use client"

import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { usePathname } from "next/navigation"


interface INavItem {
    label: string
    icon: IconDefinition
    href: string
    isActive?: boolean
    alternativeEndpoints ?:string[]
}

export const NavItem = ({ label, href, icon, isActive, alternativeEndpoints = [] }: INavItem) => {
    const pathName = usePathname()

    const isMe = pathName === href || alternativeEndpoints.includes(pathName)
    
    return (
        <Link href={href} className={`flex items-center gap-6 py-3
             ${isMe || isActive ? "opacity-100" : "opacity-70"} hover:opacity-100`}>
            <FontAwesomeIcon
                icon={icon}
                className="size-6"
            />
            <div className="text-lg">{label}</div>
        </Link>
    )
}