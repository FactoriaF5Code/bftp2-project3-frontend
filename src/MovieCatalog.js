import { useEffect, useState } from "react"

import { FilmCityApi } from './FilmCityApi'
import { MovieCard } from "./MovieCard";
import { MovieDetails } from "./MovieDetails";

export const MovieCatalog = () => {

    const [movies, setMovies] = useState([]);
    
    function updateMovies() {
        return new FilmCityApi().getMovies().then(setMovies);
    }

    useEffect(() => {
        updateMovies()

    }, [])

    return (
        <>
            <div className="movieCatalog">
                {movies.map(movie =>
                    <MovieCard
                        movie={movie} />)}
            </div>
        </>
    )
}