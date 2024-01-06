import { TextareaHTMLAttributes, forwardRef, useId } from "react"

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps> (({label='', ...props}, ref) => {
    const textAreaId = useId() 
    return (
        <div className="flex flex-col w-80">
            <label htmlFor={textAreaId}>{label}</label>
            <textarea
                id={textAreaId}
                ref={ref}
                {...props}
                cols={70} 
                rows={10}
                className="h-40"
            />
        </div>
    )
})