import React from 'react';
import MoviesListComponent from "@/components/movies-list/MoviesListComponent";
import GenresComponent from "@/components/genres/GenresComponent";
import GenreMoviesListComponent from "@/components/movies-list/GenreMoviesListComponent";
import SearchMoviesListComponent from "@/components/search/SearchMoviesListComponent";
import SearchForm from "@/components/search/SearchForm";
import styles from './MoviesPage.module.css'

type MoviesPageProps = {
    searchParams: Promise<{page: string, genre?: string, query?: string}>
}
export default async function MoviesPage ({searchParams}: MoviesPageProps) {
    const resolvedSearchParams = await searchParams
    const page = Number(resolvedSearchParams.page) || 1
    const genre = resolvedSearchParams.genre ? Number(resolvedSearchParams.genre) : undefined;
    const query = resolvedSearchParams.query || undefined

    return (
        <div>
            <div className={styles.header}>
            <GenresComponent/>
            <SearchForm/>
            </div>
            <div className={styles.section}>
                <div className={styles.block}>{
                query ? (
                    <SearchMoviesListComponent page={page} query={query}/>
                    ) : genre ? (
                        <GenreMoviesListComponent page={page} genreId={genre} />
                    ) : (
                        <MoviesListComponent page={page} />
                    )
                }
                </div>
            </div>
        </div>
    );
};