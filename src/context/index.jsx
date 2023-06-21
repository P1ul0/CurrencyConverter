import { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router";
import { cotacaoApi } from "../service/cotacaoApi";

export const ValidationContext = createContext({});

export const ValidationProvider = ({ children }) => {
  const navigate = useNavigate();
  const [load, setLoad] = useState(null);
  const [modal, setModal] = useState(false);
  const [loggedUser, setLoggedUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );
  const [isLogged, setIsLogged] = useState(
    Object.keys(loggedUser).length === 0 ? false : true
  );
  const [user, setUser] = useState("");
  const [currencies, setCurrencies] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const wallet ={
    expenses,
    currencies 
  }
  

  useEffect(() => {
    cotacaoApi.get("/all").then(async (res) => {
      const results = res.data;
      const getKeyObject = Object.keys(results);
      const filterArray = getKeyObject.filter((e) => e !== "USDT");
      setCurrencies(filterArray)
  })}, []);

  const hadleLogin = async (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setLoggedUser(user);
    setUser(user.email);
    setIsLogged(true);
    setLoad(false);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoad(true);
    navigate("/carteira");
  };

  const addExpense = (data) => {
    wallet.expenses.push({...data});
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
    user,
    wallet,
    addExpense,
  };

  return (
    <ValidationContext.Provider value={values}>
      {children}
    </ValidationContext.Provider>
  );
};
