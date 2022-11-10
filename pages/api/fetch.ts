import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {

	const incomingUrl = req.query['url'] as string;

  	console.log('fetching', incomingUrl);
	
	if (!incomingUrl) return res.send('');

   let url = decodeURIComponent(incomingUrl);

	let response = await fetch(url, { method: 'GET' });

	res.send(await response?.text?.())

}