import styled from "styled-components";


export const DivForm = styled.form`
  position: relative;
  width: ${({tamanhoW}) => tamanhoW ? tamanhoW : "50%" } ;
  height: ${({tamanhoH}) => tamanhoH ? tamanhoH : "50px"};
  border-bottom:${({bottom})=> bottom ? bottom : "2px solid #0d1c4e"} ;
  margin: 30px 0; 
`



export const Input = styled.input`
  padding: 0 6px;
  font-size: 1.05em;
  color: ${({color}) =>color ? color: "#000" } ;
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
  color: ${({color}) =>color ? color: "#0d1c4e" } ;
  font-weight: 700;
  pointer-events: none;
  transition: 0.5s;
  ${Input}:focus ~ &  ,${Input}:valid ~& {
    top: -5px;
  }
`


export const SelectInput = styled.select`
  height: 50px;
  width: 100%;
  color: white;
  background-color: transparent;
  outline: none;
  margin-bottom: ${({margin}) => margin ? margin : "none"};
`


export const LabelSelect = styled.label`
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  font-size: 1.1em;
  color: ${({color}) =>color ? color: "#0d1c4e" } ;
  font-weight: 700;
  pointer-events: none;
  transition: 0.5s;
  ${SelectInput}:focus ~ &  ,${SelectInput}:valid ~& {
    top: -5px;
  }
`

export const ErrorHandling = styled.p`
  font-size: 15px;
  font-weight: bold;
  margin-top: 8px;
  color: ${({colorError}) => colorError ? colorError : "#581908"} ;

`