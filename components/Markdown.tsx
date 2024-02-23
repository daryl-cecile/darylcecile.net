import Abbreviation from './Abbreviation';
import Anchor from './Anchor';
import CodeBlock from './CodeBlock';
import EmbeddedScript from './EmbeddedScript';
import Gallery from './Gallery';
import InfoBox from './InfoBox';
import Tweet from './Tweet';
import InlineLinkHeader from './InlineLinkHeader';
import ImageViewer from './ImageViewer';
import { remark } from 'remark';
import html from 'remark-html';
import { unified } from 'unified';
import rehypeParse from 'rehype-parse';
import rehypeReact from 'rehype-react';
import prod from 'react/jsx-runtime';
import dev from 'react/jsx-dev-runtime';
import rehypeShiki from '@shikijs/rehype';
import { 
    transformerNotationDiff, 
    transformerMetaHighlight, 
    transformerMetaWordHighlight,
    transformerNotationHighlight,
    transformerCompactLineOptions, 
    transformerNotationErrorLevel 
} from '@shikijs/transformers';

import { Fragment, createElement } from 'react';

type MarkdownProps = {
    children: string
}

const components = {
    a: (props: any) => {
        const { children, ...otherProps } = props;
        return <Anchor {...otherProps} withPreview={true} scroll={false}>{children}</Anchor>
    },
    abbr: (props: any) => {
        const { children, ...otherProps } = props;
        return <Abbreviation {...otherProps}>{children}</Abbreviation>
    },
    p: (props: any) => {
        if (props.children.length === 1 && ["img", "tweet"].includes(props.children[0]?.type?.name)) {
            return props.children[0];
        }
        return <p>{props.children}</p>
    },
    div: (props: any) => {
        return <div {...props}>{props.children}</div>
    },
    ul: (props: any) => {
        return <ul className={"para"}>{props.children}</ul>
    },
    img: (props: any) => {
        if (!!props.alt) {
            return (
                <figure>
                    <ImageViewer
                        src={props.src}
                        alt={props.alt}
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
    script: (props: any) => {
        const { children, ...otherProps } = props;

        if (!!children) {
            return <EmbeddedScript content={props.children} />
        }

        return (
            <script {...otherProps} />
        )
    },
    pre: (props: any) => {
        return <CodeBlock>{props.children}</CodeBlock>
    },
    infobox: (props: any) => {
        return <InfoBox {...props}>{props.children}</InfoBox>
    },
    tweet: (props: any) => {
        /* @ts-ignore-error Server Component */
        return <Tweet id={props.id} />
    },
    gallery: (props: any) => {
        return <Gallery {...props} />
    },
    h3: (props: any) => {
        return <InlineLinkHeader>{props.children}</InlineLinkHeader>
    }
};

export async function Markdown(props: MarkdownProps) {
    const content = props.children;
    if (!content) return null;

    const result = await markdownToReact(content);

    return result;
}

function markdownToHtmlWithoutSanitization(markdown: string) {
	return remark()
		.use(html, { sanitize: false })
		.processSync(markdown)
		.toString()
}

async function markdownToReact(markdown: string) {
    const result = await unified()
		.use(rehypeParse, { fragment: true })
		.use(rehypeReact, 
            /* @ts-expect-error */ 
            {
                Fragment: Fragment,
                createElement: createElement,
                components,
                // @ts-expect-error no types
                jsx: prod.jsx,
                // @ts-expect-error no types
                jsxs: prod.jsxs,
                // @ts-expect-error no types
                jsxDEV: dev.jsxDEV
            }
        )
		.use(rehypeShiki, {
            // or `theme` for a single theme
            theme: 'nord',
            addLanguageClass: true,
            transformers: [
                transformerNotationDiff({
                    classLineAdd: 'inline-block w-full bg-green-500/25',
                    classLineRemove: 'inline-block w-full bg-red-500/25',
                }),
                transformerMetaHighlight({
                    className: 'inline-block w-full bg-blue-500/25',
                }),
                transformerCompactLineOptions(),
                transformerNotationErrorLevel(),
                transformerMetaWordHighlight(),
                transformerNotationHighlight({
                    classActiveLine: 'inline-block w-full bg-blue-500/25',
                })
            ]
        })
		.process(markdownToHtmlWithoutSanitization(markdown));

	try {
        const hasChildren = (result.result as JSX.Element).props.children?.length > 0;

        if (!hasChildren) return result.result;

        const children = (result.result as JSX.Element).props.children;

        // if children only contains one element, unwrap it

        const processedChildren = children.map((child: any, i) => {
            if (typeof child === "string") return child;
            if (child.type?.name === "pre") return child;

            const innerChildren = child.props?.children;

            if (child.type === "ul" || child.type?.name === "ul") {
                return <p>{child}</p>
            }
            if (typeof innerChildren === "string") {
                return child;
            }
            if (innerChildren?.length === 1) {
                return innerChildren[0];
            }
            if (typeof innerChildren === "object" && !Array.isArray(innerChildren)) {
                if (innerChildren?.type?.name === "em" || innerChildren.type === "em") return child;
                return innerChildren;
            }

            return child;
        });
        
		if (processedChildren.length === 1) {
			return processedChildren[0].props.children;
		}

        result.result = {
            ...result.result,
            props: {
                ...result.result.props,
                children: processedChildren
            }
        };
	}
	catch (ex) {
		console.error('Assumption of markdown content failed', ex);
	}
	return result.result;
}
