"use client";
import { getComputers } from "@/functions/computers";
import React, { useState, useEffect } from "react";
import ProductSkeleton from "../Skeleton/ProductSkeleton";
import styles from "./styles.module.scss";
import { Button, Card } from "@nextui-org/react";
import Product from "../Product/Product";
import { useGetComputers } from "@/hooks/useGetComputers";
import { ToastContainer, toast } from "react-toastify";
import { usePathname } from "next/navigation";

export default function Gallery({category, searchParams}) {
    const pathname = usePathname();
    const isSearch = pathname === "/search";
    const {computers, loading, error} = useGetComputers(category, searchParams);

    return (
        <div className={styles.container}>
            {loading ? (
                <div className="flex flex-wrap gap-10 my-20 justify-center">
                    {Array(10)
                        .fill(0)
                        .map((_, index) => (
                            <ProductSkeleton key={index} />
                        ))}
                </div>
            ) : error ? (
                <p>Error: {error.message}</p>
            ) : isSearch ? (
                <ul>
                    {computers.map((computer) => (
                        <Product toast={toast} key={computer._id} computer={computer} detail={true} />
                    ))}
                </ul>
            ) :  (  
                <ul className={styles.list}>
                    {computers.map((computer) => (
                        <Product toast={toast} key={computer._id} computer={computer} />
                    ))}
                </ul>
            )}
            <ToastContainer position="bottom-right" theme="light" autoClose={3000} />
        </div>
    );
}
