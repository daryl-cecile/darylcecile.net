
import { notFound } from "next/navigation";
import { getProjectData } from "../../../lib/projects";

export default function SingleProjectPage({params}){
    const projectData = getProjectData(params.slug);

	if (!projectData) return notFound();
	
    return (
        <article className="content">
			<h2>{projectData.name}</h2>
			<span className="datetime">{(
				projectData.endYear ? `I've not worked on this since ${projectData.startYear}` : `Started this project in ${projectData.startYear}`
			)}</span>
			<br/>
			<div className="wider-content content" dangerouslySetInnerHTML={{ __html: projectData.summary }} />
      </article>
    )
}