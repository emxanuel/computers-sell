import { api } from "@/utils/server";

export const getComputers = async (category) => {
    try {
        if (category) {
            const response = await api.get(`/computers?category=${category}`);
            return response.data;
        }
        const response = await api.get("/computers");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getComputer = async (id) => {
    try {
        const response = await api.get(`/computers/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const createComputer = async (data) => {
    try {
        const computer = {
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
        }

        console.log(computer)
        const response = await api.post("/computers", computer);
        return response.data;
    } catch (error) {
        console.error(error);
        return error;
    }
}