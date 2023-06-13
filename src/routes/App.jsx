
import { Route, Routes } from 'react-router';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { useState } from 'react';
import { Validation } from '../pages/Validation';
import { PrivateRoutes } from './PrivateRoutes';
import { Carteira } from '../pages/Carteira';


export const App = () => {
  const [loggedUser, setLoggedUser] = useState(
    JSON.parse(localStorage.getItem('user')) || {}
  );
  const [isLogged, setIsLogged] = useState(
    Object.keys(loggedUser).length === 0 ? false : true
  );

  const hadleLogin = (user) => {
    setLoggedUser(user);
    setIsLogged(true);
    localStorage.setItem('user', JSON.stringify(user));
  }

  return (
    <Routes>
        <Route path={"/"} element={<Validation isLogged={isLogged} />}/>
        <Route path={"login"} element={<Login hadleLogin={hadleLogin}/>}/>
        <Route path={"register"} element={<Register/>}/>
        <Route path={"/carteira"} element={ <PrivateRoutes/>}>
          <Route path={"/carteira"} element={<Carteira/>} />
        </Route>
    </Routes>
  )
}
