'use client'
import React from 'react';
import {useRouter} from "next/navigation";
import styles from './BackButton.module.css'

const BackButton = () => {
    const router = useRouter();
    return (
        <div>
            <button className={styles.button} onClick={router.back}>← Back</button>
        </div>
    );
};

export default BackButton;