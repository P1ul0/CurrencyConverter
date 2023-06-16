import {
  DivForm,
  ErrorHandling,
  Input,
  Label,
  SelectInput,
  LabelSelect,
} from "./style";

export const InputGlobal = ({
  register,
  error,
  label,
  TamanhoH,
  TamanhoW,
  Bottom,
  Margin,
  Color,
  ColorError,
  Select,
  ...props
}) => {
 
    if(Select)  return(
        <DivForm bottom={Bottom} tamanhoW ={TamanhoW}>
        <SelectInput  {...props} {...register(props.name)} required>
        </SelectInput>
        <LabelSelect color={Color} htmlfor={props.id}>
          {label}
        </LabelSelect>
        {error && (
           <ErrorHandling colorError={ColorError}>{error}</ErrorHandling>
        )}
        </DivForm> 
     )  
      return(
      <DivForm bottom={Bottom} tamanhoW={TamanhoW} tamanhoH={TamanhoH}>
        <Input color={Color} {...props} {...register(props.name)} required />
        <Label color={Color} htmlfor={props.id}>
          {label}
        </Label>
        {error && (
          <ErrorHandling colorError={ColorError}>{error}</ErrorHandling>
        )}
      </DivForm>
    );
  
};
