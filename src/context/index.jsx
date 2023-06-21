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
  const wallet = {
    expenses,
    currencies,
  };
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

  useEffect(() => {
    cotacaoApi.get("/json/all").then(async (res) => {
      const results = res.data;
      const getKeyObject = Object.values(results);
      const filterArray = getKeyObject.filter((e) => e.codein !== "BRLT");
      setCurrencies(filterArray);
    });
  }, [expenses])

  const addExpense = (expense) => {
    let lengthExpense = expenses.length;
    const {
      pantryValue,
      expenseDescription,
      paymentMthod,
      expenseCurrency,
      expenseTag,
    } = expense;


    const filter = wallet.currencies.filter((item) => item.code == expenseCurrency)
    const filterName = filter.map((item) => {
      return item.name
    })
    const filterExchange = filter.map((item) => {
      return Number(item.ask).toFixed(2)
    })
    const formatValue = Number(pantryValue).toFixed(2)
    const finalValue = (filterExchange * formatValue).toFixed(2)


    const newExpense = {
      id: lengthExpense - 1 + 1,
      formatValue,
      expenseDescription,
      filterName,
      paymentMthod,
      expenseTag,
      filterExchange,
      finalValue
    };
  

    wallet.expenses.push({ ...newExpense });
  };
  
  
  const removeExpense = (data) => {
    const newWallet = wallet.expenses.filter((expense) => expense !== data);
    wallet.expenses = newWallet;
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
    removeExpense,
  };

  return (
    <ValidationContext.Provider value={values}>
      {children}
    </ValidationContext.Provider>
  );
};
