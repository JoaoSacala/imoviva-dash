interface SideBarItemsProps {
    text: string
    link: string
    icon: ElementType
}

import { ElementType } from "react";
import { Link } from "react-router-dom";
import { ComponentRadioContext } from "../Context/CreateContext";

export const SideBarItems = ({ text, link, icon: Icon }: SideBarItemsProps) => {

    const contextSidebar = ComponentRadioContext()
    return (
        <Link to={link} onClick={() =>contextSidebar.sidebar(text) } >
            <div className="flex gap-2 hover:bg-orange-600 hover:text-white rounded py-2 px-4 transition-colors duration-150 text-zinc-600">
                <Icon />
                {text}
            </div>
        </Link>
    )
} 