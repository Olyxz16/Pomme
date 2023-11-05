import { error } from "@sveltejs/kit";
import { query } from "./moviedb";
import { getEpisode, getSingle } from "./db";

export async function queryTitle(url: URL) {

    let title = url.searchParams.get("title");
    let season = Number.parseInt(url.searchParams.get("season") ?? "0");
    let ep = Number.parseInt(url.searchParams.get("ep") ?? "0");

    if(title === undefined || title === null) {
        throw error(404);
    }

    const values = await query(title);
    if(!values.includes(title)) {
        throw error(404);
    }

    if(season === undefined && ep === undefined) {
        return await getSingle(title);
    }
    return await getEpisode(title, season, ep);

}