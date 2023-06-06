import { DivForm,Input, Label } from "./style"


export const InputGlobal = ({Type ,  Name, Id }) => {
    return (
        <DivForm>
            <Input type={Type} name={Name} id ={Id} required/>
            <Label htmlfor={Id}>{Name}</Label>
        </DivForm>
    )
}