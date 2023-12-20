import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Movies/combinedReducer";

export const store=configureStore({
    reducer: rootReducer
})