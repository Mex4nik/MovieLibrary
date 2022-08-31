import express from "express";
import dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.APP_ENV}` })

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json()) 

app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`))