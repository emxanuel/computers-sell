import type { TComputers } from "../index.d";
import mongoose from "mongoose";

const computerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    hardware: {
        CPU: {
            type: {
                model: { type: String, required: true },
                speed: { type: String, required: false },
            }
        },
        GPU: { type: String, required: true },
        RAM: { type: String, required: true },
        storage: { type: String, required: true },
        display: {
            size: { type: String },
            resolution: { type: String },
        }
    },
    weight: { type: String },
    price: { type: Number, required: true },
    OS: { type: String, required: true },
    stock: { type: Number, default: 0 },
    description: { type: String },
    type: { type: String, required: true },
    image: { type: String, required: true }
});

export const ComputerModel = mongoose.model<TComputers>("computers", computerSchema);
export const getComputers = () => ComputerModel.find();
export const getComputerById = (id: string) => ComputerModel.findById(id);
export const addComputer = (computer: TComputers) => new ComputerModel(computer).save();
export const updateComputer = (id: string, computer: TComputers) => ComputerModel.findByIdAndUpdate(id, computer);
export const getTypes = () => ComputerModel.find().distinct("type");
export const getComputersByType = (type: string) => ComputerModel.find({ type });
export const addManyComputers = (computers: TComputers[]) => ComputerModel.insertMany(computers);
export const getComputerByBrand = (brand: string) => ComputerModel.find({
    brand
});
export const getComputerBetweenPrice = (min: number, max: number) => ComputerModel.find({
    price: { $gte: min, $lte: max }
});
