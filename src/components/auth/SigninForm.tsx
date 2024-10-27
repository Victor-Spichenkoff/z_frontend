"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { Input }  from "@/components/ui/Input"
import { Button } from "../ui/Button"



export const SignInForm = () => {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEnterButton = () => {
        router.replace("/")
    }


    return (
        <div className="text-black flex flex-col gap-2">
            <Input
                placeholder="Email"
                setState={setEmail}
                value={email}
            />
            <Input
                placeholder="Senha"
                setState={setPassword}
                value={password}
                isPassword
            />
            <Button
                label="Entrar"
                onClick={handleEnterButton}
                size="g"
                className="mt-4"
                />
        </div>
    )
}

//-  4:45