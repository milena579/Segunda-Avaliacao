import { Suspense } from "react";
import Link from "next/link";

type IPersonagem = {
    items : {
        id: string;
        name: string;
        image: string;
        ki: string;
        gender: string;
        race: string;
    }[]
}

const TerceiraPagina = async () => {
    const res = await fetch("https://dragonball-api.com/api/characters");
    const data : IPersonagem =  await res.json();
    console.log(data);
    return (
        <>
            <Suspense fallback={<div>LTeste</div>}>
                {data.items.map((item) => {
                    return(
                        <div key={item.id}>
                            <h2>{item.name}</h2>
                            <Link href={`/perso/${item.id}`}>ABRIR</Link>
                        </div>
                    )
                })}
            </Suspense>
        </>
    )
}

export default TerceiraPagina;