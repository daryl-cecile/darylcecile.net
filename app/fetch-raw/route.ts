import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { notFound } from 'next/navigation';
import { request } from "undici";

export async function GET(req: NextRequest){
    const { searchParams } = new URL(req.url);
    const incomingUrl = searchParams.get("url");
	
	if (!incomingUrl) return notFound();

    let url = decodeURIComponent(incomingUrl);

	const { body } = await request(url, {method: 'GET'});

	if (!body) return notFound();

	const response = new NextResponse(body as any, {
		headers: new Headers({
			"Cache-Control": 's-maxage=86400'
		})
	});

	return response;
}