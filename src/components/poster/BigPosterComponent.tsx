import React, {FC} from 'react';
import {posterUrl} from "@/urls/urls";
import {IMovie} from "@/models/IMovie";
import {IMovieDetails} from "@/models/IMovieDetails";
import styles from './BackdropComponent.module.css'

type MovieProps = {
    movie: IMovie | IMovieDetails
    posterSize: string
}
const BigPosterComponent:FC<MovieProps> = ({movie, posterSize}) => {
    return (
        <div>
            <img className={styles.img} src={posterUrl + posterSize + movie.backdrop_path} alt={movie.title}/>
        </div>
    );
};

export default BigPosterComponent;