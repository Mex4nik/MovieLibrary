import db from "../configs/db.js";
import Movie from "./MovieModel.js";
import Star from "./StarModel.js";

const sequelize = db.sequelize;

const StarMovie = sequelize.define('Star_Movie', {}, { timestamps: false });

Star.belongsToMany(Movie, { through: StarMovie });
Movie.belongsToMany(Star, { through: StarMovie });

export default StarMovie;