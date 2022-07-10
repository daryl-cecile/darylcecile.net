import React, {ReactNode, useEffect, useMemo, useRef, useState} from "react";
import styles from "./../styles/abbr.module.scss";
import useMounted from "../lib/useMounted";
import Anchor from "./Anchor";
import {faCircleInfo, faSpinner} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type AbbreviationProps = {
	title?:string,
	children:ReactNode,
	link?: string
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

function AbbrPreview({title, image, favicon, description, onEnter, onLeave, isVisible}){
	if (!isVisible) return null;

	if (!title && !description && !image){
		return (
			<div className={styles.preview} onMouseOver={onEnter} onMouseLeave={onLeave}>
				<div className={styles.previewSpinner}>
					<FontAwesomeIcon icon={faSpinner} spin />
				</div>
			</div>
		)
	}

	return (
		<div className={styles.preview} onMouseOver={onEnter} onMouseLeave={onLeave}>
			{!!image && <img src={`/api/fetchRaw?url=${encodeURIComponent(image)}`} alt=""/>}
			{!!title && <h3>{title}</h3>}
			{!!description && <p>{description}</p>}
		</div>
	)
}

export function Abbreviation(props:AbbreviationProps){
	const mounted = useMounted();
	const [previewVisible, setPreviewVisible] = useState(false);
	const isMobile = useMemo(()=> !mounted || (mounted && window.innerWidth <= 560), [mounted]);
	const {isReady, meta} = useMeta(previewVisible ? props.link : undefined);
	const canExpand = (!!props.link && !isMobile) || (!props.link && !!props.title)
	const isVisible = useMemo(()=>{
		if (isMobile) return false;
		return isReady && previewVisible;
	}, [isMobile, isReady, previewVisible]);

	if (!mounted){
		return <abbr title={props.title ?? meta.title ?? props.children as string}>{props.children}</abbr>
	}

	return (
		<div className={styles.abbr}>
			<abbr
				data-mobile={!props.link && isMobile ? 'true' : 'false'}
				title={!(isVisible || (previewVisible && !props.link)) ? (props.title ?? meta.title ?? props.children as string) : undefined}
				onMouseOver={canExpand ? () => { setPreviewVisible(true) } : undefined}
				onFocusCapture={canExpand ? () => { setPreviewVisible(true) } : undefined}
				onMouseLeave={() => setPreviewVisible(false)}
				onBlurCapture={() => setPreviewVisible(false)}
			>
				{!!props.link ? <Anchor href={props.link} ariaDesc={props.title ?? meta.title ?? ''}>{props.children}</Anchor> : props.children}
				{!props.link && isMobile && (
					<sup><FontAwesomeIcon icon={faCircleInfo}/></sup>
				)}
			</abbr>
			<AbbrPreview
				isVisible={previewVisible}
				onEnter={!!props.link && !isMobile ? () => { setPreviewVisible(true) } : undefined}
				onLeave={() => setPreviewVisible(false)}
				{...meta}
				title={props.title ?? meta.title}
			/>
		</div>
	)
}