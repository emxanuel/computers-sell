import { Router } from "express";
import {
    getComputersType,
    getAllComputers,
    getComputer,
    getAllComputersByType,
    createComputer,
    updateComputerData,
    reduceStock
} from "../controllers/computers";
import { adminAuth, auth } from "../middlewares/auth";
import axios from "axios";

const computersRouter = Router();

computersRouter.get("/", getAllComputers);
computersRouter.get("/types", getComputersType);
computersRouter.get("/types/:type", getAllComputersByType);
computersRouter.get("/:id", getComputer);
computersRouter.post('/', adminAuth, createComputer)
computersRouter.put('/reduce/:id', auth, reduceStock)
computersRouter.put('/:id', adminAuth, updateComputerData)


export default computersRouter;
