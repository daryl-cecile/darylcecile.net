import utilsCss from "../styles/utils.module.scss"
import React, {Fragment, useEffect, useState} from "react";
import Anchor from "./Anchor";
import styles from "../styles/projectPreview.module.scss";
import useUnstableValue from "../lib/useUnstableValue";

export default function ProjectPreview({id, name, startYear, summary, image, link, tokens, endYear}){
	const stableSummary = useUnstableValue(summary);

	return (
		<div className={styles.projectItem}>
			{startYear !== endYear ? (<p>{startYear} - {endYear ?? 'Current'}</p>) : (<p>{startYear}</p>)}
			<article key={id} id={name.replace(/(?: |-)+/gm, '-')}>
				<Anchor isExternal href={link} className={styles.projectPreview}>
					{!!image && <img src={image.startsWith("https://") ? image : `/images/projects/${image}`} alt=''/>}
					<div className={styles.projectPreviewBody}>
						<h3>{name}</h3>
						<div className={utilsCss.paragraph} dangerouslySetInnerHTML={{__html: stableSummary}}/>
						<div className={styles.tokens}>
							<span className={styles.token}>project</span> &middot;
							{tokens.map((token,index) => (
								<Fragment key={index + '_' + token}>
									<span className={styles.token}>{token}</span>
									{tokens.length - 1 !== index && <>&middot;</>}
								</Fragment>
							))}
						</div>
					</div>
				</Anchor>
			</article>
		</div>
	)
}