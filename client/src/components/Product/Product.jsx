import styles from "./styles.module.scss";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cart/cartSlice";

export default function Product({ computer, toast, detail }) {
    const router = useRouter();
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart(computer)), toast.success("Product added to cart!");
    };
    return !detail ? (
        <li
            key={computer._id}
            onClick={() => router.push(`/product/${computer._id}`)}
            className={styles.container}
        >
            <div>
                <img src={computer.image} alt="" />
            </div>
            <h2>{computer.name}</h2>
            <p>
                $
                {computer.price.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                })}
            </p>
            <Button
                size="sm"
                className="h-7"
                fullWidth
                variant="bordered"
                color="primary"
                onClick={handleAddToCart}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z"
                    />
                </svg>
                Add to cart
            </Button>
        </li>
    ) : (
        <li className={styles.detailsContainer}>
            <div className={styles.imageContainer}>
                <img src={computer.image} alt="" />
            </div>
            <div className={styles.info}>
                <div>
                    <h2>{computer.name}</h2>
                    <ul>
                        {Object.entries(computer.hardware).map(([key, value]) =>
                            key === "display" ? (
                                <li key={key}>
                                    <strong>{key.toUpperCase()}:</strong>{" "}
                                    {value.size.slice(0, 2)}" {value.resolution}
                                </li>
                            ) : key === "CPU" ? (
                                <li key={key}>
                                    <strong>{key.toUpperCase()}:</strong>{" "}
                                    {value.model} {value.speed}
                                </li>
                            ) : (
                                <li key={key}>
                                    <strong>{key.toUpperCase()}:</strong>{" "}
                                    {value}
                                </li>
                            )
                        )}
                    </ul>
                </div>
                <p className={styles.price}>
                    $
                    {computer.price.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    })}
                </p>
            </div>
        </li>
    );
}
