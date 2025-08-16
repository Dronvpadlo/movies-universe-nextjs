import {genreUrl, moviesUrl, token} from "@/urls/urls";
import {IMoviesResponse} from "@/models/IMoviesResponse";
import {IGenreResponse} from "@/models/IGenreResponse";

const getMovies = async ():Promise<IMoviesResponse> => {
    return await fetch(moviesUrl, {
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

const getPoster = async (path: string):Promise<IGenreResponse> => {
    return await fetch(genreUrl, {
        method: 'GET',
        headers: {
            Authorization: token
        }
    })
        .then(value => value.json())
}

export {
    getMovies, getGenres
}