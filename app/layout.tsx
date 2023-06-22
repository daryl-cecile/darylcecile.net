import Footer from "../components/Footer";
import Nav from "../components/Nav.client";

import '../styles/global.scss'
import "highlight.js/styles/atom-one-dark.css"

import HomeHeader from "../components/HomeHeader";
import LowerNav from "../components/LowerNav";

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
				<a style={{
				  visibility:'hidden', 
				  display:'none'
				}} rel="me" href="https://techhub.social/@daryl">Mastodon</a>
				<Footer year={(new Date()).getFullYear()}/>
			</body>
		</html>
    )
}
