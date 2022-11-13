import { createElement, Fragment } from "react";
import rehypeHighlight from "rehype-highlight";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";
import { remark } from "remark";
import html from "remark-html";
import { unified } from "unified";
import Abbreviation from "../../../components/Abbreviation";
import Anchor from "../../../components/Anchor";
import CodeBlock from "../../../components/CodeBlock";
import EmbeddedScript from "../../../components/EmbeddedScript";
import Gallery from "../../../components/Gallery";
import InfoBox from "../../../components/InfoBox";
import InlineLinkHeader from "../../../components/InlineLinkHeader";
import { getNoteData } from "../../../lib/notes";
import LocalDate from "../../../components/LocalDate";
import galleryStyles from "../../../styles/gallery.module.scss";

function markdownToHtmlWithoutSanitization(markdown:string){
	return remark()
		.use(html, {sanitize: false})
		.processSync(markdown)
		.toString()
}

function markdownToReact(markdown:string){
	const components = {
		a: (props: any)=>{
			const {children, ...otherProps} = props;
			return <Anchor {...otherProps} withPreview={true} scroll={false}>{children}</Anchor>
		},
		abbr: (props:any)=>{
			const {children, ...otherProps} = props;
			return <Abbreviation {...otherProps}>{children}</Abbreviation>
		},
		p: (props: any)=>{
			if (props.children.length === 1 && props.children[0]?.type?.name === "img"){
				return props.children[0];
			}
			return <p>{props.children}</p>
		},
		div: (props: any)=>{
			return <div {...props}>{props.children}</div>
		},
		ul: (props: any)=>{
			return <ul className={"para"}>{props.children}</ul>
		},
		img: (props: any)=>{
			if (!!props.alt){
				return (
					<figure>
						<img
							src={props.src}
							alt={props.alt}
							decoding={"async"}
							loading={props.loading ?? "lazy"}
						/>
						<figcaption>{props.alt}</figcaption>
					</figure>
				)
			}

			return (
				<img
					src={props.src}
					alt={props.alt ?? ""}
					decoding={"async"}
					loading={props.loading ?? "lazy"}
					width={props.width}
					height={props.height}
				/>
			)
		},
		script: (props: any)=>{
			const {children, ...otherProps} = props;

			if (!!children){
				return <EmbeddedScript content={props.children} />
			}

			return (
				<script {...otherProps} />
			)
		},
		pre: (props: any)=>{
			return <CodeBlock>{props.children}</CodeBlock>
		},
		infobox: (props: any)=>{
			return <InfoBox {...props}>{props.children}</InfoBox>
		},
		gallery: (props: any)=> {
			return <Gallery {...props}/>
		},
		h3: (props: any) => {
			return <InlineLinkHeader>{props.children}</InlineLinkHeader>
		}
	};

	const result = unified()
		.use(rehypeParse, {fragment: true})
		.use(rehypeReact, {
			createElement,
			Fragment,
			components: components
		})
		.use(rehypeHighlight)
		.processSync(markdownToHtmlWithoutSanitization(markdown));

	try{
		if ((result.result as JSX.Element).props.children?.length === 1){
			return (result.result as JSX.Element).props.children[0].props.children;
		}
		console.log(result.result);
	}
	catch (ex){
		console.error('Assumption of markdown content failed', ex);
	}

	return result.result;
}


export default async function SingleNotePage({params}){
    const postData = await getNoteData(params.slug);
	const content = markdownToReact(postData.content);

    return (
        <article className="content">
            <h1>{postData.title}</h1>
            <span className="datetime"><LocalDate dateString={postData.date} /> &middot; {postData.readTime}</span>
            {!!postData.lastUpdated && (
                <span className="datetime">{'Last updated: '}<LocalDate dateString={postData.lastUpdated} /></span>
            )}
            <br/>
            <div className="wider-content content">{content}</div>
			<div className={galleryStyles.workAroundTodoGalleryStyles} />
        </article>
    )
}