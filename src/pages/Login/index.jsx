import { ButtonRgb } from "../../components/button"
import { InputGlobal } from "../../components/input"
import { DivCenter, DivLogin } from "./style"


export const Login = () => {
    return(
        <>
        <DivLogin>
            <DivCenter>
            <InputGlobal Type="text" Name="Email" Id= "1" />
            <InputGlobal Type="password" Name="Password" Id= "2" />
            <ButtonRgb text="Login"/>
            </DivCenter>
        </DivLogin>
        </>
    )
}