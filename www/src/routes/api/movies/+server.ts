import { error } from "@sveltejs/kit";
import { query } from '$lib/moviedb';


export async function GET({ url }) : Promise<any> {

	let title = url.searchParams.get("title");

	if(title === undefined || title === null) {
        throw error(404);
    }

    const data = await query(title);
	return new Response(JSON.stringify(data));
}