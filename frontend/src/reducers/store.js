import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from './api/apiSlice';
import coordReducer from "./coordinates/coordSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        coordinates : coordReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})