import React from "react";


export type UserDataType = {
    "id": number,
    "nome": string,
    "email": string,
}

export type SessionContextType = {
    user: UserDataType | null
    setUser: React.Dispatch<React.SetStateAction<UserDataType | null>>
    token?: string | null,
}