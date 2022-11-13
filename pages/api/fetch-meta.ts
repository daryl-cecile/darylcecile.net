import { parse } from 'node-html-parser';
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const incomingUrl = req.query['url'] as string;

    if (!incomingUrl) return res.status(404);

    let url = decodeURIComponent(incomingUrl);

    res.setHeader('Cache-Control', 's-maxage=86400');

    let response = await fetch(url, { method: 'GET' });

    if (!response.ok) return res.status(404);

    try{
        let text = await response.text();
        let DOC = parse(text);

        return res.json({
            title: DOC.querySelector('title')?.innerText,
			favicon: [...DOC.querySelectorAll('[rel=icon]')].reverse()[0]?.getAttribute('href'),
			image: DOC.querySelector('[property="og:image"]')?.getAttribute('content'),
			description: (DOC.querySelector('[name=description]') ?? DOC.querySelector('[property="og:description"]'))?.getAttribute('content'),
        });
    }
    catch (e){
        console.error(e);
        
        return res.status(500);
    }
};