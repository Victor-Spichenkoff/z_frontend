"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { Input } from "../ui/Input"
import { MyButton } from "../ui/MyButton"
import { makeSignUp } from "@/utils/auth"
import { useToast } from "@/hooks/use-toast"
import { ShowMessage } from "../utils/Message"

export const SignUpForm = () => {
    const router = useRouter()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { toast } = useToast()

    const handleEnterButton = async () => {
        try {
            const creationResponse = await makeSignUp(name, email, password)

            if (!creationResponse.success && creationResponse.error)
                return ShowMessage(
                    toast,
                    creationResponse.error
                )

            if (creationResponse.success) {
                return router.replace("/")
            }

        } catch {
            ShowMessage(
                toast,
                "Erro inesperado"
            )
        }
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
            <MyButton
                label="Entrar"
                onClick={handleEnterButton}
                size="g"
                className="mt-4"

            />
        </div>
    )
}