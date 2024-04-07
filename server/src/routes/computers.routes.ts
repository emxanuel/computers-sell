import { Router } from "express";
import {
    getComputersType,
    getAllComputers,
    getComputer,
    getAllComputersByType,
    createComputer,
    updateComputerData,
    reduceStock,
    getComputersBrand,
    getAllComputersByBrand
} from "../controllers/computers";
import { adminAuth, auth } from "../middlewares/auth";
import axios from "axios";

const computersRouter = Router();

computersRouter.get("/", getAllComputers);
computersRouter.get("/types", getComputersType);
computersRouter.get("/types/:type", getAllComputersByType);
computersRouter.get('/brands', getComputersBrand)
computersRouter.get('/brands/:brand', getAllComputersByBrand)
computersRouter.post('/', adminAuth, createComputer)
computersRouter.put('/reduce/:id', auth, reduceStock)
computersRouter.put('/:id', adminAuth, updateComputerData)
computersRouter.get("/:id", getComputer);


export default computersRouter;
