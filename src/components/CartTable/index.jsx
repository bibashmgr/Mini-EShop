import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

// elements:
import { TableContainer, Table, TableHead, TableRow, TableFoot, TableBody, TableColumnH, TableColumnB, TableColumnF, TableButton, EmptyContainer } from './CartTableElements';

// components:
import Counter from '../Counter';

// actions:
import { removeProduct, removeProducts } from '../../features/Products/productsSlice';

const CartTable = () => {

    const items = useSelector((state) => state.products.value);
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    const getSum = (total, item) => {
        for(let i=0; i < items.length; i++){
            if(item.id === count[i].id){
                return total + count[i].price;
            }
        }
    }

    return (
        <TableContainer>
            {
                items.length === 0 ? 
                <EmptyContainer>No Products Added</EmptyContainer> :
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
                                        <TableColumnB>
                                            {/* counter */}
                                            <Counter item={item} />
                                        </TableColumnB>
                                        <TableColumnB>
                                            {
                                                `NRs. ${(count.find((element) => element.id === item.id)).price}`
                                            }
                                        </TableColumnB>
                                        <TableColumnB>
                                            <TableButton type='button' onClick={() => { dispatch(removeProduct(item)) }}>Remove</TableButton>
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
                            <TableColumnF>
                                {
                                    `NRs. ${items.reduce(getSum, 0)}`
                                }
                            </TableColumnF>
                            <TableColumnF>
                                <TableButton type="button" onClick={() => { dispatch(removeProducts()) }}>Remove all</TableButton>
                            </TableColumnF>
                        </TableRow>
                    </TableFoot>
                </Table>
            }
        </TableContainer>
    )
}

export default CartTable
