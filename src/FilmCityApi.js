export class FilmCityApi {
    getMovies() {
        return fetch("http://localhost:8080/movies")
            .then(response => response.json());
    }

    bookMovie(id, renter) {
        return fetch(
            `http://localhost:8080/movies/${id}/book?customerName=${renter}`,
            { method: 'PUT' }
        );
    }
}