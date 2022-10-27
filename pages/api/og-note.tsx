import { ImageResponse } from '@vercel/og';
import noteData from "../../public/notes.json";

export const config = {
	runtime: 'experimental-edge',
}

export default async function(opt){
	let query = opt.nextUrl.searchParams;
	let post = noteData.items.find(item => item.slug === query.get("slug"));
	
	return new ImageResponse(
		(
		  <div
			style={{
			  width: '100%',
			  height: '100%',
			  display: 'flex',
			  flexDirection: 'column',
			  justifyContent: 'flex-end',
			  background: '#0d1117',
			  padding: 64
			}}
		  >
		  	<span style={{color:'#8b949e', padding: 5}}>darylcecile.net/notes</span>
			<p style={{
				fontSize: 64, 
				maxWidth:'70%', 
				lineHeight: 1,
				backgroundImage: "linear-gradient(-95deg, #28a7ff, #7157ff, #c041ff, #f802a0)",
				WebkitBackgroundClip: "text",
				backgroundClip: "text",
				color: "transparent",
				}}>{post.title}</p>
			<span style={{
				color:'#c9d1d9', fontSize: 16,
				paddingTop: 24, padding: 5
				}}>{post.author[0].name}&emsp;&mdash;&emsp;{post.readTime}</span>
			<img src={"https://darylcecile.net/images/core/profile.png"} alt="" style={{
				width: 250,
				height: 250,
				position: 'absolute',
				right: 128,
				top: 128
			}}/>
		  </div>
		)
	  )
}