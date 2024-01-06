import axios from "axios";

export const Axios = axios.create({baseURL: "http://localhost:3333/"})

Axios.interceptors.request.use(config => {
    console.log(config);
    
    return Promise.resolve(config);
});