import { useState } from "react";
import { createContext } from "react";
import { Navigate, useNavigate } from "react-router";


export const ValidationContext = createContext({})


export const ValidationProvider = ({ children }) => {
    const [load, setLoad] = useState(null)
    const navigate = useNavigate()
    const [loggedUser, setLoggedUser] = useState(
        JSON.parse(localStorage.getItem('user')) || {}
      );
    const [isLogged, setIsLogged] = useState(
        Object.keys(loggedUser).length === 0 ? false : true
    );

  const hadleLogin = async(user) => {
    localStorage.setItem("user", JSON.stringify(user))
    setLoggedUser(user);
    setIsLogged(true);
    setLoad(false);
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setLoad(true);
    navigate("/carteira")

  }

    const values = {
        load,
        setLoad,
        loggedUser,
        isLogged,
        hadleLogin
    }

    return(
        <ValidationContext.Provider value={values}>
            {children}
        </ValidationContext.Provider>
    )
}

