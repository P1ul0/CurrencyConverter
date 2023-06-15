import { useContext } from "react";
import {
  CloseModalButton,
  CloseModalImg,
  DivConteudo,
  FormInput,
  DivModal,
  DivSuperiorModal,
  SelectInput,
  OptionInput,
} from "./style";
import { InputGlobal } from "../Input";
import { ButtonRgb } from "../Button";
import { ValidationContext } from "../../context";
import { FormIn } from "../../schemas";

export const Modal = ({ TamanhoH, TamanhoW }) => {
  const { deactivateModal } = useContext(ValidationContext);
  const form = FormIn();

  const onSubmit = async () => {
    alert("funcionou");
  };
  return (
    <DivModal>
      <DivConteudo>
        <DivSuperiorModal>
          <CloseModalButton onClick={deactivateModal}>
            <CloseModalImg />
          </CloseModalButton>
        </DivSuperiorModal>
        <FormInput onSubmit={form.handleSubmit(onSubmit)}>
          <InputGlobal
            label="Valor da despesa"
            register={form.register}
            error={form.errors.pantryValue?.message}
            type="text"
            name="pantryValue"
            id="1"
            TamanhoW="300px"
            Bottom="2px solid white"
            Color="white"
            ColorError="#F80606"
          />
          <InputGlobal
            label="Descrição da despesa"
            register={form.register}
            error={form.errors.expenseDescription?.message}
            type="text"
            name="expenseDescription"
            id="1"
            TamanhoW="300px"
            Bottom="2px solid white"
            Color="white"
            ColorError="#F80606"
          />
          <SelectInput>
            <OptionInput>Teste</OptionInput>
          </SelectInput>
          <SelectInput>
            <OptionInput>Teste</OptionInput>
          </SelectInput>
          <SelectInput>
            <OptionInput>Teste</OptionInput>
          </SelectInput>

        </FormInput>
      </DivConteudo>
    </DivModal>
  );
};
