export const fetcher = (endpoint: string) => { 
    return fetch(endpoint).then(res => res.json());
}
