
import { Route, Routes } from 'react-router';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { useContext, useState } from 'react';
import { Validation } from '../pages/Validation';
import { PrivateRoutes } from './PrivateRoutes';
import { Carteira } from '../pages/Carteira';
import { ValidationContext } from '../context';


export const App = () => {
    const { isLogged , hadleLogin} = useContext(ValidationContext)


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
