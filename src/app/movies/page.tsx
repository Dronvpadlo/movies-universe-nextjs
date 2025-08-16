import React from 'react';
import MoviesListComponent from "@/components/movies-list/MoviesListComponent";
import GenresComponent from "@/components/genres/GenresComponent";
import PaginationComponent from "@/components/pagination/PaginationComponent";

type MoviesPageProps = {
    searchParams: {page?: string}
}
export default async function MoviesPage ({searchParams}: MoviesPageProps) {
    const page = Number( await searchParams.page) || 1

    return (
        <div>
            <GenresComponent/>
            <MoviesListComponent page={page}/>
            <PaginationComponent page={page}/>
        </div>
    );
};