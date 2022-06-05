import {useState} from "react";


export default function CookieBanner(){
	const [isVisible, setIsVisible] = useState(true);

	return (
		<button
			style={{
				display:isVisible ? 'block' : 'none',
				position: 'fixed',
				bottom: 0,
				left: 0,
				right: 0,
				border: 'none',
				padding: '1rem',
				backgroundColor: 'rgba(0,0,0,0.5)',
				backdropFilter: 'saturate(180%) blur(20px)'
			}}
			onClick={()=>{ window['splitbee']?.enableCookie(); setIsVisible(false) }}
		>
			👋🏾 Hey there! I'm hoping to get a clearer number on how many people visit this site. Would you mind helping me out by taking a cookie? If so, click here
		</button>
	)
}