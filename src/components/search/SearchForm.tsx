'use client'
import React, {useState} from 'react';
import {useRouter, useSearchParams} from "next/navigation";

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
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={search} onChange={(e) => {setSearch(e.target.value)}} placeholder={'type name of movie'}/>
                <button type={"submit"}>Search Movie</button>
            </form>
        </div>
    );
};

export default SearchForm;