"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { Input } from "@/components/ui/Input"
import { MyButton } from "../ui/MyButton"
import { ShowMessage } from "../utils/Message"
import { useToast } from "@/hooks/use-toast"
import { makeLogin } from "@/utils/auth"



export const SignInForm = () => {
    const router = useRouter()
    // const [errosMessage, setErrorMessage] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { toast } = useToast()

    const HandleEnterButton = async () => {
        try {
            const resposne = await makeLogin(email, password)

            if(!resposne.success && resposne.error)
                return ShowMessage(
                    toast,
                    resposne.error
                )

            if(resposne.success)
                return router.replace("/home")
        } catch {
            ShowMessage(
                toast,
                "Erro interno"
            )
        }
    }


    return (
        <div className="text-black flex flex-col gap-2">
            <Input
                placeholder="Email"
                setState={setEmail}
                value={email}
                type="email"
            />
            <Input
                placeholder="Senha"
                setState={setPassword}
                value={password}
                isPassword
            />
            <MyButton
                label="Entrar"
                onClick={HandleEnterButton}
                size="g"
                className="mt-4"
            />
        </div>
    )
}

//-  4:45