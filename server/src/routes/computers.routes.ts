import { Router } from "express";
import {
    getComputersType,
    getAllComputers,
    getComputer,
    getAllComputersByType,
    createComputer,
    
} from "../controllers/computers";
import { adminAuth } from "../middlewares/auth";
import axios from "axios";

const computersRouter = Router();

computersRouter.get("/", getAllComputers);
computersRouter.get("/types", getComputersType);
computersRouter.get("/types/:type", getAllComputersByType);
computersRouter.get("/:id", getComputer);
computersRouter.post('/', adminAuth, createComputer)


export default computersRouter;
