import Head from 'next/head'
import { GetStaticProps } from 'next'
import React, {useMemo} from "react";
import {getSortedNotesData} from "../../lib/notes";
import Layout, {siteTitle} from "../../components/Layout";
import {Note} from "../../types";
import utilStyles from "../../styles/utils.module.scss";
import NotePreview from "../../components/NotePreview";
import {parseISO} from "date-fns";

export default function NotesListingPage({ allPostsData }: { allPostsData: Note[] }) {

    const now = new Date();
    const publicNotes = useMemo(()=>{
        return allPostsData.filter(p => {
            if (p.hidden) return false;
            return parseISO(p.date).getTime() <= now.getTime();
        });
    }, [now, allPostsData])

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className="restrict">
          <h1 className={utilStyles.header}>Notes 🖋</h1>
          <p className={utilStyles.paragraph}>Here is a story... Back in the days of ECMAScript 6, Daryl had a blog but then got lazy and stopped writing. In the spirit of getting back to writing, Daryl will try to write least one piece a month. The end 🤣</p>

          <hr className={utilStyles.push}/>

          {publicNotes.map( ({slug, date, title, readTime}) => (
              <NotePreview key={slug} date={date} readTime={readTime} slug={slug} title={title}/>
          ) )}
      </div>

    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedNotesData();
  return {
    props: {
      allPostsData
    }
  }
}
