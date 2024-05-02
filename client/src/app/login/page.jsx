"use client"

import LoginForm from "./LoginForm";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const user = useSelector(selectUser);
    const router = useRouter();
    if (user.id) {
        router.push("/");
    }
    return (
        <div className={styles.container}>
            <div>
                <div>
                    <h1>Emm's Computers</h1>
                    <p>
                        Welcome again, log into your account to be able to order
                        the best computers in the market
                    </p>
                </div>
                <LoginForm />
            </div>
        </div>
    );
}
