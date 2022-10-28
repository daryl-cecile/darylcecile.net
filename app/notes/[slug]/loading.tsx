
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Loading(){
    return (
        <div style={{width: "100%", height: "90vh", display: "flex", alignItems: "center", justifyContent: "center", margin: "auto"}}>
            <FontAwesomeIcon icon={faSpinner} spin />
        </div>
    )
}