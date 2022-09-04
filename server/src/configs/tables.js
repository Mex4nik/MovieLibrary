import db from './db.js'
import Movie from "../models/MovieModel.js";
import Star from '../models/StarModel.js';
import StarMovie from '../models/StarMovieModel.js';

db.Movie = Movie;
db.Star = Star;
db.StarMovie = StarMovie;

db.sequelize.sync();

const tables = ''; 
export default tables;