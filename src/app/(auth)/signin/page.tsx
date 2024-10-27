import { SignInForm } from "@/components/auth/SigninForm"
import { Logo } from "@/components/ui/logo"
import Link from "next/link"

export default function Login() {
    return (
        <div className="max-w-lg mx-auto mt-12 px-6">
            <Logo  size={56} />
            <h1 className="mt-4 text-2xl">Entre na sua conta</h1>
            <div className="mt-10 mb-14 flex-col gap-6">
                <SignInForm />
            </div>

            <div className="flex flex-col justify-center items-center gap-1 md:flex-row">
                <div className="text-gray-500">Ainda não tem uma conta?</div>
                <Link href="/signup" className="hover:underline">Cadastre-se</Link>
            </div>
        </div>
    )
}