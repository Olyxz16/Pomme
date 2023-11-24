import { setSafe, setUnsafe } from '$lib/db';
import { toTimestamp } from '$lib/timestamps';


export async function POST({ request }) : Promise<any> {

	const data = await request.formData();
    const title: string = data.get("title")?.toString()??"";
	const season: number = parseInt(data.get("season")?.toString()??"") || 0;
    const ep: number = parseInt(data.get("ep")?.toString()??"") || 0;
	const safe: boolean = (data.get("safe")??"") === "on";
	const hour: number = parseInt(data.get("hour")?.toString()??"") || 0;
	const minute: number = parseInt(data.get("minute")?.toString()??"") || 0;
	const second: number = parseInt(data.get("second")?.toString()??"") || 0;

	if(safe) {
		await setSafe(title, season, ep);
	} else {
		let timestamp = toTimestamp(hour, minute, second);
		await setUnsafe(title, season, ep, timestamp);
	}

	const response = `
		<p> Mis à jour ! Merci ! </p>
	`;
	return new Response(response);
}