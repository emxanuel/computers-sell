'use client'
import styles from "./styles.module.scss";
import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();
    const inDashboard = pathname.includes("dashboard");
    return (
        !inDashboard && (
            <footer className={styles.container}>
                <p>&copy; 2024</p>
            </footer>
        )
    );
}
