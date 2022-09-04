import React, { useEffect, useState } from "react";
import LoginService from "../../API/LoginService";
import MovieService from "../../API/MovieService";
import { parseTxt } from "../../utils/ParseTxt";
import MovieItem from "./MovieItem/MovieItem";

const MovieList = () => {
	const [movies, setMovies] = useState([]);

	const fetchMovies = async () => {
		const token = await LoginService.login();
		const movies = await MovieService.getAll(token.accessToken);
		setMovies(movies);
	};

	useEffect(() => {
		fetchMovies();
	}, []);

	const handleMoviesUpload = (event) => {
		const file = event.target.files[0];

		var fileReader = new FileReader();
		fileReader.onload = async function(event) {
			let text = event.target.result;

			debugger;
			const movies = parseTxt(text);

			console.log(movies)

			const token = await LoginService.login();

			for (let movie of movies) {
				await MovieService.createOne(token.accessToken, movie);
			}
			alert('All movies has been added from the file')
			window.location.reload(false);
		}
		
		fileReader.readAsText(file);
	}

	return (
		<div style={{margin: '0 20rem'}}>
			<div style={{textAlign: 'center', marginBottom: '.5rem'}}>
				<span style={{marginRight: '.5rem'}}>Import movies</span>
				<input type='file' onChange={handleMoviesUpload} />
			</div>

			{
                movies.length > 0 
                ? movies.map(movie => <MovieItem movie={movie} key={movie.id} />)  
                : <div> Movies dont found</div>
            }
		</div>
	);
};

export default MovieList;
