import { createSlice } from "@reduxjs/toolkit";


const LocationSlice = createSlice({
    name: 'location',
    initialState: [
        {
            long: '77.594566',
            lat: '12.971599'
        },
        {
            city: [
                {
                    name: "Bengaluru",
                    country: "IN",
                    state: "Karnatka"
                }
            ]
        }
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