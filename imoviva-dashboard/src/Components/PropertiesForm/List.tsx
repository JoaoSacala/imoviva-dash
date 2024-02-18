import { useEffect, useState } from "react"
import { test } from "../Typetest/types";
import { Axios } from "../../axios.config";
import { parseCookies } from "nookies";


export const Listar = () => {
    const [ValueLista, setValueLista] = useState<test[]> ([])

 async  function handleListProperties () {
    const { "imoviva.token": token } = parseCookies();

    Axios.defaults.headers["Authorization"] = `Bearer ${token}`;
    const { data: {tipo} } = await  Axios.get('/propriedades/listar')
    
    
    const allArray = []
    for (let i = 0; i < tipo.apartamentos.length; i++) {
        allArray.push(tipo.apartamentos[i])  
    }

    for (let i = 0; i < tipo.casas.length; i++) {
        allArray.push(tipo.casas[i])  
    }

        setValueLista(allArray);
    } 
    useEffect(() => {
        handleListProperties() 
    },[])
    
    return (
        <div>
            {ValueLista.map((lista, index: number) => (
                 <div key={index}>
                    <div>{lista.tipo}</div>
                    <div>{lista.disp_para}</div>
                    <div>{lista.titulo}</div>
                    <div>{lista.preco}</div>
                    <div>{lista.dimensoes}</div>
                    <div>{lista.municipio}</div>
                    <div>{lista.distrito}</div>
                    <div>{lista.bairro}</div>
                   <div className="flex items-center gap-2 w-[200px]">
                        {Object.values(lista.fotos).map((foto, i) => (
                            <img key={`${lista.tipo}-${i}`} src={`http://localhost:8000/fotos/${foto}`} 
                            alt={`Imagem ${i + 1}`} />
                        ))}
                    </div>
                    <div>{lista.quartos}</div>
                    <div>{lista.banheiros}</div>
                    <div>{lista.suites}</div>
                    <div>{lista.descricao}</div>
                    <div>{lista.status}</div>
                 </div>
                
            ))}
        </div>
    )
}