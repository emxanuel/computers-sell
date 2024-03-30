"use client";
import { getComputers } from "@/functions/computers";
import React, { useState, useEffect } from "react";
import ProductSkeleton from "../Skeleton/ProductSkeleton";
import styles from "./styles.module.scss";
import { Button, Card } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import Product from "../Product/Product";

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
                        <Product computer={computer} />
                    ))}
                </ul>
            )}
        </div>
    );
}
