import {createContext, useContext, useEffect, useRef, useState} from "react";

export const WindowContext = createContext({
	innerWidth: 0,
	innerHeight: 0,
	scrollX: 0,
	scrollY: 0
});

export const useWindowContext = ()=>useContext(WindowContext);

export const WindowContextProvider = (props) => {
	const resizeTimeoutRef = useRef(null);
	const scrollTimeoutRef = useRef(null);
	const [innerSize, setInnerSize] = useState({innerWidth:0, innerHeight:0});
	const [scroll, setScroll] = useState({scrollX:0, scrollY:0});

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

	useEffect(()=>{
		const scrollHandler = ()=>{
			clearTimeout(scrollTimeoutRef.current);
			scrollTimeoutRef.current = setTimeout(()=>{
				setScroll({
					scrollX: window.scrollX,
					scrollY: window.scrollY
				});
			}, 200);
		};

		scrollHandler();

		window.addEventListener("scroll", scrollHandler);

		return ()=>{
			window.removeEventListener("scroll", scrollHandler);
			clearTimeout(scrollTimeoutRef.current);
		}
	}, []);

	return (
		<WindowContext.Provider value={{...innerSize, ...scroll}}>
			{props.children}
		</WindowContext.Provider>
	)
}