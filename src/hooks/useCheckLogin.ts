import { checkIfLoggedAndRedirect } from "@/utils/auth"
import { useEffect } from "react"

export const useCheckLogin = () => {
    useEffect(()=> { checkIfLoggedAndRedirect() }, [])
}