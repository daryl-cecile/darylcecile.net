import { createElement, Fragment } from "react";
import rehypeHighlight from "rehype-highlight";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";
import { remark } from "remark";
import html from "remark-html";
import { unified } from "unified";
import Abbreviation from "../../../components/Abbreviation";
import Anchor from "../../../components/Anchor";
import CodeBlock from "../../../components/CodeBlock";
import EmbeddedScript from "../../../components/EmbeddedScript";
import Gallery from "../../../components/Gallery";
import InfoBox from "../../../components/InfoBox";
import Tweet from "../../../components/Tweet";
import InlineLinkHeader from "../../../components/InlineLinkHeader";
import { getAllNotesDataSorted, getNoteData } from "../../../lib/notes";
import LocalDate from "../../../components/LocalDate";
import galleryStyles from "../../../styles/gallery.module.scss";
import { parseISO } from "date-fns";
import { notFound } from "next/navigation";
import ImageViewer from "../../../components/ImageViewer";
import { Metadata, ResolvingMetadata } from "next";


function markdownToHtmlWithoutSanitization(markdown: string) {
	return remark()
		.use(html, { sanitize: false })
		.processSync(markdown)
		.toString()
}

function markdownToReact(markdown: string) {
	const components = {
		a: (props: any) => {
			const { children, ...otherProps } = props;
			return <Anchor {...otherProps} withPreview={true} scroll={false}>{children}</Anchor>
		},
		abbr: (props: any) => {
			const { children, ...otherProps } = props;
			return <Abbreviation {...otherProps}>{children}</Abbreviation>
		},
		p: (props: any) => {
			if (props.children.length === 1 && ["img", "tweet"].includes(props.children[0]?.type?.name)) {
				return props.children[0];
			}
			return <p>{props.children}</p>
		},
		div: (props: any) => {
			return <div {...props}>{props.children}</div>
		},
		ul: (props: any) => {
			return <ul className={"para"}>{props.children}</ul>
		},
		img: (props: any) => {
			if (!!props.alt) {
				return (
					<figure>
						<ImageViewer
							src={props.src}
							alt={props.alt}
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
		script: (props: any) => {
			const { children, ...otherProps } = props;

			if (!!children) {
				return <EmbeddedScript content={props.children} />
			}

			return (
				<script {...otherProps} />
			)
		},
		pre: (props: any) => {
			return <CodeBlock>{props.children}</CodeBlock>
		},
		infobox: (props: any) => {
			return <InfoBox {...props}>{props.children}</InfoBox>
		},
		tweet: (props: any) => {
			/* @ts-ignore-error Server Component */
			return <Tweet id={props.id} />
		},
		gallery: (props: any) => {
			return <Gallery {...props} />
		},
		h3: (props: any) => {
			return <InlineLinkHeader>{props.children}</InlineLinkHeader>
		}
	};

	const result = unified()
		.use(rehypeParse, { fragment: true })
		.use(rehypeReact, {
			createElement,
			Fragment,
			components: components
		})
		.use(rehypeHighlight)
		.processSync(markdownToHtmlWithoutSanitization(markdown));

	try {
		if ((result.result as JSX.Element).props.children?.length === 1) {
			return (result.result as JSX.Element).props.children[0].props.children;
		}
		console.log(result.result);
	}
	catch (ex) {
		console.error('Assumption of markdown content failed', ex);
	}

	return result.result;
}

type NotePageProps = {
	params: {
		slug: string
	},
	searchParams?: Record<string, string>
}

export async function generateMetadata({ params, searchParams }: NotePageProps, parent: ResolvingMetadata): Promise<Metadata> {
	const postData = await getNoteData(params.slug, true);

	return {
		...(await parent) as any,
		metadataBase: new URL(`https://darylcecile.net/`),
		alternates: {
			canonical: `https://darylcecile.net/notes/${postData?.slug}`,
			types: {
				'application/rss+xml': [
					{ title: 'RSS Feed for darylcecile.net', url: '/rss.xml' }
				]
			}
		},
		viewport: { minimumScale:1, initialScale: 1, width: 'device-width' },
		title: postData?.title,
		authors: { name: 'Daryl Cecile', url: 'https://darylcecile.net' },
		description: postData?.snippet,
		openGraph: {
			title: postData?.title,
			images: [`https://darylcecile.net/og?slug=${postData?.slug}`],
			locale: 'en_US'
		},
		twitter: {
			card: 'summary_large_image',
			title: postData?.title,
			images: `https://darylcecile.net/og?slug=${postData?.slug}`,
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

export default async function SingleNotePage({ params }) {
	const postData = await getNoteData(params.slug);
	if (!postData) return notFound();
	const content = markdownToReact(postData.content);

	return (
		<article className="content">
			<h1>{postData.title}</h1>
			<span className="datetime"><LocalDate dateString={postData.date} /> &middot; {postData.readTime}</span>
			{!!postData.lastUpdated && (
				<span className="datetime">{'Last updated: '}<LocalDate dateString={postData.lastUpdated} /></span>
			)}
			<br />
			<div className="wider-content content">{content}</div>
			<div className={galleryStyles.workAroundTodoGalleryStyles} />
		</article>
	)
}

export async function generateStaticParams() {
	const posts = getAllNotesDataSorted(true).filter(note => !note.hidden && parseISO(note.date).getTime() <= Date.now());

	return posts.map((post) => ({
		slug: post.slug,
	}));
}
