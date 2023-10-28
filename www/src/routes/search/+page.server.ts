import { error } from '@sveltejs/kit';
import { getSingle, getSeason, getEpisode } from '$lib/db';

/** @type {import('./$types').PageLoad} */
export async function load({ url }) {

    let title = url.searchParams.get("title");
    let season = Number.parseInt(url.searchParams.get("season") ?? "0");
    let ep = Number.parseInt(url.searchParams.get("ep") ?? "0");

    if(title === undefined || title === null) {
        throw error(404);
    }

    if(season === undefined && ep === undefined) {
        return await getSingle(title);
    }
    if(season === undefined) {
        return await getSeason(title, season);
    }
    return await getEpisode(title, season, ep);

}