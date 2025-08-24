'use client'
import React, {useState} from 'react';
import {useRouter, useSearchParams} from "next/navigation";
import styles from './SearchForm.module.css'

const SearchForm = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [search, setSearch] = useState(searchParams.get('query') || '')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const params = new URLSearchParams(searchParams.toString());
        if (search){
            params.set('query', search);
            params.set('page', '1');
        } else {
            params.delete('query');
            params.set('page', '1');
        }
        router.push(`/movies?${params.toString()}`);
    }

    return (
        <div className={styles.section}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input className={styles.input} type="text" value={search} onChange={(e) => {setSearch(e.target.value)}} placeholder={'type name of movie'}/>
                <button className={styles.button} type={"submit"}>🔍</button>
            </form>
        </div>
    );
};

export default SearchForm;