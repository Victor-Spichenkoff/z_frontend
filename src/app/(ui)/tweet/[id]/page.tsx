"use client"

import {GeneralHeader} from "@/components/ui/generalHeader"
import {TweetPost} from "@/components/tweet/PostTweet";
import {FeedItem} from "@/components/tweet/FeddItem";
import {useEffect, useState, useTransition} from "react";
import {Tweet} from "@/types/Tweet";
import {api} from "@/lib/api";
import {useParams} from "next/navigation";
import {ShowMessage} from "@/components/utils/Message";
import {useToast} from "@/hooks/use-toast";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner } from "@fortawesome/free-solid-svg-icons"

export default function TweetPage() {
    const {toast} = useToast()
    const params = useParams()
    const {id} = params
    const [answers, setAnswers] = useState<Tweet[]>([])
    const [isLoading, startTransition] = useTransition()
    const [tweet, setTweet] = useState<Tweet | null>(null)
    const [successState, setSuccessCreation] = useState<boolean>(false)

    if(id == undefined || typeof window === "undefined")
        return null

    useEffect(() => {
        startTransition(async () => {
            try {
                const res = await api(`/tweet/${id}/answers`)

                setAnswers(res.data.answers)

                const tweetRes = await api(`/tweet/${id}`)
                setTweet(tweetRes.data.tweet)
            } catch (e) {
                console.log(e)
                console.log("Erro ao pegar tweets/respostas")
                ShowMessage(toast, "Erro interno")
            }
        })
    }, [successState])

    if (isLoading)
        return (
            <div className={'h-screen flex justify-center items-center'}>
                <div className={'animate-spin'}>
                    <FontAwesomeIcon icon={faSpinner} className={'size-28'}/>
                </div>
            </div>
        )

    if (!tweet)
        return (
            <div className={"h-screen flex items-center justify-center text-red-600 text-3xl"}>
                Tweet não encontrado!
            </div>
        )

    return (
        <div>
            <GeneralHeader backHref={"/home"}>
                <div className={"font-bold text-lg"}>Voltar</div>
            </GeneralHeader>
            <div className={"border-2 border-gray-900"}>
                <FeedItem tweet={tweet}/>
                <div className={'border-y-8  border-gray-900'}>
                    {/* Poste um comentário*/}
                    <TweetPost answerOf={String(id)} setSuccessState={setSuccessCreation}/>

                    {/* Comentários */}
                    { answers?.length == 0 ? (
                        <div className={"flex justify-center text-xl mt-5 mb-5"}>
                            seja o primeiro a comentar!
                        </div>
                    ) : ""}

                    { answers?.length > 0 && answers?.map(answer => <FeedItem tweet={answer} hideComments key={answer.id}/>) }

                </div>
            </div>
        </div>
    )
}