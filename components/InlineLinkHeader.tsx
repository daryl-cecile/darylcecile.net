import {ReactNode} from "react";
import {faLink} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from "./../styles/inlineLinkHeader.module.scss"

type InlineLinkHeaderProps = {
	children: ReactNode
}

export default function InlineLinkHeader(props:InlineLinkHeaderProps){
	const id = props.children[0].toString();
	return (
		<h3 className={styles.h} id={id}>
			<a href={`#${id}`}><FontAwesomeIcon icon={faLink} /></a>
			{props.children}
		</h3>
	)
}