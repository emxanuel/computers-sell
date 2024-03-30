import mongoose from "mongoose";
import { TUser } from "../index.d";

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: "user" },
});

export const UserModel =  mongoose.model<TUser>("users", userSchema);
export const getUsers = () => UserModel.find();
export const getUserByEmail = (email: string) => UserModel.findOne({
    email
});
export const addUser = (user: TUser) => new UserModel(user).save();
export const verifyUser = (email: string, password: string) => UserModel.findOne({
    email,
    password
});
export const verifyUserById = (id: string) => UserModel.findById(id);