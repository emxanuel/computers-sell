import express, {Request, Response, NextFunction} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import connectDB  from './services/db';
import router from './routes/index.routes';
const PORT = process.env.PORT || 80;

const app = express();
app.use(express.json());
app.use((_: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});
app.use('/', router);
app.use(express.urlencoded({ extended: false }))

connectDB()
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})