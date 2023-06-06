import { DivForm,Input, Label } from "./style"


export const InputGlobal = ({Type ,  Name, Id, ...props } ) => {
    return (
        <DivForm >
            <Input type={Type} name={Name} id ={Id} {...props} required/>
            <Label htmlfor={Id}>{Name}</Label>
        </DivForm>
    )
}