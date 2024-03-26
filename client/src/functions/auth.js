import { api } from "@/utils/server";

export const login = async (email, password) => {
    try {
        const response = await api.post("/auth/login", {
            email,
            password,
        });
        console.log(response.headers);
        return response.data.user;
    } catch (e) {
        console.log(e.response.data);
        return e.response.data
    }
};
