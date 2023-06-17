import { ButtonActive, ButtonDisable, DivButton } from "./style"

export const ButtonRgb = ({text, status, TamanhoW, Color , TextColor}) => {
    return(
        <DivButton >
            {status === true ? 
            <ButtonActive color={Color} textColor ={ TextColor} tamanhoW={TamanhoW}  type={"submit"}> {text}</ButtonActive>
            :
            <ButtonDisable tamanhoW={TamanhoW} type={"submit"} >{text}</ButtonDisable>
            }
            
        </DivButton>
    )
}