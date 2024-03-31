"use client";

import { NextUIProvider } from "@nextui-org/react";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

export default function Providers({ children }) {
    return (
        <Provider store={store}>
            <NextUIProvider>{children}</NextUIProvider>
        </Provider>
    );
}
