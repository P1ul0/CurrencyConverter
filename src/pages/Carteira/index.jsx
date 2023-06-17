import {
  DivCarteira,
  DivTableCarteira,
  TableCarteira,
  TrTableCarteira,
  ThTableCarteira,
  TdTableCarteira,
  ButtonEdit,
  ImgEdit,
} from "./style";
import { HeaderLogin } from "../../components/Header/index";
import { useContext } from "react";
import { ValidationContext } from "../../context";
import { Modal } from "../../components/Modal";

export const Carteira = () => {
  const { modal } = useContext(ValidationContext);


  return (
    <>
      <DivCarteira>
        <HeaderLogin />
        {modal && (<Modal/>)}
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
            <TrTableCarteira>
                <TdTableCarteira>Carro</TdTableCarteira>
                <TdTableCarteira>BRL</TdTableCarteira>
                <TdTableCarteira>Dinheiro</TdTableCarteira>
                <TdTableCarteira>200,00</TdTableCarteira>
                <TdTableCarteira>Real</TdTableCarteira>
                <TdTableCarteira>Manual</TdTableCarteira>
                <TdTableCarteira>1400,00</TdTableCarteira>
                <TdTableCarteira>Euro</TdTableCarteira>
                <TdTableCarteira><ButtonEdit><ImgEdit/></ButtonEdit></TdTableCarteira>
            </TrTableCarteira>
          </TableCarteira>
        </DivTableCarteira>
      </DivCarteira>
    </>
  );
};
