"use client";

import Link from "next/link";
import ScrollToTop from "./scrollToTop";
import styles from '../styles/layout.module.scss'
import { usePathname } from "next/navigation";


export default function LowerNav(){
    let show = usePathname() !== "/";
    
    if (!show) return;

    return (
        <>
            <div className={styles.backToHome}>
                <Link href="/">
                    ← Home
                </Link>
            </div>
            <ScrollToTop />
        </>
    )
}