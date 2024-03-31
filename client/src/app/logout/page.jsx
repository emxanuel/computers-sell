"use client"

import { useDispatch } from "react-redux";
import { logout } from "@/redux/features/auth/authSlice";

export default function Logout () {
    const dispatch = useDispatch();
    const useHandleLogout = () => {
        dispatch(logout());
        window.location.href = '/';
    }
    return (
        <div>
            <h1>Are you sure you want to log out of this page?</h1>
            <button onClick={useHandleLogout}>Yes</button>
        </div>
    );
}