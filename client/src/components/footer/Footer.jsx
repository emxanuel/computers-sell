"use client";
import styles from "./styles.module.scss";
import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();
    const inDashboard = pathname.includes("dashboard");
    return (
        !inDashboard && (
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <h2>Contact info</h2>
                    <div className={styles.personalInfo}>
                        <p>
                            <strong>Number:</strong> +1 (809)-864-8668
                        </p>
                        <p>
                            <strong>Emali:</strong> ealg0528@gmail.com
                        </p>
                        <p>
                            <strong>Address:</strong> Distrito Nacional, Santo
                            Domingo, Dominican Republic
                        </p>
                    </div>
                    <p>&copy; 2024 Emm's computers reserved rights</p>
                </div>
                <div className={styles.linkContainer}>
                    <h3>Video con explicación del proyecto</h3>
                    <a href="https://drive.google.com/drive/folders/1GdNLgFe3wSDvBW6i33xZ2u7BfnJ3BIWa?usp=sharing">Click aqui</a>
                </div>
            </footer>
        )
    );
}
