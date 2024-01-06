import { ReactNode } from "react";

interface AppRootProps {
    children: ReactNode
}

export const SideBarComponent =({ children}: AppRootProps) => {
    return (
        <div>
            {children}
        </div>
    ) 
}