"use client";

import { NextUIProvider } from "@nextui-org/react";
import { store, persistor } from "@/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function Providers({ children }) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NextUIProvider>{children}</NextUIProvider>
            </PersistGate>
        </Provider>
    );
}
