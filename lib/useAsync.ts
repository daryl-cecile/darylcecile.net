import {useCallback, useState} from "react";

export default function useAsync<T>(method: () => Promise<T>, defaultVal:T=null, dependencies:Array<any> = []) {
	const methodCaller = useCallback(()=>{
		setError(null);
		setStatus("pending");
		method().then(response => {
			setData(response);
			setStatus("fulfilled");
		}).catch(err => {
			setError(err);
			setStatus("rejected");
		});
	}, [...dependencies]);
	const [data, setData] = useState<T>(defaultVal);
	const [status, setStatus] = useState<"fulfilled" | "pending" | "rejected">("pending");
	const [error, setError] = useState<Error>(null);

	const r = {
		status,
		data,
		error,
		run:()=>{
			methodCaller();
			return r;
		}
	};

	return r;
}