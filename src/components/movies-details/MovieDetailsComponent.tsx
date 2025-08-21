import React, {FC} from 'react';
import PosterComponent from "@/components/poster/PosterComponent";
import MovieInfoComponent from "@/components/movies-list/MovieInfoComponent";
import {IMovieDetails} from "@/models/IMovieDetails";


type MovieProps = {
    movie: IMovieDetails
}
const MovieDetailsComponent:FC<MovieProps> = ({movie}) => {
    return (
        <div>
            <div>
                <PosterComponent movie={movie}/>
                <div>
                    <h3>ID: {movie.id}, Title: {movie.title} ({movie.original_title})</h3>
                </div>
                <MovieInfoComponent movie={movie}/>
            </div>
            <div>Overview: {movie.overview}</div>
            <a href={movie.homepage}>HomePage</a>
            {movie.budget && <div>Budget: {movie.budget}</div>}
            <div>Revenue: {movie.revenue}</div>
            <div>Runtime: {movie.runtime}</div>
            <div>Status: {movie.status}</div>
            <div>Tagline: {movie.tagline}</div>
        </div>
    );
};

export default MovieDetailsComponent;