import { FormApartment } from "../Components/PropertiesForm/Apartment"
import { FormHouse } from "../Components/PropertiesForm/House"
import { ComponentRadioContext } from "../Components/Context/CreateContext"
import { FormCommercial } from "../Components/PropertiesForm/Commercial"
import { FormGround } from "../Components/PropertiesForm/Ground"
import { Listar } from "../Components/PropertiesForm/List"

export const PropertiesPage = () => {
    const contextRender = ComponentRadioContext()
    return (
        <div>
            {
                contextRender.valueProperties === "Apartamento" 
                ? <FormApartment /> :
                contextRender.valueProperties === "Casa" 
                ? <FormHouse /> : 
                contextRender.valueProperties === "Comercial" 
                ? <FormCommercial /> : 
                contextRender.valueProperties === "Terreno" 
                ?  <FormGround /> : 
                <Listar />
            }
        </div>
    )
}