'use client'
import React, {useEffect, useState} from 'react';
import styles from "@/components/menu/MenuComponent.module.css";
import {useTheme} from "next-themes";

const ThemeSwitcher = () => {

    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true)
    }, []);

    if (!mounted){
        return null
    }


    return (
            <button className={styles.button} onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                {theme == 'dark' ? (<span>🌜</span>) : (<span>☀️</span>)}
            </button>
    );
};

export default ThemeSwitcher;