"use client"

import { Logo } from "@/components/ui/logo"
import { useCheckLogin } from "@/hooks/useCheckLogin"
import { useRouter } from "next/navigation"


export default function Barra() {
  useCheckLogin()

  const router = useRouter()
  router.push("/home")

  return (
    <div className="min-h-screen flex justify-center items-center">
      <Logo  size={80} />

    </div> 
  )
}

