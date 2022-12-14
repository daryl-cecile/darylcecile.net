import { NextApiRequest, NextApiResponse } from 'next';
import { request } from 'undici';

export default async (req: NextApiRequest, res: NextApiResponse) => {

	const incomingUrl = req.query['url'] as string;

  	console.log('fetching', incomingUrl);
	
	if (!incomingUrl) return res.send('');

    let url = decodeURIComponent(incomingUrl);
	
	res.setHeader('Cache-Control', 's-maxage=86400');

	const { body } = await request(url, {method: 'GET'});

	if (!body) {
		res.status(404).end();
		return;
	}

	body.pipe(res, {end: true});
}