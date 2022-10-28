import DocumentHead from "../../../components/DocumentHead";
import { getNoteData } from "../../../lib/notes";

export default async function Head({params}){
    const postData = await getNoteData(params.slug, true);
    return (
        <DocumentHead 
            title={postData.title} 
            socialImageOverride={`https://darylcecile.net/api/og?slug=${postData.slug}`} 
            socialTitleOverride={postData.title}
        />
    )
}