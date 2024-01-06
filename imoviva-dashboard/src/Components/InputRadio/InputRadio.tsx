import { InputHTMLAttributes, forwardRef, useId } from "react"
import { ComponentRadioContext } from "../Context/CreateContext"

type InputProps = InputHTMLAttributes <HTMLInputElement> & {
    label?: string
}

export const InputRadio = forwardRef<HTMLInputElement, InputProps> (({ type="", label="", name=",", ...props}, ref) => {
    const context = ComponentRadioContext()
    const inputId = useId()
    return (
        <div onClick={() => context.handleProperties(label)} className="flex justify-center items-center select-none gap-1">
            <label htmlFor={inputId}>{label}</label>
            <input 
                type={type} 
                name={name} 
                id={inputId}
                ref={ref}
                {...props}
            />
        </div>
    )
})