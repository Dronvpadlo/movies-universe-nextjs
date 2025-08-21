import React from 'react';
import {getMovieById} from "@/services/movie-api.service";
import MovieDetailsComponent from "@/components/movies-details/MovieDetailsComponent";

type Props = {
    params: {
        id: string;
    }
}
const MoviePage = async ({params}: Props) => {

    const movie = await getMovieById(+params.id);
    return (
        <div>
            <MovieDetailsComponent movie={movie}/>
        </div>
    );
};

export default MoviePage;