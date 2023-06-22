"use client";

import React, {useRef, useEffect, useState, useMemo} from "react";
import css from "../styles/gallery.module.scss";

type GalleryProps = {
    imageUrls?: {
        [url:string]: string
    },
    children?
}

type GalleryItemProps = {
    url: string,
    alt: string
}

export default function Gallery({imageUrls, children}:GalleryProps) {
    const images = imageUrls ?? JSON.parse(children[0].trim());
    const urls = Object.keys(images);
    const previewElementRef = useRef<HTMLDivElement>(null);
	const [currentImageUrl, setCurrentImageUrl] = useState<string>( urls[0] );
    const imageElements = useMemo(() => {
        let elementList = previewElementRef.current?.querySelectorAll('img') ?? [];
        return [...elementList];
    }, [previewElementRef.current]);

    useEffect(()=>{
        let observer = new IntersectionObserver(entries => {
            for (let img of entries.reverse()){
                if (img.isIntersecting){
                    setCurrentImageUrl(img.target.getAttribute('src')!);
                }
            }
        }, {
            root: previewElementRef.current,
            threshold: 0.3
        });
        imageElements.forEach(img => observer.observe(img));
        return () => observer.disconnect();
    }, [imageElements]);

	return (
        <ol aria-label="Image gallery" className={"wider-content " + css.galleryContainer}>
            <div className={css.galleryRoot}>
                <div className={css.preview} ref={previewElementRef}>
                    {urls.map(url => {
                        return <img key={url} src={url} alt={images[url]} />
                    })}
                </div>
                <div className={css.shelf} aria-hidden="true">
                    <div className={css.dots}>
                        {urls.map((url, idx) => {
                            return (
                                <button 
                                    key={url + idx}
                                    data-active={url === currentImageUrl}
                                    aria-label={"go to image " + (idx + 1)} 
                                    onClick={ev=>{
                                        setCurrentImageUrl(url);
                                        ev.preventDefault();
                                        ev.stopPropagation();
                                        imageElements.find(img => img.getAttribute('src') === url)?.scrollIntoView()
                                    }}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
            <figcaption aria-hidden="true">{images[currentImageUrl]}</figcaption>
        </ol>
    )
}