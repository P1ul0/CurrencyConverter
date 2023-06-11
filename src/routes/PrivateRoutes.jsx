import { Route, Routes } from "react-router"
import { ProtectedRoutes } from "./ProtectedRoutes"
import { Carteira } from "../pages/Carteira"



export const PrivateRoutes = () => {
    return(
        <Routes>
            <Route element={<ProtectedRoutes/>}>
            <Route path="/carteira" element={<Carteira/>}/>
            </Route>
        </Routes>

    )
}