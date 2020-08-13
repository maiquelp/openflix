import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorys`;

const getAllwithVideos = () => {
    return fetch(`${URL_CATEGORIES}?_embed=videos`)
        .then(async (res) => {
            if (res.ok) {
                const response = await res.json();
                return response;
            }
            throw new Error('Unable to reach data');
        });
}

const getAll = () => {
    return fetch(`${URL_CATEGORIES}`)
        .then(async (res) => {
            if (res.ok) {
                const response = await res.json();
                return response;
            }
            throw new Error('Unable to reach data');
        });
}

export default { getAllwithVideos, getAll};