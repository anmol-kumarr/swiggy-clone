import { configureStore } from "@reduxjs/toolkit";
import locationSlice from "./locationSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
    reducer: {
        location:locationSlice,
        cart:cartSlice
    }
});

