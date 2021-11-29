import { useEffect, useState } from "react"

import { FilmCityApi } from './FilmCityApi'
import { MovieCard } from "./MovieCard";

export const MovieCatalog = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        new FilmCityApi().getMovies().then(setMovies)
            .then(() =>
                console.log(movies.map(m => m.id)))
    }, [])

    return (
        <div className="movieCatalog">
            {movies.map(movie => <MovieCard movie={movie} />)}
        </div>
    )
}