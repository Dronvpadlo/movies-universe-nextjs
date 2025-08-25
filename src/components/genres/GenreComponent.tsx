"use client";
import React, {FC} from 'react';
import {IGenre} from "@/models/IGenre";
import {useRouter, useSearchParams} from "next/navigation";
import styles from './GenreComponent.module.css'
type GenreTypeProps = {
    genre: IGenre
}
const GenreComponent:FC<GenreTypeProps> = ({genre}) => {

    const router = useRouter();
    const searchParams = useSearchParams();

    const activeGenre = searchParams.get("genre");
    const isActive = activeGenre == genre.id.toString();

    const handleClick = () => {
        if(isActive){
            router.push(`/movies`)
        } else {
            router.push(`/movies?genre=${genre.id}`)
        }
    }


    return (
        <button className={styles.button} onClick={handleClick} disabled={isActive}>
            {genre.name}
        </button>
    );
};

export default GenreComponent;