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
          const response = await Axios.post("/validate");
          const { data: user } = response.data;
          setUser(user);
        } catch (error) {
          console.error("Validation error:", error);
        }
      } else {
        navigate("/login", { replace: true });
      }
    };
    handleAuthenticated();
  }, [navigate]);

  const handleLogut = ()=> {
    //apagar os cookies "webschool.token"
    destroyCookie(undefined, "imoviva.token");
    // e fazer reload da pagina 
    navigate("/login");
  }

  return user && (
    <SessionContext.Provider value={{ user, setUser, handleLogut }}>
        {children}
    </SessionContext.Provider>
  )
}
