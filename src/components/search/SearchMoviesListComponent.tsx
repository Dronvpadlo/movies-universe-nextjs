import React, {FC} from 'react';
import {searchMovie} from "@/services/movie-api.service";
import {IMoviesResponse} from "@/models/IMoviesResponse";
import MoviesListCardComponent from "@/components/movies-list/MoviesListCardComponent";
import styles from "@/components/movies-list/MoviesListComponent.module.css";
import PaginationComponent from "@/components/pagination/PaginationComponent";
import Link from "next/link";

type SearchMoviesProps = {
    page: number,
    query: string
}

const SearchMoviesListComponent:FC<SearchMoviesProps> = async ({page, query}) => {
    const response = await searchMovie(page, query);
    const movies = response.results
    const totalPages = response.total_pages

    if (!movies || movies.length === 0 ) {
        return (
            <div className={styles.notFoundSection}>No one movie with name "<span
                className={styles.query}>{query}</span>" was found<br/>
                <Link className={styles.link} href={'/movies'}>👉Get Movies👈</Link>
            </div>
        )
    }

    return (
        <div className={styles.section}>
            {movies &&
                movies.map((movie) => <MoviesListCardComponent key={movie.id} movie={movie}/>)
            }
            <PaginationComponent page={page} totalPages={totalPages}/>

        </div>
    );
};

export default SearchMoviesListComponent;