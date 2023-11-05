import { queryTitle } from '$lib/query.js';

/** @type {import('./$types').PageLoad} */
export async function load({ url }) {
    return await queryTitle(url);
}