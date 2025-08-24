'use client'
import React from 'react';
import Link from "next/link";
import styles from './MenuComponent.module.css'
import UserComponent from "@/components/menu/UserComponent";
import {useTheme} from "next-themes";

const MenuComponent = () => {

    const { theme, setTheme } = useTheme();
    return (
        <div className={styles.menu}>
            <Link className={styles.link} href={'/'}>Home</Link>
            <Link className={styles.link} href={'/movies'}>Movies</Link>
            <button className={styles.button} onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                {theme == 'dark' ? (<span>🌜</span>) : (<span>☀️</span>)}
            </button>
            <div className={styles.user}>
                <UserComponent className={styles.link}/>
            </div>

        </div>
    );
};

export default MenuComponent;