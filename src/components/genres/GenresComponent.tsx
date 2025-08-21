import React from 'react';
import {getGenres} from "@/services/movie-api.service";
import GenreComponent from "@/components/genres/GenreComponent";
import styles from './GenresComponent.module.css'

const GenresComponent = async () => {
    const response = await getGenres();
    const genres = response.genres



    return (
        <div className={styles.section}>
            {
                genres.map((genre, index) => <GenreComponent key={index} genre={genre}/>)
            }
        </div>
    );
};

export default GenresComponent;