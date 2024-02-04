interface SideBarItemsProps {
    text?: string
    link: string
    icon: ElementType
}

import { ElementType } from "react";
import { Link } from "react-router-dom";
import { ComponentRadioContext } from "../Context/CreateContext";
import { twMerge } from "tailwind-merge";

export const SideBarItems = ({ text, link, icon: Icon }: SideBarItemsProps) => {

    const { valueSidebar } = ComponentRadioContext()
    return (
        <Link to={link} >
            <div className={twMerge("h-12 flex items-center justify-start px-4 gap-2 hover:bg-orange-600 hover:text-white rounded hover:transition-colors hover:duration-150 text-zinc-600", `${valueSidebar && !valueSidebar && "transition-all duration-700"} ${valueSidebar && "w-14 px-0 justify-center"  }`)}>
                <Icon size={24} className="h-[100px]" />
                {valueSidebar === false && text}
            </div>
        </Link>
    )
} 