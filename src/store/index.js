import { configureStore } from "@reduxjs/toolkit";
import titleReducer from "./titleSlice"
import usersReducer from './usersSlice'
import calculateReducer from "./calculateSlise"

export const store = configureStore({
    reducer: {
        titleReducer,
        usersReducer,
        calculateReducer,
    }
})