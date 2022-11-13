"use client";

import {ReactNode, MouseEvent, useMemo, useState} from "react";
import useMounted from "../lib/useMounted";
import Link from "next/link";

type AnchorProp = {
	children: ReactNode,
	href?: string,
	tabIndex?: number,
	onClick?: (ev:MouseEvent<HTMLButtonElement>)=>void,
	className?: string,
	isExternal?: boolean,
	ariaDesc?: string,

	onFocusGain?: any,
	onFocusLoss?: any
}

export default function Anchor(props:AnchorProp){
	const isMounted = useMounted();

	const isExternal = useMemo(()=>{
		if (!!props.isExternal) return true;
		if (!isMounted) return true;
		if (!props.href) return false;

		const tmp = document.createElement('a');
		tmp.href = props.href;
		return tmp.host !== window.location.host;
	}, [props.href, !!props.isExternal, isMounted]);

	if (!props.href){
		return (
			<button
				onClick={props.onClick}
				className={props.className}
				onMouseOver={props.onFocusGain}
				onMouseLeave={props.onFocusLoss}
				onBlur={props.onFocusLoss}
				aria-label={props.ariaDesc}
				tabIndex={props.tabIndex}
			>{props.children}</button>
		)
	}

	return (
		<Link 
			href={props.href} 
			tabIndex={props.tabIndex}
			passHref={true}
			onMouseOver={props.onFocusGain}
			onMouseLeave={props.onFocusLoss}
			onBlur={props.onFocusLoss}
			hrefLang={"en"}
			target={isExternal ? "_blank" : undefined}
			aria-label={props.ariaDesc}
			rel={isExternal ? "noopener" : undefined}
			className={props.className}
		>
			{props.children}
		</Link>
	)
}