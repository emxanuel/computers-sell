import { Request, Response } from "express";
import { getComputers, getComputerById, getTypes, getComputersByType, addComputer } from "../models/computers";

export const getAllComputers = async (req: Request, res: Response) => {
    try{
        const {category} = req.query;
        if(category){
            const computers = await getComputersByType(category as string);
            res.json(computers);
            return;
        }
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

export const createComputer = async (req: Request, res: Response) => {
    const computer = req.body;
    try{
        console.log(computer)
        await addComputer(computer);
        res.json({message: "Computer added"});
    }catch(e){
        console.log(e)
        res.json({error: e})
    }
}