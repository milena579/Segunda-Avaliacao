"use client"

import { useEffect, useState } from "react";
import Image from "next/image";

interface IPersonagem {
    id: string;
    name: string;
    image: string;

}

const PrimeiraPagina = () => {
    const [personagem, setPersonagem] = useState<IPersonagem[]>([]);

    useEffect(() => {
        const carregar =  async () => {
            const res = await fetch("https://dragonball-api.com/api/characters");
            const data =  await res.json();
            setPersonagem(data.items);
            console.log(data);
        }
        carregar();
    }, [])
    return (
        <>  
            <div className="w-full flex items-center justify-center">
                <h1 className="text-[35px] font-bold">Dragon Ball!</h1>
            </div>
            <div className="flex flex-wrap gap-5 w-full justify-center p-5">
                {personagem.map((item, index) =>{
                    return(
                        <div key={item.id} className=" h-90 w-80 border border-orange-600 p-5 flex flex-col gap-5 items-center justify-center rounded-lg transition duration-500 shadow-lg shadow-black-500/2  hover:scale-105">
                            <h2 className="text-[25px] text-orange-500 font-bold">{item.name}</h2>
                            <Image className="h-72 w-48 object-contain" src={item.image} width={10000} height={1000} alt="Personagem DB" priority/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default PrimeiraPagina;