import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
    lat: 0,
    long: 0
};

export const coordSlice = createSlice({
    name: 'coordinates',
    initialState,
    reducers: {
        addCoords: (state, action) => {
            state.lat = action.payload.lat;
            state.long = action.payload.long;
        }
    }
});

export const { addCoords } = coordSlice.actions;
export default coordSlice.reducer;