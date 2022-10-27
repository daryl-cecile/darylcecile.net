"use client";

import {useEffect} from "react";

type EmbeddedScriptProps = {
	content: string
}

export default function EmbeddedScript(props:EmbeddedScriptProps){
	useEffect(()=>{

		let wrapperFn = new Function(props.content);
		try{
			wrapperFn();
		}
		catch(ex){
			console.error('Failed to run embeddedScript. ', ex);
		}

	}, []);

	return null;
}