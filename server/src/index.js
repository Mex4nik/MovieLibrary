import express from "express";
import dotenv from 'dotenv';
import movieRouter from "./routes/MovieRouter.js";
import db from "./configs/db.js";
import tables from './configs/tables.js'

dotenv.config({ path: `.env.${process.env.APP_ENV}` })

const sequelize = db.sequelize;

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json()) 
app.use(movieRouter);

async function startApp() {
    try {
        await sequelize.authenticate();
        app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

startApp()