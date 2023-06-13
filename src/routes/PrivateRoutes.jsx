
import { Outlet, Navigate } from "react-router"
import { Loading } from "../components/Load"
import { useContext } from "react";
import { validationContext } from "../context";

export const PrivateRoutes = () => {
    const {load, setLoad} = useContext(validationContext) ;

    if(load === null){
        return <Loading/>
    }
   
    return load ? (
    
        <Outlet/>
    ): (
        <Navigate to="/login"/>
    )
}