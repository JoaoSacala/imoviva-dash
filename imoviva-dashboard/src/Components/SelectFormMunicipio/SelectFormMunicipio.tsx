import { SetStateAction, forwardRef, useId, useState } from "react"

import { SelectHTMLAttributes } from "react"

type SeelectProps = SelectHTMLAttributes <HTMLSelectElement> & {
    label?: string
}

export const SelectMunicipio = forwardRef <HTMLSelectElement, SeelectProps> (({name="", label="",  ...props}, ref) => {
    const options = [
        {label: "Luanda", value: "luanda", id: 1},
        {label: "Cacuaco", value: "Cacuaco", id: 2},
        {label: "Kilamba Kiaxi", value: "Kilamba Kiaxi", id: 3},
        {label: "Belas", value: "Belas", id: 4},
        {label: "Talatona", value: "Talatona", id: 5},
        {label: "Cazenga", value: "Cazenga", id: 6},
        {label: "Rangel", value: "Rangel", id: 7},
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