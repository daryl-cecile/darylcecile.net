import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import { getSortedNotesData } from '../lib/notes'
import { GetStaticProps } from 'next'
import React, {useMemo} from "react";
import {Note} from "../types";
import {parseISO} from "date-fns";
import Gallery from '../components/Gallery';

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
          <Gallery imageUrls={{
            "/images/business_card_1.jpeg": "PF Business Cards",
            "/images/nonsuch.jpeg": "Nonsuch studios where wave 9 took place",
            "/images/pridesoc.jpeg": "Pic with pride soc",
            "/images/projects/hydrogen2.png": "Hydrogen IDE",
            "/images/projects/notora.png": "Notora IDE",
            "/images/projects/mk.png": "Not sure",
            "/images/chrome-extension-architecture.png": "chrome ext architecture",
            "/images/campus-deploy1.png": "Campus Deploy",
            "/images/projects/slantedpress.png": "SlantedPress website",
            "/images/pantherCat.jpg": "My Catto"
          }} />
      </div>

    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedNotesData(true);
  return {
    props: {
      allPostsData
    }
  }
}
