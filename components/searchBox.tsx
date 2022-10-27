import {useEffect, useState} from "react";
import utilStyles from "./../styles/utils.module.scss";
import {useSearchParams} from "next/navigation";

type SearchBoxProps = {
	onChange: (value:string) => void,
	value: string,
}

export default function SearchBox(props:SearchBoxProps){
	const [value, setValue] = useState('');
	const query = useSearchParams();

	useEffect(()=>{
		if (value.length === 0 && query.has("q")) {
			let newValue = query.get("q").trim().toLowerCase();
			setValue(newValue);
			props.onChange(newValue);
		}
	}, [query.get("q") ?? '']);

	useEffect(()=>{ setValue(props.value) }, [props.value]);

	return (
		<form action={"/search"} method={"get"} className={utilStyles.searchBox} onSubmit={ev => { props.onChange(value.trim()); ev.preventDefault(); return false }}>
			<input name={'q'} type={'search'} onChange={ev=>setValue(ev.target.value.toLowerCase())} value={value}/>
			<button type={'submit'}>Search</button>
		</form>
	)
}