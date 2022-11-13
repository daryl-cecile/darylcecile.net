import Anchor from "../../../components/Anchor";
import InfoBox from "../../../components/InfoBox";

export default function NotFound() {
    return (
        <article className="content">
            <br/>
            <br/>
            <InfoBox type="warn" preText="Note not found">
                <p>Either i've moved/removed this note, or the link is incorrect</p>
                <Anchor href="/notes">View all notes</Anchor>
            </InfoBox>
        </article>
    );
}