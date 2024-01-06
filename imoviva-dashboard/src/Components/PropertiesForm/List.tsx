import { useEffect, useState } from "react"
import { test } from "../Typetest/types";
import { Axios } from "../../axios.config";



export const Listar = () => {
    const [ValueLista, setValueLista] = useState <test[]> ([])

 async  function handleListProperties () {
    await  Axios.get('imoveis')
        .then(response => response.data)
        .then(data => {
            setValueLista(data)})
        .catch(error =>{console.log(error)})
    } 
    useEffect(() => {
        handleListProperties() 
    },[])
    
    return (
        <div>
            {ValueLista.map((lista, index: number) => (
                 <div key={index}>
                    <div>{lista.tipo_imovel}</div>
                    <div>{lista.tipo_anuncio}</div>
                    <div>{lista.titulo}</div>
                    <div>{lista.preco}</div>
                    <div>{lista.dimensoes}</div>
                    <div>{lista.municipio}</div>
                    <div>{lista.distrito}</div>
                    <div>{lista.bairro}</div>
                    <div className="flex items-center gap-2 w-[200px]">
                        {Object.values(lista.fotos).map((foto, i) => (
                            <img key={`${lista.tipo_imovel}-${i}`} src={`http://localhost:3333/files/${foto}`} alt={`Imagem ${i + 1}`} />
                        ))}
                    </div>

                    <div>{lista.quartos}</div>
                    <div>{lista.banheiros}</div>
                    <div>{lista.suites}</div>
                    <div>{lista.detalhes}</div>
                 </div>
                
            ))}
        </div>
    )
}