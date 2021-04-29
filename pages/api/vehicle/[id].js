import _ from 'lodash';

const handler = async ({
    method,
    body,
    query
}, res) => {
    let statusResponseCode = 403; // forbbiden as default status code
    let response = ``;

    if (method === 'PUT' &&
        body &&
        query.id) {

        const requestResponse = await fetch (`${process.env.REACT_APP_API_URL}/vehicle/${query.id}`, {
            method: 'PUT',
            body
        });
        response = await requestResponse.json();
        statusResponseCode = 201;
    }

    res.status(statusResponseCode).json(response);
};

export default handler;
