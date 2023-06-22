import { useContext, useEffect, useState } from "react";
import {
  DivConteudo,
  FormInput,
  DivModal,
  OptionInput,
  DivButtonInput,
} from "./style";

import { InputGlobal } from "../Input";
import { ValidationContext } from "../../context";
import { FormIn } from "../../schemas";
import { ButtonRgb } from "../Button";

export const Modal = ({ Text, ChangeText, Expense }) => {
  const {
    deactivateModal,
    addExpense,
    wallet,
    editExpense,
    id,
    convertedNameToCode,
  } = useContext(ValidationContext);
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

  useEffect(() => {
    if (Expense) {
      const code = convertedNameToCode(Expense.filterName);
      form.setValue("expenseDescription", Expense.expenseDescription);
      form.setValue("pantryValue", Expense.formatValue);
      form.setValue("expenseCurrency", code);
      form.setValue("paymentMthod", Expense.paymentMthod);
      form.setValue("expenseTag", Expense.expenseTag);
      form.setValue("filterExchange", Expense.filterExchange);
    }
  }, [Expense]);

  useEffect(() => {
    if (Text == "Adicionar") {
      form.setValue("expenseDescription", "");
      form.setValue("pantryValue", null);
      form.setValue("expenseCurrency", "");
      form.setValue("paymentMthod", "");
      form.setValue("expenseTag", "");
      form.setValue("filterExchange", "");
    }
  }, [Text]);

  const onSubmit = (expense) => {
    if (Text == "Editar") {
      editExpense(expense, id);
      ChangeText("Adicionar");
    } else {
      addExpense(expense);
    }
    
    deactivateModal();
  };

  return (
    <>
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
            {Text === "Editar" ? (
              <ButtonRgb TamanhoW="450px" text={Text} status={activeButton} />
            ) : (
              <ButtonRgb TamanhoW="450px" text={Text} status={activeButton} />
            )}
          </FormInput>
          <DivButtonInput></DivButtonInput>
        </DivConteudo>
      </DivModal>
    </>
  );
};
