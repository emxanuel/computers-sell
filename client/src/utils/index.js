import createWebStorage from "redux-persist/lib/storage/createWebStorage";

export const links = [
    {
        href: "/desktop",
        label: "Desktops",
        labelMobile: (
            <div className="flex items-center gap-2">
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
                Desktop
            </div>
        ),
    },
    {
        href: "/laptop",
        label: "Laptops",
        labelMobile: (
            <div className="flex items-center gap-2">
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
                Laptops
            </div>
        ),
    },
    {
        href: "/contact",
        label: "Contact",
        labelMobile: (
            <div className="flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 2048 2048"
                >
                    <path
                        fill="currentColor"
                        d="M2048 1484q0 54-20 102t-58 87l-370 369l-370-369q-38-38-58-86t-20-103q0-55 21-104t57-85t84-58t105-21q50 0 97 17t84 53q38-35 84-52t97-18q56 0 104 21t85 57t57 86t21 104m-128 0q0-29-11-54t-30-45t-44-30t-55-11q-57 0-98 41l-82 82l-82-82q-20-20-45-30t-53-11q-29 0-54 11t-45 30t-30 44t-11 55q0 57 41 98l279 279l279-279q41-41 41-98m-768-332q-87-65-181-96t-203-32q-134 0-251 49t-203 136t-136 204t-50 251H0q0-121 35-232t100-206t156-166t206-115q-55-34-99-82t-76-104t-49-119t-17-128q0-106 40-199t110-162T569 41T768 0q106 0 199 40t162 110t110 163t41 199q0 65-17 127t-48 119t-76 105t-100 82q66 23 121 58t109 82q-33 11-61 28t-56 39m0-640q0-79-30-148t-83-122t-122-83t-149-31q-79 0-148 30t-122 83t-83 122t-31 149q0 79 30 148t83 122t122 83t149 31q79 0 148-30t122-83t83-122t31-149"
                    />
                </svg>
                Contact
            </div>
        ),
    },
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