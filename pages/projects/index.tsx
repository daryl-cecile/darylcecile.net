import Head from 'next/head'
import { GetStaticProps } from 'next'
import React from "react";
import {getSortedNotesData} from "../../lib/notes";
import Layout, {siteTitle} from "../../components/Layout";
import { Project} from "../../types";
import utilStyles from "../../styles/utils.module.scss";
import ProjectPreview from "../../components/ProjectPreview";
import {getSortedProjectsData} from "../../lib/projects";
import Anchor from "../../components/Anchor";

export default function ProjectsListingPage({ allProjectsData }: { allProjectsData: Project[] }) {

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className="restrict">
          <h1 className={utilStyles.header}>Projects</h1>
          <p className={utilStyles.paragraph}>I'm constantly flowing with ideas for tools and projects 🧠; and sometimes, I manage to scrape together the time to work on them ✨. Here are some of the projects that made the cut.</p>
          <p className={utilStyles.paragraph}>Check out my <Anchor href="https://github.com/daryl-cecile" isExternal>GitHub</Anchor> for more up-to-date development and proof-of-concepts</p>

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
