import {useState } from "react";
import { createContext } from "react";
import {  useNavigate } from "react-router";
import { RegisterIn, SignIn } from "../schemas";

export const ValidationContext = createContext({});

export const ValidationProvider = ({ children }) => {
  const [load, setLoad] = useState(null);
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState("")
  
  const [loggedUser, setLoggedUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );
  const [isLogged, setIsLogged] = useState(
    Object.keys(loggedUser).length === 0 ? false : true
  );

  const navigate = useNavigate();

  
  const hadleLogin = async (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setLoggedUser(user);
    setUser(user.email)
    setIsLogged(true);
    setLoad(false);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoad(true);
    navigate("/carteira");
  };

  const activeModal = () => {
    setModal(true);
  };
  const deactivateModal = () => {
    setModal(false);
  };

  const values = {
    modal,
    load,
    setLoad,
    loggedUser,
    isLogged,
    hadleLogin,
    activeModal,
    deactivateModal,
    user
  };

  return (
    <ValidationContext.Provider value={values}>
      {children}
    </ValidationContext.Provider>
  );
};
