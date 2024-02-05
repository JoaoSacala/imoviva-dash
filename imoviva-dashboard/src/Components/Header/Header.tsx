import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import Avatar from "../basics/Avatar"
import { useSession } from "../Context/Session/sessionContext"
import { Link } from "react-router-dom"
/* import { ComponentRadioContext } from "../Context/CreateContext" */

export const Header = () => {
   /*  const headerContext = ComponentRadioContext() */
   const { user } = useSession();


   const location = useLocation()

    const [active, setActive] = useState<string>("")
    useEffect(() => setActive(location.pathname), [location.pathname])
    return (
        
        <div className={`flex ${active.includes("/dashboard/properties") ? "justify-between" : "justify-end"} items-center mx-4 h-[56px] `} >
            {active.includes("/dashboard/properties") &&  
            <div className="flex justify-center items-center gap-2 text-lg">
                <Link to="/dashboard/properties/apartment">
                    <span>Apartamentos</span>
                </Link>
                <Link to="/dashboard/properties/house">
                    <span>Casas</span>
                </Link>
                <Link to="/dashboard/properties/commercial">
                    <span>Comercial</span>
                </Link>
                <Link to="/dashboard/properties/ground">
                    <span>Terreno</span>
                </Link>
                <Link to="/dashboard/properties">
                    <span>Listar</span>
                </Link>
            </div>
            }
            <Avatar data={{
                name: user?.name
            }} />
        </div>
    )
}