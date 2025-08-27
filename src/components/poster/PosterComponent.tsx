import React, {FC} from 'react';
import {IMovie} from "@/models/IMovie";
import {posterUrl} from "@/urls/urls";
import {IMovieDetails} from "@/models/IMovieDetails";
import styles from './PosterComponent.module.css'

type MovieProps = {
    movie: IMovie | IMovieDetails
    posterSize: string
}
const PosterComponent:FC<MovieProps> = ({movie, posterSize}) => {

    const noPoster = '/noPoster.jpg'
    return (

        <div className={styles.block} >
            {movie.poster_path?
                (<img className={styles.poster} src={posterUrl + posterSize + movie.poster_path} alt={movie.title}/>):
            (<img className={styles.noPhoto} src={noPoster} alt={movie.title}/>)}
        </div>
    );
};

export default PosterComponent;