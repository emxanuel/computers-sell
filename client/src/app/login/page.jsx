import LoginForm from "./LoginForm";
import styles from "./styles.module.scss";

export default function LoginPage() {
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
