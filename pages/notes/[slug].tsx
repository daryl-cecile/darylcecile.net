import Layout from '../../components/Layout'
import { getAllNotesSlugs, getNoteData } from '../../lib/notes'
import Head from 'next/head'
import Date from '../../components/Date'
import { GetStaticProps, GetStaticPaths } from 'next'
import React, {createElement, Fragment} from "react";
import { Note } from '../../types'
import {remark} from "remark";
import html from "remark-html";
import {unified} from "unified";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";
import Anchor from "../../components/Anchor";
import rehypeHighlight from "rehype-highlight";
import useMounted from "../../lib/useMounted";
import EmbeddedScript from "../../components/EmbeddedScript";
import CodeBlock from "../../components/CodeBlock";

function markdownToHtmlWithoutSanitization(markdown:string){
	return remark()
		.use(html, {sanitize: false})
		.processSync(markdown)
		.toString()
}

function markdownToReact(markdown:string){
	const result = unified()
		.use(rehypeParse, {fragment: true})
		.use(rehypeReact, {
			createElement,
			Fragment,
			components: {
				a: (props: any)=>{
					const {children, ...otherProps} = props;
					return <Anchor {...otherProps}>{children}</Anchor>
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
				}
			}
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

	return (
		<Layout showBackBtn={true}>
			<Head> <title>{postData.title}</title> </Head>
			<article className="content">
				<h2>{postData.title}</h2>
				<span className="datetime"><Date dateString={postData.date} /> &middot; {postData.readTime}</span>
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
