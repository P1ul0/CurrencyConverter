
import { Route, Routes } from 'react-router';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { useState } from 'react';
import { MainPage } from '../components/MainPage';

export const App = () => {
  const [isLogged, setIsLogged] =  useState({})
  return (
    <Routes>
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/register"} element={<Register/>}/>
        <Route path={"/home/*"} element={<MainPage/>}/>
    </Routes>
  )
}
