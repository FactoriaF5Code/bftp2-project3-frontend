export class FilmCityApi {
    getMovies() {
        return fetch("http://localhost:8080/movies")
            .then(response => response.json());
    }

    bookMovie(id, renter) {
        return fetch(
            `http://localhost:8080/movies/${id}/book?renter=${renter}`,
            { method: 'PUT' }
        );
    }

    addRating(id, score) {
        return fetch(
            `http://localhost:8080/movies/${id}/rating`,
            { method: 'PUT' , headers: {'Content-Type' : 'application/json'}, body : JSON.stringify({score : score})}
        );
    }
}