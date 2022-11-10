"use client";

import useSwr from "swr";
import {useEffect} from "react";

type UseFetchConfig = {
  queryParams?: Record<string, string>
}

export default function useFetch(url:string, config:UseFetchConfig){
  let {queryParams} = config;
  let urlParams = "?" + (new URLSearchParams(queryParams ?? {})).toString();
  
  const result = useSwr(url + urlParams);
  
  console.log('GETTING', url + urlParams);
  console.log('RESULT', result);
  
  useEffect(()=>{
    console.log('MUTATING');
    result.mutate();
  }, [urlParams]);
  
  return {
    ...result,
    state: (!!result.data ? (!result.error ? "ready" : "failed") : "pending")
  }
}