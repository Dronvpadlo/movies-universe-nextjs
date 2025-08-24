"use client";
import React, {FC} from 'react';
import {IGenre} from "@/models/IGenre";
import {useRouter} from "next/navigation";
import styles from './GenreComponent.module.css'
type GenreTypeProps = {
    genre: IGenre
}
const GenreComponent:FC<GenreTypeProps> = ({genre}) => {

    const router = useRouter();

    return (
        <button className={styles.button} onClick={() => {router.push(`/movies?genre=${genre.id}`)}}>
            {genre.name}
        </button>
    );
};

export default GenreComponent;