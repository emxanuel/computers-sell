import { api } from "@/utils/server";

export const getComputers = async () => {
    try {
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