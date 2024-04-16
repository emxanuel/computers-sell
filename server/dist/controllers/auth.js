"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const users_1 = require("../models/users");
const utils_1 = require("../utils");
const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res
            .status(400)
            .json({ message: "Email and password are required" });
    }
    const user = await (0, users_1.verifyUser)(email, (0, utils_1.hash)(password));
    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }
    const accessToken = jsonwebtoken_1.default.sign({
        id: user._id,
        email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
    }, process.env.AUTH_TOKEN_SECRET || "");
    res.cookie('accessToken', accessToken, { sameSite: 'none', secure: true });
    res.status(200).json({
        user,
    });
};
exports.login = login;
