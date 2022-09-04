import Movie from "../components/Movie/Movie/Movie";
import MovieList from "../components/Movie/MovieList";

export const routes = [
    {path: '/movies', element: <MovieList/>, },
    {path: '/movies/:id', element: <Movie/>, },
]