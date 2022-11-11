
import { parseISO } from "date-fns";
import NotePreview from "../../components/NotePreview";
import { getAllNotesDataSorted } from "../../lib/notes";
import utilStyles from "../../styles/utils.module.scss";

export const revalidate = 30;

export default async function NotesListPage(){
    const publicNotes = getAllNotesDataSorted().filter(note => !note.hidden && parseISO(note.date).getTime() <= Date.now());

    return (
        <div className="restrict">
          <h1 className={utilStyles.header}>Notes 🖋</h1>
          <p className={utilStyles.paragraph}>Here is a story... Back in the days of ECMAScript 6, Daryl had a blog but then got lazy and stopped writing. In the spirit of getting back to writing, Daryl will try to write least one piece a month. The end 🤣</p>

          <hr className={utilStyles.push}/>

          {publicNotes.map( ({slug, date, lastUpdated, title, readTime}) => (
              <NotePreview key={slug} date={date} lastUpdated={lastUpdated} readTime={readTime} slug={slug} title={title}/>
          ) )}
      </div>
    )
}