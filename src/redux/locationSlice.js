import { createSlice } from "@reduxjs/toolkit";


const LocationSlice = createSlice({
    name: 'location',
    initialState: [
        {
            long: '77.594566',
            lat: '12.971599'
        },
    ]
    ,
    reducers: {
        add: (state, action) => {
            return action.payload
        }
    }
})
export const { add } = LocationSlice.actions;
export default LocationSlice.reducer;