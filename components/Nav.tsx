import React from "react";


export default function Nav(){

	return (
		<nav>
			<div>
				<ul>
					<li>
						<a href="/" hrefLang="en">
							<img src="/images/core/profile_72.png" alt="" width={"50px"} height={"50px"}  />
						</a>
					</li>
				</ul>
				<ul>
					<li><a href="/notes" hrefLang="en">Notes</a></li>
					<li><a href="/projects" hrefLang="en">Projects</a></li>
				</ul>
			</div>
		</nav>
	)

}