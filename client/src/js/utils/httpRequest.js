export const httpRequest = {
    post: async function (url, data) {
        const option = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        };
        const response = await fetch(url, option);
        const resPromise = await response.json();
        return resPromise;
    },
    get: async function (url) {
        const option = {
            method: 'GET',
            mode: 'cors',
        };
        const response = await fetch(url, option);
        const resPromise = await response.json();
        return resPromise;
    },
};
