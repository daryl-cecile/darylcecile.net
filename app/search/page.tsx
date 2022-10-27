import PageSearch from "../../components/PageSearch";
import { getAllNotesDataSorted } from "../../lib/notes";
import utilStyles from "../../styles/utils.module.scss";
import blogStyles from "../../styles/blog.module.scss";

export default async function SearchPage(){
    let allPostData = getAllNotesDataSorted(false);
    return (
        <div className="restrict">
            <br/>
            <br/>
            <h1 className={utilStyles.header}>Search my notes</h1>

            <PageSearch allPostsData={allPostData}/>

            <div className={blogStyles.workAroundTodoFixStyleInLowerComponents} />
        </div>
    )
}