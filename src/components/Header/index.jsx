import { ButtonAdd, Header, ImgButtonAdd, LogoHeader } from "./style"
import logo from "../../assets/logo.png"


export const HeaderLogin = () => {

    return(
        <Header>
            <LogoHeader src={logo}/>
            <ButtonAdd><ImgButtonAdd/></ButtonAdd>
        </Header>
    )
}