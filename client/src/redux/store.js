import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from './features/auth/authSlice'

const rootReducer = combineReducers({
    authReducer
    // Add reducers here
});

export const store = configureStore({
    reducer: rootReducer,
});