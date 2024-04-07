"use client";
import { useDispatch, useSelector } from "react-redux";
import { selectCart, dropItem } from "@/redux/features/cart/cartSlice";
import CartItem from "@/components/CartItem/CartItem";
import styles from "./styles.module.scss";
import { CardElement, PaymentElement } from "@stripe/react-stripe-js";
import { stripe } from "../providers";
import {Button} from '@nextui-org/react'

export default function Cart() {
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();
    const redirectToCheckout = async () => {
        (await stripe).redirectToCheckout({
            lineItems: cart.map((item) => ({
                price: item.stripePriceId,
                quantity: item.quantity,
            })),
            mode: "payment",
            successUrl: `${window.origin}`,
            cancelUrl: `${window.origin}/cart`,
        });
    };

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
                <div>
                    <p className={styles.price}>
                        Total:
                        <strong>
                            {" "}
                            $
                            {cart
                                .reduce(
                                    (acc, item) =>
                                        acc + item.price * item.quantity,
                                    0
                                )
                                .toLocaleString(undefined, {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                })}
                        </strong>
                    </p>
                    <Button color="primary" fullWidth variant="bordered" onClick={redirectToCheckout}>Pay</Button>
                </div>
            ) : (
                <p className={styles.emptyText}>
                    The items you choose will appear in this section
                </p>
            )}
        </div>
    );
}
