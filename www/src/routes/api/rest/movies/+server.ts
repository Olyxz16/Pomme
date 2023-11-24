import { error } from "@sveltejs/kit";
import { query } from '$lib/moviedb';


export async function GET({ url }) : Promise<any> {

	let title = url.searchParams.get("title");

	if(title === undefined || title === null) {
        throw error(404);
    }

    const data = await query(title);
    let result = "";
    let maxInd = Math.min(5, data.length);
    for(let i = 0 ; i < maxInd ; i++) {
        result += `<option value="${data[i]}"></option>` + "\n";
    }
    return new Response(result);

}