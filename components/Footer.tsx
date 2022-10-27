import css from "../styles/footer.module.scss";
import utilsCss from "../styles/utils.module.scss"
import SocialLinks from "./SocialLinks";

type FooterType = {
	year?: number
}

export default function Footer({year}:FooterType) {	
	return (
		<footer className={css.footer}>
			<div className={css.footerContent}>
				<div>
					<img className={css.footerImage} src="/images/core/profile_full_color_144.png" width={144} height={144} alt="" aria-hidden="true"/>
					<div className={css.footerCopy}>
						<p className={`${css.footerCopyText} ${utilsCss.paragraph}`}>Daryl Cecile © {year ?? (new Date()).getFullYear()}</p>
						<SocialLinks/>
					</div>
				</div>
			</div>
		</footer>
	)
}
