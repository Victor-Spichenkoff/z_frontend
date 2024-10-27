"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { Input } from "../ui/Input"
import { Button } from "../ui/Button"

export const SignUpForm = () => {
    const router = useRouter()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEnterButton = () => {
        router.replace("/")
    }


    return (
        <div className="text-black flex flex-col gap-2">
            
            <Input
                placeholder="Nome"
                setState={setName}
                value={name}
            />
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