import { DivInput, Label } from "./style"


export const Input = ({Type , PlaceHolder, Name, Id }) => {
    return (
        <DivInput>
            <Input type={Type} placeholder={PlaceHolder} name={Name} id ={Id}/>
            <Label for={Name}>{Name}</Label>
        </DivInput>
    )
}