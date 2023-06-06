import { Button, DivButton } from "./style"
import { useNavigate } from "react-router"
export const ButtonRgb = ({Text, Rota}) => {
    const navigate = useNavigate();

    const hadleHome = () => {
        navigate(Rota)
    }

    return(
        <DivButton>
            <Button onClick={hadleHome}>{Text}</Button>
        </DivButton>
    )
}