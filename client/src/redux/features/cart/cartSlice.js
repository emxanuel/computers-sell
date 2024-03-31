import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.cart.find(
                (item) => item._id === action.payload._id
            );
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            const existingProduct = state.cart.find(
                (item) => item._id === action.payload._id
            );
            if (existingProduct) {
                if (existingProduct.quantity > 1) {
                    existingProduct.quantity -= 1;
                } else {
                    state.cart = state.cart.filter(
                        (item) => item._id !== action.payload._id
                    );
                }
            }
        },
        dropItem: (state, action) => {
            state.cart = state.cart.filter(
                (item) => item._id !== action.payload._id
            );
        },
    },
});

export const { addToCart, removeFromCart, dropItem } = cartSlice.actions;

export const selectCart = (state) => state.cartReducer.cart;

export default cartSlice.reducer;
