'use client'
import React, {FC} from 'react';

import {useRouter} from "next/navigation";

type PaginationTypeProp = {
    page: number
}
const PaginationComponent:FC<PaginationTypeProp> = ({page}) => {

    const router = useRouter()

    const maxPage = 500;
    const changePage = (step: number) => {
        const nextPage = page + step
        if (nextPage < 1) return; // не дозволяємо йти на сторінку < 1
        router.push(`/movies?page=${nextPage}`);
        return nextPage;
    }
    const neighbors = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
    return (
        <div>
            {neighbors.map((offset) => {
                const p = page + offset;
                if (p < 1 || p > maxPage) return null;

                return offset === 0 ? (
                    <span key={p}>{p}</span>
                ) : (
                    <button
                        key={p}
                        onClick={() => changePage(p)}>
                        {p}
                    </button>
                );
            })}
        </div>
    );
};

export default PaginationComponent;