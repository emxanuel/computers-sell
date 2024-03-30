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

computersRouter.get("/", auth, getAllComputers);
computersRouter.get("/types", getComputersType);
computersRouter.get("/types/:type", getAllComputersByType);

computersRouter.get('/insert', (req, res) => {
    axios.post("https://api.techspecs.io/v4/all/products", {
        category: ["Laptops"]
    }, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImN1c19Qb2xRMFZ5a2JPdnFkSCIsIm1vZXNpZlByaWNpbmdJZCI6InByaWNlXzFNUXF5dkJESWxQbVVQcE1SWUVWdnlLZSIsImlhdCI6MTcxMTU4OTgxNH0.uRiDcMO4nFVUjm6gkk0JaLbjqaGTN_KbLj6OGlmMdXU"
        }
    }).then((response) => {
        const products = response.data.data.items;
        // const result = products.map((product: any) => {
        //   return {
        //     name: product.product.name,
        //     brand: product.product.brand,
        //     hardware: {
        //       CPU: product.product.cpu,
        //       GPU: product.product.gpu,
        //       RAM: product.product.ram,
        //       storage: product.product.storage,
        //       display: {
        //         size: product.product.display.size,
        //         resolution: product.product.display.resolution,
        //       },
        //     },
        //     weight: product.product.weight,
        //     price: product.product.price,
        //     OS: product.product.os,
        //     stock: product.product.stock,
        //     description: product.product.description,
        //     type: "Laptop",
        //     image: product.image.thumbnail
        //   };  
        // })
        res.json(products);
    }).catch((error) => {
        res.json({ error: error.message });
    })

})
computersRouter.get("/:id", getComputer);


export default computersRouter;
