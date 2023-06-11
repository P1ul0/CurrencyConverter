import { Outlet, Navigate } from "react-router"


export const ProtectedRoutes = () => {
    const isLogged = JSON.parse(localStorage.getItem('user')) ? true : false
    return isLogged ? <Outlet/> :<Navigate to="/login" />
}