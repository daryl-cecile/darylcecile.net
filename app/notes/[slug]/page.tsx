import { getAllNotesDataSorted, getNoteData } from "../../../lib/notes";
import LocalDate from "../../../components/LocalDate";
import galleryStyles from "../../../styles/gallery.module.scss";
import { parseISO } from "date-fns";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata, Viewport } from "next";
import { Markdown } from "../../../components/Markdown";

type NotePageProps = {
	params: {
		slug: string
	},
	searchParams?: Record<string, string>
}

export async function generateViewport({ params, searchParams }: NotePageProps): Promise<Viewport[]> {
	return [{ minimumScale:1, initialScale: 1, width: 'device-width' }]
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


	return (
		<article className="content">
			<h1>{postData.title}</h1>
			<span className="datetime"><LocalDate dateString={postData.date} /> &middot; {postData.readTime}</span>
			{!!postData.lastUpdated && (
				<span className="datetime">{'Last updated: '}<LocalDate dateString={postData.lastUpdated} /></span>
			)}
			<br />
			<div className="wider-content content">
				<Markdown 
					children={postData.content}
				/>
			</div>
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
