import axios from "axios";
import { parseCookies } from "nookies";

const { "imoviva.token": token } = parseCookies();

export const Axios = axios.create({baseURL: "http://localhost:8000/api"})

Axios.interceptors.request.use(config => {
    console.log(config);
    
    return Promise.resolve(config);
});

if(token) {
    Axios.defaults.headers["Authorization"] = `Bearer ${token}`
}