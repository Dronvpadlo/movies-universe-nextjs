
import React, {FC} from 'react';
import PosterComponent from "@/components/poster/PosterComponent";
import MovieInfoComponent from "@/components/movies-list/MovieInfoComponent";
import {IMovieDetails} from "@/models/IMovieDetails";
import styles from './MoviesDetailsComponent.module.css'
import ProductCompanies from "@/components/movies-details/ProductCompanies";
import ProductionCountriesComponent from "@/components/movies-details/ProductionCountriesComponent";
import BackButton from "@/components/movies-details/BackButton";
import GenreBadge from "@/components/movies-list/GenreBadge";

type MovieProps = {
    movie: IMovieDetails
}
const MovieDetailsComponent:FC<MovieProps> = ({movie}) => {

    const posterSize = 'w500/'


    return (

        <div className={styles.highBlock}>
            <div><BackButton/></div>
            <div className={styles.poster}>
                <PosterComponent posterSize={posterSize} movie={movie}/>
            </div>
            <div className={styles.info}>
                <h3>ID: {movie.id}, Title: {movie.title} ({movie.original_title})</h3>
                <MovieInfoComponent movie={movie}/>
                <div>Overview: {movie.overview}</div>
                <a href={movie.homepage}>HomePage</a>
                <div>Budget: {movie.budget}</div>
                <div>Revenue: {movie.revenue}</div>
                <div>Runtime: {movie.runtime}</div>
                <div>Status: {movie.status}</div>
                <div>Tagline: {movie.tagline}</div>
                <div><GenreBadge movie={movie}/></div>
                <div>
                    Companies:{' '}
                    {movie.production_companies.map((product_company, index) => (
                        <ProductCompanies key={index} production={product_company}/>
                    ))}
                </div>
                <div>
                    Countries:{' '}
                    {movie.production_countries.map((production_country, index) => <ProductionCountriesComponent
                        key={index} productCountry={production_country}/>)}
                </div>
            </div>
        </div>

    );
};

export default MovieDetailsComponent;