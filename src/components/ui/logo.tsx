import Image from "next/image"
import Link from "next/link"

interface Logo {
    size: number
}

export const Logo = ({ size }: Logo) => {
    return (
        <Link href={"/"}>
            <Image 
                src="/logo.png"
                alt="logo"
                width={size}
                height={size}
                quality={100}
            />
        
        </Link>
    )
}