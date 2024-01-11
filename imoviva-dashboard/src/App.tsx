import { Building2, LogOut, PieChart, Users2 } from "lucide-react"
import { SideBar } from "./Components/SideBar"
import { SideBarComponent } from "./Components/SideBar/SideBarComponent"
import { Outlet } from "react-router-dom"
import { Header } from "./Components/Header/Header"
import SessionProvider from "./Components/Context/Session/sessionProvider"
import { destroyCookie } from "nookies"


function App() {

  function Logout() {
    destroyCookie(undefined, "imoviva.token")
    location.reload()
  }

  return (
    <SessionProvider>
    <div className="w-screen h-screen overflow-hidden flex">
      <SideBar.Root>
        <SideBar.Logo />
        <SideBarComponent>
          <SideBar.Items text="Dashboard" link="/dashboard" icon={PieChart} />
          <SideBar.Items text="Imoveis" link="/dashboard/properties" icon={Building2} />
          <SideBar.Items text="Funcionários" link="/dashboard/employee" icon={Users2} />
          <button onClick={Logout}>
            <LogOut />
          </button>
        </SideBarComponent>
      </SideBar.Root>


      <div className="flex flex-col h-screen w-full ">
        <Header /> 
        <div className="flex-1 bg-[#E4E9F7] overflow-y-scroll">
          <div className="p-8">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
    </SessionProvider>
  )
}

export default App
