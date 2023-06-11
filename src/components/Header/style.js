import styled from "styled-components";
import {MdOutlineAddTask} from "react-icons/md"

export const Header = styled.header`
    width: 100%;
    height: 70px;
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: transparent;
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
    background: black;
`

export const ImgButtonAdd = styled(MdOutlineAddTask)`
    height: 40px;
    width: 40px;
    object-fit: contain;
    color: green;
`