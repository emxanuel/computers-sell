import createWebStorage from "redux-persist/lib/storage/createWebStorage";

export const links = [
    { href: "/", label: "Home" },
    { href: "/desktop", label: "Desktop PCs" },
    { href: "/laptop", label: "Laptops" },
    { href: "/contact", label: "Contact" },
];

export const isClient = typeof window !== "undefined";

const createNoopStorage = () => {
    return {
        getItem(_key) {
            return Promise.resolve(null);
        },
        setItem(_key, value) {
            return Promise.resolve(value);
        },
        removeItem(_key) {
            return Promise.resolve();
        },
    };
};

export const storage = isClient
    ? createWebStorage("local")
    : createNoopStorage();

export const convertToDatabaseComputer = (data) => ({
    name: data.name,
    brand: data.brand,
    price: data.price,
    type: data.type,
    stock: data.stock,
    description: data.description,
    image: data.image,
    weight: data.weight,
    OS: data.OS,
    hardware: {
        CPU: {
            model: data.CPUModel,
            speed: data.CPUSpeed,
        },
        GPU: data.GPU,
        RAM: data.RAM,
        storage: data.storage,
        display: {
            size: data.displaySize,
            resolution: data.displayResolution,
        },
    },
});
