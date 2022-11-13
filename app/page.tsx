import Anchor from "../components/Anchor";
import NotePreview from "../components/NotePreview";
import { getAllNotesDataSorted } from "../lib/notes";
import utilStyles from '../styles/utils.module.scss';
import {parseISO} from "date-fns";

export default function Page(){
    let publicNotes = getAllNotesDataSorted(true).filter(note => {
        if (note.hidden) return false;
        return parseISO(note.date).getTime() <= Date.now();
    });
    return (
        <>
            <div className="restrict">
                {publicNotes.slice(0, 4).map( ({slug, lastUpdated, date, title, readTime}) => (
                    <NotePreview key={slug} date={date} lastUpdated={lastUpdated} readTime={readTime} slug={slug} title={title}/>
                ) )}

                <br/>
                <hr/>
                <br/>

                <p className={utilStyles.paragraph} style={{textAlign:'end'}}>Looking for more? {' '}<Anchor href="/notes">View all {publicNotes.length} notes</Anchor></p>
            </div>
        </>
    )
}