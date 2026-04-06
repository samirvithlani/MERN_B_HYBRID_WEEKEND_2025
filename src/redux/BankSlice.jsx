import { createSlice } from "@reduxjs/toolkit";

const bankSlice = createSlice({
    name:"bank",
    initialState:{
        balance:1000
    },
    reducers:{
        //actions..
        depositAction:(state,action)=>{
            //action payload.. amount
            console.log("action",action)
            state.balance = state.balance+action.payload
        }
    }
})
export const {depositAction} = bankSlice.actions //-->component
export default bankSlice.reducer //-->store