import { useEffect, useState } from "react"

import { FilmCityApi } from './FilmCityApi'
import { MovieCard } from "./MovieCard";
import { MovieDetails } from "./MovieDetails";

export const MovieCatalog = () => {

    const [movies, setMovies] = useState([]);
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState({});

    function updateMovies() {
        return new FilmCityApi().getMovies().then(setMovies);
    }

    useEffect(() => {
        updateMovies()

    }, [])

    const onMovieClicked = (movie) => {
        setSelectedMovie(movie);
        setShowDetailsModal(true);
    }

    return (
        <>
            <div className="movieCatalog">
                {movies.map(movie =>
                    <MovieCard
                        movie={movie}
                        onClick={() => onMovieClicked(movie)}
                    />)}
            </div>
            {showDetailsModal &&
                <MovieDetails
                    movie={selectedMovie}
                    onClose={() => setShowDetailsModal(false)}
                />}
        </>
    )
}