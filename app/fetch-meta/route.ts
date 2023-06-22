import { parse } from 'node-html-parser';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { notFound } from 'next/navigation';

export async function GET(req: NextRequest){
    const { searchParams } = new URL(req.url);
    const incomingUrl = searchParams.get("url");

    if (!incomingUrl) return notFound();

    let url = decodeURIComponent(incomingUrl);

    let response = await fetch(url, { method: 'GET' });

    if (!response.ok) return notFound();

    try{
        let text = await response.text();
        let DOC = parse(text);

        return NextResponse.json({
            title: DOC.querySelector('title')?.innerText,
			favicon: [...DOC.querySelectorAll('[rel=icon]')].reverse()[0]?.getAttribute('href'),
			image: DOC.querySelector('[property="og:image"]')?.getAttribute('content'),
			description: (DOC.querySelector('[name=description]') ?? DOC.querySelector('[property="og:description"]'))?.getAttribute('content'),
        }, {
            headers: new Headers({
                "Cache-Control": 's-maxage=86400'
            })
        });

    }
    catch (e){
        console.error(e);
        
        return NextResponse.error();
    }
};