import {genreUrl, moviesUrl, token} from "@/urls/urls";
import {IMoviesResponse} from "@/models/IMoviesResponse";
import {IGenreResponse} from "@/models/IGenreResponse";

const getMovies = async (page: number):Promise<IMoviesResponse> => {
    return await fetch(moviesUrl + '?page=' + page, {
        method: 'GET',
        headers: {
            Authorization: token
        }
    })
        .then(value => value.json())

}
const getGenres = async ():Promise<IGenreResponse> => {
    return await fetch(genreUrl, {
        method: 'GET',
        headers: {
            Authorization: token
        }
    })
        .then(value => value.json())
}

const getMoviesByGenreId = async (page: number, genreId: number):Promise<IMoviesResponse> => {
    return await fetch(moviesUrl + '?page=' + page + '&with_genres=' + genreId, {
        method: 'GET',
        headers: {
            Authorization: token
        }
    })
        .then(value => value.json())

}



export {
    getMovies, getGenres, getMoviesByGenreId
}