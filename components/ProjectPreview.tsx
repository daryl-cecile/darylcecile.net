"use client";

import componentStyles from "../styles/projectPreview.module.scss";
import utilsCss from "../styles/utils.module.scss"
import React, {Fragment} from "react";
import Anchor from "./Anchor";

export default function ProjectPreview({id, name, startYear, summary, image, link, tokens, endYear}){

	return (
        <div className={componentStyles.projectItem}>
			{startYear !== endYear ? (<p>{startYear} - {endYear ?? 'Current'}</p>) : (<p>{startYear}</p>)}
			<article key={id} id={name.replace(/(?: |-)+/gm, '-')}>
				<Anchor isExternal href={link} className={componentStyles.projectPreview}>
					{!!image && <img src={image.startsWith("https://") ? image : `/images/projects/${image}`} alt=''/>}
					<div className={componentStyles.projectPreviewBody}>
						<h3>{name}</h3>
						<div className={utilsCss.paragraph} dangerouslySetInnerHTML={{__html: summary}}/>
						<div className={componentStyles.tokens}>
							<span className={componentStyles.token}>project</span> &middot;
							{tokens.map((token,index) => (
								<Fragment key={index + '_' + token}>
									<span className={componentStyles.token}>{token}</span>
									{tokens.length - 1 !== index && <>&middot;</>}
								</Fragment>
							))}
						</div>
					</div>
				</Anchor>
			</article>
		</div>
    );
}