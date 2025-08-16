import React, {FC} from 'react';
import {getGenres} from "@/services/movie-api.service";
import {IMovieList} from "@/models/IMovieList";

type GenreProps = {
    movie: IMovieList
}
const GenreBadge:FC<GenreProps> = async ({movie}) => {
    const response = await getGenres();
    const genres = response.genres
    const genresName = genres
        .filter(genre => movie.genre_ids.includes(genre.id))
        .map(genre => genre.name)

    return (
        <div>
            Genres: {genresName.map((genre, index) => <div key={index}>{genre} </div>)}
        </div>
    );
};

export default GenreBadge;