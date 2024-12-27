import { AuthUSer } from "@/types/AuthUser"
import { getAuthData } from "@/utils/managerAuthStorage"
import { faImage, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState, useTransition } from "react"
import { MyButton } from "../ui/MyButton"
import { useToast } from "@/hooks/use-toast"
import { ShowMessage } from "../utils/Message"
import { ImagePreview } from "../utils/ImagePreview"
import { api } from "@/lib/api"
import { Sleep } from "../utils/sleep"


export const TweetPost = () => {
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const router = useRouter()
    const { toast } = useToast()
    const [isLoading, startTransition] = useTransition()
    const [authUser, setAuthUser] = useState<AuthUSer | null>(null)
    const [tweetBody, setTweetBody] = useState("")
    const [image, setImage] = useState<null | Blob>(null)
    const [imagePreview, setImagePreview] = useState<string | null>(null)


    useEffect(() => {
        const authData = getAuthData()
        if (!authData) {
            console.log("Faça login para poder postar")
            router.push("signin")
        }

        setAuthUser(authData)
    }, [])


    // esse é para o campo textarea aumentar sozinho
    const handleInput = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto" // Reseta a altura
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px` // Ajusta para o tamanho do conteúdo
        }
    }

    if (!authUser)
        return


    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            if (file.type === "image/png" || file.type === "image/jpeg") {
                setImage(file)
                // para o preview
                const reader = new FileReader();
                reader.onload = () => setImagePreview(reader.result as string);
                reader.readAsDataURL(file);
            } else {
                setImage(null)
                ShowMessage(toast, "Only PNG and JPEG files are allowed.")
            }
        }
    }

    const handlePostClick = () => {
        const formData = new FormData()
        const authUSer = getAuthData()
        if(!authUser.user.slug)
            return ShowMessage(toast, "Usuário inexistente")

        formData.append("body", tweetBody)
        formData.append("userSlug", String(authUSer?.user.slug))
        if (image)
            formData.append("image", image)

        startTransition(async ()=> { 
            try {
                const res = await api.post("tweet", formData)

                ShowMessage(toast, "Criado...", true)

                setImage(null)
                setTweetBody("")
                setImagePreview(null)
            }  catch {
                ShowMessage(toast, "Erro na criação")
            }
        })
    }


    const handleRemoveImage = () => {
        setImagePreview(null)
        setImage(null)
    }


    return (
        <div className="flex gap-6 px-8 py-6 border-b-2 border-gray-900">
            <div className="flex items-end">
                <Image
                    src={authUser?.user.avatar}
                    alt={authUser?.user.name}
                    className="rounded-full"
                    width={100}
                    height={100}
                />
            </div>
            <div className="flex-1">
                <div>
                    <ImagePreview imagePreview={imagePreview} setImagePreview={setImagePreview} />
                </div>
                {/* Área de edição */}
                <textarea
                    ref={textareaRef}
                    className="min-h-14 outline-none text-lg text-white
                    bg-transparent w-full overflow-hidden focus:outline-none resize-none border border-gray-600 p-1 rounded-md will-change-scroll"
                    placeholder="Era uma vez..."
                    value={tweetBody}
                    onChange={(e) => setTweetBody(e.target.value)}
                    onInput={handleInput}
                >

                </textarea>

                <div className="flex justify-between items-center mt-2">

                    {/* adaptar o icone e a ação */}
                    {image ? (
                        <button
                        className="hover:text-gray-300"
                        onClick={handleRemoveImage}>
                            <FontAwesomeIcon icon={faTrash} className="size-6 text-red-700 hover:text-red-800" />
                        </button>
                    ) : (
                        <label htmlFor="file_anexer" className="cursor-pointer hover:text-gray-300">
                            <FontAwesomeIcon icon={faImage} className="size-6" />

                            <input
                                type="file"
                                accept=".png,.jpeg,.jpg"
                                onChange={handleFileChange}
                                placeholder={"sdfdsds"}
                                id="file_anexer"
                                className="hidden"
                            />
                        </label>
                    )}




                    <div className="w-28">
                        <MyButton
                            label="Postar"
                            size={"m"}
                            onClick={!isLoading ? handlePostClick : ()=>{}}
                            className={`px-3 py-2 ${isLoading && "opacity-85 cursor-default hover:none"}`}
                        />  
                    </div>
                </div>
            </div>
        </div>
    )
}