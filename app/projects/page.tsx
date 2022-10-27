import Anchor from "../../components/Anchor";
import ProjectPreview from "../../components/ProjectPreview";
import { getAllProjectsDataSorted } from "../../lib/projects";
import utilStyles from "../../styles/utils.module.scss";
import componentStyles from "../../styles/projectPreview.module.scss";

export const revalidate = 30;

export default function ProjectListPage(){
    const allProjectsData = getAllProjectsDataSorted();

    return (
        <div className="restrict">
          <h1 className={utilStyles.header}>Projects</h1>
          <p className={utilStyles.paragraph}>I'm constantly flowing with ideas for tools and projects 🧠; and sometimes, I manage to scrape together the time to work on them ✨. Here are some of the projects that made the cut.</p>
          <p className={utilStyles.paragraph}>Check out my <Anchor href="https://github.com/daryl-cecile" isExternal>GitHub</Anchor> for more up-to-date development and proof-of-concepts</p>

          <hr className={utilStyles.push}/>

          {allProjectsData.map( ({id, name, summary,startYear,link,image, tokens,endYear}) => (
              <ProjectPreview key={id} name={name} summary={summary} id={id} startYear={startYear} link={link} image={image} tokens={tokens} endYear={endYear}/>
          ) )}

          <div className={componentStyles.workAroundTodoForceImportToEnsureStylesWork} />
      </div>
    )
}