export default function makeRequest(config) {
    let {url, ...rest} = config;
    return fetch(url, rest).then(r => r.json());
}