"use client";

import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Input, Button } from "@nextui-org/react";
import { login } from "@/functions/auth";
import Cookies from 'js-cookie'
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("")
    const [messageStyle, setMessageStyle] = useState("")
    const dispatch = useDispatch();
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password).then(response => {
            console.log(response)
            if (response.hasOwnProperty('message')){
                setMessage(response.message)
                setMessageStyle('text-red-500')
            }
            else{
                dispatch(setUser())
                setMessage('')
                setMessageStyle('')
                router.push('/')
            }
        })
    };

    return (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <div>
                <h2>Log in to your account</h2>
                <Input
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    label="email"
                    size="sm"
                    variant="faded"
                />
                <Input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    label="password"
                    size="sm"
                    variant="faded"
                />
                <Button size="sm" fullWidth color="primary" variant="solid" onClick={handleSubmit}>Login</Button>
                <p className={"text-sm " + messageStyle}>{message}</p>
            </div>
            <p>
                Don't have an account? <a href="/register">Register</a>
            </p>
        </form>
    );
}
