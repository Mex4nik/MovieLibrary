import Movie, { movieConfig } from "../models/MovieModel.js";
import Star from "../models/StarModel.js";
import StarSevice from "./StarSevice.js";
import validator from 'validator';
import { stringValidation, validationTypes } from "../configs/validations.js";
import { ascendedSort } from "../configs/sort.js";

class MovieService {
	async create(movie) {
		// Validations
		if (!validator.isAfter(movie.releaseDate, movieConfig.isAfter)) throw new Error("Movie should be released after 1900")
		if (!validator.isBefore(movie.releaseDate, movieConfig.isBefore)) throw new Error("Movie should be released before 2022")
		if (!movie.stars) throw new Error("stars field are mandatory")

		stringValidation(movie.title, validationTypes.Movie);
		stringValidation(movie.stars, validationTypes.Star);

		const movieWithSameTitle = await this.getAll({title: movie.title});
		if (movieWithSameTitle.length) throw new Error("Movie with this title already exists. You can't create this movie again")

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

			const newMovies = [];
			for (let movie of movies) {
				newMovies.push(movie.dataValues)
			}

			movies = ascendedSort(newMovies, 'title')
		} else {
			movies = await Movie.findAll({ include: Star });
		}

		return movies;
	}

	async update(movie) {
		if (!movie.id) throw new Error("Id is not specified");

		if (!validator.isAfter(movie.releaseDate, movieConfig.isAfter)) throw new Error("Movie should be released after 1900")
		if (!validator.isBefore(movie.releaseDate, movieConfig.isBefore)) throw new Error("Movie should be released before 2022")
		if (!movie.stars) throw new Error("stars field are mandatory")

		stringValidation(movie.title);
		stringValidation(movie.stars);

		await this.delete(movie.id);
		const createdMovie = await this.create(movie);

		/* Not working because Stars are still not updated
			// movie.Stars = movie.stars;

			// const prevMovie = await this.getOne(movie.id);
			// if (!prevMovie) throw new Error("The movie is not found")

			// if (movie.stars) movie.Stars = StarSevice.prepareMany(movie.stars);
			// const updatedMovie = await prevMovie.update(movie, { where: { id: movie.id }});
		*/
		return createdMovie;
	}

	async delete(id) {
		if (!id) throw new Error("Id is not specified");
		const movie = await Movie.destroy({ where: { id } })
		return movie;
	}
}

export default new MovieService();
