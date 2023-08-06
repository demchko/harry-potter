import { configureStore } from "@reduxjs/toolkit";
import { sliceReducer } from "./addFav";
import { api } from "../api/api";

export const store = configureStore({
    reducer: {
        slice: sliceReducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(api.middleware)
})