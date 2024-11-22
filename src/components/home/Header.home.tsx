"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Logo } from "../ui/logo"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { HomeMenu } from "./Menu.home"

export const HomeHeader = () => {
    const [showMenu, setShowMenu] = useState(false)
    
    const handleMenuClick = () => setShowMenu(true)

    return (
        <header className="flex justify-between p-6 border-b-2 border-gray-900">
            <div className="lg:hidden">
                <Logo size={24}/>
            </div>
            <div className="hidden lg:block text-2xl">
                Página Inicial
            </div>
            <button 
            className="cursor-pointer lg:hidden"
            onClick={handleMenuClick}
            >
                <FontAwesomeIcon
                    icon={faBars}
                    className="size-6"
                />
            </button>

            { showMenu && (
                <HomeMenu 
                    closeAction={()=>setShowMenu(false)}
                />
            ) }
        </header>
    )
}