import React, { useEffect, useState } from "react";
import { SessionContext } from "./sessionContext";
import { UserDataType } from "./types";
import { Axios } from "../../../axios.config";
import { parseCookies, destroyCookie } from "nookies";
import { useNavigate } from "react-router";

export default function SessionProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserDataType | null>(null);

  useEffect(() => {
    const handleAuthenticated = async () => {
      const { "imoviva.token": token } = parseCookies();

      if (token) {
        Axios.defaults.headers["Authorization"] = `Bearer ${token}`;
        try {
          const { data: user } = await Axios.post("/validation");
          setUser(user);
          console.log(user);
          
        } catch (error) {
          console.error("Validation error:", error);
        }
      } else {
        navigate("/", { replace: true });
      }
    };
    handleAuthenticated();
  }, [navigate]);

  const handleLogut = async ()=> {
    const { "imoviva.token": token } = parseCookies();

    Axios.defaults.headers["Authorization"] = `Bearer ${token}`;
    await Axios.post("/logout");
    
    destroyCookie(undefined, "imoviva.token");
    
  //navigate("/");
  }

  return user && (
    <SessionContext.Provider value={{ user, setUser, handleLogut }}>
        {children}
    </SessionContext.Provider>
  )
}
