"use client";

/**
 * Created as a workaround until Fetch works in client components again
 */

import "client-only";
import { useCallback, useEffect, useMemo, useState } from "react";

type UseFetchConfig = {
	queryParams?: Record<string, string>,
	method?: Request["method"],
	asJson?: boolean,
	body?: Document | XMLHttpRequestBodyInit,
	revalidateOnFocus?: boolean
}

interface IFetchResponse<T> {
	ok: boolean,
	status: number,
	statusText: string,
	text: string,
	json: T,
}

interface IFetchConfig {
	method?: Request["method"],
	body?: Document | XMLHttpRequestBodyInit
}

let cache: Map<string, boolean> = new Map();

async function _fetch<T>(url: string, config?:IFetchConfig) {
	return new Promise<IFetchResponse<T>>((resolve) => {
		const request = new XMLHttpRequest();
		request.onreadystatechange = function () {
			let ok = (request.status >= 200 && request.status <= 299) || request.status === 304 || request.statusText === "OK";
			if (request.readyState == 4) {
				resolve({
					ok,
					status: request.status,
					statusText: request.statusText,
					text: request.responseText,
					json: ok ? JSON.parse(request.responseText) : undefined,
				});
			}
		};
		request.open(config?.method ?? "GET", url);
		request.send(config?.body);
	});
}

export default function useFetch(url: string, config?: UseFetchConfig) {
	let urlParams = "?" + (new URLSearchParams(config?.queryParams ?? {})).toString();
	let endpoint = !!url ? `${url}${urlParams}` : null;
	let [result, setResult] = useState<any>();
	let [jobState, setJobState] = useState<"pending"|"ready"|"failed">("pending");
	let [reason, setReason] = useState<string>();
	let [id, setId] = useState(1);

	let revalidate = useCallback(()=>{
		cache.delete(endpoint);
		setId(id => id++);
		console.log('revalidating');
	}, [endpoint]);

	useEffect(()=>{
		window.addEventListener('online', revalidate);
		if (config?.revalidateOnFocus) window.addEventListener('focus', revalidate);
		return ()=>{
			window.removeEventListener('online', revalidate);
			window.removeEventListener('focus', revalidate);
		}
	}, [revalidate, config?.revalidateOnFocus ?? false]);
	
	useMemo(()=>{
		if (!endpoint) return;
		if (cache.has(endpoint)) return;
		let job = _fetch(endpoint, {method: config?.method, body: config?.body});
		cache.set(endpoint, true);
		job
			.then(response => {
				setReason(undefined);
				setJobState(response.ok ? "ready" : "failed");
				if (response.ok && config?.asJson) {
					setResult(response.json);
				}
				if (response.ok && !config?.asJson) {
					setResult(response.text)
				}
			})
			.catch(err => {
				setJobState("failed");
				setReason(err);
			});
	}, [endpoint, id]);

	return {
		value: result,
		fetchState: jobState,
		reason: reason,
		revalidate: revalidate
	}
}