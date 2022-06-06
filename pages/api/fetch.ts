import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {

	const url = req.query['url'] as string;

	console.log('fetching',url);

	let response = await fetch(url, { method: 'GET' });

	res.send(await response?.text?.())

}