"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBrands = exports.getComputerBetweenPrice = exports.getComputerByBrand = exports.addManyComputers = exports.getComputersByType = exports.getTypes = exports.updateComputer = exports.addComputer = exports.getComputerById = exports.getComputers = exports.ComputerModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const computerSchema = new mongoose_1.default.Schema({
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
    image: { type: String, required: true },
    stripePriceId: { type: String, required: true }
});
exports.ComputerModel = mongoose_1.default.model("computers", computerSchema);
const getComputers = () => exports.ComputerModel.find();
exports.getComputers = getComputers;
const getComputerById = (id) => exports.ComputerModel.findById(id);
exports.getComputerById = getComputerById;
const addComputer = (computer) => new exports.ComputerModel(computer).save();
exports.addComputer = addComputer;
const updateComputer = (id, computer) => exports.ComputerModel.findByIdAndUpdate(id, computer);
exports.updateComputer = updateComputer;
const getTypes = () => exports.ComputerModel.find().distinct("type");
exports.getTypes = getTypes;
const getComputersByType = (type) => exports.ComputerModel.find({ type });
exports.getComputersByType = getComputersByType;
const addManyComputers = (computers) => exports.ComputerModel.insertMany(computers);
exports.addManyComputers = addManyComputers;
const getComputerByBrand = (brand) => exports.ComputerModel.find({
    brand
});
exports.getComputerByBrand = getComputerByBrand;
const getComputerBetweenPrice = (min, max) => exports.ComputerModel.find({
    price: { $gte: min, $lte: max }
});
exports.getComputerBetweenPrice = getComputerBetweenPrice;
const getBrands = () => exports.ComputerModel.find().distinct("brand");
exports.getBrands = getBrands;
