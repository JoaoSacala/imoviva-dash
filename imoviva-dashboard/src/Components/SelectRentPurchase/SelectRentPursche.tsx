import { SelectHTMLAttributes, SetStateAction, forwardRef, useState } from "react"


type RentPurchaseProps = SelectHTMLAttributes<HTMLSelectElement>
export const RentPurchase = forwardRef<HTMLSelectElement, RentPurchaseProps>(({name="", ...props}, ref) => {
    const optinos = [
        {label: "Arrendar", value: "Arrendar", id: 1},
        {label: "Comprar", value: "Comprar", id: 2}
    ]
    function handleSelect(e: {target: {value: SetStateAction<string>}}) {
        Setvalue(e.target.value)
    }
    const [value, Setvalue] = useState('')
    return (
        <>
            <select
                name={name}
                onChange={handleSelect}
                ref={ref}
                defaultValue={value}
                {...props}
            >
                <option disabled>Arrendar/Comprar</option> 
                {optinos.map(option => (
                    <option value={option.value} key={option.id}>{option.label}</option>
                ))}
            </select>
            <p>{value}</p>
        </>
    )
})