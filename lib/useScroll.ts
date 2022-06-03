import {useCallback, useRef} from "react";

type scrollEventArg = (scrollPosition:{x:number, y:number})=>void
export function useScroll(ms:number=300, deps=[]){
	const timeoutRef = useRef<number|NodeJS.Timeout>();
	const eventHandler = useCallback(( fn:scrollEventArg )=>{
		clearTimeout(timeoutRef.current as number);
		timeoutRef.current = setTimeout(()=>{
			fn({x: window.scrollX, y: window.scrollY});
		}, ms);
	}, [ms,...deps]);

	return {
		onScrollEventDebounced: eventHandler
	}
}