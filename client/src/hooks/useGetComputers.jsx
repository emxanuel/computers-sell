import { useState, useEffect } from "react";
import { getComputers } from "@/functions/computers";

export const useGetComputers = (category) => {
    const [computers, setComputers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (category){
            getComputers(category)
                .then((data) => {
                    setComputers(data);
                    setLoading(false);
                })
                .catch((error) => {
                    setError(error);
                    setLoading(false);
                });
        
        }else{
            getComputers()
                .then((data) => {
                    setComputers(data);
                    setLoading(false);
                })
                .catch((error) => {
                    setError(error);
                    setLoading(false);
                });
        }
    }, []);

    return {
        computers,
        loading,
        error,
    }
}