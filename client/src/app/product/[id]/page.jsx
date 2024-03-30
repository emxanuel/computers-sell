"use client";
import { useEffect, useState } from "react";
import { getComputer } from "@/functions/computers";
import styles from "./styles.module.scss";
import { Button } from "@nextui-org/react";

export default function ProductPage({ params }) {
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
                <div className={styles.content}>
                    <div className={styles.imageContainer}>
                        <img
                            className="mix-blend-multiply"
                            src={computer.image}
                            alt={computer.name}
                        />
                    </div>
                    <div className={styles.infoContainer}>
                        <h2>{computer.name}</h2>
                        <p className={styles.description}>{computer.description}</p>
                        <ul>
                            {Object.entries(computer.hardware).map(
                                ([key, value]) =>
                                    key === "display" ? (
                                        <li key={key}>
                                            <strong>
                                                {key.toUpperCase()}:
                                            </strong>{" "}
                                            {value.size.slice(0, 2)}"{" "}
                                            {value.resolution}
                                        </li>
                                    ) : (
                                        <li key={key}>
                                            <strong>
                                                {key.toUpperCase()}:
                                            </strong>{" "}
                                            {value}
                                        </li>
                                    )
                            )}
                        </ul>
                        <div className={styles.priceContainer}>
                            <p className={styles.price}>
                                $
                                {computer.price.toLocaleString(undefined, {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                })}
                            </p>
                            <Button
                                size="sm"
                                variant="bordered"
                                color="primary"
                            >
                                Buy now!
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
