import { Button, DivButton } from "./style"



export const ButtonRgb = ({text, ...props}) => {
    return(
        <DivButton>
            <Button {...props}>{text}</Button>
        </DivButton>
    )
}