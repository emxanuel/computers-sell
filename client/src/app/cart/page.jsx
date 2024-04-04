"use client";
import { useDispatch, useSelector } from "react-redux";
import { selectCart, dropItem } from "@/redux/features/cart/cartSlice";
import CartItem from "@/components/CartItem/CartItem";
import styles from "./styles.module.scss";

export default function Cart() {
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();
    return (
        <div className={styles.container}>
            <h1>Your selections</h1>
            {cart.map((item) => (
                <CartItem
                    key={item.id}
                    item={item}
                    onRemove={() => dispatch(dropItem(item))}
                />
            ))}
            {cart.reduce((acc, item) => acc + item.price * item.quantity, 0) >
            0 ? (
                <p className={styles.price}>
                    Total:
                    <strong>
                        {" "}
                        $
                        {cart
                            .reduce(
                                (acc, item) => acc + item.price * item.quantity,
                                0
                            )
                            .toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                            })}
                    </strong>
                </p>
            ) : (
                <p className={styles.emptyText}>
                    The items you choose will appear in this section
                </p>
            )}
            
        </div>
    );
}
