import { Router } from "express";
import computersRouter from "./computers.routes";
import authRouter from "./auth.routes";
import usersRouter from "./users.routes";

const router = Router();
router.get('/api', (_, res) => {
    res.send('Hello World');
})
router.use('/api/computers', computersRouter)
router.use('/api/auth', authRouter)
router.use('/api/users', usersRouter)

export default router;