import { createSlice } from "@reduxjs/toolkit";

const querySlice = createSlice({
    name:"query",
    initialState:{
        searchQuery:''
    },
    reducers:{
        searchResult:(state,action) => {
            state.searchQuery = action.payload
        }
    }
})

export const {searchResult} = querySlice.actions

export default querySlice.reducer