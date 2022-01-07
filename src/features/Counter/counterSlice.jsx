import { createSlice } from "@reduxjs/toolkit";

// data
import { products } from '../../utils/products';

export const counterSlice = createSlice(
    {
        name: 'counter',
        initialState: {
            value: products
        },
        reducers: {
            increment: (state, item) => {
                for(let i = 0; i < state.value.length; i++){
                    if(state.value[i].id === item.payload.id){
                        state.value[i].quantity++;
                    }
                }
            },
            decrement: (state, item) => {
                for(let i = 0; i < state.value.length; i++){
                    if(state.value[i].id === item.payload.id){
                        state.value[i].quantity === 1 ? state.value[i].quantity = 1 : state.value[i].quantity = state.value[i].quantity - 1;
                    }
                }
            }
        }
    }
)

export const {increment, decrement} = counterSlice.actions;

export default counterSlice.reducer;