"use client";

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/features/auth/authSlice";
import styles from "./styles.module.scss";

export default function DashboardSidebar() {
    const user = useSelector(selectUser);
    const router = useRouter();
    return (
        <div className={styles.container}>
            <h1>
                Hi, {user.firstName.split(" ")[0]} {user.lastName.split(" ")[0]}
            </h1>
            <div className={styles.actions}>
                <h2>Actions</h2>
                <Button variant="flat" fullWidth className="bg-transparent h-7 flex justify-between" radius="none" onClick={() => router.push("/dashboard/create")}>
                    <span>+</span> Add product
                </Button>
            </div>
        </div>
    );
}
