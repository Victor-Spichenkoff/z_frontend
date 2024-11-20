import { NavItem } from "@/components/nav/nav-item"
import { NavLougout } from "@/components/nav/nav-lougout"
import { NavMyProfile } from "@/components/nav/nav-my-profile"
import { Logo } from "@/components/ui/logo"
import { RecommendationArea } from "@/components/ui/RecommendationArea"
import { TrendingArea } from "@/components/ui/TrendingArea"
import { SearchInput } from "@/components/utils/SearchInput"
import { faHouse, faUser } from "@fortawesome/free-solid-svg-icons"

interface IUiLayout {
    children: React.ReactNode
}

export default function UiLayout({ children }: Readonly<IUiLayout>) {
    return (
        <main className="min-h-screen flex justify-center mx-auto max-w-7xl">
            <section className="__hidden flex lg:flex flex-col sticky top-0 h-screen w-72 px-3 border-r-2 border-gray-900">
                <div className="flex-1 mt-6">
                    <Logo size={24} />
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
                        <NavItem
                            href="/home"
                            label="home"
                            icon={faHouse}
                        />
                    </nav>
                </div>
                <div className="mb-6 flex flex-col gap-4">
                    <NavLougout />
                    <NavMyProfile />
                </div>
            </section>
            <section className="flex-1 max-w-lg">
                {children}
            </section>
            <aside className="hidden lg:flex flex-col gap-6 sticky top-0 h-fit w-96 px-8 py-6 border-l-2 border-gray-900">
                <SearchInput hiddenOnSearch/>
                <TrendingArea />
                <RecommendationArea />
            </aside>
        </main>
    )
}