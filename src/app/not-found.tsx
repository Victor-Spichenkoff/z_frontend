import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function () {
    return (
        <div className="h-screen w-screen bg-red-700 overflow-hidden text-4xl flex justify-center items-center">
            <div className="text-red-300 bg-red-500/60 rounded-lg border-3 border-red-600 flex items-center w-fit px-4 py-2">
                <FontAwesomeIcon icon={faWarning} className="text-red-900 size-7 inline-block" />
                <p className="ml-2">PC infectado com sucesso!!!</p>
            </div>
        </div>

    )
}