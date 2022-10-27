"use client";

import { parseISO } from "date-fns";
import { useState, useMemo } from "react";
import type { Note } from "../types";
import NotePreview from "./NotePreview";
import SearchBox from "./searchBox";
import utilStyles from "../styles/utils.module.scss";

export default function PageSearch({allPostsData}:{allPostsData:Array<Note>}){
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

    let hasMatches = matches.length > 0;
    let hasQuery = searchTerms.trim().length > 0;
    
    return (
        <>
            <SearchBox onChange={val => setSearchTerms(val)} value={searchTerms} />

            <hr className={utilStyles.push}/>

            {hasMatches && (
                <>
                    {matches.map( ({slug, date, lastUpdated, title, readTime}) => (
                        <NotePreview key={slug} date={date} lastUpdated={lastUpdated} readTime={readTime} slug={slug} title={title}/>
                    ) )}
                </>
            )}

            {hasQuery && !hasMatches && (
                <span style={{
                    margin:'1rem auto',
                    maxWidth:'720px',
                    display:'block',
                    fontSize: '0.8rem',
                    fontStyle: 'italic',
                    opacity: 0.5
                }} >No results</span>
            )}


            <hr className={utilStyles.push}/>
</>
    )
}
