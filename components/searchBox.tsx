import {useEffect, useState} from "react";
import utilStyles from "./../styles/utils.module.scss";
import {useRouter} from "next/router";

type SearchBoxProps = {
	onChange: (value:string) => void,
	value: string,
}

export default function SearchBox(props:SearchBoxProps){
	const [value, setValue] = useState('');
	const router = useRouter();

	useEffect(()=>{
		console.log(value, value.length, router.query.q)
		if (value.length === 0 && router.query.q?.length > 0) {
			let newValue = router.query.q.toString().trim().toLowerCase();
			setValue(newValue);
			props.onChange(newValue);
		}
	}, [router.query.q ?? '']);

	useEffect(()=>{ setValue(props.value) }, [props.value]);

	return (
		<form action={"/search"} method={"get"} className={utilStyles.searchBox} onSubmit={ev => { props.onChange(value.trim()); ev.preventDefault(); return false }}>
			<input name={'q'} type={'search'} onChange={ev=>setValue(ev.target.value.toLowerCase())} value={value}/>
			<button type={'submit'}>Search</button>
		</form>
	)
}