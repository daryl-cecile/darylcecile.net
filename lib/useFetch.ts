"use client";

import {useState, useMemo} from "react";

type UseFetchConfig = Parameters<typeof fetch>[1] & {
  queryParams?: Record<string, string>
}

export default function useFetch(url:string, config:UseFetchConfig){
  let [progress, setProgress] = useState("pending");
  let [response, setResponse] = useState(null);
  let [error, setError] = useState(null);
  
  let {queryParams, ...otherConfigs} = config;
  let urlParams = (new URLSearchParams(queryParams ?? {})).toString();
  
  useMemo(()=>{
    setProgress("pending");
    setResponse(null);
    setError(null);
    
    let request = fetch(url, otherConfigs);
    request.then(response => {
      setResponse(response);
      setProgress("ready");
    });
    request.catch(err => {
      setProgress("failed");
      setError(err);
    });
  }, [urlParams]);
  
  
  return {
    response,
    state: progress,
    error
  }
}