import {
  ButtonAdd,
  CloseModalButton,
  CloseModalImg,
  DivDados,
  Paragrafo,
  Header,
  ImgButtonAdd,
  LogoHeader,
  DivSuperiorDireito,

} from "./style";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { ValidationContext } from "../../context";

export const HeaderLogin = () => {
  const { activeModal, deactivateModal, modal, loggedUser} =
    useContext(ValidationContext);

  return (
    <Header>
      <LogoHeader src={logo} />
      <DivSuperiorDireito>
        <DivDados>
          <Paragrafo tamanho={"20px"}>{loggedUser.email}</Paragrafo>
          <Paragrafo tamanho= {"15px"}>BRL: 0,00</Paragrafo>
        </DivDados>

        {modal === false ? (
          <ButtonAdd onClick={activeModal}>
            <ImgButtonAdd />
          </ButtonAdd>
        ) : (
          <CloseModalButton onClick={deactivateModal}>
            <CloseModalImg />
          </CloseModalButton>
        )}
      </DivSuperiorDireito>
    </Header>
  );
};
