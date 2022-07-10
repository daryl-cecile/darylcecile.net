import '../styles/global.scss'
import "highlight.js/styles/atom-one-dark.css"
import { AppProps } from 'next/app'
import {useRouter} from "next/router";
import {useEffect} from "react";
import {WindowContextProvider} from "../lib/WindowContext";

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter()

	useEffect(() => {
		const onNavigated = () => {
			setTimeout(()=>{
				document.dispatchEvent(new Event("DOMContentLoaded", {
					bubbles: true,
					cancelable: true
				}));
			}, 500);
		}

		router.events.on('routeChangeComplete', onNavigated)
		router.events.on('routeChangeError', onNavigated)

		return () => {
			router.events.off('routeChangeComplete', onNavigated)
			router.events.off('routeChangeError', onNavigated)
		}
	}, [router])

	return (
		<WindowContextProvider>
			<Component {...pageProps} />
		</WindowContextProvider>
	)
}
