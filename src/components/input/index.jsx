import { DivForm,ErrorHandling,Input, Label } from "./style"


export const InputGlobal = ({register, error, label , ...props } ) => {

    return (
        <DivForm >
            <Input { ...props } { ...register(props.name) } required/>
            <Label htmlfor={props.id}>{label}</Label>
            {error && <ErrorHandling>{error}</ErrorHandling>}
        </DivForm>
    )
}