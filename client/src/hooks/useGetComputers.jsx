import { useState, useEffect } from "react";
import { getComputers } from "@/functions/computers";

export const useGetComputers = (category, searchParams) => {
    const [computers, setComputers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getComputers(category, searchParams)
            .then((data) => {
                setComputers(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, [searchParams, category]);

    return {
        computers,
        loading,
        error,
    };
};
