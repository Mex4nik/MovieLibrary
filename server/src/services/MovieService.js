import Movie, { movieConfig } from "../models/MovieModel.js";
import Star from "../models/StarModel.js";
import StarSevice from "./StarSevice.js";
import validator from 'validator';

class MovieService {
	async create(movie) {
		if (!validator.isAfter(movie.releaseDate, movieConfig.isAfter)) throw new Error("Movie should be released after 1900")
		if (!validator.isBefore(movie.releaseDate, movieConfig.isBefore)) throw new Error("Movie should be released before 2022")

		if (movie.stars) movie.Stars = StarSevice.prepareMany(movie.stars);

		const createdMovie = await Movie.create(movie, { include: Star });	
		return createdMovie;
	}

	async getOne(id) {
		if (!id) throw new Error("Id is not specified");
		const movie = await Movie.findOne({ where: { id }, include: Star });
		return movie;
	}

	async getAll(query) {
		let movies = null;

		if (query.title) {
			movies = await Movie.findAll({ where: { title: query.title }, include: Star });
		} else if (query.star) {
			movies = await Movie.findAll({ 
				include: {
					model: Star,
					where: { firstName: query.star }
				}
			});
		} else if (query.sort) {
			movies = await Movie.findAll({
				order: [
					['title', 'ASC'],
				], 
				include: Star 
			});
		} else {
			movies = await Movie.findAll({ include: Star });
		}

		return movies;
	}

	async delete(id) {
		if (!id) throw new Error("Id is not specified");
		const movie = await Movie.destroy({ where: { id } })
		return movie;
	}
}

export default new MovieService();
