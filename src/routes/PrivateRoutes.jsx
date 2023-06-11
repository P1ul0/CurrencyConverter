import { Route, Routes } from "react-router"
import { ProtectedRoutes } from "./ProtectedRoutes"
import { Carteira } from "../pages/Carteira"



export const PrivateRoutes = () => {
    return(
        <Routes>
            {/*<Route element={<ProtectedRoutes/>}></Route>*/}
            <Route path="/carteira" element={<Carteira/>}/>
        </Routes>

    )
}