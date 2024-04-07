"use client";

import Filters from "@/components/Filters/Filters";
import Gallery from "@/components/Gallery/Gallery";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Input } from "@nextui-org/react";

export default function SearchPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const [filters, setFilters] = useState({
        priceRange: searchParams.get("filters") ? JSON.parse(searchParams.get("filters")).priceRange : [0, 10000],
        brands: [],
        type: "Laptop",
    });
    console.log(filters)
    const [queryState, setQuery] = useState("");

    useEffect(() => {
        if (searchParams.get("filters")) {
            setFilters(JSON.parse(searchParams.get("filters")));
        }
        if (searchParams.get("q")) {
            setQuery(searchParams.get("q"));
        }
    }, []);

    useEffect(() => {
        const current = new URLSearchParams(Array.from(searchParams.entries()));

        if (!filters) {
            current.delete("filters");
        } else {
            current.set("filters", JSON.stringify(filters));
        }

        const search = current.toString();
        const query = search ? `?${search}` : "";

        router.push(`${pathname}${query}`);
    }, [filters]);

    useEffect(() => {
        const current = new URLSearchParams(Array.from(searchParams.entries()));

        if (!queryState) {
            current.delete("q");
        } else {
            current.set("q", queryState);
        }

        const search = current.toString();
        const query = search ? `?${search}` : "";

        router.push(`${pathname}${query}`);
    }, [queryState]);

    return (
        <div className={styles.container}>
            <form action="">
                <Input size="sm" defaultValue={searchParams.get('q')} fullWidth label={'search'} onChange={(e) => setQuery(e.target.value)} variant="bordered"/>
            </form>
            <div className={styles.content}>
                <Filters setFilters={setFilters} filters={filters} />
                <div className={styles.galleryContainer}>
                    <Gallery searchParams={{
                        filters: JSON.parse(searchParams.get('filters')),
                        query: searchParams.get('q')
                    }}/>
                </div>
            </div>
        </div>
    );
}
