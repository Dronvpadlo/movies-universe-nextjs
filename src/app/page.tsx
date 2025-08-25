import "./globals.css";
import styles from './page.module.css'
import Link from "next/link";
export default function Home() {
    return (
        <div className={styles.section}>
               <Link className={styles.link} href={'/movies'}>Welcome to my movies Universe NextJS Version</Link>

        </div>
    );
}
