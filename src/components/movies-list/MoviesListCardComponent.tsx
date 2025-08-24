import React, {FC} from 'react';
import {IMovie} from "@/models/IMovie";
import PosterComponent from "@/components/poster/PosterComponent";
import GenreBadge from "@/components/movies-list/GenreBadge";
import MovieInfoComponent from "@/components/movies-list/MovieInfoComponent";
import styles from './MoviesListCardCoponent.module.css'
import Link from "next/link";

type MovieProps = {
    movie: IMovie
}
const MoviesListCardComponent:FC<MovieProps> = ({movie}) => {

    const posterSize = 'w300/'
    return (
        <div className={styles.block}>
            <Link className={styles.link} href={`/movies/${movie.id}`}>
            <PosterComponent posterSize={posterSize} movie={movie}/>
            <div>
                <h3>{movie.title} ({movie.original_title})</h3>
            </div>
            <MovieInfoComponent movie={movie}/>
            <GenreBadge movie={movie}/>
            </Link>
        </div>
    );
};

export default MoviesListCardComponent;