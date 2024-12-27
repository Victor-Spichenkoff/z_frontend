"use client"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {KeyboardEventHandler, useEffect, useState} from "react"

interface IInput {
    placeholder: string
    value?: string
    setState?: (e: string) => void
    isPassword?: boolean
    isFilled?: boolean
    icon?: IconDefinition
    type?: string
    onEnter?: () => void
    onIconClick?: () => void
    label?: string
}

export const Input = (
    {
        placeholder,
        setState,
        value,
        isPassword,
        isFilled,
        icon,
        type = "text",
        onEnter,
        onIconClick,
        label

    }: IInput
) => {
    const [showPassword, setShowPassword] = useState(false)

    useEffect(() => {
        if((value == null || value == "null") && setState)
            setState("")
    })

    const handlekeyUp = (event: any) => {
        if (
            (event.code.toLowerCase() == "enter" || event.code.toLocaleLowerCase() === "numpadenter")
            && onEnter)
            onEnter()
    }

    return (
        <div>
            <label className={"-mr-3"}>{label}</label>
            <div className={`flex items-center h-14 rounded-3xl 
            border-2 border-gray-700 text-gray-300 has-[:focus]:border-white
            ${isFilled && "bg-gray-700"}
        `}>

                {icon && <FontAwesomeIcon
                    icon={icon}
                    className={`size-6 text-gray-500 ml-4 ${onIconClick && "cursor-pointer hover:text-gray-200"}`}
                    onClick={onIconClick}
                />}
                <input
                    className="flex-1 outline-none bg-transparent h-full px-4"
                    type={isPassword && !showPassword ? "password" : type}
                    placeholder={placeholder}
                    value={value}
                    onChange={e => setState && setState(e.target.value)}
                    onKeyUp={handlekeyUp}
                />
                {isPassword && <FontAwesomeIcon
                    icon={showPassword ? faEye : faEyeSlash}
                    className="size-6 text-gray-500 cursor-pointer mr-4"
                    onClick={() => setShowPassword(current => !current)}
                />
                }
            </div>
        </div>

    )
}