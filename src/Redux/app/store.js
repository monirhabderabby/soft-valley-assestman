import { configureStore } from "@reduxjs/toolkit";
import immutableStateInvariantMiddleware from "redux-immutable-state-invariant";
import apiSlice from "../api/apiSlice";
import leadSlice from "../features/leads/leadSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        leads: leadSlice,
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: getDefaultMiddlewares => getDefaultMiddlewares().concat(apiSlice.middleware).concat(immutableStateInvariantMiddleware()),
});
