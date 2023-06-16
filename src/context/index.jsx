import { useEffect, useState } from "react";
import { createContext } from "react";
import { Navigate, useNavigate } from "react-router";
import { FormIn, RegisterIn, SignIn } from "../schemas";

export const ValidationContext = createContext({});

export const ValidationProvider = ({ children }) => {
  const [load, setLoad] = useState(null);
  const [modal, setModal] = useState(false);
  const [activeButton, setActiveButton] = useState(false);
  const [loggedUser, setLoggedUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );
  const [isLogged, setIsLogged] = useState(
    Object.keys(loggedUser).length === 0 ? false : true
  );

  const navigate = useNavigate();

  const formLogin = SignIn();
  const formRegister = RegisterIn();
  const formAdicionar = FormIn;

  
  const hadleLogin = async (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setLoggedUser(user);
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

useEffect(()=> {
    if(
      formAdicionar.watch("pantryValue") !="" &&
      formAdicionar.watch("expenseDescription") !=""&&
      formAdicionar.watch("expenseCurrency")!=""&&
      formAdicionar.watch("paymentMthod")!=""&&
      formAdicionar.watch("expenseTag") !=""
    ){
      setActiveButton(true)
    }else{
      setActiveButton(false)
    }
},
 [
  formAdicionar.watch("pantryValue"),
  formAdicionar.watch("expenseDescription"),
  formAdicionar.watch("expenseCurrency"),
  formAdicionar.watch("paymentMthod"),
  formAdicionar.watch("expenseTag"),
  activeButton
])
  

  const values = {
    modal,
    load,
    setLoad,
    loggedUser,
    isLogged,
    hadleLogin,
    activeModal,
    deactivateModal,
    verifyForm,
    activeButton
  };

  return (
    <ValidationContext.Provider value={values}>
      {children}
    </ValidationContext.Provider>
  );
};
