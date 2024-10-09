"use client" 

import { useEffect, useState } from "react";
import Image from "next/image";
import { api } from "@/constants/api";

interface IPersonagem {
    id: string;
    name: string;
    image: string;

}

const AxiosSegundaPagina = () => {
    const [personagem, setPersonagem] = useState<IPersonagem[]>([]);
    const [erroMessage, setErroMessage] = useState<string>("Não foi possível buscar os dados")
    const [erro, setErro] = useState<boolean>(false)
    const [page, setPage] = useState<string>("")


    useEffect(() => {
        api.get(`/characters?page=${page}&limit=10`).then((res) => {
            setErro(false)
            setPersonagem(res.data.items);
            console.log()
        }).catch((error) => {
            // if(error.response.status == 404){
            //     setErroMessage("Pagina nao encontrada");
            // }
            setErro(true);
        })
    }, [page])

    return (
        <>
            <div className="w-full flex items-center justify-center flex-col gap-4">
                <h1 className="text-[35px] font-bold">Dragon Ball!</h1>
                <div className="flex gap-2 items-center">
                    <label htmlFor=""><h3>Pesquisar:</h3></label>
                    <input className="border rounded-md p-1" type="text" onChange={(e) => setPage(e.target.value)} value={page} placeholder="Insira a pagina"/>
                </div>

            </div>


            <div className="flex flex-wrap gap-5 w-full justify-center p-5">
                {erro && <h5 className="text-preto">{erroMessage}</h5>}
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

export default AxiosSegundaPagina;