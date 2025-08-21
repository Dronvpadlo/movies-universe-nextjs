import React from 'react';
import MoviesListComponent from "@/components/movies-list/MoviesListComponent";
import GenresComponent from "@/components/genres/GenresComponent";
import GenreMoviesListComponent from "@/components/movies-list/GenreMoviesListComponent";
import SearchMoviesListComponent from "@/components/search/SearchMoviesListComponent";
import SearchForm from "@/components/search/SearchForm";

type MoviesPageProps = {
    searchParams: {page?: string, genre?: string, query?: string}
}
export default async function MoviesPage ({searchParams}: MoviesPageProps) {
    const page = Number( await searchParams.page) || 1
    const genre = searchParams.genre ? Number(searchParams.genre) : undefined;
    const query = searchParams.query || undefined

    return (
        <div>
            <GenresComponent/>
            <SearchForm/>
            {
                query ? (
                    <SearchMoviesListComponent page={page} query={query}/>
                    ) : genre ? (
                        <GenreMoviesListComponent page={page} genreId={genre} />
                    ) : (
                        <MoviesListComponent page={page} />
                    )
            }
        </div>
    );
};