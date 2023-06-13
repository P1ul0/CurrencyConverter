import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router";


export const validationContext = createContext({})


export const validationProvider = ({ children }) => {
    const [load, setLoad] = useState(null)
    const navigate = useNavigate()

    const verifyStorage = () => {
        let storage = JSON.parse(localStorage.getItem("user"))
        if(!storage){
            navigate("/login")
        }else{
            navigate("/carteira")
        }

    }

    const values = {
        load,
        setLoad,
        verifyStorage
    }

    return(
        <validationContext.Provider value={values}>
            {children}
        </validationContext.Provider>
    )
}

