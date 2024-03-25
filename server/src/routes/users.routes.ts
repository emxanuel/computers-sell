import { Router } from "express";
import { createUser, getAllUsers } from "../controllers/users";
import { adminAuth, auth } from "../middlewares/auth";

const usersRouter = Router();

usersRouter.get('/', adminAuth, getAllUsers)
usersRouter.post('/', createUser)

export default usersRouter;