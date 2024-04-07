import { Request, Response } from "express";
import {
    getComputers,
    getComputerById,
    getTypes,
    getComputersByType,
    addComputer,
    updateComputer,
    getBrands,
    getComputerByBrand,
} from "../models/computers";
import { ComputerModel } from "../models/computers";

export const getAllComputers = async (req: Request, res: Response) => {
    try {
        const { category, q } = req.query;
        const { filters, query } = JSON.parse((q as string) || "{}");
        const conditions: any = {};

        if(category){
            const computers = await getComputersByType(category as string);
            res.json(computers);
            return;
        }
        
        filters != null && Object.entries(filters)?.map(([entry, value]: [string, any]) => {
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
        
        const computers = await ComputerModel.find(conditions);
        res.json(computers);
    } catch (error) {
        console.log(error);
        res.json({ error });
    }
};

export const getComputer = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const computer = await getComputerById(id);
        res.json(computer);
    } catch (e) {
        res.json({ error: e });
    }
};

export const getComputersType = async (_: Request, res: Response) => {
    try {
        const types = await getTypes();
        res.json(types);
    } catch (e) {
        res.json({ error: e });
    }
};

export const getAllComputersByType = async (req: Request, res: Response) => {
    const { type } = req.params;
    try {
        const computers = await getComputersByType(type);
        res.json(computers);
    } catch (e) {
        res.json({ error: e });
    }
};

export const createComputer = async (req: Request, res: Response) => {
    const computer = req.body;
    try {
        console.log(computer);
        await addComputer(computer);
        res.json({ message: "Computer added" });
    } catch (e) {
        console.log(e);
        res.json({ error: e });
    }
};

export const reduceStock = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { quantity } = req.body;
    try {
        const computer = await getComputerById(id);
        if (!computer) {
            res.json({ message: "Computer not found" });
            return;
        }
        if ((computer.stock ?? 0) < quantity) {
            res.json({ message: "Not enough stock" });
            return;
        }
        await updateComputer(id, {
            ...computer,
            stock: (computer.stock ?? 0) - quantity,
        });
        res.json({ message: "Stock updated" });
    } catch (e) {
        res.json({ error: e });
    }
};

export const updateComputerData = async (req: Request, res: Response) => {
    const { id } = req.params;
    const computer = req.body;
    try {
        await updateComputer(id, computer);
        res.json({ message: "Computer updated" });
    } catch (e) {
        res.json({ error: e });
    }
};

export const getComputersBrand = async (req: Request, res: Response) => {
    try {
        const computers = await getBrands();
        res.json(computers);
    } catch (e) {
        res.json({ error: e });
    }
};

export const getAllComputersByBrand = async (req: Request, res: Response) => {
    const { brand } = req.params;
    try {
        const computers = await getComputerByBrand(brand);
        res.json(computers);
    } catch (e) {
        res.json({ error: e });
    }
};
