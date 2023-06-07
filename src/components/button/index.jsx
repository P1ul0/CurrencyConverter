import { Button, DivButton } from "./style"

export const ButtonRgb = ({text}) => {
    return(
        <DivButton >
            <Button type={"submit"} >{text}</Button>
        </DivButton>
    )
}