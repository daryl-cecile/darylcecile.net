import styles from "../styles/milestone.module.scss";
import utilsCss from "../styles/utils.module.scss";
import React from "react";

export default function Milestone({date, title, subtitle, children}){
	return (
		<div className={styles.milestoneItem}>
			<p>{date}</p>
			<article className={styles.milestoneBody}>
				<h3>{title} <span>{subtitle}</span></h3>
				<div className={utilsCss.paragraph}>
					{children}
				</div>
			</article>
		</div>
	)
}