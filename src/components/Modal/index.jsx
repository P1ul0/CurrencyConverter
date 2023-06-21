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
import { cotacaoApi } from "../../service/cotacaoApi";

export const Modal = ({ TamanhoH, TamanhoW }) => {
  const { deactivateModal, addExpense, wallet } = useContext(ValidationContext);
  const [activeButton, setActiveButton] = useState(false);
  const form = FormIn();

  useEffect(() => {
    if (
      form.watch("pantryValue") != "" &&
      form.watch("expenseDescription") != "" &&
      form.watch("expenseCurrency") != "" &&
      form.watch("paymentMthod") != "" &&
      form.watch("expenseTag") != ""
    ) {
      setActiveButton(true);
    } else {
      setActiveButton(false);
    }
  }, [
    form.watch("pantryValue"),
    form.watch("expenseDescription"),
    form.watch("expenseCurrency"),
    form.watch("paymentMthod"),
    form.watch("expenseTag"),
    activeButton,
  ]);

  const onSubmit = (expense) => {
    addExpense(expense)
   
    deactivateModal()
  };

  return (
    <>
      <HeaderLogin />
      <DivModal>
        <DivConteudo>
          <FormInput onSubmit={form.handleSubmit(onSubmit)}>
            <InputGlobal
              label="Descrição da despesa"
              register={form.register}
              error={form.errors.expenseDescription?.message}
              type="text"
              name="expenseDescription"
              TamanhoW="94%"
              Bottom="2px solid white"
              Color="white"
              ColorError="#F80606"
            />
            <InputGlobal
              label="Valor da despesa"
              register={form.register}
              error={form.errors.pantryValue?.message}
              type="number"
              name="pantryValue"
              TamanhoW="45%"
              Bottom="2px solid white"
              Color="white"
              ColorError="#F80606"
            />

            <InputGlobal
              label="Moeda da despesa"
              register={form.register}
              error={form.errors.expenseCurrency?.message}
              name="expenseCurrency"
              type="text"
              TamanhoW="45%"
              Bottom="2px solid white"
              Color="white"
              ColorError="#F80606"
              Select={true}
            >
              {wallet.currencies?.map((moeda) => {
                return <OptionInput>{moeda.code}</OptionInput>;
              })}
            </InputGlobal>
            <InputGlobal
              label="Método de Pagamento"
              register={form.register}
              error={form.errors.paymentMthod?.message}
              name="paymentMthod"
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
              register={form.register}
              error={form.errors.expenseTag?.message}
              name="expenseTag"
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
            <ButtonRgb
              TamanhoW="450px"
              text="Adicionar"
              status={activeButton}
            />
          </FormInput>
          <DivButtonInput>

          </DivButtonInput>
        </DivConteudo>
      </DivModal>
    </>
  );
};
