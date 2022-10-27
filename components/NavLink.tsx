import Link from "next/link";
import { ReactNode } from "react";


export default function NavLink(props:{href:string, children:ReactNode}){
	return (
        <Link href={props.href} passHref={true} hrefLang="en" >
			{props.children}
		</Link>
    );
}