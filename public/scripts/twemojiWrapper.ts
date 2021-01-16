/*
    Twemoji adapter created to quickly add Twemoji on this website
*/

declare const twemoji:{parse:(...args)=>void};

function updateEmojis(content?:string){
	return twemoji.parse(content ?? document.body, {
		callback: function(icon, options, variant) {
			switch ( icon ) {
				case 'a9':      // © copyright
				case 'ae':      // ® registered trademark
				case '2122':    // ™ trademark
					return false;
			}
			return ''.concat(options.base, options.size, '/', icon, options.ext);
		},
		className:"twemoji",
		ext:".png",
		attributes: function(){
			return {
				width: 72,
				height: 72
			}
		}
	});
}

function loadTwemoji(){
	/*
	Copyright 2019 Twitter, Inc and other contributors
    Code licensed under the MIT License: http://opensource.org/licenses/MIT
    Graphics licensed under CC-BY 4.0: https://creativecommons.org/licenses/by/4.0/
 */
	let script = document.createElement("script");
	script.src = "https://twemoji.maxcdn.com/v/latest/twemoji.min.js";
	script.crossOrigin = "anonymous";
	script.onload = ()=>{
		updateEmojis();

		let style = document.createElement("style");
		style.innerText = `img.twemoji {
		height: 1em;
		width: 1em;
		margin: 0 .05em 0 .1em;
		vertical-align: -0.1em;
		display: inline-block;
	}`;
		document.head.appendChild(style);
	};
	document.head.appendChild(script);
}

if (document.readyState != "loading") loadTwemoji();
else document.addEventListener("DOMContentLoaded", loadTwemoji);