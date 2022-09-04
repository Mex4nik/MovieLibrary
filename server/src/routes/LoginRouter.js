import Router from "express";
import LoginController from "../controllers/LoginController.js";

const loginRouter = new Router();

loginRouter.post('/login', LoginController.login)

export default loginRouter;