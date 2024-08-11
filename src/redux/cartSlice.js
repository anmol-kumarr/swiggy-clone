import { createSlice } from "@reduxjs/toolkit";

// Define the initial state as an empty array
const initialState = [];

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Add an item to the cart
        addToCart: (state, action) => {
            // const existingItem = state.find(item => item.itemId === action.payload.itemId);
            // if (existingItem) {
                // existingItem.quantity += action.payload.quantity;
            // } 
            // else {
                state.push(action.payload);
            // }
        },

        // Update the quantity of an item in the cart
        updateCart: (state, action) => {
            return state.map((item) => {
                if (item.itemId !== action.payload.itemId) {
                    // This isn't the item we care about - keep it as-is
                    return item;
                }

                // This is the item we want to update - set the new quantity directly
                return {
                    ...item, // Spread the existing properties of the item
                    quantity: action.payload.quantity, // Set the quantity directly
                };
            });
        },

        // Remove an item from the cart
        removeFromCart: (state, action) => {
            return state.filter(item => item.itemId !== action.payload.itemId);
        }
    }
});

// Export the action creators
export const { addToCart, removeFromCart, updateCart } = CartSlice.actions;

// Export the reducer
export default CartSlice.reducer;
