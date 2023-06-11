import * as yup from "yup";
import { yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";


const SignInSchema = yup.object().shape({
    email: yup
    .string("E-mail invalido      Ex:example@gmail.com")
    .email("E-mail invalido      Ex:example@gmail.com")
    .test('is-gmail'||  'is-hotmail','E-mail invalido      Ex:example@gmail/hotmail.com',value => value.endsWith('@gmail.com') || value.endsWith('@hotmail.com'))
    .required(' E-mail é obrigatório'),
    password: yup.string().min(6, 'A senha deve conter 6 caracteres').required('Senha é obrigatória'),
});

const RegisterSchema = yup.object().shape({
    username: yup.string().min(8, 'o nome de usuário deve conter 8 caracteres'),
    email: yup
    .string()
    .email()
    .test('is-gmail'||  'is-hotmail','E-mail invalido      Ex:example@gmail/hotmail.com',value => value.endsWith('@gmail.com') || value.endsWith('@hotmail.com'))
    .required(' E-mail é obrigatório'),
    password: yup.string().min(6, 'A senha deve conter 6 caracteres').required('Senha é obrigatória'),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'As senhas não correspondem')
    .required('Confirme sua senha'),
})

export const signIn = () => {
    const {register,reset,watch,handleSubmit, formState: { errors,},}  = useForm({
        resolver: yupResolver(SignInSchema),
        mode:'all',
        defaultValues:{
            email:'',
            password:''
        }
    });

    return {register,watch,handleSubmit,errors};
}


export const RegisterIn = () => {
    const {register,reset,watch,handleSubmit, formState: { errors,},}  = useForm({
        resolver: yupResolver(RegisterSchema),
        mode:'all',
        defaultValues:{
            username:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    });

    return {register,watch,handleSubmit,errors};

}
