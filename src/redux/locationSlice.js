import { createSlice } from "@reduxjs/toolkit";

const LocationSlice=createSlice({
    name:'location',
    initialState:[],
    reducers:{
        add:(state,action)=>{
            state.push(action.payload)
            console.log(action)
        }
    }
})
export const{add}=LocationSlice.actions;
export default LocationSlice.reducer;