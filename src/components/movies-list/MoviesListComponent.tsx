import React from 'react';
import {getMovies} from "@/services/movie-api.service";
import MoviesListCardComponent from "@/components/movies-list/MoviesListCardComponent";

const MoviesListComponent = async () => {
    const response = await getMovies();
    const movies = response.results
    return (
        <div>
            {
                movies.map((movie, index) => <MoviesListCardComponent key={index} movie={movie}/>)
            }

        </div>
    );
};

export default MoviesListComponent;