import { setSafe, setUnsafe } from '$lib/db';
import { toTimestamp } from '$lib/timestamps';


export async function POST({ request }) : Promise<any> {

	const data = await request.formData();
    const obj = Object.fromEntries(data.entries());
	const title: string = obj.title.toString();
	const season: number = Number.parseInt(data.get("season")?.toString()??"");
    const ep: number = Number.parseInt(data.get("ep")?.toString()??"");
	const safe: boolean = (data.get("safe")??"") === "true" ? true : false
	const hour: number = Number.parseInt(data.get("hour")?.toString()??"");
	const minute: number = Number.parseInt(data.get("minute")?.toString()??"");
	const second: number = Number.parseInt(data.get("second")?.toString()??"");
	
	if(safe) {
		await setSafe(title, season, ep);
	} else {
		let timestamp = toTimestamp(hour, minute, second);
		await setUnsafe(title, season, ep, timestamp);
	}

	return new Response();
}