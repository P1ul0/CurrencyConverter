import { useContext } from "react";
import {
  CloseModalButton,
  CloseModalImg,
  DivConteudo,
  FormInput,
  DivModal,
  DivSuperiorModal,
  OptionInput,
} from "./style";
import { InputGlobal } from "../Input";
import { ValidationContext } from "../../context";
import { FormIn } from "../../schemas";
import { ButtonRgb } from "../Button";

export const Modal = ({ TamanhoH, TamanhoW }) => {
  const { deactivateModal } = useContext(ValidationContext);
  const {verifyForm , activeButton} = useContext(ValidationContext)
  const form = FormIn();

const onSubmit = async () => {
        verifyForm()
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
          <InputGlobal
            label="Moeda da despesa"
            register={form.register}
            error={form.errors.expenseCurrency?.message}
            name="expenseCurrency"
            id="1"
            TamanhoW="300px"
            Bottom="2px solid white"
            Color="white"
            ColorError="#F80606"
            Select={true}
          >
            <OptionInput>Dinheiro</OptionInput>
          </InputGlobal>
          <InputGlobal
            label="Método de Pagamento"
            register={form.register}
            error={form.errors.paymentMthod?.message}
            name="paymentMthod"
            id="2"
            TamanhoW="300px"
            Bottom="2px solid white"
            Color="white"
            ColorError="#F80606"
            Select={true}
          >
            <OptionInput>Dinheiro</OptionInput>
            <OptionInput>Cartão de Crédito</OptionInput>
            <OptionInput>Cartão de Débito</OptionInput>
          </InputGlobal>

          <InputGlobal
            label="Tag da despesa"
            register={form.register}
            error={form.errors.expenseTag?.message}
            name="expenseTag"
            id="2"
            TamanhoW="300px"
            Bottom="2px solid white"
            Color="white"
            ColorError="#F80606"
            Select={true}
          >
            <OptionInput>Alimentação</OptionInput>
            <OptionInput>Lazer</OptionInput>
            <OptionInput>Trabalho</OptionInput>
            <OptionInput>Transporte</OptionInput>
            <OptionInput>Saúde</OptionInput>
          </InputGlobal>
          <ButtonRgb TamanhoW="300px" text="Adicionar" status={activeButton}/>
        </FormInput>
      </DivConteudo>
    </DivModal>
  );
};
