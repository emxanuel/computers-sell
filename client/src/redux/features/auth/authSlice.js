import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import * as jose from "jose";

const cookie = Cookies.get("accessToken");
const decodedUser = cookie ? jose.decodeJwt(cookie) : null;

const initialState = {
    user: {
        id: decodedUser?.id,
        email: decodedUser?.email,
        firstName: decodedUser?.firstName,
        lastName: decodedUser?.lastName,
        role: decodedUser?.role,
    },
    token: cookie,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state) => {
            const cookie = Cookies.get("accessToken");
            const decodedUser = cookie ? jose.decodeJwt(cookie) : null;
            state.user.id = decodedUser?.id;
            state.user.email = decodedUser?.email;
            state.user.firstName = decodedUser?.firstName;
            state.user.lastName = decodedUser?.lastName;
            state.user.role = decodedUser?.role;
            state.token = cookie;
        },
        logout: (state) => {
            state.user = {};
            state.token = null;
            Cookies.remove("accessToken");
            window.location.href = '/'
        },
    },
});

export const { setUser, logout } = authSlice.actions;
export const selectUser = (state) => state.authReducer.user;
export default authSlice.reducer;
