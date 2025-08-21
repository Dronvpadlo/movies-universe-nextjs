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
    return (
        <div className={styles.block}>
            <Link href={`/movies/${movie.id}`}>
            <PosterComponent movie={movie}/>
            <div>
                <h3>ID: {movie.id}, Title: {movie.title} ({movie.original_title})</h3>
            </div>
            <MovieInfoComponent movie={movie}/>
            <GenreBadge movie={movie}/>
            </Link>
        </div>
    );
};

export default MoviesListCardComponent;