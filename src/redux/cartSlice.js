import { createSlice } from "@reduxjs/toolkit";
import { SlActionRedo } from "react-icons/sl";

const CartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {

            state.push(action.payload)
        },

        updateCart: (state, action) => {
            console.log("id=", action.payload.itemId, "newQuantity=", action.payload.quantity);

            const findIndex = state.findIndex(item => item.id === action.payload.itemId);
            state[findIndex].quantity = action.payload.quantity;
        
        },

        removeFromCart: (state, action) => {

        }
    }

})
export const { addToCart, removeFromCart, updateCart } = CartSlice.actions;
export default CartSlice.reducer;
