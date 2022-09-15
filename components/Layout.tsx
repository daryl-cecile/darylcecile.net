import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'
import {LayoutOptions} from "../types";
import React from "react";
import Imports from "./Imports";
import Nav from './Nav';
import Footer from "./Footer";
import ScrollToTop from "./scrollToTop";
import Anchor from "./Anchor";
import CookieBanner from "./cookieBanner";

const name = ' Hey! I\'m Daryl. '
export const siteTitle = 'Daryl Cecile'

export default function Layout({ children, home, showBackBtn }:LayoutOptions) {
	return (
		<div>
			<Head>
				<link rel="apple-touch-icon" sizes="180x180" href="/images/core/profile_180.png"/>
				<link rel="icon" type="image/png" sizes="32x32" href="/images/core/profile_32.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/images/core/profile_16.png"/>
				<link rel="shortcut icon" href="/images/core/profile.ico"/>
				<link rel="manifest" href="/site.webmanifest"/>

				<meta name="description" content="My thoughts and experiences in the world of software and technology"/>
				<meta property="og:image" content="/images/core/header.png"/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@darylcecile" />
				<meta name="twitter:creator" content="@darylcecile" />
				<meta name="theme-color" content="#ffffff"/>
				<meta property="og:locale" content="en_US"/>
				<meta property="og:logo" content="/public/res/images/core/profile_180.png"/>
				<meta name="HandheldFriendly" content="True" />
				<meta name="MobileOptimized" content="320" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0"/>
				<meta httpEquiv="X-UA-Compatible" content="ie=edge,chrome=1" />
				<link rel="alternate" type="application/rss+xml" title="RSS Feed for darylcecile.net" href="/rss.xml" />

				<link rel="me" href="https://twitter.com/darylcecile"/>
				<link rel="webmention" href="https://webmention.io/darylcecile.net/webmention" />
				<link rel="pingback" href="https://webmention.io/darylcecile.net/xmlrpc" />
				<Imports/>
			</Head>
			<Nav/>
			{home && (
				<>
					<header className={styles.hero}>
						<img
							src="/images/core/profile_180.png"
							width={"135px"} height={"135px"}
							className={styles.heroImage}
							alt="Daryl's vector profile image"
						/>
						<h1 className={styles.heroTitle}>{name}</h1>
						<p className={utilStyles.paragraph}>I'm a Software developer hopping between Nottingham 🎓 and London 🏡. I recently graduated with a BSc in Computer Science at NTU. In between work and travelling (pre-🦠), I spend my time <Anchor href="/projects">making things</Anchor> on the tippy tapper. ⌨️</p>
						<p className={utilStyles.paragraph}>My CV is available in <Anchor href="/cv">digital</Anchor> and <Anchor isExternal href="/CV/CV-2022.pdf">PDF</Anchor> formats. <br/> My Career updates are on <Anchor
							href="https://linkedin.com/in/darylcecile">LinkedIn</Anchor></p>
					</header>
					<hr className={utilStyles.push}/>
				</>
			)}
			<main className="container">{children}</main>
			{showBackBtn && (
				<>
					<div className={styles.backToHome}>
						<Link href="/">
							<a>← Home</a>
						</Link>
					</div>
					<ScrollToTop />
				</>
			)}
			{/*<CookieBanner />*/}
			<Footer/>
		</div>
	)
}
