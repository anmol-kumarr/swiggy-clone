import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { SlActionRedo } from "react-icons/sl";

const CartSlice = createSlice({
    name: 'cart',
    initialState:[],
    reducers: {
        addToCart: (state, action) => {

            state.push(action.payload)

        },

        updateCart: (state, action) => {
            // return state.map(item =>
            //     item.id === action.payload.id
            //         ? { ...item, quantity: action.payload.quantity }
            //         : item
            // );

            // return state.map((item) => {
            //     if (item.id === action.payload.id) {
            //         return {
            //             quantity: action.payload.quantity,
            //             ...item,
            //         };
            //     }
            //     return item;
            // });
            // const check = state.cart.findIndex(item => item.id === action.payload.id)
            // if (check === 1) {
            //     state.cart[check].quantity = action.payload.quantity 
            // }

            // function updateObjectInArray(array, action) {
            return state.map((item, index) => {
                if (item.id !== action.payload.id) {
                    // This isn't the item we care about - keep it as-is
                    return item
                }

                // Otherwise, this is the one we want - return an updated value
                return {
                    // ...item,
                    ...action.payload.quantity
                }
            })


        },
        removeFromCart: (state, action) => {

        }
    }

})
export const { addToCart, removeFromCart, updateCart } = CartSlice.actions;
export default CartSlice.reducer;
