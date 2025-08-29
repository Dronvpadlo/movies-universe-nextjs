import React, {FC} from 'react';
import {getGenres} from "@/services/movie-api.service";
import {IMovie} from "@/models/IMovie";
import styles from './GenreBadge.module.css'
import {IMovieDetails} from "@/models/IMovieDetails";

type GenreProps = {
    movie: IMovie | IMovieDetails
}
const GenreBadge:FC<GenreProps> = async ({movie}) => {
    const response = await getGenres();
    const allGenres = response.genres;

    let genresNames: string[] = [];

    if ("genre_ids" in movie){
        genresNames = allGenres
            .filter(genre => movie.genre_ids.includes(genre.id))
            .map(genre => genre.name)
    } else if ("genres" in movie){
        genresNames = movie.genres.map(genre => genre.name)
    }



    return (
        <div className={styles.block}>
            Genres: {' '}
            {genresNames.map((genre, index) => <div className={styles.badge} key={index}>{genre} </div>)}
        </div>
    );
};

export default GenreBadge;