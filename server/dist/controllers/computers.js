"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllComputersByBrand = exports.getComputersBrand = exports.updateComputerData = exports.reduceStock = exports.createComputer = exports.getAllComputersByType = exports.getComputersType = exports.getComputer = exports.getAllComputers = void 0;
const computers_1 = require("../models/computers");
const computers_2 = require("../models/computers");
const getAllComputers = async (req, res) => {
    try {
        const { category, q } = req.query;
        const { filters, query } = JSON.parse(q || "{}");
        const conditions = {};
        if (category) {
            const computers = await (0, computers_1.getComputersByType)(category);
            res.json(computers);
            return;
        }
        filters != null && Object.entries(filters)?.map(([entry, value]) => {
            if (entry === 'priceRange' && value != null)
                conditions.price = { $gte: value[0], $lte: value[1] };
            else if (entry === 'brands' && value != null && value.length > 0)
                conditions.brand = { $in: value };
            else if (entry === 'type' && value !== '')
                conditions.type = value;
            else if (entry === 'query' && value !== '')
                conditions.name = { $regex: value, $options: 'i' };
        });
        query !== '' && query != null && (conditions.name = { $regex: query, $options: 'i' });
        const computers = await computers_2.ComputerModel.find(conditions);
        res.json(computers);
    }
    catch (error) {
        console.log(error);
        res.json({ error });
    }
};
exports.getAllComputers = getAllComputers;
const getComputer = async (req, res) => {
    const { id } = req.params;
    try {
        const computer = await (0, computers_1.getComputerById)(id);
        res.json(computer);
    }
    catch (e) {
        res.json({ error: e });
    }
};
exports.getComputer = getComputer;
const getComputersType = async (_, res) => {
    try {
        const types = await (0, computers_1.getTypes)();
        res.json(types);
    }
    catch (e) {
        res.json({ error: e });
    }
};
exports.getComputersType = getComputersType;
const getAllComputersByType = async (req, res) => {
    const { type } = req.params;
    try {
        const computers = await (0, computers_1.getComputersByType)(type);
        res.json(computers);
    }
    catch (e) {
        res.json({ error: e });
    }
};
exports.getAllComputersByType = getAllComputersByType;
const createComputer = async (req, res) => {
    const computer = req.body;
    try {
        console.log(computer);
        await (0, computers_1.addComputer)(computer);
        res.json({ message: "Computer added" });
    }
    catch (e) {
        console.log(e);
        res.json({ error: e });
    }
};
exports.createComputer = createComputer;
const reduceStock = async (req, res) => {
    const { id } = req.params;
    const { quantity } = req.body;
    try {
        const computer = await (0, computers_1.getComputerById)(id);
        if (!computer) {
            res.json({ message: "Computer not found" });
            return;
        }
        if ((computer.stock ?? 0) < quantity) {
            res.json({ message: "Not enough stock" });
            return;
        }
        await (0, computers_1.updateComputer)(id, {
            ...computer,
            stock: (computer.stock ?? 0) - quantity,
        });
        res.json({ message: "Stock updated" });
    }
    catch (e) {
        res.json({ error: e });
    }
};
exports.reduceStock = reduceStock;
const updateComputerData = async (req, res) => {
    const { id } = req.params;
    const computer = req.body;
    try {
        await (0, computers_1.updateComputer)(id, computer);
        res.json({ message: "Computer updated" });
    }
    catch (e) {
        res.json({ error: e });
    }
};
exports.updateComputerData = updateComputerData;
const getComputersBrand = async (req, res) => {
    try {
        const computers = await (0, computers_1.getBrands)();
        res.json(computers);
    }
    catch (e) {
        res.json({ error: e });
    }
};
exports.getComputersBrand = getComputersBrand;
const getAllComputersByBrand = async (req, res) => {
    const { brand } = req.params;
    try {
        const computers = await (0, computers_1.getComputerByBrand)(brand);
        res.json(computers);
    }
    catch (e) {
        res.json({ error: e });
    }
};
exports.getAllComputersByBrand = getAllComputersByBrand;
