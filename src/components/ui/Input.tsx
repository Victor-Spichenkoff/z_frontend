"use client"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

interface IInput {
    placeholder: string
    value?: string
    setState?: (e: string) => void
    isPassword?: boolean
    isFilled?: boolean
    icon?: IconDefinition
    type?: string
}

export const Input = (
    { placeholder, setState, value, isPassword, isFilled, icon, type = "text" }: IInput
) => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className={`flex items-center h-14 rounded-3xl 
            border-2 border-gray-700 text-gray-300 has-[:focus]:border-white
            ${isFilled && "bg-gray-700"}
        `}>
            {icon && <FontAwesomeIcon icon={icon} className="size-6 text-gray-500 ml-4" />}
            <input
                className="flex-1 outline-none bg-transparent h-full px-4"
                type={isPassword && !showPassword? "password" : type }
                placeholder={placeholder}
                value={value}
                onChange={e => setState && setState(e.target.value)}
            />
            {isPassword && <FontAwesomeIcon
                icon={showPassword? faEye : faEyeSlash}
                className="size-6 text-gray-500 cursor-pointer mr-4"
                onClick={() => setShowPassword(current => !current)}
            />
            }
        </div>
    )
}