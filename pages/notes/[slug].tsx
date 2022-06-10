import Layout from '../../components/Layout'
import { getAllNotesSlugs, getNoteData } from '../../lib/notes'
import Head from 'next/head'
import LocalDate from '../../components/LocalDate'
import { GetStaticProps, GetStaticPaths } from 'next'
import React, {createElement, Fragment, useEffect} from "react";
import { Note } from '../../types'
import {remark} from "remark";
import html from "remark-html";
import {unified} from "unified";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";
import Anchor from "../../components/Anchor";
import rehypeHighlight from "rehype-highlight";
import EmbeddedScript from "../../components/EmbeddedScript";
import CodeBlock from "../../components/CodeBlock";
import InfoBox from "../../components/InfoBox";
import InlineLinkHeader from "../../components/InlineLinkHeader";
import withTimeout from "../../lib/withTimeout";
import {Abbreviation} from "../../components/Abbreviation";

function markdownToHtmlWithoutSanitization(markdown:string){
	return remark()
		.use(html, {sanitize: false})
		.processSync(markdown)
		.toString()
}

function markdownToReact(markdown:string){
	const components = {
		a: (props: any)=>{
			const {children, ...otherProps} = props;
			return <Anchor {...otherProps} withPreview={true} scroll={false}>{children}</Anchor>
		},
		abbr: (props:any)=>{
			const {children, ...otherProps} = props;
			return <Abbreviation {...otherProps}>{children}</Abbreviation>
		},
		p: (props: any)=>{
			if (props.children.length === 1 && props.children[0]?.type?.name === "img"){
				return props.children[0];
			}
			return <p>{props.children}</p>
		},
		div: (props: any)=>{
			return <div {...props}>{props.children}</div>
		},
		ul: (props: any)=>{
			return <ul className={"para"}>{props.children}</ul>
		},
		img: (props: any)=>{
			if (!!props.alt){
				return (
					<figure>
						<img
							src={props.src}
							alt={props.alt}
							decoding={"async"}
							loading={props.loading ?? "lazy"}
						/>
						<figcaption>{props.alt}</figcaption>
					</figure>
				)
			}

			return (
				<img
					src={props.src}
					alt={props.alt ?? ""}
					decoding={"async"}
					loading={props.loading ?? "lazy"}
					width={props.width}
					height={props.height}
				/>
			)
		},
		script: (props: any)=>{
			const {children, ...otherProps} = props;

			if (!!children){
				return <EmbeddedScript content={props.children} />
			}

			return (
				<script {...otherProps} />
			)
		},
		pre: (props: any)=>{
			return <CodeBlock>{props.children}</CodeBlock>
		},
		infobox: (props: any)=>{
			return <InfoBox {...props}>{props.children}</InfoBox>
		},
		h3: (props: any) => {
			return <InlineLinkHeader>{props.children}</InlineLinkHeader>
		}
	};

	const result = unified()
		.use(rehypeParse, {fragment: true})
		.use(rehypeReact, {
			createElement,
			Fragment,
			components: components
		})
		.use(rehypeHighlight)
		.processSync(markdownToHtmlWithoutSanitization(markdown));

	try{
		if ((result.result as JSX.Element).props.children?.length === 1){
			return (result.result as JSX.Element).props.children[0].props.children;
		}
		console.log(result.result);
	}
	catch (ex){
		console.error('Assumption of markdown content failed', ex);
	}

	return result.result;
}

export default function NoteContentPage({postData }: { postData:Note }) {
	const content = markdownToReact(postData.content);

	useEffect(()=>{
		return withTimeout(()=>{
			const hash = document.location.hash;
			if (hash.length > 1){
				const el = document.querySelector(hash);
				if (el) el.scrollIntoView({behavior:"auto"});
			}
		}, 250);
	}, []);

	return (
		<Layout showBackBtn={true}>
			<Head>
				<title>{postData.title}</title>
				{postData.image && (
					<>
						<meta name={"twitter:card"} content={"summary"}/>
						<meta property={"twitter:image"} content={postData.image}/>
						<meta property={"og:image"} content={postData.image}/>
					</>
				)}
			</Head>
			<article className="content">
				<h1>{postData.title}</h1>
				<span className="datetime"><LocalDate dateString={postData.date} /> &middot; {postData.readTime}</span>
				{!!postData.lastUpdated && (
					<span className="datetime">{'Last updated: '}<LocalDate dateString={postData.lastUpdated} /></span>
				)}
				<br/>
				<div className="wider-content content">{content}</div>
			</article>
		</Layout>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getAllNotesSlugs()
	return {
		paths,
		fallback: false
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const postData = await getNoteData(params.slug as string)
	return {
		props: {
			postData
		}
	}
}
