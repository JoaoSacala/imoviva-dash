import { User2 } from "lucide-react"
import { InputRadio } from "../InputRadio"
import { ComponentRadioContext } from "../Context/CreateContext"

export const Header = () => {
    const headerContext = ComponentRadioContext()
    return (
        
        <div className={`flex ${headerContext.valueSidebar === "Imoveis" ? "justify-between" : "justify-end"} items-center mx-4 h-[56px] `} >
            {headerContext.valueSidebar === "Imoveis" &&  
            <div className="flex justify-center items-center gap-2 text-lg">
                <InputRadio
                    type="radio"
                    label="Apartamento"
                />
                <InputRadio
                    type="radio"
                    label="Casa"
                />
                <InputRadio 
                    type="radio"
                    label="Comercial"
                />
                <InputRadio 
                    type="radio"
                    label="Terreno"
                />
                <InputRadio 
                    type="radio"
                    label="Lista"
                />
            </div>
            }
            <User2 />
        </div>
    )
}