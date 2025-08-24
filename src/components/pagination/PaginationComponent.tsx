'use client'
import React, {FC} from 'react';
import styles from './PaginationComponent.module.css'

import {usePathname, useRouter, useSearchParams} from "next/navigation";

type PaginationTypeProp = {
    page: number
    totalPages: number | undefined
}
const PaginationComponent:FC<PaginationTypeProp> = ({page, totalPages}) => {

    const router = useRouter()
    const pathname = usePathname();
    const params = useSearchParams();

    const neighbors = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
    const maxPage = totalPages;
    const changePage = (p: number) => {
        if (p < 1 || p > maxPage) return;
            const nextParams = new URLSearchParams(params.toString());
            nextParams.set('page', String(p));
            router.push(`${pathname}?${nextParams.toString()}`);
        }


    return (
        <div className={styles.section}>
            {neighbors.map((offset) => {
                const p = page + offset;
                if (p < 1 || p > maxPage) return null;

                return offset === 0 ? (

                    <span className={styles.span} key={p}>{p}</span>
                ) : (
                    <button className={styles.button}
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