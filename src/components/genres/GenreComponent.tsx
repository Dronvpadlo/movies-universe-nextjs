"use client";
import React, {FC} from 'react';
import {IGenre} from "@/models/IGenre";
import {useRouter} from "next/navigation";

type GenreTypeProps = {
    genre: IGenre
}
const GenreComponent:FC<GenreTypeProps> = ({genre}) => {

    const router = useRouter();

    return (
        <button onClick={() => {router.push(`/movies?genre=${genre.id}`)}}>
            {genre.name}
        </button>
    );
};

export default GenreComponent;