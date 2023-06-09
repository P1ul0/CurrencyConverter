import { ButtonActive, ButtonDisable, DivButton } from "./style"

export const ButtonRgb = ({text, status}) => {
    return(
        <DivButton >
            {status === true ? 
            <ButtonActive type={"submit"}> {text}</ButtonActive>
            :
            <ButtonDisable type={"submit"} >{text}</ButtonDisable>
            }
            
        </DivButton>
    )
}