
import { Outlet, Navigate } from "react-router"
import { Loading } from "../components/Load"
import { useContext } from "react";
import { ValidationContext } from "../context";

export const PrivateRoutes = () => {
    const {load} = useContext(ValidationContext) ;

    if(load === null){
        return <Loading/>
    }
   
    return load ? (
        <Outlet/>
    ): (
        <Navigate to="/login"/>
    )
}