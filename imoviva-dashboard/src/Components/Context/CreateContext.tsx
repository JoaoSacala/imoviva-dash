import { createContext, useContext, useState } from "react";

type Context = {
    valueProperties: string
    handleProperties: (value:string) => void
    valueSidebar: boolean
    sidebar: (value: boolean) => void
}

const inputRadioContext = createContext({} as Context)
export const ComponentRadioContext = () => useContext(inputRadioContext) 

export const ComponentRadio = ({children}: {children:React.ReactNode}) => {
    const [valueProperties, setValueProperties] = useState('')
    const [valueSidebar, setValueSideBar] = useState(false)
    function handleProperties (value: string) {
        setValueProperties(value)
    }
    function sidebar (value: boolean) {
        setValueSideBar(value)
    }
    return (
        <inputRadioContext.Provider value={{valueProperties, handleProperties, valueSidebar, sidebar}}>
                {children}
        </inputRadioContext.Provider>
    )
}

