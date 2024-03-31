import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "@/utils";
import authReducer from "./features/auth/authSlice";
import cartReducer from "./features/cart/cartSlice";

const configPersist = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({
    authReducer,
    cartReducer,
    // Add reducers here
});

const persistedReducer = persistReducer(configPersist, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);
