import { error } from "@sveltejs/kit";
import { query } from "./moviedb";
import { getEpisode } from "./db";

export async function queryTitle(url: URL) {

    let title = url.searchParams.get("title");
    let season = Number.parseInt(url.searchParams.get("season") ?? "0") || 0;
    let ep = Number.parseInt(url.searchParams.get("ep") ?? "0") || 0;

    if(title === undefined || title === null) {
        throw error(404);
    }

    const relatedTitles = await query(title);

    let isUrl = isURL(title);
    let doesTitleExist = relatedTitles.includes(title);

    if(isUrl || doesTitleExist) {
        getEpisode(title, season, ep);
    }


    return await getEpisode(title, season, ep);

}



function isURL(str: string): boolean {
    var regex = new RegExp("^https?://");
    return regex.test(str);
}