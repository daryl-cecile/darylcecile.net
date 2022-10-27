"use client";

import React from "react";
import useWindow from "../lib/useWindow";
import NavLink from "./NavLink";

export default function Nav(){
	const {scrollY} = useWindow();

	return (
		<nav data-top={scrollY === 0}>
			<div>
				<ul>
					<li>
						<NavLink href="/" >
							<img src="/images/core/profile_72.png" alt="" width={"50px"} height={"50px"}  />
						</NavLink>
					</li>
				</ul>
				<ul>
					<li><NavLink href="/notes">Notes</NavLink></li>
					<li><NavLink href="/projects">Projects</NavLink></li>
					<li>
						<NavLink href={'/search'}>
							<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="96px" height="96px">
								<path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 19.585938 21.585938 C 20.137937 22.137937 21.033938 22.137938 21.585938 21.585938 C 22.137938 21.033938 22.137938 20.137938 21.585938 19.585938 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"/>
							</svg>
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	)

}