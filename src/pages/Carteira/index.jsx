
import { DivCarteira } from "./style"
import { HeaderLogin } from "../../components/Header/index"
import { useContext } from "react"
import { ValidationContext } from "../../context"
import { Modal } from "../../components/Modal"

export const Carteira = () => {
    const {modal} = useContext(ValidationContext);

    if(modal === true) return <Modal/>

    return(
        <DivCarteira>
            <HeaderLogin/>
        </DivCarteira>
    )
}
