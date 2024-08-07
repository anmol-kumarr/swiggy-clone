import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { SlActionRedo } from "react-icons/sl";
const CartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {

            state.push(action.payload)
        },

        updateCart: (state, action) => {
            return state.map(item =>
                item.id === action.payload.id
                    ? { ...item, quantity: action.payload.quantity }
                    : item
            );


        },
        removeFromCart: (state, action) => {

        }
    }

})
export const { addToCart, removeFromCart, updateCart } = CartSlice.actions;
export default CartSlice.reducer;
