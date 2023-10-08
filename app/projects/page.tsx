import Anchor from "../../components/Anchor";
import ProjectPreview from "../../components/ProjectPreview";
import { getAllProjectsDataSorted } from "../../lib/projects";
import utilStyles from "../../styles/utils.module.scss";
import componentStyles from "../../styles/projectPreview.module.scss";
import { Metadata, ResolvingMetadata } from "next";

export const revalidate = 30;

type ProjectListProps = {
	params: {},
	searchParams?: Record<string, string>
}

export async function generateMetadata({ params, searchParams }: ProjectListProps, parent: ResolvingMetadata): Promise<Metadata> {
	return {
		metadataBase: new URL(`https://darylcecile.net/`),
		alternates: {
			canonical: 'https://darylcecile.net/projects',
			types: {
				'application/rss+xml': [
					{ title: 'RSS Feed for darylcecile.net', url: '/rss.xml' }
				]
			}
		},
		viewport: { minimumScale:1, initialScale: 1, width: 'device-width' },
		title: 'Projects | Daryl Cecile',
		authors: { name: 'Daryl Cecile', url: 'https://darylcecile.net' },
		description: 'Daryl Cecile',
		openGraph: {
			title: 'Projects | Daryl Cecile',
			images: [`https://darylcecile.net/og?page=projects`],
			locale: 'en_US'
		},
		twitter: {
			card: 'summary_large_image',
			title: 'Projects | Daryl Cecile',
			images: `https://darylcecile.net/og?page=projects`,
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

export default function ProjectListPage(){
    const allProjectsData = getAllProjectsDataSorted();

    return (
        <div className="restrict">
          <h1 className={utilStyles.header}>Projects</h1>
          <p className={utilStyles.paragraph}>I'm constantly flowing with ideas for tools and projects 🧠; and sometimes, I manage to scrape together the time to work on them ✨. Here are some of the projects that made the cut.</p>
          <p className={utilStyles.paragraph}>Check out my <Anchor href="https://github.com/daryl-cecile" isExternal>GitHub</Anchor> for more up-to-date development and proof-of-concepts</p>

          <hr className={utilStyles.push}/>

          {allProjectsData.map( ({id, name, summary,startYear,link,image, tokens,endYear}) => (
              <ProjectPreview key={id} name={name} summary={summary} id={id} startYear={startYear} link={link} image={image} tokens={tokens} endYear={endYear}/>
          ) )}

          <div className={componentStyles.workAroundTodoForceImportToEnsureStylesWork} />
      </div>
    )
}