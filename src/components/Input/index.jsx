import { DivForm,ErrorHandling,Input, Label } from "./style"


export const InputGlobal = ({register, error, label, TamanhoH, TamanhoW , Bottom , Color, ColorError ,...props } ) => {

    return (
        <DivForm bottom={Bottom}  tamanhoW ={TamanhoW} tamanhoH ={TamanhoH} >
            <Input color={Color} { ...props } { ...register(props.name) } required/>
            <Label color={Color}  htmlfor={props.id}>{label}</Label>
            {error && <ErrorHandling colorError={ColorError}>{error}</ErrorHandling>}
        </DivForm>
    )
}