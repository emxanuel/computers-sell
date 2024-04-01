"use client";
import { getComputers } from "@/functions/computers";
import React, { useState, useEffect } from "react";
import ProductSkeleton from "../Skeleton/ProductSkeleton";
import styles from "./styles.module.scss";
import { Button, Card } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import Product from "../Product/Product";
import { useGetComputers } from "@/hooks/useGetComputers";

export default function Gallery({category}) {
    const router = useRouter();
    const {computers, loading, error} = useGetComputers(category);

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
                        <Product key={computer._id} computer={computer} />
                    ))}
                </ul>
            )}
        </div>
    );
}
