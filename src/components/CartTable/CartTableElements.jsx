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

export const TableHead = styled.thead``

export const TableBody = styled.tbody``

export const TableFoot = styled.tfoot``

export const TableRow = styled.tr`
    height: 75px;
`

// table-body-columns
export const TableColumnH = styled.th`
    font-size: 1.1rem;
    font-weight: 600;
`

// table-body-columns
export const TableColumnB = styled.td`
    text-align: center;
    font-size: 1rem;
    font-weight: 500;
`

// table-footer-columns
export const TableColumnF = styled.td`
    text-align: center;
    font-size: 1rem;
    font-weight: 600;
`

// table-buttons
export const TableButton = styled.span`
    padding: 10px;
    background-color: #db2e39;
    border-radius: 5px;
    color: #f2f2f2;
    transition: 0.25s;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`