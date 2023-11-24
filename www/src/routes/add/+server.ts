import { setSafe, setUnsafe } from '$lib/db';
import { toTimestamp } from '$lib/timestamps';


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