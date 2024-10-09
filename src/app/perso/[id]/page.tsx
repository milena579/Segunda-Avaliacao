import { defaultConfig } from "next/dist/server/config-shared";
import Image from "next/image";

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
        <>
            <div className="w-full flex items-center justify-center p-5">
                <div className=" h-90 w-80  p-5 flex flex-col gap-5 items-center justify-center rounded-lg transition duration-500 shadow-lg shadow-black-500/2  hover:scale-105">
                    <h1 className="text-[35px] text-orange-500 font-bold">{data.name}</h1>
                    <Image className="h-82 w-48 object-contain" src={data.image} width={10000} height={1000} alt="Personagem DB" priority/>
                    <div className="text-[20px]">
                        <h3>Raça: {data.race}</h3>
                        <h3>Gênero:{data.gender}</h3>
                        <h3>Ki: {data.ki}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Personagem;
export async function generateStaticParams(){
    const res = await fetch("https://dragonball-api.com/api/characters/")
    const data: IPersonagemStatic = await res.json();

    return data.items.map((item) => item.id.toString())
}