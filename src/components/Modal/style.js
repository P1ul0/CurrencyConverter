import styled from "styled-components";
import { TfiClose } from "react-icons/tfi";

export const DivModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 49;
  background: rgb(185, 215, 0);
  background: linear-gradient(
    340deg,
    rgba(185, 215, 0, 1) 15%,
    rgba(41, 45, 3, 1) 62%
  );
`;

export const DivConteudo = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
  width: 70vw;
  height: 70vh;
  z-index: 50;
`;
export const DivSuperiorModal = styled.div`
    height: 50px;
    display: flex;
    flex-direction: row-reverse;
`

export const CloseModalButton = styled.button`
    height: 50px;
    width: 50px;
    border: none;
    color: white;
    cursor: pointer;
    background-color: transparent;
`;

export const CloseModalImg = styled(TfiClose)`
  height: 70%;
  width: 70%;
  object-fit: contain;
`;

export const FormInput = styled.form`
    height: 90%;
    width: 100%;
    margin-top: 10px;
    display: flex;
    flex-flow: row wrap;  
    justify-content: space-between;
    align-items: center;
    padding: 0 60px;
`

export const OptionInput = styled.option`
  padding: 30px;
  color:black;
`


