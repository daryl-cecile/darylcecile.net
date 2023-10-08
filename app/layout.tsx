import Footer from "../components/Footer";
import Nav from "../components/Nav.client";

import '../styles/global.scss'
import "highlight.js/styles/atom-one-dark.css"

import HomeHeader from "../components/HomeHeader";
import LowerNav from "../components/LowerNav";
import { Metadata, ResolvingMetadata } from "next";
import {Analytics} from "@vercel/analytics/react"

type RootLayoutProps = {
	params: {},
	searchParams?: Record<string, string>
}

export async function generateMetadata({ params, searchParams }: RootLayoutProps, parent: ResolvingMetadata): Promise<Metadata> {
	return {
		metadataBase: new URL(`https://darylcecile.net/`),
		alternates: {
			canonical: 'https://darylcecile.net',
			types: {
				'application/rss+xml': [
					{ title: 'RSS Feed for darylcecile.net', url: '/rss.xml' }
				]
			}
		},
		viewport: { minimumScale:1, initialScale: 1, width: 'device-width' },
		title: 'Daryl Cecile',
		authors: { name: 'Daryl Cecile', url: 'https://darylcecile.net' },
		description: 'Daryl Cecile',
		openGraph: {
			title: 'Daryl Cecile',
			images: [`https://darylcecile.net/og`],
			locale: 'en_US'
		},
		twitter: {
			card: 'summary_large_image',
			title: 'Daryl Cecile',
			images: `https://darylcecile.net/og`,
			site: '@darylcecile',
			creator: '@darylcecile'
		},
		themeColor: '#ffffff',
		icons: {
			apple: {
				sizes: "180x180",
				url: '/images/core/profile_180.png'
			},
			icon: [
				{ url: '/images/core/profile_32.png', sizes: '32x32', type: 'image/png' },
				{ url: '/images/core/profile_16.png', sizes: '16x16', type: 'image/png' },
			],
			shortcut: ['/images/core/profile.ico'],
			other: [
				{ rel: 'me', url:'https://twitter.com/darylcecile' },
				{ rel: 'webmention', url:'https://webmention.io/darylcecile.net/webmention' },
				{ rel: 'pingback', url:'https://webmention.io/darylcecile.net/xmlrpc' }
			]
		},
		manifest: '/site.webmanifest'
	} satisfies Metadata
}

export default function AppLayout({children}){
    return (
        <html>
			<head></head>
			<body>
				<Nav/>
				<HomeHeader name={' Hey! I\'m Daryl. '}/>
				<main className="container">{children}</main>
				<LowerNav />
				<a style={{
				  visibility:'hidden', 
				  display:'none'
				}} rel="me" href="https://techhub.social/@daryl">Mastodon</a>
				<Footer year={(new Date()).getFullYear()}/>
				<Analytics />
			</body>
		</html>
    )
}
