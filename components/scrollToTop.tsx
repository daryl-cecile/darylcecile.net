"use client";

import styles from "./../styles/scrollToTop.module.scss";
import {useScroll} from "../lib/useScroll";
import {useCallback, useEffect, useState} from "react";

export default function ScrollToTop(){
	const [shouldShow, setShouldShow] = useState(false);
	const {onScrollEventDebounced} = useScroll(100);

	const scrollHandler = useCallback(()=>{
		onScrollEventDebounced(scrollPosition => {
			setShouldShow(()=>{
				return scrollPosition.y > window.innerHeight
			});
		});
	}, []);

	useEffect(()=>{
		document.addEventListener('scroll', scrollHandler);

		return ()=> document.removeEventListener('scroll', scrollHandler);
	}, []);

	return (
		<button className={styles.main} disabled={!shouldShow} aria-disabled={!shouldShow} onClick={()=>window.scrollTo({top:0, behavior:'smooth'})}>
			⇧
		</button>
	)
}