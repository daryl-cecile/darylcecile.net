import Anchor from "../components/Anchor";
import NotePreview from "../components/NotePreview";
import { getAllNotesDataSorted } from "../lib/notes";
import utilStyles from '../styles/utils.module.scss';

export default function Page(){
    let publicNotes = getAllNotesDataSorted(true);
    return (
        <>
            <div className="restrict">
                <h2 className={utilStyles.header}>Notes 🖋</h2>
                <p className={utilStyles.paragraph}>Here is a few of my latest <Anchor href="/notes">mumbles</Anchor> 😅. I'm trying to write at least one piece every two month this year to get back into writing... let's see how that goes 🤣</p>
                <p className={utilStyles.paragraphStruck}><strong>UPDATE 2021:</strong> I tried to do this last year (2020), but when covid 💩 hit the fan, I stopped posting. This year im trying again. Lets see how it goes 🤞🏽</p>
                <p className={utilStyles.paragraph}><strong>UPDATE 2022:</strong> Things have also not worked out as planned with this 😅 So i've decided to try again - <em>Third times a charm?</em> </p>
                <br/>

                <hr/>

                <br/>

                {publicNotes.map( ({slug, lastUpdated, date, title, readTime}) => (
                    <NotePreview key={slug} date={date} lastUpdated={lastUpdated} readTime={readTime} slug={slug} title={title}/>
                ) )}
            </div>
        </>
    )
}