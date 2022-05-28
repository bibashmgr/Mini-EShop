import styled from 'styled-components';

export const EmptyContainer = styled.div`
  font-size: 0.8rem;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const TableContainer = styled.section`
  margin-top: 50px;
  margin-bottom: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Table = styled.table`
  width: 80%;
  border: none;
  border-collapse: collapse;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;

export const TableHead = styled.thead``;

export const TableBody = styled.tbody``;

export const TableFoot = styled.tfoot``;

export const TableRow = styled.tr`
  height: 80px;
`;

// table-body-columns
export const TableColumnH = styled.th`
  font-size: 0.8rem;
  font-weight: 600;
`;

// table-body-columns
export const TableColumnB = styled.td`
  text-align: center;
  font-size: 0.8rem;
  font-weight: 500;
`;

// table-footer-columns
export const TableColumnF = styled.td`
  text-align: center;
  font-size: 0.8rem;
  font-weight: 600;
`;

// table-buttons
export const TableButton = styled.button`
  font-size: 0.75rem;
  border: none;
  outline: none;
  padding: 10px;
  background-color: #db2e39;
  border-radius: 5px;
  color: #f2f2f2;
  transition: 0.25s;
  pointer-events: all;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
