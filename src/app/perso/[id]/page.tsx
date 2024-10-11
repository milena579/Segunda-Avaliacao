import { defaultConfig } from "next/dist/server/config-shared";
import Image from "next/image";
import { Suspense } from "react";
import fundo from "@/img/fundo.jpg"

interface IID {
    params:{
        id:string;
    }
}

interface IPersonagem {
    id: string;
    name: string;
    image: string;
    ki: string;
    gender: string;
    race: string;
    
}

interface IPersonagemStatic {
    items : IPersonagem[]
}

const Personagem =  async ({params: {id}}: IID) => {
    const res = await fetch (`https://dragonball-api.com/api/characters/${id}`)
    const data: IPersonagem = await res.json()
    return (
        <Suspense fallback={<div>Carregando</div>}>
            <div className="flex h-[100vh]">
                <div className="flex flex-col  justify-center h-screen w-screen items-center bg-[url('https://static.vecteezy.com/ti/vetor-gratis/p1/20520000-fundo-do-panorama-cenario-gratis-vetor.jpg')] bg-no-repeat bg-cover ">
                    <div className=" flex flex-col gap-2 items-center justify-center h-full">

                        <h1 className="text-[20px] bg-blue-900 p-5 justify-center rounded-lg h-16 text-orange-500 font-bold  p-3 w-54 rounded-lg flex items-center">{data.name}</h1>

                        <Image className="h-82 w-64 object-contain" src={data.image} width={10000} height={1000} alt="Personagem DB" priority/>

                        <div className="flex flex-row flex-wrap justify-center gap-8 text-branco w-full" >
                            <h3 className="p-4 bg-blue-900 rounded-lg flex items-center">Raça: {data.race}</h3>
                            <h3 className="p-4 bg-blue-900 rounded-lg flex items-center">Gênero:{data.gender}</h3>
                            <h3 className="p-4 bg-blue-900 rounded-lg flex items-center">Ki: {data.ki}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Suspense> 
    )
}

export default Personagem;
export async function generateStaticParams(){
    const res = await fetch("https://dragonball-api.com/api/characters/")
    const data: IPersonagemStatic = await res.json();

    return data.items.map((item) => item.id.toString())
}