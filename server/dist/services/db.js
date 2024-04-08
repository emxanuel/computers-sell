"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const mongoose_1 = __importDefault(require("mongoose"));
const DB_URI = process.env.MONGO_DB_URI || "";
module.exports = () => {
    mongoose_1.default.Promise = Promise;
    mongoose_1.default.connect(DB_URI).then(() => console.log('database connected'));
    mongoose_1.default.connection.on('error', (err) => {
        console.log('Mongoose connection error: ' + err);
    });
};
