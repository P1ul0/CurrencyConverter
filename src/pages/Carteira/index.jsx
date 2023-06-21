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
import { useContext } from "react";
import { ValidationContext } from "../../context";
import { Modal } from "../../components/Modal";

export const Carteira = () => {
  const { modal, wallet } = useContext(ValidationContext);

  return (
    <>
      <DivCarteira>
        <HeaderLogin />
        {modal && <Modal />}
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
                pantryValue,
                expenseDescription,
                expenseCurrency,
                paymentMthod,
                expenseTag,
              } = expense;
              return (
                <TrTableCarteira>
                  <TdTableCarteira>{expenseDescription}</TdTableCarteira>
                  <TdTableCarteira>{expenseTag}</TdTableCarteira>
                  <TdTableCarteira>{paymentMthod}</TdTableCarteira>
                  <TdTableCarteira>{pantryValue}</TdTableCarteira>
                  <TdTableCarteira>{expenseCurrency}</TdTableCarteira>
                  <TdTableCarteira>Teste</TdTableCarteira>
                  <TdTableCarteira>Teste</TdTableCarteira>
                  <TdTableCarteira>BRL</TdTableCarteira>
                  <TdTableCarteira>
                    <DivButtonPerson>
                      <Button>
                        <ImgEdit />
                      </Button>
                      <Button>
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
