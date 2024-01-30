import { SetStateAction, forwardRef, useId, useState } from "react"

import { SelectHTMLAttributes } from "react"

type SeelectProps = SelectHTMLAttributes <HTMLSelectElement> & {
    label?: string
}

export const SelectMunicipio = forwardRef <HTMLSelectElement, SeelectProps> (({name="", label="",  ...props}, ref) => {
    const options = [
        {label: "Apartamentos", value: "Apartamentos", id: 1},
        {label: "Casas", value: "Casas", id: 2},
        
    ]
    function handleSelect(e: { target: { value: SetStateAction<string> } }) {
        setValue(e.target.value)
    }
    const [value, setValue] = useState('')
    const SelectId = useId()
    return (
        <>
            <label htmlFor={SelectId}>{label}</label>
            <select 
                id={SelectId} 
                className="px-2 py-2 rounded-md outline-none" 
                onChange={handleSelect} 
                name={name} 
                ref={ref} 
                defaultValue={value}
                {...props}
            >
                
                <option disabled  defaultValue={'none'}>selecione um municipio</option>  
                {options.map(option => (
                    <option value={option.value} key={option.id}>{option.label}</option>
                ))}
            </select>
        </>
    )
}) 