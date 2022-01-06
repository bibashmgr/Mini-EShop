import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice(
    {
        name: 'counter',
        initialState: {
            value: []
        },
        reducers: {
            increment: (state, item) => {
                state.value++;
            },
            decrement: (state) => {
                state.value === 1 ? state.value = 1 : state.value = state.value - 1;
            }
        }
    }
)

export const {increment, decrement} = counterSlice.actions;

export default counterSlice.reducer;