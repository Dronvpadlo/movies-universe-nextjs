import {genreUrl, movieByIdUrl, moviesUrl, searchMovieUrl, token} from "@/urls/urls";
import {IMoviesResponse} from "@/models/IMoviesResponse";
import {IGenreResponse} from "@/models/IGenreResponse";
import {IMovieDetails} from "@/models/IMovieDetails";

const getMovies = async (page: number):Promise<IMoviesResponse> => {
    return await fetch(moviesUrl + '?page=' + page, {
        method: 'GET',
        headers: {
            Authorization: token
        },
        next: {revalidate: 3600}
    })
        .then(value => value.json())

}
const getGenres = async ():Promise<IGenreResponse> => {
    return await fetch(genreUrl, {
        method: 'GET',
        headers: {
            Authorization: token
        },
        next: {revalidate: 86400}
    })
        .then(value => value.json())
}

const getMoviesByGenreId = async (page: number, genreId: number):Promise<IMoviesResponse> => {
    return await fetch(moviesUrl + '?page=' + page + '&with_genres=' + genreId, {
        method: 'GET',
        headers: {
            Authorization: token
        },
        next: {revalidate: 3600}
    })
        .then(value => value.json())

}

const searchMovie = async (page: number, query: string):Promise<IMoviesResponse> => {
    return await fetch(searchMovieUrl + '?query=' + query + '&page=' + page, {
        method: 'GET',
        headers: {
            Authorization: token
        },
        cache: "no-cache"
    })

        .then(value => value.json())
}

const getMovieById = async (id: number): Promise<IMovieDetails> => {
    return await fetch(movieByIdUrl + '/' + id, {
        method: 'GET',
        headers:{
            Authorization: token
        },
    })
        .then(value => value.json())

}



export {
    getMovies, getGenres, getMoviesByGenreId, searchMovie, getMovieById
}