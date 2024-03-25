import mongoose from "mongoose";

const DB_URI = process.env.MONGO_DB_URI || "";

export = () => {
    mongoose.Promise = Promise;
    mongoose.connect(DB_URI).then(() => console.log('database connected'))
    mongoose.connection.on('error', (err) => {
        console.log('Mongoose connection error: ' + err);
    });
};