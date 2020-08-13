import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

const create = (obj) => {
    return fetch(`${URL_VIDEOS}`, {
        method:'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
        .then(async (res) => {
            if (res.ok) {
                const response = await res.json();
                return response;
            }
            throw new Error('Unable to reach data');
        });
}

export default { create };