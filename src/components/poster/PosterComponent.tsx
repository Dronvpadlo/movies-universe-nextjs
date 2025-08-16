import React, {FC} from 'react';
import {IMovieList} from "@/models/IMovieList";
import {posterUrl} from "@/urls/urls";

type MovieProps = {
    movie: IMovieList
}
const PosterComponent:FC<MovieProps> = ({movie}) => {


    return (
        <div>
            <img src={posterUrl + movie.poster_path} alt={movie.title}/>
        </div>
    );
};

export default PosterComponent;