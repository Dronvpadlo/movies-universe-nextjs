import React, {FC} from 'react';
import {IMovie} from "@/models/IMovie";
import StarsRating from "@/components/movies-list/StarsRating";
import {IMovieDetails} from "@/models/IMovieDetails";


type MovieInfoProps = {
    movie: IMovie | IMovieDetails
}
const MovieInfoComponent:FC<MovieInfoProps> = ({movie}) => {
    return (
        <div>
            <div>Adult: {movie.adult ? '🔞' : 'All Ages'}</div>
            <div>Popularity: {movie.popularity}</div>
            <div>Release Date: {movie.release_date}</div>
            <div>Original Language: {movie.original_language}</div>
            <div>Rating: <StarsRating rating={movie.vote_average}/> Votes: {movie.vote_count}</div>
        </div>
    );
};

export default MovieInfoComponent;