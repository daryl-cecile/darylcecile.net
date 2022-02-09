import React from "react";
import css from "../styles/socials.module.scss"

export default function SocialLinks(){
	return (
		<div className={css.socialLinks}>
			<a
				className={css.socialLinkBtn} href="//twitter.com/darylcecile" target="_blank" rel="noopener" hrefLang="en">Twitter
			</a> | <a
				className={css.socialLinkBtn} href="//github.com/daryl-cecile" target="_blank" rel="noopener" hrefLang="en">Github
			</a> | <a
				className={css.socialLinkBtn} href="//linkedin.com/in/darylcecile" target="_blank" rel="noopener" hrefLang="en">LinkedIn</a>
		</div>
	)
}