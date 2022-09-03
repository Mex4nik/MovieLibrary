import Movie from "../models/MovieModel.js";

class MovieService {
	async create(movie) {
		const createdMovie = await Movie.create(movie);
		return createdMovie;
	}

	async getOne(id) {
		if (!id) throw new Error("Id is not specified");
		console.log(id);
		const movie = await Movie.findOne({ where: { id } });
		return movie;
	}

	getAll() {}

	delete() {}
}

export default new MovieService();
