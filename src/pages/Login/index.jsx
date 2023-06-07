import { ButtonRgb } from "../../components/button"
import { InputGlobal } from "../../components/input"
import {  FormCenter, DivLogin, Title } from "./style"
import { ButtonRedirect } from "../../components/buttonRedirect"
import { signIn } from "../../schemas"
import { useNavigate } from "react-router"


export const Login = () => {
    const form = signIn()
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        navigate("/carteira")
    };
    return(
        <>
        <DivLogin>
            <FormCenter onSubmit={form.handleSubmit(onSubmit)}>
                <Title>Login</Title>
                <InputGlobal label = "Email" register = {form.register}  error ={form.errors.email?.message} type="text" name="email" id= "1" />
                <InputGlobal label = "Password" register = {form.register} error ={form.errors.password?.message} type="password" name="password" id= "2" />
                <ButtonRedirect Text="Registre-se" Rota="/register"/>
                <ButtonRgb text="Login"/>
            </FormCenter>
        </DivLogin>
        </>
    )
}