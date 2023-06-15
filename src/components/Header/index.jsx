import { ButtonAdd, Header, ImgButtonAdd, LogoHeader } from "./style"
import logo from "../../assets/logo.png"
import { useContext } from "react"
import { ValidationContext } from "../../context"


export const HeaderLogin = () => {
    const {activeModal} = useContext(ValidationContext)

    return(
        <Header>
            <LogoHeader src={logo}/>
            <ButtonAdd onClick={activeModal} ><ImgButtonAdd/></ButtonAdd>
        </Header>
    )
}