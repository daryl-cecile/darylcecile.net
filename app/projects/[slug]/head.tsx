import DocumentHead from "../../../components/DocumentHead";
import { getProjectData } from "../../../lib/projects";

export default function Head({params}){
    const project = getProjectData(params.slug);
    return (
        <DocumentHead 
            title={project.name} 
            socialImageOverride={project.image} 
            socialTitleOverride={project.name}
        />
    )
}