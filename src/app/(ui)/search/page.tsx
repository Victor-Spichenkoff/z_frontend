"use client"

import {redirect, useSearchParams} from "next/navigation";
import {GeneralHeader} from "@/components/ui/generalHeader";
import {SearchInput} from "@/components/utils/SearchInput";
import {FeedItem} from "@/components/tweet/FeddItem";
import {useEffect, useState} from "react";
import {Tweet} from "@/types/Tweet";
import {api} from "@/lib/api";
import {ShowMessage} from "@/components/utils/Message";
import {useToast} from "@/hooks/use-toast";
import {MyButton} from "@/components/ui/MyButton";
import {useCheckLogin} from "@/hooks/useCheckLogin"


export default function SearchPage() {
    useCheckLogin()

    const searchParams = useSearchParams()
    const { toast } = useToast()
    const [tweets, setTweets] = useState<Tweet[] | null>()
    const [page, setPage] = useState(0)
    const [noMore, setNoMore] = useState<boolean>(false)


    if (!searchParams)
        return redirect("/home")


    const q = searchParams.get("q") ?? ""
    useEffect(() => {

        (async ()=>{
            try {
                const encoded = encodeURIComponent(q)
                const res = await api(`/search?q=${encoded}&page=${page}`,)

                if(res.data.tweets.length)
                    setTweets(res.data.tweets)
                else
                    setNoMore(true)
            } catch {
                ShowMessage(toast, "Erro interno!")
                setNoMore(true)
            }
        })()
    }, [page]);


    return (
        <div>
            <div className={"flex items-center "}>
                <GeneralHeader backHref={"/home"}>
                    <div className={'flex flex-col justify-center items-center '}>
                        <SearchInput defaultValue={q}/>
                        <div className={"h-5 w-1"}></div>
                    </div>
                </GeneralHeader>
            </div>
            <div className={'border-t-2 border-gray-900'}>
                {tweets?.map(tweet => <FeedItem tweet={tweet} key={tweet.id}/>)}
            </div>

            <div>
                { noMore && <div className={'text-center text-xl mt-10 mb-5'}>
                    Nada para ver
                </div> }
                { !noMore && (
                    <div className={'flex justify-center mt-10 mb-5'}>
                    <MyButton label={"Mais"} size={'m'} onClick={()=> setPage(page + 1)} className={'self-center px-4 py-1'}/>

                    </div>
                )}
            </div>
        </div>
    )
}