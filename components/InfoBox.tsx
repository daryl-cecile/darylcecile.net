import styles from "./../styles/infobox.module.scss";
import {ReactNode} from "react";

type InfoBoxProps = {
	children: ReactNode
	preText?: string,
	type?: "info" | "warn" | "error" | "success"
}

export default function InfoBox(props:InfoBoxProps){
	return (
		<div className={styles.box} data-format={props.type ?? "info"}>
			<p>
				{!!props.preText && <strong>{props.preText}</strong>}
				{props.children}
			</p>
		</div>
	)
}