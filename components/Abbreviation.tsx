import React, {ReactNode, useEffect, useMemo, useRef, useState} from "react";
import styles from "./../styles/abbr.module.scss";
import useMounted from "../lib/useMounted";
import Anchor from "./Anchor";
import {faCircleInfo, faSpinner} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Portal} from "next/dist/client/portal";
import {useWindowContext} from "../lib/WindowContext";

type AbbreviationProps = {
	title?:string,
	children:ReactNode,
	link?: string,
	static?: boolean
}

type AbbrPreviewProps = {
	title: string,
	image?: string,
	favicon?: string,
	description: string,
	onEnter: React.MouseEventHandler<HTMLDivElement>,
	onLeave: React.MouseEventHandler<HTMLDivElement>,
	isVisible: boolean,
	css?: React.CSSProperties,
	hideOriginPointer?: boolean
}

function useMeta(url:string){
	const isFirstRender = useRef(true);
	const [isReady, setIsReady] = useState(false);
	const [meta, setMeta] = useState({
		title: undefined as string,
		favicon: null as string,
		image: null as string,
		description: null as string,
	});

	useEffect(()=>{
		if (!url) return;
		if (!isFirstRender.current) return;

		(async ()=> {
			let response = await fetch(`/api/fetch?url=${encodeURIComponent(url)}`, { method: 'GET' });

			const PARSER = new DOMParser()
			const DOC = PARSER.parseFromString( await response.text() , 'text/html')

			setMeta({
				title: DOC.querySelector('title')?.innerText,
				favicon: [...DOC.querySelectorAll('[rel=icon]')].reverse()[0]?.getAttribute('href'),
				image: DOC.querySelector('[property="og:image"]')?.getAttribute('content'),
				description: ( DOC.querySelector('[name=description]') ?? DOC.querySelector('[property="og:description"]') )?.getAttribute('content'),
			});
			setIsReady(true);
		})();

		isFirstRender.current = false;
	}, [url]);

	return {isReady, meta}
}

function AbbrPreview({title, image, favicon, description, onEnter, onLeave, isVisible, css, hideOriginPointer}:AbbrPreviewProps){
	if (!isVisible) return null;

	if (!title && !description && !image){
		return (
			<div className={styles.preview} onMouseOver={onEnter} onMouseLeave={onLeave} style={css} data-hide-pointer={hideOriginPointer}>
				<div className={styles.previewSpinner}>
					<FontAwesomeIcon icon={faSpinner} spin />
				</div>
			</div>
		)
	}

	return (
		<div className={styles.preview} onMouseOver={onEnter} onMouseLeave={onLeave} style={css} data-hide-pointer={hideOriginPointer}>
			{!!image && <img src={`/api/fetchRaw?url=${encodeURIComponent(image)}`} alt=""/>}
			{!!title && <h3>{title}</h3>}
			{!!description && <p>{description}</p>}
		</div>
	)
}

export function Abbreviation(props:AbbreviationProps){
	const mounted = useMounted();
	const windowContext = useWindowContext();
	const [previewVisible, setPreviewVisible] = useState(false);
	const isMobile = useMemo(()=> !mounted || (mounted && window.innerWidth <= 560), [mounted]);
	const {isReady, meta} = useMeta(previewVisible ? props.link : undefined);
	const canExpand = (!!props.link && !isMobile) || (!props.link && !!props.title)
	const isVisible = useMemo(()=>{
		if (isMobile) return false;
		return isReady && previewVisible;
	}, [isMobile, isReady, previewVisible]);
	const containerRef = useRef<HTMLDivElement>(null);

	const {top, left, pointerContained} = useMemo(()=>{
		if (!containerRef.current) return {
			top: 0,
			left: 0
		}

		const rect = containerRef.current.getBoundingClientRect();

		const containerTop = rect.top + window.scrollY;
		const containerLeft = rect.left + window.scrollX;
		const containerRight = rect.right + window.scrollX;

		let newLeft = containerLeft + (rect.width / 2) - 160;

		return {
			top: containerTop + rect.height,
			left: Math.min(Math.max(newLeft, 10), windowContext.innerWidth - 30 - 320),
			pointerContained: (newLeft > 10) && (containerRight < windowContext.innerWidth - 10)
		}
	}, [containerRef.current, windowContext.innerWidth]);

	if (!mounted){
		return <abbr title={props.title ?? meta.title ?? props.children as string}>{props.children}</abbr>
	}

	const canNavigate = !!props.link && !props.static;

	return (
		<span className={styles.abbr}>
			<abbr
				data-mobile={!canNavigate && isMobile ? 'true' : 'false'} data-nav={!props.noNav}
				title={!(isVisible || (previewVisible && !props.link)) ? (props.title ?? meta.title ?? props.children as string) : undefined}
				onMouseOver={canExpand ? () => { setPreviewVisible(true) } : undefined}
				onFocusCapture={canExpand ? () => { setPreviewVisible(true) } : undefined}
				onMouseLeave={() => setPreviewVisible(false)}
				onBlurCapture={() => setPreviewVisible(false)}
				ref={containerRef}
			>
				{canNavigate ? <Anchor href={props.link} ariaDesc={props.title ?? meta.title ?? ''}>{props.children}</Anchor> : props.children}
				{!canNavigate && isMobile && (
					<sup><FontAwesomeIcon icon={faCircleInfo}/></sup>
				)}
			</abbr>
			<Portal type={"div"}>
				<AbbrPreview
					hideOriginPointer={!pointerContained}
					css={{ top, left }}
					isVisible={previewVisible}
					onEnter={canNavigate && !isMobile ? () => { setPreviewVisible(true) } : undefined}
					onLeave={() => setPreviewVisible(false)}
					{...meta}
					title={props.title ?? meta.title}
				/>
			</Portal>
		</span>
	)
}