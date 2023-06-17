import { useContext, useEffect, useState } from "react";
import {
  DivConteudo,
  FormInput,
  DivModal,
  OptionInput,
  DivButtonInput,
} from "./style";

import { InputGlobal } from "../Input";
import { HeaderLogin } from "../Header/index";
import { ValidationContext } from "../../context";
import { FormIn } from "../../schemas";
import { ButtonRgb } from "../Button";

export const Modal = ({ TamanhoH, TamanhoW }) => {
  const { deactivateModal } = useContext(ValidationContext);
  const [activeButton, setActiveButton] = useState(false);
  const formAdicionar = FormIn();

  useEffect(() => {
    if (
      formAdicionar.watch("pantryValue") != "" &&
      formAdicionar.watch("expenseDescription") != "" &&
      formAdicionar.watch("expenseCurrency") != "" &&
      formAdicionar.watch("paymentMthod") != "" &&
      formAdicionar.watch("expenseTag") != ""
    ) {
      setActiveButton(true);
    } else {
      setActiveButton(false);
    }
  }, [
    formAdicionar.watch("pantryValue"),
    formAdicionar.watch("expenseDescription"),
    formAdicionar.watch("expenseCurrency"),
    formAdicionar.watch("paymentMthod"),
    formAdicionar.watch("expenseTag"),
    activeButton,
  ]);

  const onSubmit = async () => {
    deactivateModal();
  };
  return (
    <>
      <HeaderLogin />
      <DivModal>
        <DivConteudo>
          <FormInput onSubmit={formAdicionar.handleSubmit(onSubmit)}>
          <InputGlobal
              label="Descrição da despesa"
              register={formAdicionar.register}
              error={formAdicionar.errors.expenseDescription?.message}
              type="text"
              name="expenseDescription"
              id="1"
              TamanhoW="94%"
              Bottom="2px solid white"
              Color="white"
              ColorError="#F80606"
            />
            <InputGlobal
              label="Valor da despesa"
              register={formAdicionar.register}
              error={formAdicionar.errors.pantryValue?.message}
              type="text"
              name="pantryValue"
              id="1"
              TamanhoW="45%"
              Bottom="2px solid white"
              Color="white"
              ColorError="#F80606"
            />

            <InputGlobal
              label="Moeda da despesa"
              register={formAdicionar.register}
              error={formAdicionar.errors.expenseCurrency?.message}
              name="expenseCurrency"
              id="1"
              TamanhoW="45%"
              Bottom="2px solid white"
              Color="white"
              ColorError="#F80606"
              Select={true}
            >
              <OptionInput>Dinheiro</OptionInput>
            </InputGlobal>
            <InputGlobal
              label="Método de Pagamento"
              register={formAdicionar.register}
              error={formAdicionar.errors.paymentMthod?.message}
              name="paymentMthod"
              id="2"
              TamanhoW="45%"
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
              register={formAdicionar.register}
              error={formAdicionar.errors.expenseTag?.message}
              name="expenseTag"
              id="2"
              TamanhoW="45%"
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
          </FormInput>
          <DivButtonInput>
            <ButtonRgb
              TamanhoW="450px"
              text="Adicionar"
              status={activeButton}
            />
          </DivButtonInput>
        </DivConteudo>
      </DivModal>
    </>
  );
};
