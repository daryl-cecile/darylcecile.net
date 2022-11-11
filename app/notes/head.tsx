import DocumentHead from "../../components/DocumentHead";

export default function NotesListHead(){
    return (
        <DocumentHead 
            title="Notes" 
            socialImageOverride={`https://darylcecile.net/api/og?page=notes`} 
        />
    )
}