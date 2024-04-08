import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { verifyUser } from "../models/users";
import { hash } from "../utils";

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res
            .status(400)
            .json({ message: "Email and password are required" });
    }

    const user = await verifyUser(email, hash(password));
    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const accessToken = jwt.sign(
        {
            id: user._id,
            email,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
        },
        process.env.AUTH_TOKEN_SECRET || ""
    );
    res.header('Set-Cookie', `accessToken=${accessToken}; HttpOnly; SameSite=None; Secure`);
    res.status(200).json({
        user,
    });
};
