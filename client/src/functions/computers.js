import { convertToDatabaseComputer } from "@/utils";
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
        const computer = convertToDatabaseComputer(data);

        console.log(computer)
        const response = await api.post("/computers", computer);
        return response.data;
    } catch (error) {
        console.error(error);
        return error;
    }
}