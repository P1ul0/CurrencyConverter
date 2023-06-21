import * as yup from "yup";
import { yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";


const SignInSchema = yup.object().shape({
    email: yup
    .string("E-mail invalido")
    .email("E-mail invalido")
    .required(' E-mail é obrigatório'),
    password: yup.string().min(6, 'A senha deve conter 6 caracteres').required('Senha é obrigatória'),
});

const RegisterSchema = yup.object().shape({
    username: yup.string().min(8, 'o nome de usuário deve conter 8 caracteres'),
    email: yup
    .string()
    .email()
    .required(' E-mail é obrigatório'),
    password: yup.string().min(6, 'A senha deve conter 6 caracteres').required('Senha é obrigatória'),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'As senhas não correspondem')
    .required('Confirme sua senha'),
})

const FormSchema = yup.object().shape({
    pantryValue: yup.string().required('O valor da despesa é obrigátorio'),
    expenseDescription: yup.string().required('A descrição da despesa é obrigátoria'),
    expenseCurrency: yup.string().required('A moeda da despesa é obrigátoria'),
    paymentMthod: yup.string().required('O metodo de pagamento é obrigátorio'),
    expenseTag: yup.string().required('A tag da despessa é obrigátoria'),

})
export const FormIn = () => {
    const {register,reset,watch,handleSubmit, formState: { errors,},}  = useForm({
        resolver: yupResolver(FormSchema),
        mode:'all',
        defaultValues:{
            pantryValue:'',
            expenseDescription:'',
            expenseCurrency:'',
            paymentMthod:'',
            expenseTag:''
        }
    });

    return {register,watch,handleSubmit,errors};

}

export const SignIn = () => {
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



