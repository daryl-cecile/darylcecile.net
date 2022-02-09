import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import utilStyles from '../styles/utils.module.scss'
import { getSortedNotesData } from '../lib/notes'
import { GetStaticProps } from 'next'
import React, {useMemo} from "react";
import {Note} from "../types";
import NotePreview from "../components/NotePreview";
import {parseISO} from "date-fns";

export default function HomePage({ allPostsData }: { allPostsData: Note[] }) {

    const now = new Date();
    const publicNotes = useMemo(()=>{
        return allPostsData.filter(p => {
            if (p.hidden) return false;
            return parseISO(p.date).getTime() <= now.getTime();
        });
    }, [now, allPostsData])

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className="restrict">
          <h2 className={utilStyles.header}>Notes 🖋</h2>
          <p className={utilStyles.paragraph}>Here is a few of my latest <a href="/notes" hrefLang="en">mumbles</a> 😅. I'm trying to write at least one piece every two month this year to get back into writing... let's see how that goes 🤣</p>
          <p className={utilStyles.paragraphStruck}><strong>UPDATE 2021:</strong> I tried to do this last year (2020), but when covid 💩 hit the fan, I stopped posting. This year im trying again. Lets see how it goes 🤞🏽</p>
          <p className={utilStyles.paragraph}><strong>UPDATE 2022:</strong> Things have also not worked out as planned with this 😅 So i've decided to try again - <em>Third times a charm?</em> </p>
          <br/>

          <hr/>

          <br/>

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
