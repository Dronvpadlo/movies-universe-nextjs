import React, {FC} from 'react';
import {getMovies} from "@/services/movie-api.service";
import MoviesListCardComponent from "@/components/movies-list/MoviesListCardComponent";

type MoviesComponentProps = {
    page: number
}

const MoviesListComponent:FC<MoviesComponentProps> = async ({page}) => {
    const response = await getMovies(page);
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