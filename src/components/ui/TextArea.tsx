interface TextAreaProps {
    placeholder: string
    rows: number
    value: string
    setState: (value: string) => void
    label: string
}

export const TextArea = ({setState, rows, value, placeholder, label}: TextAreaProps) => {
    return (
        <div>
            <div className={"-mr-4"}>
                {label}
            </div>
        <div className={"has-[:focus]:border-white flex items-center rounded-3xl border-2 border-gray-700"}>
            {/*<div className={'mb-10 '}>*/}
            {/*    <label className={"mb-4 -mr-3"}>{label}</label>*/}
            {/*</div>*/}

            <div className={"flex items-start "}>

                <textarea name="" id="" rows={rows}
                          className={'flex-1 outline-none bg-transparent h-full p-5 resize-none'}
                          placeholder={placeholder}
                          value={value}
                          onChange={(e) => setState(e.target.value)}
                />
            </div>

        </div>
        </div>
    )
}