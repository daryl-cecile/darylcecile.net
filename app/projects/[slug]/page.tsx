
import { notFound } from "next/navigation";
import { getProjectData } from "../../../lib/projects";
import { Metadata, ResolvingMetadata } from "next";

type ProjectPageProps = {
	params: {
		slug: string
	},
	searchParams?: Record<string, string>
}

export async function generateMetadata({ params, searchParams }: ProjectPageProps, parent: ResolvingMetadata): Promise<Metadata> {
	const postData = getProjectData(params.slug);

	return {
		...(await parent) as any,
		metadataBase: new URL(`https://darylcecile.net/`),
		alternates: {
			canonical: `https://darylcecile.net/projects/${params.slug}`,
			types: {
				'application/rss+xml': [
					{ title: 'RSS Feed for darylcecile.net', url: '/rss.xml' }
				]
			}
		},
		viewport: { minimumScale:1, initialScale: 1, width: 'device-width' },
		title: postData?.name,
		authors: { name: 'Daryl Cecile', url: 'https://darylcecile.net' },
		description: postData?.summary,
		openGraph: {
			title: postData?.name,
			images: [postData?.image],
			locale: 'en_US'
		},
		twitter: {
			card: 'summary_large_image',
			title: postData?.name,
			images: postData?.image,
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

export default function SingleProjectPage({params}){
    const projectData = getProjectData(params.slug);

	if (!projectData) return notFound();
	
    return (
        <article className="content">
			<h2>{projectData.name}</h2>
			<span className="datetime">{(
				projectData.endYear ? `I've not worked on this since ${projectData.startYear}` : `Started this project in ${projectData.startYear}`
			)}</span>
			<br/>
			<div className="wider-content content" dangerouslySetInnerHTML={{ __html: projectData.summary }} />
      </article>
    )
}