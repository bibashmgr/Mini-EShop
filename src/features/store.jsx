import { configureStore } from "@reduxjs/toolkit";

// reducer-functions
import counterReducer from './Counter/counterSlice';
import productsReducer from "./Products/productsSlice";

export default configureStore({
  reducer: {
    // contains all the reducer functions
    counter: counterReducer,
    products: productsReducer,
  }  
});