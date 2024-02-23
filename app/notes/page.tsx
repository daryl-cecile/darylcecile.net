
import Anchor from "../../components/Anchor";
import NotePreview from "../../components/NotePreview";
import { getAllNotesDataSorted } from "../../lib/notes";
import utilStyles from "../../styles/utils.module.scss";
import { Metadata, ResolvingMetadata } from "next";
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import customParseFormat from "dayjs/plugin/customParseFormat"

export const revalidate = 30;

type NotesListProps = {
	params: {},
	searchParams?: Record<string, string>
}

export async function generateMetadata({ params, searchParams }: NotesListProps, parent: ResolvingMetadata): Promise<Metadata> {
	return {
		metadataBase: new URL(`https://darylcecile.net/`),
		alternates: {
			canonical: 'https://darylcecile.net/notes',
			types: {
				'application/rss+xml': [
					{ title: 'RSS Feed for darylcecile.net', url: '/rss.xml' }
				]
			}
		},
		viewport: { minimumScale:1, initialScale: 1, width: 'device-width' },
		title: 'Notes | Daryl Cecile',
		authors: { name: 'Daryl Cecile', url: 'https://darylcecile.net' },
		description: 'Daryl Cecile',
		openGraph: {
			title: 'Notes | Daryl Cecile',
			images: [`https://darylcecile.net/og?page=notes`],
			locale: 'en_US'
		},
		twitter: {
			card: 'summary_large_image',
			title: 'Notes | Daryl Cecile',
			images: `https://darylcecile.net/og?page=notes`,
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

export default async function NotesListPage(){
    const publicNotes = getAllNotesDataSorted().filter(note => {
		dayjs.extend(utc);
		dayjs.extend(timezone);
		dayjs.extend(customParseFormat);

		const publishDate = dayjs.tz(note.date, "YYYY-MM-DD", "Europe/London");
		const currentDate = dayjs().tz("Europe/London");
		
		return !note.hidden && publishDate.toDate() < currentDate.toDate()
	});

    return (
        <div className="restrict">
            <h1 className={utilStyles.header}>Notes 🖋</h1>
            <p className={utilStyles.paragraph}>Here is a few of my latest <Anchor href="/notes">mumbles</Anchor> 😅. I'm trying to write at least one piece every two month this year to get back into writing... let's see how that goes 🤣</p>
            <p className={utilStyles.paragraphStruck}><strong>UPDATE 2021:</strong> I tried to do this last year (2020), but when covid 💩 hit the fan, I stopped posting. This year im trying again. Lets see how it goes 🤞🏽</p>
            <p className={utilStyles.paragraph}><strong>UPDATE 2022:</strong> Things have also not worked out as planned with this 😅 So i've decided to try again - <em>Third times a charm?</em> </p>
        

          <hr className={utilStyles.push}/>

          {publicNotes.map( ({slug, date, lastUpdated, title, readTime}) => (
              <NotePreview key={slug} date={date} lastUpdated={lastUpdated} readTime={readTime} slug={slug} title={title}/>
          ) )}
      </div>
    )
}