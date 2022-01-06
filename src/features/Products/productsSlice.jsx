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
                console.log(`${product.payload.name} added to cart`);
            },
            removeProduct: (state, item) => {
                let newProducts = state.value.filter((element) => element.id !== item.payload.id);
                state.value = newProducts;
                console.log(`${item.payload.name} removed from cart`);
            },
            removeProducts: (state) => {
                state.value = [];
                console.log("All Products Removed");
            },
        }
    }
)

export const {addProduct, removeProduct, removeProducts} = productsSlice.actions;

export default productsSlice.reducer;