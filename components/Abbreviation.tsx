"use client";

import React, {ReactNode, useEffect, useMemo, useRef, useState} from "react";
import styles from "./../styles/abbr.module.scss";
import useMounted from "../lib/useMounted";
import Anchor from "./Anchor";
import {faCircleInfo, faSpinner} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Portal} from "next/dist/client/portal";
import useWindow from "../lib/useWindow";
import useFetch from "../lib/useFetch";

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
	const [isReady, setIsReady] = useState(false);
	const [meta, setMeta] = useState({
		title: undefined as string,
		favicon: null as string,
		image: null as string,
		description: null as string,
	});
	const fetchResults = useFetch('/api/fetch', {
	  queryParams: {
	    url: encodeURIComponent(url)
	  }
	});
    console.log('fetchResults', fetchResults?.data);
	
    useEffect(()=>{
    if (fetchResults.state === "ready"){
      let text = fetchResults.data;
      const PARSER = new DOMParser();
      const DOC = PARSER.parseFromString( text , 'text/html');
			
      console.log('doc', DOC);

      setMeta({
        title: DOC.querySelector('title')?.innerText,
        favicon: [...DOC.querySelectorAll('[rel=icon]')].reverse()[0]?.getAttribute('href'),
        image: DOC.querySelector('[property="og:image"]')?.getAttribute('content'),
        description: ( DOC.querySelector('[name=description]') ?? DOC.querySelector('[property="og:description"]') )?.getAttribute('content'),
      });
      setIsReady(true);
	  
    }
  }, [fetchResults.state]);

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
	const windowContext = useWindow();
	const [previewVisible, setPreviewVisible] = useState(false);
	const isMobile = windowContext.innerWidth <= 560;
	const {isReady, meta} = useMeta(props.link);
	const canNavigate = !!props.link && !props.static;
	const canExpand = !canNavigate || (!!props.link && !isMobile);
	const isVisible = useMemo(()=>{
		if (isMobile) return false;
		return isReady && previewVisible;
	}, [isMobile, isReady, previewVisible]);
	const containerRef = useRef<HTMLDivElement>(null);

	const {top, left, pointerContained} = useMemo(()=>{
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
	
	console.log('meta', meta);

	if (!mounted){
		return <abbr title={props.title ?? meta.title ?? props.children as string}>{props.children}</abbr>
	}
	
	const isSafari = mounted && navigator.vendor ==  "Apple Computer, Inc.";

	return (
		<span className={styles.abbr} data-can-expand={canExpand} data-mob={isMobile}>
			<abbr
				data-mobile={!canNavigate && isMobile ? 'true' : (isSafari ? 'true' : 'false')} 
				data-nav={!props.static}
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
