
import styled from "styled-components";
import {AiTwotoneEdit} from "react-icons/ai"

export const DivCarteira = styled.div`
    height:100vh;
    background-color: #1c1a12;
`
export const DivTableCarteira = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TableCarteira = styled.table`
    width: 70%;
    height: 55px;
    background-color:#72A18F;
    border-collapse: collapse;
`

export const TrTableCarteira = styled.tr`
    width: 20px;

`
export const ThTableCarteira = styled.th`
    width: 20px;
    border: 1px solid#090c08;
    color: #090c08;
    font-weight: 700;
`

export const TdTableCarteira = styled.td`
    width: 20px;
    border: 1px solid#090c08;
    color: #090c08;
    font-weight: 700;
    padding: 0 10px;
`

export const ButtonEdit = styled.button`
    height: 30px;
    width: 30px;
    cursor: pointer;
    background: transparent;
`

export const ImgEdit = styled(AiTwotoneEdit)`
    height:100%;
    width: 100%;
    object-fit: contain;
`