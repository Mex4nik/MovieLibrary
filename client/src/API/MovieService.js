import axios from "axios";

export default class MovieService {
	static async createOne(token, body) {
		const response = await axios.post(`http://localhost:5000/movie`, body, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return response.data;
	}

	static async getOne(token, id) {
		const response = await axios.get(`http://localhost:5000/movie/${id}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return response.data;
	}

	static async getAll(token, title, star, sort) {
		const response = await axios.get("http://localhost:5000/movie", {
			headers: {
				Authorization: `Bearer ${token}`,
			},
			params: {
                title: title,
                star: star,
                sort: sort
            }
		});
		return response.data;
	}
}