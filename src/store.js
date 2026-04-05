import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/CartSlice"

export const sotre = configureStore(
    {
        reducer:{
            cart:cartReducer
        }
    }
)