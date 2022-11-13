import React, { forwardRef, Ref } from "react";
import styles from "./../styles/abbr.module.scss";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Anchor from "./Anchor";

type AbbrPreviewProps = {
	title: string,
	image?: string,
	favicon?: string,
	link?: string,
	description: string,
	onEnter: React.MouseEventHandler<HTMLDivElement>,
	onLeave: React.MouseEventHandler<HTMLDivElement>,
	onFocus?: React.FocusEventHandler<HTMLDivElement>,
	onTabOut?: React.KeyboardEventHandler<HTMLDivElement>,
	isVisible: boolean,
	css?: React.CSSProperties,
	hideOriginPointer?: boolean
}

export default forwardRef(function AbbrPreview(props: AbbrPreviewProps, ref:Ref<HTMLDivElement>) {
	const { title, image, link, onTabOut, description, onEnter, onLeave, onFocus, isVisible, css, hideOriginPointer } = props;
	if (!isVisible) return null;

	if (!title && !description) {
		return (
			<div ref={ref} className={styles.preview} onMouseOverCapture={onEnter} onMouseLeave={onLeave} style={css} data-hide-pointer={hideOriginPointer}>
				<div className={styles.previewSpinner}>
					<FontAwesomeIcon icon={faSpinner} spin />
				</div>
			</div>
		)
	}

	return (
		<div 
			ref={ref} 
			className={styles.preview} 
			onMouseOver={onEnter} 
			onMouseLeave={onLeave} 
			onFocusCapture={onFocus}
			style={css} 
			data-hide-pointer={hideOriginPointer}
			onKeyDown={ev => {
				if ( ev.key === "Tab" ){
					ev.preventDefault();
					ev.stopPropagation();
					onTabOut?.(ev);
				}
			}}
		>
			{!!image && <img src={`/_next/image?url=${encodeURIComponent( `/api/fetch-raw?url=${encodeURIComponent(image)}` )}&w=500&q=90`} alt="" />}
			{!!title && <h3>{title}</h3>}
			{!!description && <p>{description}</p>}
			{!!link && <Anchor href={link} tabIndex={1}>Read more</Anchor>}
		</div>
	)
});