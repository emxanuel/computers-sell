import { convertToDatabaseComputer } from "@/utils";
import { api } from "@/utils/server";

export const getComputers = async (category, searchParams, controller) => {
    try {
        console.log(category && searchParams, category, searchParams)
        if (category && searchParams){
            const response = await api.get(`/computers?category=${category}&q=${JSON.stringify(searchParams)}`);
            return response.data;
        }
        else if (category){
            const response = await api.get(`/computers?category=${category}`);
            return response.data;
        }
        else if (searchParams){
            const response = await api.get(`/computers?q=${JSON.stringify(searchParams)}`);
            return response.data;
        }
        else{
            const response = await api.get("/computers");
            return response.data;
        }
    } catch (error) {
        console.error(error);
    }
};

export const getComputer = async (id) => {
    try {
        const response = await api.get(`/computers/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const createComputer = async (data) => {
    try {
        const computer = convertToDatabaseComputer(data);
        const response = await api.post("/computers", computer);
        return response.data;
    } catch (error) {
        console.error(error);
        return error;
    }
};


export const getComputersBrand = async () => {
    try{
        const response = await api.get("/computers/brands");
        return response.data;
    }catch(error){
        console.error(error);
    }
}