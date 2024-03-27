'use client'
import { useEffect, useState } from "react";
import { getComputer } from "@/functions/computers";
import styles from "./styles.module.scss";

export default function ProductPage({params}) {
    
    const [computer, setComputer] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getComputer(params.id)
            .then((data) => {
                setComputer(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, [params.id]);

    return (
        <div className={styles.container}>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error.message}</p>
            ) : (
                <div>
                    <img className="mix-blend-multiply" src={computer.image} alt="" />
                    <h2>{computer.name}</h2>
                    <p>{computer.description}</p>
                    <p>{computer.price}</p>
                </div>
            )}
        </div>
    );
}