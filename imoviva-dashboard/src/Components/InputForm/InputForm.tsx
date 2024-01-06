import { InputHTMLAttributes, forwardRef, useId } from "react"

type InputProps = InputHTMLAttributes <HTMLInputElement> & {
    label?: string
}

export const InputForm = forwardRef<HTMLInputElement, InputProps> (({ type="", label="", name=",", ...props}, ref) => {
    const inputId = useId()
    return (
        <div>
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