import { ButtonRgb } from "../../components/Button"
import { InputGlobal } from "../../components/Input"
import { FormCenter, DivRegister, Title } from "./style"
import { ButtonRedirect } from "../../components/ButtonRedirect"
import { RegisterIn } from "../../schemas"
import { useNavigate } from "react-router"
import { useEffect, useState } from "react"

export const Register = () => {
    const navigate = useNavigate();
    const form = RegisterIn();
    const [activeButton, setActiveButton] = useState(false);
    const username = form.watch("username")
    const email = form.watch("email");
    const password = form.watch("password");
    const confirmPassword = form.watch("confirmPassword");
    const Storage = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        if(username !== "" && username.length >=8 && email.includes("@gmail.com" || "@hotmail.com")  && password.length >= 6 && confirmPassword.length >= 6 && password === confirmPassword){
            setActiveButton(true);
        }else{
            setActiveButton(false);
        }
    },[form.watch("username"),form.watch("email") , form.watch("password"),form.watch("confirmPassword"),activeButton])

    const onSubmit = (data) => {
        localStorage.setItem('user',JSON.stringify(data))
        console.log(Storage);
        navigate("/home/carteira")
    };
    return(
        <>
        <DivRegister>
            <FormCenter onSubmit={form.handleSubmit(onSubmit)}>
                <Title>Registre-se</Title>
                <InputGlobal register={form.register} error={form.errors.username?.message} name="username" type="text" label="Nome De Usuário" id="3"/>
                <InputGlobal register={form.register} error={form.errors.email?.message} name="email" type="text" label="Email" id="4"/>
                <InputGlobal register={form.register} error={form.errors.password?.message} name="password" type="password" label="Password" id="5"/>
                <InputGlobal register={form.register} error={form.errors.confirmPassword?.message} name="confirmPassword" type="password" label="Confirm Password" id="6"/>
                <ButtonRedirect Text="Ja Possui Cadastro ?"  Rota="/login"/>
                <ButtonRgb text="Registre-se" status={activeButton}/>
            </FormCenter>
        </DivRegister>
        </>
    )
}