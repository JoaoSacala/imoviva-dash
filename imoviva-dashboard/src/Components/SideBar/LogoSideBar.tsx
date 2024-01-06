import { Link } from "react-router-dom"

export function LogoSideBar() {
    return (
        <Link to="/dashboard">
            <div className="flex justify-center items-center px-1 ">
                <img src="/image/sidebar/Sidebar-logo-imoviva-angola.svg" alt="logo-imoviva" width={55}/>
                <h1 className="text-zinc-600 ">Imoviva Angola Imobiliária</h1>
            </div>
        </Link>
        
    )
}