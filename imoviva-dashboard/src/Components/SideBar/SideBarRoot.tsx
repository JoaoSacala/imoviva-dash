import { ReactNode } from "react";
import { ChevronLeft } from "lucide-react"
import { twMerge } from "tailwind-merge";
import { ComponentRadioContext } from "../Context/CreateContext";

interface AppRootProps {
    children: ReactNode
}

export const SideBarRoot = ({ children}: AppRootProps) => {

    const { sidebar, valueSidebar } = ComponentRadioContext()
    return (
        <div className={twMerge(`flex flex-col relative w-[400px] h-screen py-4 px-2 border-r transition-all duration-700`, `${valueSidebar && 'w-[80px]'}`)}>
            <div onClick={()=>sidebar(!valueSidebar) } className="absolute bg-orange-600 rounded-full text-white -right-3">
                <ChevronLeft className="" />
            </div>
            <div className="overflow-hidden">
                {children}
            </div>
            
        </div>
    ) 
}