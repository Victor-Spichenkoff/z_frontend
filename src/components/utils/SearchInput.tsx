"use client"

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { Input } from "../ui/Input"
import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"

interface SearchInputProps{
    defaultValue?: string
    hiddenOnSearch?: boolean
}

export const SearchInput = ({ defaultValue, hiddenOnSearch }: SearchInputProps) => {
    const pathName = usePathname()
    const router = useRouter()
    const [searchInput, setSearchInput] = useState(defaultValue ?? "")


    if(hiddenOnSearch && pathName == "/search")
         return null
    

    const handleSearchEvent = () => {
        if(!searchInput)
            return

        router.push("/search?q=" + encodeURIComponent(searchInput))
    }

    return (
        <Input 
            placeholder="Buscar"
            icon={faMagnifyingGlass}
            isFilled
            value={searchInput}
            setState={setSearchInput}
            onEnter={handleSearchEvent}
            onIconClick={handleSearchEvent}
        />
    )
}