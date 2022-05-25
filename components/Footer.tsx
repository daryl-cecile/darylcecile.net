import React, {useRef, useEffect} from "react";
import css from "../styles/footer.module.scss";
import utilsCss from "../styles/utils.module.scss"
import SocialLinks from "./SocialLinks";

export default function Footer() {
	const footerParaRef = useRef();
	
	useEffect(()=>{
		if (!!footerParaRef.current) footerParaRef.current.innerText = `Daryl Cecile © ${(new Date()).getFullYear()}`;
	}, []);
	
	return (
		<footer className={css.footer}>
			<div className={css.footerContent}>
				<div>
					<img className={css.footerImage} src="/images/core/profile_full_color_144.png" alt="" aria-hidden="true"/>
					<div className={css.footerCopy}>
						<p ref={footerParaRef} className={`${css.footerCopyText} ${utilsCss.paragraph}`}>Daryl Cecile © {(new Date()).getFullYear()}</p>
						<SocialLinks/>
					</div>
				</div>
			</div>
		</footer>
	)
}
