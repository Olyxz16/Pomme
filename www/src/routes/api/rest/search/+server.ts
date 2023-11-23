import { queryTitle } from '$lib/query';
import { fromTimestamp } from '$lib/timestamps';


export async function GET({ url }) : Promise<any> {
    const data = await queryTitle(url);
    const title: string = data.title;
    const season: number = data.season ?? 0;
    const ep: number = data.ep ?? 0;
    const safe: boolean = data.safe;
    const timestamps: number[] = data.timestamps;
    
    const seasonString = season !== 0 ? `Saison ${season}` : "";
    const epString = ep !== 0 ? `Ep ${ep}`: "";
    let res = `
        <div id="result">
        <p> ${title} ${seasonString} ${epString}</p>
    `;
    if(safe) {
        res += `<p> Est safe ! </p>`;
    } else if(timestamps === null || timestamps === undefined || timestamps.length === 0) {
        res += `<p> Pas de données. </p>`;
    } else {
        res += `<p> N'est pas safe ! </p>
                <p> Aux timestamps : </p>`;
        timestamps?.forEach((ts: number) => {
            let { hour, minute, second} = fromTimestamp(ts);
            res += `
                <p> ${hour}h${minute}m${second} </p>
            `;
        });
    }
    res += `</div>`;
	return new Response(res);
}