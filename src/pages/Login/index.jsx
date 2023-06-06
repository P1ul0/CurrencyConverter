import { useNavigate } from "react-router"
import { ButtonRgb } from "../../components/button"
import { InputGlobal } from "../../components/input"
import {  DivCenter, DivLogin, Title } from "./style"
import { ButtonRedirect } from "../../components/buttonRedirect"


export const Login = () => {
    
    return(
        <>
        <DivLogin>
            <DivCenter>
            <Title>Login</Title>
            <InputGlobal Type="text" Name="Email" Id= "1" />
            <InputGlobal Type="password" Name="Password" Id= "2" />
            <ButtonRedirect Text="Registre-se" Rota="/register"/>
            <ButtonRgb Text="Login" Rota="/home"/>
            </DivCenter>
        </DivLogin>
        </>
    )
}