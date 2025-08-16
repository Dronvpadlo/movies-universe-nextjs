import React from 'react';
import Link from "next/link";

const MenuComponent = () => {
    return (
        <div>
            <Link href={'/movies'}>Movies</Link> <br/> <hr/>
            <Link href={'/genres'}>Genres</Link><br/> <hr/>
            <Link href={'/search'}>Search</Link><br/> <hr/>
        </div>
    );
};

export default MenuComponent;