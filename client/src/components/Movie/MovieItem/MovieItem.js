import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './MovieItem.css' 

const MovieItem = ({movie}) => {
  return (
    <Link to={`/movies/${movie.id}`} style={{textDecoration: 'none', color: 'black'}}>
      <div className='movieItem'>
        <span>Id: {movie.id  || ''}</span>
        <span>Title: {movie.title  || ''}</span>
        <span>Date: {movie.releaseDate  || ''}</span>
      </div>
    </Link>
  )
}

export default MovieItem