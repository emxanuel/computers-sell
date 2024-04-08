"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = exports.createUser = void 0;
const users_1 = require("../models/users");
const utils_1 = require("../utils");
const createUser = async (req, res) => {
    const { email, password, firstName, lastName, role } = req.body;
    if (!email || !password || !firstName || !lastName || !role) {
        return res.status(400).json({ message: "All fields are required" });
    }
    const hashedPassword = await (0, utils_1.hash)(password);
    try {
        await (0, users_1.addUser)({
            email,
            password: hashedPassword,
            firstName,
            lastName,
            role,
        });
        res.status(201).json({ message: "User created" });
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};
exports.createUser = createUser;
const getAllUsers = async (req, res) => {
    try {
        const users = await (0, users_1.getUsers)();
        res.json(users);
    }
    catch (e) {
        res.json({ error: e });
    }
};
exports.getAllUsers = getAllUsers;
