import {createContext, useContext, useEffect, useRef, useState} from "react";

export const WindowContext = createContext({
	innerWidth: 0,
	innerHeight: 0
});

export const useWindowContext = ()=>useContext(WindowContext);

export const WindowContextProvider = (props) => {
	const resizeTimeoutRef = useRef(null);
	const [innerSize, setInnerSize] = useState({innerWidth:0, innerHeight:0});

	useEffect(()=>{
		const resizeHandler = ()=>{
			clearTimeout(resizeTimeoutRef.current);
			resizeTimeoutRef.current = setTimeout(()=>{
				setInnerSize({
					innerWidth: window.innerWidth,
					innerHeight: window.innerHeight
				});
			}, 200);
		};

		resizeHandler();

		window.addEventListener("resize", resizeHandler);

		return ()=>{
			window.removeEventListener("resize", resizeHandler);
			clearTimeout(resizeTimeoutRef.current);
		}
	}, []);

	return (
		<WindowContext.Provider value={innerSize}>
			{props.children}
		</WindowContext.Provider>
	)
}