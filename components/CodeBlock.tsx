"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {ReactNode, useCallback, useEffect, useRef, useState} from "react";
import styles from "./../styles/codeblock.module.scss";
import {faCopy, faCheck} from "@fortawesome/free-solid-svg-icons";
import useMounted from "../lib/useMounted";

type CodeBlockProps = {
	children: ReactNode
}

export default function CodeBlock(props:CodeBlockProps){
	const [isOpen, setIsOpen] = useState(true);
	const [shouldCollapse, setShouldCollapse] = useState(false);
	const [copyComplete, setCopyComplete] = useState(false);
	const ref:any = useRef<HTMLPreElement>(null);
	const isMounted = useMounted();
	const [linedNodes, setLinedNodes] = useState<Array<any>>([]);

	const initCopy = useCallback(()=>{
		const value = ref.current?.innerText ?? "";
		navigator.clipboard.writeText(value).then(res => {
			setCopyComplete(true);
		}).catch(ex => {
			console.error('Failed to Copy.', ex);
		});
	},[ref]);

	useEffect(()=>{
		if (copyComplete){
			setTimeout(()=>{
				setCopyComplete(false);
			}, 3000);
		}
	}, [copyComplete])

	useEffect(()=>{
		const size = ref.current?.getBoundingClientRect();
		if (size.height > 300){
			setIsOpen(false);
			setShouldCollapse(true);
		}
	},[]);

	useEffect(()=>{
		if (!isMounted) return;

		let newItems = linedNodes;
		const codeEl = ref.current.querySelector('code');

		if (!linedNodes){
			const items = [...codeEl.childNodes];
			newItems = [];

			let leftOver:any = undefined;
			let leftOverType:number|undefined = undefined;
			let lastProcessedIndex = 0;

			items.forEach((item, index) => {
				let singleLineChunks = items.slice(lastProcessedIndex, index);

				if (item.nodeName === "#text"){
					if (item.textContent.includes("\n")){
						let contents = item.textContent.split('\n');

						if (leftOver){
							if (leftOverType === 0){
								singleLineChunks = [document.createTextNode(leftOver), ...singleLineChunks];
							}
							if (leftOverType === 1){
								const div = document.createElement('div');
								div.innerHTML = leftOver;
								singleLineChunks = [...div.childNodes, ...singleLineChunks];
							}
							leftOver = undefined;
						}

						singleLineChunks.push(document.createTextNode( contents.shift() ));

						const span = document.createElement('span');
						span.append(...singleLineChunks);
						span.className = 'line';

						newItems.push(span);

						leftOver = contents.length > 0 ? contents.pop() : undefined;
						leftOverType = 0;

						if (contents.length > 0){
							newItems.push(...contents.map(c => {
								const span = document.createElement('span');
								span.append(c);
								span.className = 'line';
								return span;
							}));
						}

						lastProcessedIndex = index + 1;

						return;

					}
				}
				else if (item.nodeType === 1 && item instanceof HTMLElement){
					let content = item.innerHTML;
					if (content.includes("\n")){
						let contents = item.innerHTML.split('\n');

						if (leftOver){
							if (leftOverType === 1){
								const div = document.createElement('div');
								div.innerHTML = leftOver;
								singleLineChunks = [...div.childNodes, ...singleLineChunks];
							}
							if (leftOverType === 0){
								singleLineChunks = [document.createTextNode(leftOver), ...singleLineChunks];
							}
							leftOver = undefined;
						}

						singleLineChunks.push((()=>{
							const cl = item.cloneNode(true) as HTMLElement;
							cl.innerHTML = contents.shift()!;
							return cl;
						})());

						const span = document.createElement('span');
						span.append(...singleLineChunks);
						span.className = 'line';

						newItems.push(span);

						leftOver = contents.length > 0 ? contents.pop() : undefined;
						leftOverType = 1;

						if (contents.length > 0){
							newItems.push(...contents.map(c => {
								const cl = item.cloneNode(true) as HTMLElement;
								cl.innerHTML = c;

								const span = document.createElement('span');
								span.append(cl);
								span.className = 'line';
								return span;
							}));
						}

						lastProcessedIndex = index + 1;

						return;
					}
				}
			});
			setLinedNodes(newItems);
		}
		codeEl.innerHTML = '';
		codeEl.append(...newItems);
		codeEl.innerHTML = codeEl.innerHTML.replace(/\t/gm, '    ');
	}, [isMounted, linedNodes])

	return (
		<div
			className={['wider-content', styles.block].join(' ')}
			data-open={isOpen}
		>
			<pre
				ref={ref}
				className={styles.main}
				suppressHydrationWarning={true}
			>{props.children}</pre>

			<div className={styles.indicator}>
				<button onClick={()=>shouldCollapse && setIsOpen(prev => !prev)}>Show More</button>
			</div>

			<button className={styles.copy} onClick={initCopy}><FontAwesomeIcon icon={copyComplete ? faCheck : faCopy} /></button>
		</div>
	)
}
