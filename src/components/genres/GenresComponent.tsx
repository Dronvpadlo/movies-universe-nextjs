import React from 'react';
import {getGenres} from "@/services/movie-api.service";

const GenresComponent = async () => {
    const response = await getGenres();
    const genres = response.genres
    return (
        <div>
            {
                genres.map((genre, index) => <div>{genre.name}</div>)
            }
        </div>
    );
};

export default GenresComponent;