import Link from "next/link";
import {ROUTES} from "@/constants/routes"

interface IMenu{
    op1: string;
}

export const Menu: React.FC<IMenu> = ({op1}) => {
    return (
        <>
            <nav className="text-white font-roboto flex flex-row justify-center align-center gap-5 text-large bg-indigo-900 p-5">
            <Link href={ROUTES.primeiraPagina}>{op1}</Link>
        </nav>
        
        </>
    )
}