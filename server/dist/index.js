"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const db_1 = __importDefault(require("./services/db"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const PORT = process.env.PORT || 80;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((_, res, next) => {
    res.header('Access-Control-Allow-Origin', process.env.SITE);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});
app.use('/', index_routes_1.default);
app.use(express_1.default.urlencoded({ extended: false }));
(0, db_1.default)();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
