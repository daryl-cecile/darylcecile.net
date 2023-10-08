import Anchor from "../components/Anchor";
import NotePreview from "../components/NotePreview";
import { getAllNotesDataSorted } from "../lib/notes";
import utilStyles from '../styles/utils.module.scss';
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import customParseFormat from "dayjs/plugin/customParseFormat"

export default function Page(){
    let publicNotes = getAllNotesDataSorted(true).filter(note => {
        dayjs.extend(utc);
		dayjs.extend(timezone);
		dayjs.extend(customParseFormat);

		const publishDate = dayjs.tz(note.date, "YYYY-MM-DD", "Europe/London");
		const currentDate = dayjs().tz("Europe/London");
		
		return !note.hidden && publishDate.toDate() < currentDate.toDate()
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