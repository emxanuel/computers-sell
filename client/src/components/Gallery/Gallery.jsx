"use client";
import { getComputers } from "@/functions/computers";
import React, { useState, useEffect } from "react";
import ProductSkeleton from "../Skeleton/ProductSkeleton";
import styles from "./styles.module.scss";
import { Button, Card } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Gallery() {
    const router = useRouter();
    const [computers, setComputers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getComputers()
            .then((data) => {
                setComputers(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    return (
        <div className={styles.container}>
            {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 place-items-center gap-10 my-20">
                    {Array(10)
                        .fill(0)
                        .map((_, index) => (
                            <ProductSkeleton key={index} />
                        ))}
                </div>
            ) : error ? (
                <p>Error: {error.message}</p>
            ) : (
                <ul className={styles.list}>
                    {computers.map((computer) => (
                        <li key={computer._id} onClick={() => router.push(`/product/${computer._id}`)}>
                            <div>
                                <img src={computer.image} alt="" />
                            </div>
                            <h2>{computer.name}</h2>
                            <p>${computer.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                            <Button
                                size="sm"
                                className="h-7"
                                fullWidth
                                variant="bordered"
                                color="default"
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
                    ))}
                </ul>
            )}
        </div>
    );
}
