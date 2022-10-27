import Footer from "../components/Footer";
import Nav from "../components/Nav.client";

import '../styles/global.scss'
import "highlight.js/styles/atom-one-dark.css"

import HomeHeader from "../components/HomeHeader.client";
import LowerNav from "../components/LowerNav.client";

const name = ' Hey! I\'m Daryl. '

export default function AppLayout({children}){
    return (
        <html>
			<head></head>
			<body>
				<Nav/>
				<HomeHeader name={name}/>
				<main className="container">{children}</main>
				<LowerNav />
				{/*<CookieBanner />*/}
				<Footer year={(new Date()).getFullYear()}/>
			</body>
		</html>
    )
}
