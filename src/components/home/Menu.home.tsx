import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Logo } from "../ui/logo"
import { faHouse, faUser, faXmark } from "@fortawesome/free-solid-svg-icons"
import { SearchInput } from "../utils/SearchInput"
import { NavItem } from "../nav/nav-item"
import { NavLougout } from "../nav/nav-lougout"

interface HomMenuProps {
    closeAction: (t: any) => void
}

export const HomeMenu = ({ closeAction }: HomMenuProps) => {
    return (
        <div className="fixed inset-0 p-6 bg-black lg:hidden">
            <div className="flex justify-between items-center">
                <Logo size={32} />
                <button className="flex justify-center items-center size-12 rounded-full border-2 border-gray-900" onClick={closeAction}>
                    <FontAwesomeIcon icon={faXmark} className="size-6" />
                </button>
            </div>

            <div className="my-6">
                <SearchInput />
            </div>

            <div>
                <nav className="mt-11">
                    <NavItem
                        href="/home"
                        label="Página Inicial"
                        icon={faHouse}
                    />
                    <NavItem
                        href="/profile"
                        label="Meu Perfil"
                        icon={faUser}
                    />
                    <NavLougout />
                </nav>
            </div>
        </div>
    )
}