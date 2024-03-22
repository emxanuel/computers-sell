import express from 'express';
import cors from 'cors';
const PORT = process.env.PORT || 80;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());

app.listen(() => {
    console.log(`Server is running on port ${PORT}`);
})