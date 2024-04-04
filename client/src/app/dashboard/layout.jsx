import DashboardSidebar from "@/components/DashboardSidebar/DashboardSidebar";
import styles from "./styles.module.scss";

export default function DashboardLayout({ children }) {
    return (
        <div className={styles.container}>
            <DashboardSidebar />
            {children}
        </div>
    );
}