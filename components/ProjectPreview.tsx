import utilsCss from "../styles/utils.module.scss"
import React, { Fragment } from "react";
import Anchor from "./Anchor";

export default function ProjectPreview({id, name, startYear, summary, logo, link, tokens, endYear}){

	return (
		<article className="project-preview" key={id}>
			<h3>
				<img src={`/images/projects/${logo}`} alt={`${name} logo`}/>&nbsp;
				<Anchor isExternal href={link}>{name}</Anchor>
				{tokens.map((token,index) => (
					<Fragment key={index}>
						&nbsp;
						<span className={`token ${token}`}>{token}</span>
					</Fragment>
				))}
			</h3>
			<h4>{startYear} - {endYear ?? 'Current'}</h4>
			<div className={utilsCss.paragraph} dangerouslySetInnerHTML={{__html: summary}}/>
			<Anchor href={`/projects/${id}`}>Read</Anchor>
		</article>
	)
}