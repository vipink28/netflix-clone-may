import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    nfOriginals:{
        status: "idle",
        error: null,
        data: null
    } 
}

export const tvSlice = createSlice({
    name: "tv",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
});
export default tvSlice.reducer;

