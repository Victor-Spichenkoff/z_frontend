import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface ImagePreviewProps {
    setImagePreview: (e: any) => void
    imagePreview: string | null
}

export const ImagePreview = ({ imagePreview, setImagePreview }: ImagePreviewProps) => {
    if (!imagePreview)
        return

    
    return (
        <div className="relative">
            <img
                src={imagePreview}
                alt="Preview"
                className="mx-auto max-w-full max-h-48 mb-2 object-cover rounded shadow-md"
            />
        </div>
    )
}