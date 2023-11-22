import { queryTitle } from '$lib/query';
import { fromTimestamp } from '$lib/timestamps';


export async function GET({ url }) : Promise<any> {
    const data = await queryTitle(url);
    const title: string = data.title;
    const season: number = data.season;
    const ep: number = data.ep;
    const safe: boolean = data.safe;
    const timestamps: number[] = data.timestamps;
    console.log(timestamps);
    let res = `
        <p> ${title} </p>
        <p> ${season} </p>
        <p> ${ep} </p> 
    `;
    if(safe) {
        res += `<p> Est safe ! </p>`;
    } else if(timestamps === undefined || timestamps.length === 0) {
        res += `<p> Pas de données. </p>`;
    } else {
        res += `<p> N'est pas safe ! </p>
                <p> Aux timestamps : </p>`;
        timestamps?.forEach((ts: number) => {
            let { hour, minute, second} = fromTimestamp(ts);
            res += `
                <p> ${hour} </p>
                <p> ${minute} </p>
                <p> ${second} </p>
            `;
        });
    }
    
	return new Response(res);
}