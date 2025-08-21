import React, {FC} from 'react';
import {searchMovie} from "@/services/movie-api.service";
import {IMoviesResponse} from "@/models/IMoviesResponse";
import MoviesListCardComponent from "@/components/movies-list/MoviesListCardComponent";
import styles from "@/components/movies-list/MoviesListComponent.module.css";
import PaginationComponent from "@/components/pagination/PaginationComponent";

type SearchMoviesProps = {
    page: number,
    query: string
}

const SearchMoviesListComponent:FC<SearchMoviesProps> = async ({page, query}) => {
    const response = await searchMovie<IMoviesResponse>(page, query);
    const movies = response.results
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

export default SearchMoviesListComponent;