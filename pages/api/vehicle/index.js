import _ from 'lodash';

const handler = async ({
    method,
    body
}, res) => {
    let statusResponseCode = 403; // forbbiden as default status code
    let response = ``;

    if (method === 'GET' &&
        _.isEmpty(body)) {
        
        const requestResponse = await fetch (`${process.env.REACT_APP_API_URL}/vehicle`);
        response = await requestResponse.json();
        statusResponseCode = 200;
    }

    res.status(statusResponseCode).json(response);
};

export default handler;
