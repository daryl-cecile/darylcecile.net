import Head from 'next/head'
import { GetStaticProps } from 'next'
import React from "react";
import {getSortedNotesData} from "../../lib/notes";
import Layout, {siteTitle} from "../../components/Layout";
import { Project} from "../../types";
import utilStyles from "../../styles/utils.module.css";
import ProjectPreview from "../../components/ProjectPreview";
import {getSortedProjectsData} from "../../lib/projects";

export default function ProjectsListingPage({ allProjectsData }: { allProjectsData: Project[] }) {

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className="restrict">
          <h1 className={utilStyles.header}>Projects</h1>
          <p className={utilStyles.paragraph}>I'm constantly flowing with ideas for tools and projects 🧠; and sometimes, I manage to scrape together the time to work on them ✨. Here are some of the projects that made the cut.</p>

          <hr className={utilStyles.push}/>

          {allProjectsData.map( ({id, name, summary,startYear,link,logo,tokens,endYear}) => (
              <ProjectPreview key={id} name={name} summary={summary} id={id} startYear={startYear} link={link} logo={logo} tokens={tokens} endYear={endYear}/>
          ) )}
      </div>

    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
        allProjectsData
    }
  }
}
