import { ImageResponse } from '@vercel/og';
import noteData from "../../public/notes.json";
import { notFound } from 'next/navigation';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(opt:NextRequest):Promise<Response>{
	const { searchParams } = new URL(opt.url);

	if (!searchParams.has("slug")) {

		if (searchParams.has("page")) {
			return new ImageResponse(
				<SimpleImage title={`/${searchParams.get('page')!.toLowerCase()}`} subHeading={"@darylcecile"} />
			) as Response
		}

		return new ImageResponse(
			<SimpleImage title={"Hey! I'm Daryl 👋🏾"} subHeading={"@darylcecile"} />
		) as Response
	}

	let post = noteData.items.find(item => item.slug === searchParams.get("slug"));

    if (!post) return notFound()
	
	return new ImageResponse(
		<AdvanceImage title={post.title} authorName={post.author[0].name} readTime={post.readTime} />
	) as Response
}

function SimpleImage({title, subHeading}){
	return (
		<div style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				background: '#0d1117',
				padding: 64,
			}}>
			<img src={"https://darylcecile.net/images/core/profile.png"} alt="" style={{
				width: 128,
				height: 128,
			}}/>
			<span style={{
				color:'#c9d1d9', fontSize: 26,
				marginTop: 24, padding: 5,
				marginBottom: 32
				}}>{subHeading}</span>
			<p style={{
				fontSize: 74, 
				maxWidth:'70%', 
				lineHeight: 1.2,
				backgroundImage: "linear-gradient(-95deg, #28a7ff, #7157ff, #c041ff, #f802a0)",
				WebkitBackgroundClip: "text",
				backgroundClip: "text",
				color: "transparent",
				textAlign: 'center'
				}}>{title}</p>
		</div>
	)
}

function AdvanceImage({title, authorName, readTime}){
	return (
		<div style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-end',
				background: '#0d1117',
				padding: 64,
			}}>
			<span style={{color:'#8b949e', padding: 5, fontSize: 16}}>darylcecile.net/notes</span>
			<p style={{
				fontSize: 74, 
				maxWidth:'70%', 
				lineHeight: 1.05,
				backgroundImage: "linear-gradient(-95deg, #28a7ff, #7157ff, #c041ff, #f802a0)",
				WebkitBackgroundClip: "text",
				backgroundClip: "text",
				color: "transparent",
				}}>{title}</p>
			<span style={{
				color:'#c9d1d9', fontSize: 26,
				marginTop: 16, padding: 5
				}}>{authorName}&emsp;&mdash;&emsp;{readTime}</span>
			<img src={"https://darylcecile.net/images/core/profile.png"} alt="" style={{
				width: 250,
				height: 250,
				position: 'absolute',
				right: 128,
				top: 128,
			}}/>
		</div>
	)
}