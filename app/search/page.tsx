import PageSearch from "../../components/PageSearch";
import { getAllNotesDataSorted } from "../../lib/notes";
import utilStyles from "../../styles/utils.module.scss";
import blogStyles from "../../styles/blog.module.scss";
import { Suspense } from "react";

export default async function SearchPage(){
    let allPostData = getAllNotesDataSorted(false);
    return (
        <div className="restrict">
            <br/>
            <br/>
            <h1 className={utilStyles.header}>Search my notes</h1>

            <Suspense>
                <PageSearch allPostsData={allPostData}/>
            </Suspense>

            <div className={blogStyles.workAroundTodoFixStyleInLowerComponents} />
        </div>
    )
}