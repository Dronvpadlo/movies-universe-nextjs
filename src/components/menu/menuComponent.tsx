import React from 'react';
import Link from "next/link";

const MenuComponent = () => {
    return (
        <div>
            <Link href={'/'}>Home</Link> <br/> <hr/>
            <Link href={'/movies'}>Movies</Link> <br/> <hr/>
        </div>
    );
};

export default MenuComponent;