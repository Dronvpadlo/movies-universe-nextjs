import React from 'react';
import MoviesListComponent from "@/components/movies-list/MoviesListComponent";
import GenresComponent from "@/components/genres/GenresComponent";

const MoviesPage = () => {
    return (
        <div>
            <GenresComponent/>
            <MoviesListComponent/>
        </div>
    );
};

export default MoviesPage;