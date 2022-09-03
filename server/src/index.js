import express from "express";
import dotenv from 'dotenv';
import movieRouter from "./routes/MovieRouter.js";
import { Sequelize } from 'sequelize'

dotenv.config({ path: `.env.${process.env.APP_ENV}` })

const sequelize = new Sequelize('sqlite::memory:')

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json()) 
app.use(movieRouter);


async function startApp() {
    try {
        await sequelize.authenticate();
        console.log('All models', sequelize.models)
        app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

startApp()