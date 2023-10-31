import { getEpisode, getSingle, setSafe, setUnsafe } from '$lib/db';
import { toTimestamp } from '$lib/timestamps';
import { error } from '@sveltejs/kit';


export async function POST({ request }) : Promise<any> {

	const data = await request.json();
	
	if(data.safe) {
		await setSafe(data.title, data.season, data.ep);
	} else {
		let timestamp = toTimestamp(data.hour, data.minute, data.second);
		await setUnsafe(data.title, data.season, data.ep, timestamp);
	}

	return new Response();
}


export async function GET({ url }) : Promise<any> {

	let title = url.searchParams.get("title");
    let season = Number.parseInt(url.searchParams.get("season") ?? "0");
    let ep = Number.parseInt(url.searchParams.get("ep") ?? "0");

	if(title === undefined || title === null) {
        throw error(404);
    }

    if(season === undefined && ep === undefined) {
        return await getSingle(title);
    }
    const data = await getEpisode(title, season, ep);
	return new Response(JSON.stringify(data));
}