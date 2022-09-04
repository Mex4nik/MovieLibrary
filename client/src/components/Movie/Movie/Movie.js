import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom';
import LoginService from '../../../API/LoginService';
import MovieService from '../../../API/MovieService';
import './Movie.css'

const Movie = () => {
	const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  const getMovieId = async () => {  
    const path = location.pathname;
    const id = path[path.length - 1];
    fetchMovie(id);
  }

	const fetchMovie = async (movieId) => {
		const token = await LoginService.login();
		const movie = await MovieService.getOne(token.accessToken, movieId);
		setMovie(movie);
    setIsLoading(true);
	};

	useEffect(() => {
    getMovieId();
	}, []);

  return (
    <div>
    {
      isLoading 
      ? 
      <div className='movie'>
        <div className='movieInfo'>
          <span>Id: {movie.id  || ''}</span>
          <span>Title: {movie.title  || ''}</span>
          <span>Date: {movie.releaseDate  || ''}</span>
          <span>Format: {movie.format  || ''}</span>
        </div>
        <div>
          <h3 className='title'>Stars:</h3>
          {movie.Stars.map(star => <div key={star.id}>
            <span>First name: {star.firstName} </span>
            <span style={{marginLeft: '.5rem'}}>Last name: {star.lastName} </span>
          </div>)}
          </div>
      </div> 
      : <div>Loading...</div>
    }
    </div>
    
  )
}

export default Movie