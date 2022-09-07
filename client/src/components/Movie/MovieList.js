import React, { useEffect, useState } from "react";
import LoginService from "../../API/LoginService";
import MovieService from "../../API/MovieService";
import { parseTxt } from "../../utils/ParseTxt";
import MovieItem from "./MovieItem/MovieItem";

const MovieList = () => {
	const [movies, setMovies] = useState([]);

	const fetchMovies = async () => {
		const token = sessionStorage.getItem('jwtToken')
		const movies = await MovieService.getAll(token);
		setMovies(movies);
	};

	useEffect(() => {
		fetchMovies();
	}, []);

	const login = async () => {
		try {
			const username = prompt('Enter your username');
			const password = prompt('Enter your password');
	
			const token = await LoginService.login({
				username: username,
				password: password
			});
	
			sessionStorage.setItem('jwtToken', token.accessToken)	
		} catch (error) {
			alert(error)
		}
	}

	const handleMoviesUpload = (event) => {

		const file = event.target.files[0];

		var fileReader = new FileReader();
		fileReader.onload = async function(event) {
			let text = event.target.result;
			const movies = parseTxt(text);

			try {
				debugger
				const token = sessionStorage.getItem('jwtToken')

				for (let movie of movies) {
					await MovieService.createOne(token, movie);
				}

				alert('All movies has been added from the file')
				window.location.reload(false);
			} catch(err) {
				alert(err.response.data.message)
			}
		}
		
		fileReader.readAsText(file);
	}

	return (
		<div style={{margin: '0 20rem'}}>
			<button onClick={login}>Login</button>
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
