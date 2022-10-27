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
    const previewElementRef = useRef<HTMLDivElement>();
	const [currentImageUrl, setCurrentImageUrl] = useState<string>( urls[0] );

    useEffect(()=>{
        if (!previewElementRef.current) return;

        const images = [...previewElementRef.current.querySelectorAll('img')];
        const selectedImageIndex = images.findIndex(img => img.src.endsWith(currentImageUrl));
        console.log('image at' , selectedImageIndex, previewElementRef.current)

        if (selectedImageIndex > -1) {
            images[selectedImageIndex].scrollIntoView();
            console.log(images[selectedImageIndex])
        }
    }, [currentImageUrl]);

	return (
        <div aria-role="list" aria-label="Image gallery" className={"wider-content"}>
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
                                    }}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
            <figcaption aria-hidden="true">{images[currentImageUrl]}</figcaption>
        </div>
    )
}