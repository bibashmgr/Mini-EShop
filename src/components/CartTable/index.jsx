import React from 'react'
import { TableContainer, Table, TableRow, TableColumnH, TableColumn, Counter, CounterButton, CounterValue } from './CartTableElements'

const CartTable = () => {
    return (
        <TableContainer>
            <Table>
                <TableRow>
                    <TableColumnH>S.N</TableColumnH>
                    <TableColumnH>Products</TableColumnH>
                    <TableColumnH>Quantity</TableColumnH>
                    <TableColumnH>Price</TableColumnH>
                </TableRow>
                <TableRow>
                    <TableColumn>1</TableColumn>
                    <TableColumn>Iphone 13</TableColumn>
                    <TableColumn>
                        <Counter>
                            <CounterButton>+</CounterButton>
                            <CounterValue>01</CounterValue>
                            <CounterButton>-</CounterButton>
                        </Counter>
                    </TableColumn>
                    <TableColumn>NRs. 130000</TableColumn>
                </TableRow>
                <TableRow>
                    <TableColumnH>Total</TableColumnH>
                    <TableColumn></TableColumn>
                    <TableColumn></TableColumn>
                    <TableColumnH>NRs. 130000</TableColumnH>
                </TableRow>
            </Table>
        </TableContainer>
    )
}

export default CartTable
