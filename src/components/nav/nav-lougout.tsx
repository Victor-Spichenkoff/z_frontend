import { logout } from "@/utils/auth"
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const NavLougout = () => {

    return (
        <button onClick={logout} className={`cursor-pointer flex items-center gap-6 py-3
             opacity-50 hover:opacity-100`}>
                <FontAwesomeIcon
                    icon={faArrowRightFromBracket}
                    className="size-6"
                />
            <div className="text-lg">Sair</div>
        </button>
    )
}