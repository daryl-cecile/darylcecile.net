import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {ReactNode, useCallback, useEffect, useRef, useState} from "react";
import styles from "./../styles/codeblock.module.scss";
import {faCopy, faCheck} from "@fortawesome/free-solid-svg-icons";

type CodeBlockProps = {
	children: ReactNode
}

export default function CodeBlock(props:CodeBlockProps){
	const [isOpen, setIsOpen] = useState(true);
	const [shouldCollapse, setShouldCollapse] = useState(false);
	const [copyComplete, setCopyComplete] = useState(false);
	const ref = useRef<HTMLPreElement>();

	const initCopy = useCallback(()=>{
		const value = ref.current.innerText;
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
		const size = ref.current.getBoundingClientRect();
		if (size.height > 300){
			setIsOpen(false);
			setShouldCollapse(true);
		}
	},[]);

	return (
		<div
			className={['wider-content', styles.block].join(' ')}
			data-open={isOpen}
		>
			<pre
				ref={ref}
				className={styles.main}
			>{props.children}</pre>

			<div className={styles.indicator}>
				<button onClick={()=>shouldCollapse && setIsOpen(prev => !prev)}>Show More</button>
			</div>

			<button className={styles.copy} onClick={initCopy}><FontAwesomeIcon icon={copyComplete ? faCheck : faCopy} /></button>
		</div>
	)
}