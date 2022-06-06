import {ReactNode, MouseEvent, useMemo, useState} from "react";
import useMounted from "../lib/useMounted";
import Link from "next/link";

type AnchorProp = {
	children: ReactNode,
	href?: string,
	onClick?: (ev:MouseEvent<HTMLButtonElement>)=>void,
	className?: string,
	isExternal?: boolean

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
			>{props.children}</button>
		)
	}

	return (
		<Link href={props.href} passHref={true}>
			<a
				onMouseOver={props.onFocusGain}
				onMouseLeave={props.onFocusLoss}
				onBlur={props.onFocusLoss}
				hrefLang={"en"}
				target={isExternal ? "_blank" : undefined}
				rel={isExternal ? "noopener" : undefined}
				className={props.className}
				>{props.children}</a>
		</Link>
	)
}