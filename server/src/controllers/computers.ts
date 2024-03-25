import { Request, Response } from "express";
import { getComputers, getComputerById, getTypes, getComputersByType } from "../models/computers";

export const getAllComputers = async (_: Request, res: Response) => {
    try{
        const computers = await getComputers();
        res.json(computers);
    } catch(e){
        res.json({error: e})
    }
};

export const getComputer = async (req: Request, res: Response) => {
    const {id} = req.params;
    try{
        const computer = await getComputerById(id);
        res.json(computer);
    }catch(e){
        res.json({error: e})
    }
}

export const getComputersType = async (_: Request, res: Response) => {
    try{
        const types = await getTypes();
        res.json(types);
    }catch(e){
        res.json({error: e})
    }
};

export const getAllComputersByType = async (req: Request, res: Response) => {
    const {type} = req.params;
    try{
        const computers = await getComputersByType(type);
        res.json(computers);
    }catch(e){
        res.json({error: e})
    }
}
