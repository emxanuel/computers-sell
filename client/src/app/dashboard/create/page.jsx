"use client";

import { createComputer } from "@/functions/computers";
import { Input, Button, Select, SelectItem, Textarea } from "@nextui-org/react";
import styles from "./styles.module.scss";
import { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function CreatePage() {
    const [computer, setComputer] = useState({});

    const handleInputChanges = (e) => {
        setComputer({
            ...computer,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        const id = toast.loading("Creating computer...");
        createComputer(computer).then((data) => {
            if (data.error) {
                if (data.error.name && data.error.name === "ValidationError") {
                    toast.update(id, {
                        render: "Error creating computer, check the fields!",
                        type: "error",
                        isLoading: false,
                        autoClose: 3000,
                        closeButton: true,
                    });
                    return;
                }
            }
            toast.update(id, {
                render: "Computer created!",
                type: "success",
                isLoading: false,
                autoClose: 3000,
                closeButton: true,
            });
        });
    };

    return (
        <div className={styles.container}>
            <div>
                <h1>Create a new computer</h1>
            </div>
            <div className={styles.inputs}>
                <div className={styles.first}>
                    <Input
                        label="Computer name"
                        name="name"
                        required
                        onChange={handleInputChanges}
                        variant="bordered"
                    />
                    <Input
                        label="Computer brand"
                        name="brand"
                        required
                        onChange={handleInputChanges}
                        variant="bordered"
                    />
                    <Input
                        label="Computer price"
                        name="price"
                        onChange={handleInputChanges}
                        variant="bordered"
                    />
                    <Input
                        label="Weight"
                        name="weight"
                        onChange={handleInputChanges}
                        variant="bordered"
                    />
                    <Input
                        label="OS"
                        name="OS"
                        onChange={handleInputChanges}
                        variant="bordered"
                    />
                </div>
                <div className={styles.second}>
                    <Textarea
                        label="Computer description"
                        name="description"
                        onChange={handleInputChanges}
                        variant="bordered"
                        className="row-span-2 h-full"
                        maxRows={4}
                    />
                    <Input
                        label="Computer image url"
                        required
                        name="image"
                        onChange={handleInputChanges}
                        variant="bordered"
                    />
                    <Select
                        label="Select the category"
                        required
                        name="type"
                        onChange={handleInputChanges}
                        variant="bordered"
                    >
                        <SelectItem
                            startContent={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M1 20q-.425 0-.712-.288T0 19q0-.425.288-.712T1 18h1V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v13h1q.425 0 .713.288T24 19q0 .425-.288.713T23 20zm9.5-2h3q.2 0 .35-.15t.15-.35q0-.2-.15-.35T13.5 17h-3q-.2 0-.35.15t-.15.35q0 .2.15.35t.35.15M4 15h16V5H4zm8-5"
                                    />
                                </svg>
                            }
                            key={"Laptop"}
                            value="Laptop"
                        >
                            Laptop
                        </SelectItem>
                        <SelectItem
                            startContent={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 14 14"
                                >
                                    <g
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M.5 6.5v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1m2.5 7h3m-1.5 0v-2" />
                                        <path d="M7.5 3.5V3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H9" />
                                        <path d="M11.375 4.875a.125.125 0 1 1 0-.25m0 .25a.125.125 0 1 0 0-.25M10.5 7h3" />
                                    </g>
                                </svg>
                            }
                            key={"Desktop"}
                            value="Desktop"
                        >
                            Desktop
                        </SelectItem>
                    </Select>
                    <Input
                        label="Computer stock"
                        name="stock"
                        required
                        onChange={handleInputChanges}
                        variant="bordered"
                    />
                </div>
            </div>
            <div className={styles.hardware}>
                <Input
                    label="CPU"
                    name="CPUModel"
                    onChange={handleInputChanges}
                    variant="bordered"
                />
                <Input
                    label="CPU Speed"
                    name="CPUSpeed"
                    onChange={handleInputChanges}
                    variant="bordered"
                />
                <Input
                    label="GPU"
                    name="GPU"
                    onChange={handleInputChanges}
                    variant="bordered"
                />
                <Input
                    label="RAM"
                    name="RAM"
                    onChange={handleInputChanges}
                    variant="bordered"
                />
                <Input
                    label="Storage"
                    name="storage"
                    onChange={handleInputChanges}
                    variant="bordered"
                />
                <Input
                    label="Display size"
                    name="displaySize"
                    onChange={handleInputChanges}
                    variant="bordered"
                />
                <Input
                    label="Display resolution"
                    name="displayResolution"
                    onChange={handleInputChanges}
                    variant="bordered"
                />
                <Input 
                    label='Stripe price ID'
                    name='stripePriceId'
                    onChange={handleInputChanges}
                    variant='bordered'
                />
            </div>
            <Button color="success" variant="faded" onClick={handleSubmit}>
                Create
            </Button>
            <ToastContainer position="bottom-right" autoClose={3000} />
        </div>
    );
}
