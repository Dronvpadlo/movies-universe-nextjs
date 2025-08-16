import React, {FC} from 'react';
import {IMovieList} from "@/models/IMovieList";
import PosterComponent from "@/components/poster/PosterComponent";
import GenreBadge from "@/components/movies-list/GenreBadge";
import MovieInfoComponent from "@/components/movies-list/MovieInfoComponent";
import styles from './MoviesListCardCoponent.module.css'

type MovieProps = {
    movie: IMovieList
}
const MoviesListCardComponent:FC<MovieProps> = ({movie}) => {
    return (
        <div className={styles.block}>
            <PosterComponent movie={movie}/>
            <div>
                <h3>ID: {movie.id}, Title: {movie.title} ({movie.original_title})</h3>
            </div>
            <MovieInfoComponent movie={movie}/>
            <GenreBadge movie={movie}/>
        </div>
    );
};

export default MoviesListCardComponent;