import styled from "styled-components";

export const TableContainer = styled.section`
    margin-top: 50px;
    margin-bottom: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
`
export const Table = styled.table`
    width: 80%;
    border: none;
    border-collapse: collapse;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`
export const TableRow = styled.tr`
    text-align: center;
    height: 100px;
`
export const TableColumnH = styled.td`
    font-size: 1.1rem;
    font-weight: 600;
`

export const TableColumn = styled.td`
    font-size: 1rem;
    font-weight: 500;
`

export const Counter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const CounterButton = styled.button`
    font-size: 1rem;
    font-weight: 500;
    background-color: #fff;
    padding: 10px 15px;
    cursor: pointer;
`
export const CounterValue = styled.div`
    font-size: 1rem;
    font-weight: 500;
    padding: 20px;
`