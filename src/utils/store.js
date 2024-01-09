import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import querySlice from "./querySlice";
import chatSlice from "./chatSlice";
const store = configureStore({
    reducer:{
        app:appSlice,
        search:searchSlice,
        query:querySlice,
        chat:chatSlice,
    },
})

export default store;