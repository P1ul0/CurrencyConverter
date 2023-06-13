
import { Outlet, Navigate, useNavigate } from "react-router"
import { Loading } from "../components/Load"
import { useContext } from "react";
import { ValidationContext } from "../context";


export const PrivateRoutes = () => {
    const { load , isLogged} = useContext(ValidationContext) ;
    
    if(load === false){
        return <Loading/>
    }
    return isLogged ? (
        <Outlet/>    
    ): (
        <Navigate to="/"/>
    )
}