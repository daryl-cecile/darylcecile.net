import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {

	const url = req.query['url'] as string;

	console.log('fetching Raw',url);
	
	res.setHeader('Cache-Control', 's-maxage=86400');

	let response = await fetch(url, { method: 'GET' });

	let body = response.body as any;

	await body.pipe(res as any);

}