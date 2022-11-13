import { ImgHTMLAttributes } from "react";

type ImageViewerProps = {
    src: string,
    alt: string,
    sizes?: Array<number>,
    quality?: number,
    loading?: ImgHTMLAttributes<HTMLImageElement>["loading"]
}

export default function ImageViewer(props:ImageViewerProps){
    const defaultSizes = props.sizes ?? [640, 750, 828, 1080, 1200, 1920, 2048, 3840];
    const srcSet = defaultSizes.map(size => `/_next/image?url=${encodeURIComponent(props.src)}&w=${size}&q=${props.quality ?? 75} ${size}w`);

    return (
        <img
            src={`/_next/image?url=${encodeURIComponent(props.src)}&w=1080&q=${props.quality ?? 90}`}
            alt={props.alt}
            decoding={"async"}
            loading={props.loading ?? "lazy"}
            srcSet={srcSet.join(', ')}
            style={{
                aspectRatio: 'auto 16 / 9',
                width: '100%'
            }}
        />
    )
}