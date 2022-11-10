"use client"

import {  useCallback, useEffect, useState, useSyncExternalStore } from "react";

export function useWindowEvents(){
    const [scrollPos, setScrollPos] = useState({scrollX:0, scrollY:0});
    const [windowSize, setWindowSize] = useState({innerWidth:0, innerHeight:0});

    const resize = useCallback(()=>{
        setWindowSize({
            innerHeight: window.innerHeight,
            innerWidth: window.innerWidth
        });
    }, []);
    const scroll = useCallback(()=>{
        setScrollPos({
            scrollX: window.scrollX,
            scrollY: window.scrollY
        });
    }, []);

    useEffect(()=>{
      resize();
      scroll();
        window.addEventListener("resize", resize);
        window.addEventListener("scroll", scroll);
        return ()=>{
            window.removeEventListener("resize", resize);
            window.removeEventListener("scroll", scroll);
        } 
    }, []);

    return {
        ...windowSize,
        ...scrollPos
    }
}

export function useWindowExternalStore(){
    let subscribe = useCallback((cb:any)=>{
        console.log('subbed');
        window.addEventListener("resize", cb);
        window.addEventListener("scroll", cb);
        return ()=>{
            console.log('unsubbed');
            window.removeEventListener("resize", cb);
            window.removeEventListener("scroll", cb);
        }
    }, []);
    return useSyncExternalStore(
        subscribe,
        ()=>{
            return {
                innerHeight: window.innerHeight,
                innerWidth: window.innerWidth,
                scrollX: window.scrollX,
                scrollY: window.scrollY
            }
        },
        ()=>({scrollX:0, scrollY:0, innerWidth:0, innerHeight:0})
    );

}

export default useWindowEvents