"use client";

import { NextUIProvider } from "@nextui-org/react";
import { store, persistor } from "@/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

export const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_SECRET);

export default function Providers({ children }) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NextUIProvider>
                    <Elements stripe={stripe}>{children}</Elements>
                </NextUIProvider>
            </PersistGate>
        </Provider>
    );
}
