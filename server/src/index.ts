import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import connectDB  from './services/db';
import router from './routes/index.routes';
const PORT = process.env.PORT || 80;

const app = express();
app.use(express.json());
app.use(cors());
app.use('/', router);
app.use(express.urlencoded({ extended: false }))

connectDB()
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})