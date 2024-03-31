import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducer from './features/auth/authSlice'
import cartReducer from './features/cart/cartSlice'


const configPersist = {
    key: 'root',
    storage,
    whitelist: ['user']
}


const rootReducer = combineReducers({
    authReducer,
    cartReducer
    // Add reducers here
});

const persistedReducer = persistReducer(configPersist, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
});