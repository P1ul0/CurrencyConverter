import styled from "styled-components";


export const DivForm = styled.form`
  position: relative;
  width: 50%;
  height: 50px;
  border-bottom: 2px solid #0d1c4e;
  margin: 30px 0; 
`



export const Input = styled.input`
  padding: 0 6px;
  font-size: 1.05em;
  color: #000;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  outline: none;

`

export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  font-size: 1.1em;
  color: #0d1c4e;
  font-weight: 700;
  pointer-events: none;
  transition: 0.5s;
  ${Input}:focus ~ &  ,${Input}:valid ~& {
    top: -5px;
  }
`
export const ErrorHandling = styled.p`
  font-size: 15px;
  font-weight: bold;
  margin-top: 5px;
  color: red ;
  
`