"use client"

import { useCheckLogin } from "@/hooks/useCheckLogin"
import { logout } from "@/utils/auth"
import { Link } from "lucide-react"

export default function Home() {
    // useCheckLogin()

    return (
        <div>
            <div className="">Olá</div>
            <Link href="/signup">Logar</Link>
            <div>
                <button onClick={logout}>Sair</button>
            </div>
        </div>
    )
}