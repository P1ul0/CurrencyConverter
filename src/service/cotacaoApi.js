import axios from "axios";


export const cotacaoUrl = "https://economia.awesomeapi.com.br"


export const cotacaoApi = axios.create({
    baseURL:cotacaoUrl,
    headers: {
        "Content-Type": "application/json"
    }
})