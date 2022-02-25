import Date from "./Date";
import React from "react";
import Link from "next/link";
import styles from "./../styles/blog.module.scss";

export default function NotePreview({slug, title, date, lastUpdated, readTime}){

	return (
		<article className={styles.blogPreview}>
			<Link href={`/notes/${slug}`} passHref={true}>
				<a hrefLang="en" className={styles.wrapper}>
					<h3>{title}</h3>
					<span>
						{!!lastUpdated ? (
							<>Updated on <Date dateString={lastUpdated} /></>
						) : (
							<><Date dateString={date} /></>
						)}
						{' '} &middot; {readTime}
					</span>
					<span>Read it</span>
				</a>
			</Link>
		</article>
	)
}