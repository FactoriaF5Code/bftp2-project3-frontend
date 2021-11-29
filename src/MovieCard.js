export const MovieCard = ({ movie }) => {
    console.log(movie)
    return (
        <div className="movieCard" id={`movie-${movie.id}`}>
            <div className="movieCard__img">
                <img src={movie.coverImage}></img>
            </div>
            <div className="movieCard__details">
                <div className="title">{`${movie.title} (${movie.year})`}</div>
                <div className="director">{movie.director}</div>
            </div>
        </div>
    );
}