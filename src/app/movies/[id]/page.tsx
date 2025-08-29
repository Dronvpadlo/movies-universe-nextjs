import React from 'react';
import {getMovieById} from "@/services/movie-api.service";
import MovieDetailsComponent from "@/components/movies-details/MovieDetailsComponent";

const MoviePage = async ({params}: {params: Promise<{id: string; }> }) => {
    const resolverParams = await params
    const {id} = resolverParams

    const movie = await getMovieById(+id);


    return (
        <div>
            <MovieDetailsComponent movie={movie}/>
        </div>
    );
};

export default MoviePage;