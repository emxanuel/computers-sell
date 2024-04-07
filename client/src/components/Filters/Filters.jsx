import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Checkbox, Slider, RadioGroup, Radio, Button } from "@nextui-org/react";
import { getComputersBrand } from "@/functions/computers";

export default function Filters({ setFilters, filters }) {
    const [range, setRange] = useState(filters.priceRange);
    console.log(range, filters.priceRange);
    const [brands, setBrands] = useState([]);
    console.log(filters);

    const handleChange = (e) => {
        if (e.target.name === "brands") {
            setFilters((prev) => ({
                ...prev,
                brands: prev.brands.includes(e.target.value)
                    ? prev.brands.filter((brand) => brand !== e.target.value)
                    : [...prev.brands, e.target.value],
            }));
            return;
        }
        if (e.target.name === "type") {
            setFilters((prev) => ({
                ...prev,
                type: e.target.value,
            }));
            return;
        }
        setFilters((prev) => ({
            ...prev,
            [e.target.name]: e.target.checked,
        }));
    };

    const handleMenu = () => {
        const container = document.querySelector(`.${styles.containerHidden}`) || document.querySelector(`.${styles.container}`);
        
        container.classList.toggle(styles.container);
        container.classList.toggle(styles.containerHidden);
    };

    useEffect(() => {
        getComputersBrand().then((brands) => {
            setBrands(brands);
        });
    }, []);

    useEffect(() => {
        setFilters((prev) => ({
            ...prev,
            priceRange: range,
        }));
    }, [range]);

    return (
        <div className={styles.containerHidden}>
            <h2>Filters</h2>
            <div className={styles.content}>
                <div className={styles.category}>
                    <h2>Category</h2>
                    <div>
                        <RadioGroup
                            value={filters.type}
                            name="type"
                            onChange={handleChange}
                            className="flex justify-between w-full md:flex-col"
                        >
                            <Radio name="type" value="Laptop">
                                Laptop
                            </Radio>
                            <Radio name="type" value="Desktop">
                                Desktop
                            </Radio>
                        </RadioGroup>
                    </div>
                </div>
                <div className={styles.price}>
                    <h2>Price</h2>
                    <Slider
                        label="Price Range"
                        step={50}
                        minValue={0}
                        maxValue={10000}
                        value={range}
                        formatOptions={{ style: "currency", currency: "USD" }}
                        onChange={setRange}
                        className="max-w-md"
                    />
                </div>
                <div className={styles.brands}>
                    <h2>Brands</h2>
                    <div>
                        {brands.map((brand) => (
                            <Checkbox
                                key={brand}
                                onChange={handleChange}
                                name={"brands"}
                                value={brand}
                                defaultSelected={filters.brands.includes(brand)}
                            >
                                {brand}
                            </Checkbox>
                        ))}
                    </div>
                </div>
            </div>
            <Button variant="faded" size="sm" className={`w-10 items-center justify-center ${styles.menu}`} onClick={handleMenu}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        stroke="#999999"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 8h16M4 16h16"
                    />
                </svg>
            </Button>
        </div>
    );
}
