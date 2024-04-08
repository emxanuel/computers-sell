"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../controllers/users");
const auth_1 = require("../middlewares/auth");
const usersRouter = (0, express_1.Router)();
usersRouter.get('/', auth_1.adminAuth, users_1.getAllUsers);
usersRouter.post('/', users_1.createUser);
exports.default = usersRouter;
