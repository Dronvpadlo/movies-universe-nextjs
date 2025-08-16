import React, {FC} from 'react';
import {getMoviesByGenreId} from "@/services/movie-api.service";
import MoviesListCardComponent from "@/components/movies-list/MoviesListCardComponent";
import styles from './MoviesListComponent.module.css'

type GenreMoviesComponentProps = {
    page: number
    genreId: number
}

const GenreMoviesListComponent:FC<GenreMoviesComponentProps> = async ({page, genreId}) => {

    const response = await getMoviesByGenreId(page, genreId);
    const movies = response.results;
    return (
        <div className={styles.section}>
            {
                movies.map((movie, index) => <MoviesListCardComponent key={index} movie={movie}/>)
            }
        </div>
    );
};

export default GenreMoviesListComponent;