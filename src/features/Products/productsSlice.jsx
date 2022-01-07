import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice(
    {
        name: 'products',
        initialState: {
            value: []
        },
        reducers: {
            addProduct: (state, product) => {
                state.value.push(product.payload);
            },
            removeProduct: (state, item) => {
                // for(let i = 0; i < state.value.length; i++){
                //     if(state.value[i].id === item.payload.id){
                //         state.value[i].quantity = 1;
                //     }
                // }
                let newProducts = state.value.filter((element) => element.id !== item.payload.id);
                state.value = newProducts;
            },
            removeProducts: (state) => {
                // for(let i = 0; i < state.value.length; i++){
                //     state.value[i].quantity = 1;
                // }
                state.value = [];
            },
        }
    }
)

export const {addProduct, removeProduct, removeProducts} = productsSlice.actions;

export default productsSlice.reducer;