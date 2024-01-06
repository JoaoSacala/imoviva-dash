import { ReactNode } from "react";
import { ChevronLeft } from "lucide-react"

interface AppRootProps {
    children: ReactNode
}

export const SideBarRoot = ({ children}: AppRootProps) => {
    return (
        <div className="flex flex-col relative w-[400px] h-screen py-4 px-2 border-r">
            <div className="absolute bg-orange-600 rounded-full text-white -right-3">
                <ChevronLeft className="" />
            </div>
            {children}
        </div>
    ) 
}