import DocumentHead from "../../components/DocumentHead";

export default function ProjectsListHead(){
    return (
        <DocumentHead 
            title="Projects" 
            socialImageOverride={`https://darylcecile.net/api/og?page=projects`} 
        />
    )
}