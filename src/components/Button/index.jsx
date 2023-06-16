import { ButtonActive, ButtonDisable, DivButton } from "./style"

export const ButtonRgb = ({text, status, TamanhoW}) => {
    return(
        <DivButton >
            {status === true ? 
            <ButtonActive tamanhoW={TamanhoW}  type={"submit"}> {text}</ButtonActive>
            :
            <ButtonDisable tamanhoW={TamanhoW} type={"submit"} >{text}</ButtonDisable>
            }
            
        </DivButton>
    )
}