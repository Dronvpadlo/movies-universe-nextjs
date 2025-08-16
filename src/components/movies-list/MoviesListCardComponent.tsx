import React, {FC} from 'react';
import {IMovieList} from "@/models/IMovieList";
import PosterComponent from "@/components/poster/PosterComponent";
import StarsRating from "@/components/movies-list/StarsRating";
import GenreBadge from "@/components/movies-list/GenreBadge";
import MovieInfoComponent from "@/components/movies-list/MovieInfoComponent";

type MovieProps = {
    movie: IMovieList
}
const MoviesListCardComponent:FC<MovieProps> = ({movie}) => {
    return (
        <div>

            <div>
                <h3>ID: {movie.id}, Title: {movie.title} ({movie.original_title})</h3>
            </div>
            <PosterComponent movie={movie}/>
            <MovieInfoComponent movie={movie}/>
            <GenreBadge movie={movie}/>
            <hr/>
        </div>
    );
};

export default MoviesListCardComponent;