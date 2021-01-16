import Layout from '../../components/Layout'
import { getAllNotesSlugs, getNoteData } from '../../lib/notes'
import Head from 'next/head'
import Date from '../../components/Date'
import { GetStaticProps, GetStaticPaths } from 'next'
import React from "react";
import { Note } from '../../types'


export default function NoteContentPage({postData }: { postData:Note }) {
  return (
    <Layout showBackBtn={true}>
      <Head> <title>{postData.title}</title> </Head>
      <article className="content">
        <h2>{postData.title}</h2>
        <span className="datetime"><Date dateString={postData.date} /> &middot; {postData.readTime}</span>
        <br/>
        <div className="wider-content content" dangerouslySetInnerHTML={{ __html: postData.renderedContent }} />
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllNotesSlugs()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getNoteData(params.slug as string)
  return {
    props: {
      postData
    }
  }
}
