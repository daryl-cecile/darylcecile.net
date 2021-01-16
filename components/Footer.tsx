import React from "react";
import css from "./../styles/footer.module.css";
import utilsCss from "./../styles/utils.module.css"
import SocialLinks from "./SocialLinks";

export default function Footer() {
	return (
		<footer className={css.footer}>
			<div className={css.footerContent}>
				<div>
					<img className={css.footerImage} src="/images/core/profile_full_color_144.png" alt="" aria-hidden="true"/>
					<div className={css.footerCopy}>
						<p className={`${css.footerCopyText} ${utilsCss.paragraph}`}>Daryl Cecile © 2021</p>
						<SocialLinks/>
					</div>
				</div>
			</div>
		</footer>
	)
}