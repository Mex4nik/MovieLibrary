import Router from "express";
import UserController from "../controllers/UserController.js";

const userRouter = new Router();

userRouter.post('/user', UserController.create)
userRouter.get('/user/:id', UserController.getOne)
userRouter.get('/user', UserController.getAll)

export default userRouter;