import React, {FC} from 'react';
import {IMovie} from "@/models/IMovie";
import {posterUrl} from "@/urls/urls";
import {IMovieDetails} from "@/models/IMovieDetails";

type MovieProps = {
    movie: IMovie | IMovieDetails
}
const PosterComponent:FC<MovieProps> = ({movie}) => {


    return (
        <div>
            <img src={posterUrl + movie.poster_path} alt={movie.title}/>
        </div>
    );
};

export default PosterComponent;