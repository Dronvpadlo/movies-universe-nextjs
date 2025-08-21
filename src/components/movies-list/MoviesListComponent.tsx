import React, {FC} from 'react';
import {getMovies} from "@/services/movie-api.service";
import MoviesListCardComponent from "@/components/movies-list/MoviesListCardComponent";
import styles from './MoviesListComponent.module.css'
import PaginationComponent from "@/components/pagination/PaginationComponent";

type MoviesComponentProps = {
    page: number
}

const MoviesListComponent:FC<MoviesComponentProps> = async ({page}) => {
    const response = await getMovies(page);
    const movies = response.results;
    const totalPages = response.total_pages
    return (
        <div className={styles.section}>
            {
                movies.map((movie, index) => <MoviesListCardComponent key={index} movie={movie}/>)
            }
            <PaginationComponent page={page} totalPages={totalPages}/>
        </div>
    );
};

export default MoviesListComponent;