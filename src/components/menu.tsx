import Link from "next/link";
import {ROUTES} from "@/constants/routes"

interface IMenu{
    op1: string;
    op2: string;
    op3: string;
}

export const Menu: React.FC<IMenu> = ({op1, op2, op3}) => {
    return (
        <>
            <nav className="text-white font-roboto flex flex-row justify-center align-center gap-5 text-large bg-indigo-900 p-5 text-orange-600 text-[25px]">
            <Link href={ROUTES.primeiraPagina}>{op1}</Link>
            <Link href={ROUTES.segundaPagina}>{op2}</Link>
            <Link href={ROUTES.terceiraPagina}>{op3}</Link>
        </nav>
        
        </>
    )
}