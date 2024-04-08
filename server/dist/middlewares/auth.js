"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminAuth = exports.auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const users_1 = require("../models/users");
const secret = process.env.AUTH_TOKEN_SECRET && process.env.AUTH_TOKEN_SECRET || '';
const auth = (req, res, next) => {
    const token = /*req.cookies.accessToken as string ||*/ req.headers.authorization?.startsWith('Bearer') && req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    jsonwebtoken_1.default.verify(token, secret, (err, data) => {
        if (err) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        const d = data;
        const user = (0, users_1.verifyUserById)(d.id);
        if (!user) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        next();
    });
};
exports.auth = auth;
const adminAuth = (req, res, next) => {
    const token = req.cookies.accessToken || req.headers.authorization?.startsWith('Bearer') && req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    jsonwebtoken_1.default.verify(token, secret, async (err, data) => {
        if (err) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        const d = data;
        const user = await (0, users_1.verifyUserById)(d.id);
        if (user?.role !== 'admin') {
            return res.status(403).json({ message: 'Forbidden' });
        }
        next();
    });
};
exports.adminAuth = adminAuth;
