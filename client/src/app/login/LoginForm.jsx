"use client";

import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Input, Button } from "@nextui-org/react";
import { login } from "@/functions/auth";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("")
    const [messageStyle, setMessageStyle] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password).then(response => {
            if (response.hasOwnProperty('message')){
                setMessage(response.message)
                setMessageStyle('text-red-500')
            }
            else{
                setMessage('')
                setMessageStyle('')
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
