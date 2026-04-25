//redux thunk
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


//compoenent
export const fetchContent = createAsyncThunk(
    "content/fetchcontent",
    async()=>{
        const res = await axios.get("https://node5.onrender.com/user/user/")
        return res.data.data // []
    }
)


const contentSlice = createSlice({
    name:"content",
    initialState:{
        data:[],
        error:null,
        loading:false
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchContent.pending,(state,action)=>{
            state.loading = true
        })
        builder.addCase(fetchContent.fulfilled,(state,action)=>{
            state.data = action.payload
            state.loading = false
        })
        builder.addCase(fetchContent.rejected,(state,action)=>{
            state.error = action.error.message
            state.loading = false
        })
    }
    
})
export default contentSlice.reducer
