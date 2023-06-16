import styled from "styled-components";

export const DivLogin = styled.div`
  height: 100vh;
  background: rgb(185, 215, 0);
  background: linear-gradient(
    340deg,
    rgba(185, 215, 0, 1) 15%,
    rgba(41, 45, 3, 1) 62%
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormCenter = styled.form`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  width: 500px;
  background-color: rgb(255, 255, 222, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 15px;
`;
export const Title = styled.p`
  font-size: 30px;
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
  color: #0d1c4e;
  margin-top: 20px;
`;
