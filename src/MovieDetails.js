import { useState } from "react"

export const MovieDetails = ({ movie, onBookMovie, onClose }) => {
    const [renter, setRenter] = useState("");
    return movie ? <div className="movieDetailsDialog">
        <div className="card">
            <div className="closeButton" onClick={onClose}>[volver]</div>
            <img src={movie.coverImage}></img>
            <div className="details">
                <h2>{movie.title}</h2>
                <h3>{movie.director}</h3>
                <p>{movie.synopsis}</p>
                <div>
                    {!movie.booked ?
                        <div className="bookMovieWidget">
                            <input
                                type="text"
                                placeholder="Tu nombre"
                                onChange={e => setRenter(e.target.value)}
                            ></input>
                            <button disabled={renter === ""} onClick={() => onBookMovie(movie.id, renter)}>Reservar</button>
                        </div>
                        :
                        <p className="movieUnavailableMsg">No disponible</p>
                    }
                </div>
            </div>

        </div>
    </div> :
        <></>
}