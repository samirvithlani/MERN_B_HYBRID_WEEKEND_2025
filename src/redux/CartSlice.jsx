import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  //action -->2 --> type,payload[]
  //state --> initailstate -->
  reducers: {
    addToCart: (state, action) => {
      console.log("state..", state);
      console.log("action", action);
    },
  },
});
export const { addToCart } = cartSlice.actions; //component
export default cartSlice.reducer //reducers --{actions}
