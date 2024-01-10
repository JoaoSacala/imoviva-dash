import { useForm } from "react-hook-form";
import { FormHouseProps } from "../FormType/FormType";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaFormHouse } from "../Schemas/FormSchema";
import { Axios } from "../../axios.config";
import { toast } from "react-toastify";

export const usePropertiesHouse = () => {

    const { 
        handleSubmit,
         register, 
         formState: {errors}
        } = useForm<FormHouseProps>({
            criteriaMode: 'all',
            mode: 'all',
            resolver: zodResolver(schemaFormHouse),
            defaultValues: {
            tipo_imovel: 'Casa'
            }
        })

    const handleFormSubmit = async (data: FormHouseProps) => {

        const formData = new FormData();

        formData.append("tipo_imovel", data.tipo_imovel);
        formData.append("titulo", data.titulo );
        formData.append("preco", data.preco );
        formData.append("dimensoes", data.dimensoes );
        formData.append("municipio", data.municipio);
        formData.append("distrito", data.distrito );
        formData.append("bairro", data.bairro );
        formData.append("quartos", data.quartos );
        formData.append("banheiros", data.banheiros );
        formData.append("suites", data.suites );
        formData.append("detalhes", data.detalhes);
        formData.append("tipo_anuncio", data.tipo_anuncio);
        
        for (let i = 0; i < data.fotos.length; i++) {
            formData.append("fotos", data.fotos[i]);
        }
        await  Axios.post('imoveis', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
          })
          .then(response => {
            response.data;
            toast.success("Cadastrado com sucesso!")
          })
          .catch(err => {
            err;
            toast.error("Erro ao cadastrar!")
          });
    }
    return {
        errors,
        register,
        handleFormSubmit,
        handleSubmit
    }
}