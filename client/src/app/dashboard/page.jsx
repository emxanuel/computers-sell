import DashboardSidebar from "@/components/DashboardSidebar/DashboardSidebar";
import styles from "./styles.module.scss";

export default function DashboardPage() {
    return (
        <div className={styles.container}>
            <DashboardSidebar />
        </div>
    );
}
