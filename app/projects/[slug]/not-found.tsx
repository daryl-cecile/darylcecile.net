import Anchor from "../../../components/Anchor";
import InfoBox from "../../../components/InfoBox";

export default function NotFound() {
    return (
        <article className="content">
            <br/>
            <br/>
            <InfoBox type="warn" preText="Project not found">
                <p>Either i've moved/removed this project, or the link is incorrect</p>
                <Anchor href="/projects">View all projects</Anchor>
            </InfoBox>
        </article>
    );
}