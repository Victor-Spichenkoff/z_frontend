"use client";

import {GeneralHeader} from "@/components/ui/generalHeader"
import {useParams, useRouter, useSearchParams} from "next/navigation"
import {useEffect, useState, useTransition} from "react"
// import CoverImage from "@/assets/cover_default.jpg"
import CoverImage from "@/assets/default_cover.jpg"
import Image from "next/image"
import {MyButton} from "@/components/ui/MyButton"
import {getAuthData} from "@/utils/managerAuthStorage"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCamera, faXmark} from "@fortawesome/free-solid-svg-icons"
import {Input} from "@/components/ui/Input";
import {useToast} from "@/hooks/use-toast";
import {ShowMessage} from "@/components/utils/Message";
import {api} from "@/lib/api";
import {TextArea} from "@/components/ui/TextArea";
import {useCheckLogin} from "@/hooks/useCheckLogin";


const giveCorrectCoverImage = (coverImageUrl: string) => {
    if (!coverImageUrl.includes("default.png"))
        return coverImageUrl

    return CoverImage
}


export default function EditPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const { toast } = useToast();

    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [cover, setCover] = useState("");
    const [avatar, setAvatar] = useState("");
    const [link, setLink] = useState("");
    const [showSaveButton, setShowSaveButton] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const authData = getAuthData();
        if (authData?.user.slug !== searchParams?.get("slug")) {
            router.push("/edit/ladrao");
            return;
        }

        if (
            !searchParams ||
            !searchParams.get("name") ||
            !searchParams.get("bio") ||
            !searchParams.get("link") ||
            !searchParams.get("avatar") ||
            !searchParams.get("cover")
        ) {
            router.push("/edit/error");
            return;
        }

        setName(decodeURIComponent(String(searchParams.get("name"))));
        setLink(decodeURIComponent(String(searchParams.get("link"))));
        setBio(decodeURIComponent(String(searchParams.get("bio"))));
        setAvatar(decodeURIComponent(String(searchParams.get("avatar"))));
        setCover(decodeURIComponent(String(searchParams.get("cover"))));

        setIsLoaded(true);
    }, [searchParams, router]);

    if (!isLoaded) {
        return <div>Carregando...</div>;
    }


    // useCheckLogin()
    //
    // const params = useParams()
    // const {toast} = useToast()
    // const router = useRouter()
    // const searchParams = useSearchParams()
    // const [name, setName] = useState("")
    // const [bio, setBio] = useState("")
    // const [cover, setCover] = useState("")
    // const [avatar, setAvatar] = useState("")
    // const [link, setLink] = useState("")
    // const [showSaveButton, setShowSaveButton] = useState(false)
    // const [isLoaded, setIsLoaded] = useState(false)// erro vercel
    //
    //
    // useEffect(() => {
    //     if (typeof window === "undefined") return
    //
    //     if (getAuthData()?.user.slug != searchParams.get("slug")) {
    //         router.push("/edit/ladrao")
    //         return
    //     }
    //
    //     // erro vercel
    //     if (
    //         !searchParams ||
    //         !searchParams.get("name") ||
    //         !searchParams.get("bio") ||
    //         !searchParams.get("link") ||
    //         !searchParams.get("avatar") ||
    //         !searchParams.get("cover")
    //     ) {
    //         router.push("/edit/error");
    //         return;
    //     }
    //
    //     setName(decodeURIComponent(String(searchParams.get("name"))))
    //     setLink(decodeURIComponent(String(searchParams.get("link"))))
    //     setBio(decodeURIComponent(String(searchParams.get("bio"))))
    //     setAvatar(decodeURIComponent(String(searchParams.get("avatar"))))
    //     setCover(decodeURIComponent(String(searchParams.get("cover"))))
    //
    //     setIsLoaded(true);
    // }, [searchParams, router])
    //
    // //verificar mudanças
    // useEffect(() => {
    //     if (!searchParams) return
    //
    //     const url_name = decodeURIComponent(String(searchParams.get("name")))
    //     const url_link = decodeURIComponent(String(searchParams.get("link")))
    //     const url_bio = decodeURIComponent(String(searchParams.get("bio")))
    //
    //     if (url_name != name || url_link != link || url_bio != bio)
    //         setShowSaveButton(true)
    //     else
    //         setShowSaveButton(false)
    // }, [name, link, bio])
    //
    //
    co'nst handleSaveChanges = async () => {
        try {
            const res = await api.put("/user", {
                name,
                bio,
                link
            })

            if (res.data) {
                ShowMessage(
                    toast,
                    "Salvo com sucesso!",
                    true
                )

                setShowSaveButton(false)
            }

        } catch {
            ShowMessage(
                toast,
                "Não foi possível salvar as alterações"
            )
        }
    }'

    return (
        <div>
            <GeneralHeader backHref="/home">
                <div className="font-bold text-lg">Editar perfil</div>
            </GeneralHeader>
            <section className="border-b-2 border-gray-900 pb-10">
                {/* Contêiner de imagem de capa */}
                <div
                    style={{position: 'relative', width: '100%'}}
                    className="bg-gray-500 h-32 bg-no-repeat bg-cover bg-center z-0"
                >
                    <div className="flex justify-center items-center">
                        <Image
                            src={giveCorrectCoverImage(String(cover)) ?? ""}
                            fill
                            alt="cover"
                            style={{objectFit: 'cover', zIndex: -10}}
                        />

                        <div className="absolute inset-0 flex justify-center items-center space-x-4">
                            <div
                                className={"cursor-pointer rounded-full size-12 bg-black/85 hover:bg-gray-800/85 flex items-center justify-center"}>
                                <FontAwesomeIcon icon={faCamera} className="size-6 text-white"/>
                            </div>
                            <div
                                className={"cursor-pointer rounded-full size-12 bg-black/85 hover:bg-gray-800/85 flex items-center justify-center"}>
                                <FontAwesomeIcon icon={faXmark} className="size-6 text-white"/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contêiner do usuário */}
                <div className="flex justify-between items-end">
                    <div className="relative flex justify-between items-end -mt-12 z-10">
                        {/* Avatar do usuário */}
                        <Image
                            src={avatar ?? ""}
                            alt="avatar"
                            className="rounded-full "
                            height={96}
                            width={96}
                        />

                        <div className="absolute inset-0 flex justify-center items-center space-x-4">
                            <div
                                className={"cursor-pointer rounded-full size-6 bg-black/90 hover:bg-gray-800/90 flex items-center justify-center"}>
                                <FontAwesomeIcon icon={faCamera} className="size-3 text-white"/>
                            </div>
                        </div>
                    </div>

                </div>

                {/*Infos editáveis user */}
                <div className="px-6 mt-4 space-y-4">
                    <Input placeholder={"Nome"} setState={setName} value={name} label={"Nome"}/>
                    <Input placeholder={"Link"} setState={setLink} value={link} label={"Link"}/>
                    <TextArea placeholder={"Descreva você"} rows={4} value={bio} setState={setBio} label={"Bio"} />
                </div>
                {showSaveButton && (
                    <div className='flex justify-center items-center'>
                        <MyButton label={"Salvar alterações"} size={"m"} onClick={handleSaveChanges}
                                  className={"p-2 mt-10"}/>

                    </div>
                )}
            </section>
        </div>
    )
}