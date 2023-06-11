
import { PrivateRoutes } from "../../routes/PrivateRoutes"
import { HeaderLogin } from "../Header"



export const MainPage = ({ children }) => {
    return(
        <>
            <HeaderLogin/>
            <PrivateRoutes/>
        </>
        
        
    )
}