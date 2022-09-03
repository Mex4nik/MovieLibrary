import Router from "express";
import MovieController from "../controllers/MovieController.js";

const movieRouter = new Router();

movieRouter.post('/movie', MovieController.create)
movieRouter.get('/movie/:id', MovieController.getOne)
movieRouter.get('/movie', MovieController.getAll)
movieRouter.delete('/movie/:id', MovieController.delete)

export default movieRouter;