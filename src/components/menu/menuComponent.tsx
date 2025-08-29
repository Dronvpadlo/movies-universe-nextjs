import React from 'react';
import Link from "next/link";
import styles from './MenuComponent.module.css'
import UserComponent from "@/components/menu/UserComponent";
import ThemeSwitcher from "@/components/menu/ThemeSwitcher";

const MenuComponent = () => {

    return (
        <div className={styles.menu}>
            <Link className={styles.link} href={'/'}>Home</Link>
            <Link className={styles.link} href={'/movies'}>Movies</Link>
            <ThemeSwitcher/>
            <div className={styles.user}>
                <UserComponent/>
            </div>

        </div>
    );
};

export default MenuComponent;