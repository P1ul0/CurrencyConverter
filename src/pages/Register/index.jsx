import { ButtonRgb } from "../../components/button"
import { InputGlobal } from "../../components/input"
import { FormCenter, DivRegister, Title } from "./style"
import { ButtonRedirect } from "../../components/buttonRedirect"
import { RegisterIn } from "../../schemas"
import { useNavigate } from "react-router"

export const Register = () => {
    const navigate = useNavigate();
    const form = RegisterIn();
    const onSubmit = (data) => {
        console.log(data);
        navigate("/")
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
                <ButtonRedirect Text="Ja Possui Cadastro ?"  Rota="/"/>
                <ButtonRgb   text="Registre-se"/>
            </FormCenter>
        </DivRegister>
        </>
    )
}