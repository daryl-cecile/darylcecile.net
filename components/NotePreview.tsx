import Date from "./Date";
import React from "react";

export default function NotePreview({slug, title, date, readTime}){
	const navigate = (url:string):void => {location.href = url};

	return (
		<article className="blog-preview" key={slug} onClick={navigate.bind(this,`/notes/${slug}`)}>
			<h3>{title}</h3>
			<span><Date dateString={date} /> &middot; {readTime}</span>
			<a href={`/notes/${slug}`} hrefLang="en">Read it</a>
		</article>
	)
}