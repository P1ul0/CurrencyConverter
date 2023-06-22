import {
  DivCarteira,
  DivTableCarteira,
  TableCarteira,
  TrTableCarteira,
  ThTableCarteira,
  TdTableCarteira,
  Button,
  ImgEdit,
  ImgDelete,
  DivButtonPerson,
} from "./style";
import { HeaderLogin } from "../../components/Header/index";
import { useContext, useState } from "react";
import { ValidationContext } from "../../context";
import { Modal } from "../../components/Modal";

export const Carteira = () => {
  const { modal, removeExpense, wallet, activeModal, setId } =
    useContext(ValidationContext);

  const [text, setText] = useState("Adicionar");

  const handleEdit = (expense) => {
    setText("Editar");
    activeModal();
  };

  return (
    <>
      <DivCarteira>
        <HeaderLogin />
        {modal && <Modal ChangeText={setText} Text={text} />}
        <DivTableCarteira>
          <TableCarteira>
            <TrTableCarteira>
              <ThTableCarteira>Descrição</ThTableCarteira>
              <ThTableCarteira>Tag</ThTableCarteira>
              <ThTableCarteira>Método de pagamento</ThTableCarteira>
              <ThTableCarteira>Valor</ThTableCarteira>
              <ThTableCarteira>Moeda</ThTableCarteira>
              <ThTableCarteira>Câmbio utilizado</ThTableCarteira>
              <ThTableCarteira>Valor convertido</ThTableCarteira>
              <ThTableCarteira>Moeda de conversão</ThTableCarteira>
              <ThTableCarteira>Editar/Excluir</ThTableCarteira>
            </TrTableCarteira>
            {wallet?.expenses.map((expense) => {
              const {
                id,
                formatValue,
                expenseDescription,
                filterName,
                paymentMthod,
                expenseTag,
                filterExchange,
                finalValue,
              } = expense;

              setId(id);
              return (
                <TrTableCarteira id={id}>
                  <TdTableCarteira>{expenseDescription}</TdTableCarteira>
                  <TdTableCarteira>{expenseTag}</TdTableCarteira>
                  <TdTableCarteira>{paymentMthod}</TdTableCarteira>
                  <TdTableCarteira>{formatValue}</TdTableCarteira>
                  <TdTableCarteira>{filterName}</TdTableCarteira>
                  <TdTableCarteira>{filterExchange}</TdTableCarteira>
                  <TdTableCarteira>{finalValue}</TdTableCarteira>
                  <TdTableCarteira>Real</TdTableCarteira>
                  <TdTableCarteira>
                    <DivButtonPerson>
                      <Button onClick={() => handleEdit(expense)}>
                        {modal && (
                          <Modal
                            ChangeText={setText}
                            Text={text}
                            Expense={expense}
                          />
                        )}
                        <ImgEdit />
                      </Button>
                      <Button onClick={() => removeExpense(expense)}>
                        <ImgDelete />
                      </Button>
                    </DivButtonPerson>
                  </TdTableCarteira>
                </TrTableCarteira>
              );
            })}
          </TableCarteira>
        </DivTableCarteira>
      </DivCarteira>
    </>
  );
};
