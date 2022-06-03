import Head from 'next/head'
import { GetStaticProps } from 'next'
import React, {useMemo, useState} from "react";
import {getSortedNotesData} from "../lib/notes";
import Layout, {siteTitle} from "../components/Layout";
import {Note} from "../types";
import utilStyles from "../styles/utils.module.scss";
import NotePreview from "../components/NotePreview";
import {parseISO} from "date-fns";
import SearchBox from "../components/searchBox";

export default function NotesListingPage({ allPostsData }: { allPostsData: Note[] }) {
	const [searchTerms, setSearchTerms] = useState('');
	const now = new Date();
	const publicNotes = useMemo(()=>{
		return allPostsData.filter(p => {
			if (p.hidden) return false;
			return parseISO(p.date).getTime() <= now.getTime();
		});
	}, [now, allPostsData]);
	const matches = useMemo(()=>{
		return publicNotes.filter(note => {
			return note.title.includes(searchTerms) || note.content.includes(searchTerms);
		});
	}, [publicNotes, searchTerms]);

	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>

			<div className="restrict">
				<br/>
				<br/>
				<h1 className={utilStyles.header}>Search my notes</h1>

				<SearchBox onChange={val => setSearchTerms(val)} value={searchTerms} />

				<hr className={utilStyles.push}/>

				{matches.length > 0 ? (
					<>
						{matches.map( ({slug, date, lastUpdated, title, readTime}) => (
							<NotePreview key={slug} date={date} lastUpdated={lastUpdated} readTime={readTime} slug={slug} title={title}/>
						) )}
					</>
				) : (
					<span style={{
						margin:'1rem auto',
						maxWidth:'720px',
						display:'block',
						fontSize: '0.8rem',
						fontStyle: 'italic',
						opacity: 0.5
					}}
					>No results</span>
				)}
			</div>

		</Layout>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const allPostsData = getSortedNotesData(false);
	return {
		props: {
			allPostsData
		}
	}
}
