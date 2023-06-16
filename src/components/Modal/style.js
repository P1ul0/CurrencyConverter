import styled from "styled-components";


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


export const FormInput = styled.form`
    height: 90%;
    width: 100%;
    display: flex;
    flex-flow: row wrap;  
    justify-content: space-evenly;
    align-items: center;
    padding: 20px 40px;
`
export const DivButtonInput = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const OptionInput = styled.option`
  padding: 30px;
  color:black;
`


