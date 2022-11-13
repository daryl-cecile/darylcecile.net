import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {

	const incomingUrl = req.query['url'] as string;

  	console.log('fetching', incomingUrl);
	
	if (!incomingUrl) return res.send('');

    let url = decodeURIComponent(incomingUrl);
	
	res.setHeader('Cache-Control', 's-maxage=86400');

	let response = await fetch(url, { method: 'GET' });

	let body = response.body as unknown as NodeJS.ReadableStream;

	if ("pipe" in body) {
		await body.pipe(res);
		return;
	}

	res.end();
}