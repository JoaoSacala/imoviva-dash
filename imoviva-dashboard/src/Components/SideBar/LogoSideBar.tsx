import { Link } from "react-router-dom"
import { ComponentRadioContext } from "../Context/CreateContext"
import { cn } from "../../twMerge.cong"

export function LogoSideBar() {

    const { valueSidebar } = ComponentRadioContext()

    return (
        <Link to="/dashboard">
            <div className={cn("flex justify-center items-center px-1 h-20 transition-all duration-700", `${valueSidebar && !valueSidebar && "transition-all duration-700"} ${valueSidebar && "w-14 px-0 justify-center" }`)}>
                <img src="/image/sidebar/Sidebar-logo-imoviva-angola.svg" alt="logo-imoviva" className="min-w-16 min-h-16 max-w-16 max-h-16"/>
                {valueSidebar === false && <h1 className=" text-zinc-600 w-full">Imoviva Angola Imobiliária</h1>}
            </div>
        </Link>
        
    )
}