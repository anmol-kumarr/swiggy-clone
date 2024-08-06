import { createSlice } from "@reduxjs/toolkit";
import { SlActionRedo } from "react-icons/sl";
const initialState = [];
const CartSlice = createSlice({
    name: 'cart',
    initialState:{
        cart:[]
    },
    reducers: {
        addToCart: (state, action) => {

            state.cart.push(action.payload)
        },

        // updateCart: (state, action) => {
        //     console.log("id=", action.payload.itemId, "newQuantity=", action.payload.quantity);

        //     const findIndex = state.findIndex(item => item.id === action.payload.itemId);
        //     state[findIndex].quantity = action.payload.quantity;

        // },

        updateCart: (state, action) => {
            state.cart=state.cart.map((item)=>
                item.id===action.payload.id?{...item,quantity:item.quantity+1}:item
            )
        },

        removeFromCart: (state, action) => {

        }
    }

})
export const { addToCart, removeFromCart, updateCart } = CartSlice.actions;
export default CartSlice.reducer;
