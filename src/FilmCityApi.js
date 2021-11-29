export class FilmCityApi {
    getMovies() {
        return fetch("http://localhost:8080/movies")
            .then(response => response.json())
    }
}