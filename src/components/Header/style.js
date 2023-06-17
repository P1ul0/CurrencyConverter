import styled from "styled-components";
import {SiAddthis} from "react-icons/si"
import { IoMdCloseCircle } from "react-icons/io";
export const Header = styled.header`
    width: 100%;
    height: 70px;
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    z-index: 50;
`

export const LogoHeader = styled.img`
    height: 150%;
    object-fit: contain;
    margin-left: 20px;
`

export const ButtonAdd = styled.button`
    width: 50px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    margin-right: 10px;
    background: transparent;
`

export const ImgButtonAdd = styled(SiAddthis)`
    height: 40px;
    width: 40px;
    object-fit: contain;
    color: greenyellow;
`


export const CloseModalButton = styled.button`
    width: 50px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    margin-right: 10px;
    background: transparent;
`;

export const CloseModalImg = styled(IoMdCloseCircle)`
  height: 50px;
  width: 50px;
  object-fit: contain;
  color: red;
`;
