import Router from "express";
import { authenticateJWT } from "../configs/auth.js";
import MovieController from "../controllers/MovieController.js";

const movieRouter = new Router();

movieRouter.post('/movie', authenticateJWT, MovieController.create)
movieRouter.get('/movie/:id', authenticateJWT, MovieController.getOne)
movieRouter.get('/movie', authenticateJWT, MovieController.getAll)
movieRouter.delete('/movie/:id', authenticateJWT, MovieController.delete)

export default movieRouter;