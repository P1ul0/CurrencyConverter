import { ButtonActive, ButtonDisable, DivButton } from "./style"

export const ButtonRgb = ({text, status, margin}) => {
    return(
        <DivButton >
            {status === true ? 
            <ButtonActive  type={"submit"}> {text}</ButtonActive>
            :
            <ButtonDisable type={"submit"} >{text}</ButtonDisable>
            }
            
        </DivButton>
    )
}