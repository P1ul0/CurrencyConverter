import { ButtonRgb } from "../../components/button"
import { InputGlobal } from "../../components/input"
import { DivCenter, DivRegister, Title } from "./style"
import { ButtonRedirect } from "../../components/buttonRedirect"

export const Register = () => {
    return(
        <>
        <DivRegister>
            <DivCenter>
                <Title>Registre-se</Title>
                <InputGlobal Type="text" Name="Nome De Usuário" Id="3"/>
                <InputGlobal Type="text" Name="Email" Id="4"/>
                <InputGlobal Type="password" Name="Password" Id="5"/>
                <InputGlobal Type="password" Name="Confirm Password" Id="6"/>
                <ButtonRedirect Text="Ja Possui Cadastro ?"  Rota="/"/>
                <ButtonRgb  Rota="/" Text="Registre-se"/>
            </DivCenter>
        </DivRegister>
        </>
    )
}