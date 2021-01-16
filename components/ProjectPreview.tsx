import utilsCss from "./../styles/utils.module.css"
import React, { Fragment } from "react";

export default function ProjectPreview({id, name, startYear, summary, logo, link, tokens, endYear}){

	return (
		<article className="project-preview" key={id}>
			<h3>
				<img src={`/images/projects/${logo}`} alt={`${name} logo`}/>&nbsp;
				<a href={link} target="_blank" rel="noopener">{name}</a>
				{tokens.map((token,index) => (
					<Fragment key={index}>
						&nbsp;
						<span className={`token ${token}`}>{token}</span>
					</Fragment>
				))}
			</h3>
			<h4>{startYear} - {endYear ?? 'Current'}</h4>
			<div className={utilsCss.paragraph} dangerouslySetInnerHTML={{__html: summary}}/>
			<a href={`/projects/${id}`}>Read</a>
		</article>
	)
}