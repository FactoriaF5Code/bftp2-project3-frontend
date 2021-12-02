import {Rating} from "react-simple-star-rating";
import {useState} from "react";

export const MovieRating = ({ movie, onClick }) => {
    const [ rating, setRating ] = useState(movie.rating)

    const handleRating = ( rate ) => {
        setRating(rate)
        onClick(rate)
    }

    return (
        <Rating onClick={handleRating} ratingValue={rating}/>
    )
}
