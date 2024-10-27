interface IButton {
    label: string
    size: "p" | "m" | "g"
    onClick?: () => void
    className?: string
}

export const Button = ({ label, size = "g", onClick, className }: IButton) => {
    let buttonSizeStyle

    switch (size) {
        case "g":
            buttonSizeStyle = "h-14 text-lg"; break;
        case "m":
            buttonSizeStyle = "h-10 text-md"; break;
        case "p":
            buttonSizeStyle = "h-7 text-xs"; break;
    }
    
    
    return (
        <button
            className={`flex justify-center items-center cursor-pointer bg-white text-black font-bold rounded-3xl hover:bg-gray-200
                ${buttonSizeStyle}
                ${className}
                `}
            onClick={onClick}>
            { label }
        </button>
    )
}