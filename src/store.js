import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/CartSlice"
import bankReducer from "./redux/BankSlice"
export const sotre = configureStore(
    {
        reducer:{
            cart:cartReducer,
            bank:bankReducer
        }
    }
)