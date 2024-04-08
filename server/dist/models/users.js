"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyUserById = exports.verifyUser = exports.addUser = exports.getUserByEmail = exports.getUsers = exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: "user" },
});
exports.UserModel = mongoose_1.default.model("users", userSchema);
const getUsers = () => exports.UserModel.find();
exports.getUsers = getUsers;
const getUserByEmail = (email) => exports.UserModel.findOne({
    email
});
exports.getUserByEmail = getUserByEmail;
const addUser = (user) => new exports.UserModel(user).save();
exports.addUser = addUser;
const verifyUser = (email, password) => exports.UserModel.findOne({
    email,
    password
});
exports.verifyUser = verifyUser;
const verifyUserById = (id) => exports.UserModel.findById(id);
exports.verifyUserById = verifyUserById;
