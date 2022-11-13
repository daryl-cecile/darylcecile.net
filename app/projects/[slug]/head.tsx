import DocumentHead from "../../../components/DocumentHead";
import { getProjectData } from "../../../lib/projects";

export default function Head({params}){
    const project = getProjectData(params.slug);

    if (!project) return <DocumentHead title="Project Not Found"/>

    return (
        <DocumentHead 
            title={project.name} 
            socialImageOverride={project.image} 
            socialTitleOverride={project.name}
        />
    )
}