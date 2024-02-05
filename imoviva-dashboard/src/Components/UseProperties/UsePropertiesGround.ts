import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import { FormGroundProps } from "../FormType/FormType";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaFormGround } from "../Schemas/FormSchema";
import { Axios } from "../../axios.config";


export const usePropertiesGround = () => {

    const { 
        handleSubmit,
         register, 
         formState: {errors}
        } = useForm<FormGroundProps>({
            criteriaMode: 'all',
            mode: 'all',
            resolver: zodResolver(schemaFormGround), 
            defaultValues: {
                tipo: 'Terreno',
                status: 'Disponivel'
            }
        })

    const handleFormSubmit = async (data: FormGroundProps) => {
        console.log(data);

        const formData = new FormData();

        formData.append("tipo", data.tipo);
        formData.append("titulo", data.titulo );
        formData.append("preco", data.preco );
        formData.append("dimensoes", data.dimensoes );
        formData.append("municipio", data.municipio);
        formData.append("distrito", data.distrito );
        formData.append("bairro", data.bairro );
        formData.append("descricao", data.descricao );
        formData.append("disp_para", data.disp_para);
        formData.append("status", data.status);
        
        for (let i = 0; i < data.fotos.length; i++) {
            formData.append("fotos[]", data.fotos[i]);
        }
        
        try {
          const {status} = await Axios.post('/propriedades/store', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
           }) 
           if (status === 200) {
            toast.success("Cadastrado com sucesso!")
           }
        } catch (error) {
          toast.error("Erro ao cadastrar!")
        }
        }
    return {
        errors,
        register,
        handleFormSubmit,
        handleSubmit
    }
}