import Imports from "./Imports";

type HeadProps = {
    title?:string, 
    siteTitle?:string,

    twitterCardOverride?: string,

    socialTitleOverride?: string,
    socialImageOverride?: string,
    socialDescriptionOverride?: string
}

export default function DocumentHead(props:HeadProps){
    let siteTitle = props.siteTitle ?? "Daryl Cecile";
    let docTitle = props.title ?? siteTitle;
    let description = "My thoughts and experiences in the world of software and technology";
    return (
        <>
            <link rel="apple-touch-icon" sizes="180x180" href="/images/core/profile_180.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/images/core/profile_32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/images/core/profile_16.png"/>
            <link rel="shortcut icon" href="/images/core/profile.ico"/>
            <link rel="manifest" href="/site.webmanifest"/>

            {siteTitle === docTitle ? <title>{docTitle}</title> : <title>{`${docTitle} · ${siteTitle}`}</title>}
            <meta name="og:title" content={props.socialTitleOverride ?? siteTitle} />

            <meta name="description" content={props.socialDescriptionOverride ?? description}/>
            <meta property="og:image" content={props.socialImageOverride ?? "/api/og"}/>
            <meta name="twitter:card" content={props.twitterCardOverride ?? "summary_large_image"} />
			<meta property="twitter:title" content={props.socialTitleOverride ?? siteTitle}/>
			<meta property="twitter:image" content={props.socialImageOverride ?? "/api/og"}/>
            <meta name="twitter:site" content="@darylcecile" />
            <meta name="twitter:creator" content="@darylcecile" />
            <meta name="theme-color" content="#ffffff"/>
            <meta property="og:locale" content="en_US"/>
            <meta property="og:logo" content="/public/res/images/core/profile_180.png"/>
            <meta name="HandheldFriendly" content="True" />
            <meta name="MobileOptimized" content="320" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0"/>
            <meta httpEquiv="X-UA-Compatible" content="ie=edge,chrome=1" />
            <link rel="alternate" type="application/rss+xml" title="RSS Feed for darylcecile.net" href="/rss.xml" />

            <link rel="me" href="https://twitter.com/darylcecile"/>
            <link rel="webmention" href="https://webmention.io/darylcecile.net/webmention" />
            <link rel="pingback" href="https://webmention.io/darylcecile.net/xmlrpc" />
            <Imports/>
        </>
    )
}