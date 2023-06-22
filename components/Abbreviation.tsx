"use client";

import React, { ReactNode, useCallback, useEffect, useMemo, useRef, useState } from "react";
import styles from "./../styles/abbr.module.scss";
import useMounted from "../lib/useMounted";
import Anchor from "./Anchor";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Portal } from "next/dist/client/portal";
import useWindow from "../lib/useWindow";
import useSWR from "swr";
import AbbrPreview from "./AbbrPreview";
import useFetch from "../lib/useFetch";

type AbbreviationProps = {
	title?: string,
	children: ReactNode,
	link?: string,
	static?: boolean
}

export default function Abbreviation(props: AbbreviationProps) {
	const mounted = useMounted();
	const windowContext = useWindow();
	const [previewVisible, setPreviewVisible] = useState(false);
	const metaEndpoint = useMemo(()=>{
		let params = !!props.link ? new URLSearchParams({ url: encodeURIComponent(props.link) }) : null;
		if (!params) return null; 
		let url = `/api/fetch-meta?${params}`;
		return url;
	}, [props.link]);
	// @ts-ignore
	const { value, fetchState, reason, revalidate } = useFetch(mounted ? metaEndpoint : null, {asJson: true, revalidateOnFocus: true});
	const meta = {...value};
	const canNavigate = !!props.link && !props.static;
	const containerRef = useRef<HTMLDivElement>(null);
	const previewElRef = useRef<HTMLDivElement>(null);
	const nextElRef = useRef<HTMLDivElement>(null);
	const timeoutRef = useRef<number>();
	const showPreview  = useCallback(()=>{
		if (!mounted) return;
		clearTimeout(timeoutRef.current);
		setPreviewVisible(true);
	}, [mounted]);
	const hidePreview = useCallback(()=>{
		if (!mounted) return;
		timeoutRef.current = setTimeout(() => {
			setPreviewVisible(false);
		}, 150) as unknown as number;
	}, [mounted])

	const { top, left, pointerContained } = useMemo(() => {
		if (!containerRef.current) return {
			top: 0,
			left: 0,
			pointerContained: false
		}

		const rect = containerRef.current.getBoundingClientRect();
		const previewWidth = Math.min(320, windowContext.innerWidth - 20);

		const containerTop = rect.top + windowContext.scrollY;
		const containerLeft = rect.left + windowContext.scrollX;
		const containerRight = rect.right + windowContext.scrollX;

		let newLeft = containerLeft + (rect.width / 2) - (previewWidth / 2);

		return {
			top: containerTop + rect.height,
			left: Math.min(Math.max(newLeft, 10), windowContext.innerWidth - 10 - previewWidth),
			pointerContained: (newLeft > 10) && (containerRight < windowContext.innerWidth - 10)
		}
	}, [containerRef.current, windowContext.innerWidth, windowContext.scrollY, windowContext.scrollX]);

	if (!mounted) {
		return <abbr title={props.title ?? meta.title ?? props.children as string}>{props.children}</abbr>
	}

	const isSafari = mounted && navigator.vendor == "Apple Computer, Inc.";
	const isMobile = windowContext.innerWidth <= 620;
	const showAsLink = isMobile && !props.static && !!props.link;

	return (
		<span className={styles.abbr}>
			<abbr
				data-safari={isSafari ? 'true' : 'false'}
				data-nav={!props.static}
				title={!(previewVisible && !props.link) ? (props.title ?? meta.title ?? props.children as string) : undefined}
				onMouseOver={() => { showPreview() }}
				onFocusCapture={() => { showPreview() }}
				onMouseLeave={() => { hidePreview() }}
				onBlurCapture={() => hidePreview() }
				ref={containerRef}
				tabIndex={showAsLink ? -1 : 0}
				onKeyDown={ev => {
					if (ev.key === "Tab" && !ev.shiftKey){
						setTimeout(()=>{
							// @ts-ignore
							nextElRef.current = document.activeElement as any;
							
							let nextLink = previewElRef.current?.querySelector('a');
							if (!nextLink) return;
							ev.preventDefault();
							ev.stopPropagation();
							nextLink?.focus();
						}, 0);
					}
				}}
			>
				{!showAsLink && props.children}
				{showAsLink && <Anchor href={props.link}>{props.children}</Anchor>}
				{!canNavigate && (
					<sup><FontAwesomeIcon icon={faCircleInfo} /></sup>
				)}
			</abbr>
			{!showAsLink && (
				<Portal type={"div"}>
					<AbbrPreview
						ref={previewElRef}
						hideOriginPointer={!pointerContained}
						css={{ top, left }}
						isVisible={previewVisible}
						onEnter={() => showPreview()}
						onFocus={() => showPreview()}
						onLeave={() => hidePreview()}
						onTabOut={() => {
							nextElRef.current?.focus();
							hidePreview();
						}}
						link={props.static ? undefined : props.link}
						{...meta}
						title={props.title ?? meta.title}
					/>
				</Portal>
			)}
		</span>
	)

}
