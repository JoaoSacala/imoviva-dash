import { Button } from "../ButtonForm"
import { InputForm } from "../InputForm"
import { SelectMunicipio } from "../SelectFormMunicipio"
import { RentPurchase } from "../SelectRentPurchase"
import { TextArea } from "../TextArea"
import { usePropertiesCommercial } from "../UseProperties/UsePropertiesCommercial"

export const FormCommercial = () => {

    const { errors, handleFormSubmit, handleSubmit, register } = usePropertiesCommercial()
    return (
       <form onSubmit={handleSubmit(handleFormSubmit)}>
            <h1 className="text-center text-3xl">Cadastrar Comercial</h1>
            <h2>Informacoes Básicas</h2>
            <div className="flex justify-between" >
                <div className="flex flex-col w-80" >
                    
                    <InputForm
                        {...register('titulo')}
                        type="text"
                        label="Título do anúncio"
                    />
                    {errors?.titulo?.message && (
                        <p className="text-red-600">{errors?.titulo?.message }</p>
                    )}
                    <InputForm
                        {...register('preco')}
                        type="number"
                        label="Preço"
                    />
                    {errors?.preco?.message && (
                        <p className="text-red-600">{errors?.preco?.message }</p>
                    )}
                    <InputForm
                        {...register('dimensoes')}
                        type="number"
                        label="Dimensões"
                    />
                    {errors?.dimensoes?.message && (
                        <p className="text-red-600">{errors?.dimensoes?.message }</p>
                    )}
                </div>
                <div className="flex flex-col w-80">
                    <SelectMunicipio
                        {...register('municipio')} 
                        label="Municipio"
                    />
                    <InputForm
                        {...register('distrito')}
                        type="text"
                        label="Distrito"
                    />
                    {errors?.distrito?.message && (
                        <p className="text-red-600">{errors?.distrito?.message }</p>
                    )}
                        <InputForm
                            {...register('bairro')}
                            type="text"
                            label="Bairro"
                        />
                    {errors?.bairro?.message && (
                        <p className="text-red-600">{errors?.bairro?.message }</p>
                    )}
                </div>
            </div>
                <h2>Adicionar Multimédia</h2>
            <div>
                <h3>Fotos</h3>
                <InputForm
                    {...register('fotos')}
                    type="file"
                    accept="image/*"
                    multiple
                />
                    {errors?.bairro?.message && (
                        <p className="text-red-600">{errors?.bairro?.message }</p>
                    )} 
            </div>
                <h2>Características</h2>
            <div className="flex flex-col w-80">
                <InputForm
                    {...register('banheiros')}
                    type="number"
                    label="Número de banheiros"
                />
                        {errors?.banheiros?.message && (
                            <p className="text-red-600">{errors?.banheiros?.message }</p>
                        )}
            </div>
            <TextArea
                {...register('descricao')}
                label="Detalhes"
                cols={70}
                rows={10}
                className="h-40"
            />
             <RentPurchase
                {...register('disp_para')}
            />
            <Button />
       </form>
    )
}