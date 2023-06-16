import { ButtonAdd, CloseModalButton, CloseModalImg, Header, ImgButtonAdd, LogoHeader } from "./style"
import logo from "../../assets/logo.png"
import { useContext } from "react"
import { ValidationContext } from "../../context"


export const HeaderLogin = () => {
    const {activeModal , deactivateModal , modal} = useContext(ValidationContext)

    return(
        <Header>
            <LogoHeader src={logo}/>
            {modal ===false ?
                <ButtonAdd onClick={activeModal} ><ImgButtonAdd/></ButtonAdd>
                :
                <CloseModalButton onClick={deactivateModal}><CloseModalImg/></CloseModalButton>
            }
            
        </Header>
    )
}