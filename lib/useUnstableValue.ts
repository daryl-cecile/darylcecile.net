import {useEffect, useState} from "react";

/** This function exists to deal with values that may cause rehydration errors at runtime */
export default function useUnstableValue<T>(value:T): T {
	const [stableValue, setStableValue] = useState<T>(null);

	useEffect(()=>{
		setStableValue(value);
	}, []);

	return stableValue;
}