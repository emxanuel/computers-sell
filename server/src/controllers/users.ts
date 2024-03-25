import { Request, Response } from "express";
import { addUser, getUsers } from "../models/users";
import { hash } from "../utils";

export const createUser = async (req: Request, res: Response) => {
    const { email, password, firstName, lastName, role } = req.body;

    if (!email || !password || !firstName || !lastName || !role) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const hashedPassword = await hash(password);

    try {
        await addUser({
            email,
            password: hashedPassword,
            firstName,
            lastName,
            role,
        });
        res.status(201).json({ message: "User created" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await getUsers();
        res.json(users);
    } catch (e) {
        res.json({ error: e });
    }
};
