import Head from 'next/head'
import { GetStaticProps } from 'next'
import React from "react";
import Layout, {siteTitle} from "../components/Layout";
import { Project} from "../types";
import utilStyles from "../styles/utils.module.scss";
import Anchor from "../components/Anchor";
import Milestone from "../components/Milestone";

export default function ExperienceListingPage() {

  return (
    <Layout>
      <Head>
        <title>{siteTitle} &middot; CV</title>
      </Head>

      <div className="restrict">
          <h1 className={utilStyles.header}>CV</h1>
          <p className={utilStyles.paragraph}>Check out my experiences, achievements, and milestones below.</p>
          <p className={utilStyles.paragraph}>
              Alternatively, you can view my <Anchor isExternal href="/CV/CV-2021.pdf">CV</Anchor> (<Anchor isExternal href="/CV/CV-2021-ATS.pdf">ATS</Anchor>) from 2020-2021, or Follow my career updates on <Anchor
              href="https://linkedin.com/in/darylcecile">LinkedIn</Anchor>
          </p>

          <hr className={utilStyles.push}/>

          <Milestone
              title={"CapitalOne UK"}
              subtitle={"Software Development Engineer"}
              date={"2021 - Now"}
          >
              <p>
                  Working in a dev-tooling team; creating infrastructure, internal developer tools, and sharing knowledge of AWS Cloud solutions. This
                  role encompasses DevRel and developer advocacy as we work with the US enterprise as well as the UK business to encourage uptake of
                  AWS cloud services over on-prem, providing training where required, and ensuring developers are onboarded in an industry-compliant way.
              </p>
          </Milestone>

          <Milestone
              title={"Distinction Ltd"}
              subtitle={"Software Engineer"}
              date={"2021 - 2022"}
          >
             <p>
                 Work with clients across a wide range of domains, to create, maintain, and migrate their websites . As a software engineer at
                 Distinction, I work mostly with Kentico CMS, C# (with .NET Framework), NodeJS, as well as the front-end technology stacks.
             </p>

              <p>
                  I contributed towards the creation and release of a major client website, worked with clients to resolve is sues and implement
                  changes that lead to more efficient and stable products, and initiated process changes based on recommendations I made to simplify
                  development and enable cost- saving. During my time at Distinction, I continue to upskill in Kentico, Pantheon, and Umbraco CMS.
              </p>
          </Milestone>

          <Milestone
              title={"NTU Graduation"}
              subtitle={"BSc Computer Science"}
              date={"2016 – 2020"}
          >
              <p>
                  <li>Computer Science Programming</li>
                  <li>Internet Applications Programming</li>
                  <li>Practical Project Management and Prof Development</li>
                  <li>Information and Database Engineering</li>
              </p>
          </Milestone>

          <Milestone
              title={"ProjectFunction"}
              subtitle={"Co-Founder"}
              date={"2018 - 2022"}
          >
              <p>
                  Create opportunities for people to learn and get into the tech industry by providing free courses to those who are
                  underrepresented in the field. I am in charge of creating and maintaining both the main website and the learning hub, as well
                  as maintaining the database. I am able to make use of my knowledge of NodeJS, JavaScript, and EJS, when developing the site
                  for ProjectFunction. This role also involved working with industry partners and sponsors, to negotiate and form collaborations.
              </p>
          </Milestone>

          <Milestone
              title={"ERT"}
              subtitle={"Associate Software Developer"}
              date={"2018 – 2019"}
          >
              <p>
                  I had the opportunity to work as part of the research and development team at ERT during a year-long placement where my
                  duties included; feature design and implementation, as well as maintaining databases. Further to these, I was able to put my
                  knowledge of JavaScript, C# and .NET to use in a larger scale product, while learning how to make these more efficient.
              </p>
          </Milestone>

          <Milestone
              title={"Code First: Girls"}
              subtitle={"Coding Coach"}
              date={"2016"}
          >
              <p>
                  Worked as a team to provide coding assistance and mentorship to students aged 17+ with JavaScript, PHP, CSS, and HTML. Assisted
                  students in acquiring skills to write efficient code, as well as providing implementation methods for their individual project ideas.
                  In some cases, the individual has gone away to launch their startups, based on the ideas and guidance.
              </p>
          </Milestone>

          <Milestone
              title={"Just-Eat UK"}
              subtitle={"Android Dev Intern"}
              date={"2015"}
          >
              <p>
                  Worked under the mentorship of the Head of Android Development Team on the Jus t-Eat Android mobile application. Learned about
                  project management, scrum and sprints from the project manager, as well as shadowing the UI team during their proposal for the next
                  campaign.
              </p>
          </Milestone>

          <Milestone
              title={"EC1 Spectrum Studios"}
              subtitle={"IT Engineer"}
              date={"2012"}
          >
              <p>
                  Provided IT assistance to teaching staff and students. Deployed, setup and configured digital instruments and software. This experience
                  has also given me the chance to improve upon my C#, Java and PHP skills. In addition to the duties above, worked as part of the
                  publication team to release digital advertisements, film, and record public interviews.
              </p>
          </Milestone>
      </div>

    </Layout>
  )
}