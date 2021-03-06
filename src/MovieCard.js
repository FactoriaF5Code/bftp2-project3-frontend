export const MovieCard = ({ movie, onClick }) => {
    return (
        <div onClick={onClick}
            className="movieCard"
            id={`movie-${movie.id}`}>
            <div className="movieCard__img">
                { movie.booked && <div class="bookedSign">No disponible </div>}
                <img src={movie.coverImage}></img>
            </div>
            
            <div className="movieCard__details">
                <div className="title">{`${movie.title} (${movie.year})`}</div>
                <div className="director">{movie.director}</div>
            </div>
        </div>
    );
}