import { Suspense } from "react";
import Link from "next/link";

import esfera from "@/img/esfera.jpg"
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
    const res = await fetch("https://dragonball-api.com/api/characters?page=1&limit=58");
    const data : IPersonagem =  await res.json();
    console.log(data);
    
    return (
        <>
            <Suspense fallback={<div>Carregando</div>}>
                <div className="bg-slate-900 h-full">
                    <div className="flex w-full gap-8 h-90vh justify-center items-center p-5 flex-wrap ">
                        {data.items.map((item) => {
                            return(
                                <div className="h-52 w-[200px]  rounded-full  justify-center flex flex-col items-center  bg-[url('https://i.pinimg.com/originals/13/19/62/1319628426fa9d3783705daf7db525f8.png')] bg-no-repeat bg-cover	">
                                    <div key={item.id} className="text-branco flex items-center flex-col gap-2">
                                        <h2 className="font-bold text-[15px]">{item.name}</h2>
                                        <Link href={`/perso/${item.id}`} className="bg-blue-800 p-2  flex justify-center rounded-lg">Ver</Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Suspense>
        </>
    )
}

export default TerceiraPagina;