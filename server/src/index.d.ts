export type TUser = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
}

export type TComputers = {
    name: string;
    brand: string;
    hardware: {
        CPU: string;
        GPU: string;
        RAM: string;
        storage: string;
        display: {
            size?: string;
            resolution?: string;
        }
    },
    weight?: string;
    price: number;
    OS: string;
    stock?: number;
    description?: string;
    type: string;
    image: string;
    stripePriceId: string;
}