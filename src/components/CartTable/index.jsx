import React from 'react';

import { useSelector } from 'react-redux';

// elements:
import { TableContainer, Table, TableHead, TableRow, TableFoot, TableBody, TableColumnH, TableColumnB, TableColumnF, TableButton } from './CartTableElements';

const CartTable = () => {

    const items = useSelector((state) => state.products.value);

    return (
        <TableContainer>
            <Table>
                {/* table-header */}
                <TableHead>
                    <TableRow>
                        <TableColumnH>S.N</TableColumnH>
                        <TableColumnH>Products</TableColumnH>
                        <TableColumnH>Quantity</TableColumnH>
                        <TableColumnH>Price</TableColumnH>
                        <TableColumnH>Actions</TableColumnH>
                    </TableRow>
                </TableHead>
                {/* table-body */}
                <TableBody>
                    {
                        items.map((item, index)=> {
                            return (
                                <TableRow key={item.id}>
                                    <TableColumnB>
                                        {(index+1)<9 ? '0'+(index+1) : (index+1)}
                                    </TableColumnB>
                                    <TableColumnB>{item.name}</TableColumnB>
                                    <TableColumnB>01</TableColumnB>
                                    <TableColumnB>{item.price}</TableColumnB>
                                    <TableColumnB>
                                        <TableButton>Remove</TableButton>
                                    </TableColumnB>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
                {/* table-footer */}
                <TableFoot>
                    <TableRow>
                        <TableColumnF>Total</TableColumnF>
                        <TableColumnF colSpan={2}></TableColumnF>
                        <TableColumnF>NRs. 300000</TableColumnF>
                        <TableColumnF>
                            <TableButton>Remove all</TableButton>
                        </TableColumnF>
                    </TableRow>
                </TableFoot>
            </Table>
        </TableContainer>
    )
}

export default CartTable
