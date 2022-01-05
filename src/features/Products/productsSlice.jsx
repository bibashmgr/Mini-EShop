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
            removeProduct: (state) => {
                console.log("Product Removed");
            },
            removeProducts: (state) => {
                // state.value = [];
                console.log("All Products Removed");
            },
        }
    }
)

export const {addProduct, removeProduct, removeProducts} = productsSlice.actions;

export default productsSlice.reducer;