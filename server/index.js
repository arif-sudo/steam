import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import dotenv from "dotenv"
import mongoose from 'mongoose';
import router from './router/index.js';
import errorMiddleware from './middlewares/error-middleware.js';
const app = express();

dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));
app.use("/api", router)
app.use(errorMiddleware)


const PORT =  process.env.PORT || 5000;
const start = async() => {
    try{
        console.log(PORT)
        console.log(process.env.DB_URL);
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        } )
        app.listen(PORT, () => console.log(`Server started on port = ${PORT}`))
    }catch(err){
        console.log(err);
    }
}
console.log('ok?')

start()