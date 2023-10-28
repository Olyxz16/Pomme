import { error } from '@sveltejs/kit';
import { get } from '$lib/db';

/** @type {import('./$types').PageLoad} */
export async function load({ url }) {

    let title = url.searchParams.get("title");
    let season = Number.parseInt(url.searchParams.get("season") ?? "0");
    let ep = Number.parseInt(url.searchParams.get("ep") ?? "0");

    if(title === undefined || title === null) {
        throw error(404);
    }

    const data = await get(title, season, ep);

    return data;
    
}