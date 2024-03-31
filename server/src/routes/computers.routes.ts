import { Router } from "express";
import {
    getComputersType,
    getAllComputers,
    getComputer,
    getAllComputersByType,
} from "../controllers/computers";
import { auth } from "../middlewares/auth";
import axios from "axios";

const computersRouter = Router();

computersRouter.get("/", getAllComputers);
computersRouter.get("/types", getComputersType);
computersRouter.get("/types/:type", getAllComputersByType);
computersRouter.get("/:id", getComputer);


export default computersRouter;
