"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {ReactNode, useCallback, useEffect, useRef, useState} from "react";
import styles from "./../styles/codeblock.module.scss";
import {faCopy, faCheck} from "@fortawesome/free-solid-svg-icons";
import useMounted from "../lib/useMounted";
import cn from "../lib/cn";

type CodeBlockProps = {
	children: ReactNode
}

export default function CodeBlock(props:CodeBlockProps){
	const [copyComplete, setCopyComplete] = useState(false);
	const ref:any = useRef<HTMLPreElement>(null);

	function initCopy(){
		const value = ref.current?.innerText ?? "";
		navigator.clipboard.writeText(value).then(res => {
			setCopyComplete(true);
		}).catch(ex => {
			console.error('Failed to Copy.', ex);
		});
	}

	useEffect(()=>{
		if (copyComplete){
			setTimeout(()=>{
				setCopyComplete(false);
			}, 3000);
		}
	}, [copyComplete]);

	return (
		<div
			className={cn(
				styles.container,
				'wider-content relative', 
				'p-2 rounded-lg bg-black',
			)}
		>
			<pre 
				ref={ref} 
				className={cn(
					"text-sm font-extralight overflow-x-auto"
				)}
			>
				{props.children}
			</pre>

			<button className={styles.copy} onClick={initCopy}>
				<FontAwesomeIcon size="xs" icon={copyComplete ? faCheck : faCopy} />
			</button>
		</div>
	)
}
