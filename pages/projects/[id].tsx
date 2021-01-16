import Layout from '../../components/Layout'
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import React from "react";
import {Project} from '../../types'
import {getAllProjectsIds, getProjectData} from "../../lib/projects";


export default function ProjectContentPage({ projectData }: { projectData:Project }) {
  return (
    <Layout showBackBtn={true}>
      <Head> <title>{projectData.name}</title> </Head>
      <article className="content">
        <h2>{projectData.name}</h2>
        <span className="datetime">{(
            projectData.endYear ? `I've not worked on this since ${projectData.startYear}` : `Started this project in ${projectData.startYear}`
        )}</span>
        <br/>
        <div className="wider-content content" dangerouslySetInnerHTML={{ __html: projectData.summary }} />
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllProjectsIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projectData = await getProjectData(params.id as string)
  return {
    props: {
      projectData
    }
  }
}
