
import { PrivateRoutes } from "../routes/PrivateRoutes"
import { HeaderLogin } from "../components/Header"



export const MainPage = ({ children }) => {
    return(
        <>
            <HeaderLogin/>
            <PrivateRoutes/>
        </>
        
        
    )
}