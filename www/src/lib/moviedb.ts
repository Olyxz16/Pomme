import { MOVIEDB_API_KEY } from '$env/static/private';

const MAX_QUERY_COUNT = 5;

export async function query(title: string) {
    const url = `https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=fr-FR&page=1`;
    const options = {method: 'GET', headers: {
        accept: 'application/json',
        Authorization: `Bearer ${MOVIEDB_API_KEY}`
      }};

    return fetch(url, options)
    .then(res => res.json())
    .then(json => parseJSON(json))
    .catch(err => console.error('error:' + err));
}

function parseJSON(json: any) {
    let result = json.results.slice(0, MAX_QUERY_COUNT).map((movie: any) => movie.title);
    return result;
}