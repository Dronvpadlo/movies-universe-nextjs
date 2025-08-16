import React from 'react';
import MoviesListComponent from "@/components/movies-list/MoviesListComponent";
import GenresComponent from "@/components/genres/GenresComponent";
import PaginationComponent from "@/components/pagination/PaginationComponent";
import GenreMoviesListComponent from "@/components/movies-list/GenreMoviesListComponent";


type MoviesPageProps = {
    searchParams: {page?: string, genre?: string}
}
export default async function MoviesPage ({searchParams}: MoviesPageProps) {
    const page = Number( await searchParams.page) || 1
    const genre = Number( await searchParams.genre) || undefined

    return (
        <div>
            <GenresComponent/>
            {genre && <GenreMoviesListComponent page={page} genreId={genre}/>}
            {!genre && <MoviesListComponent page={page}/>}
            <PaginationComponent page={page}/>
        </div>
    );
};