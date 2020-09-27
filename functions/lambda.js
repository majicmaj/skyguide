const axios = require('axios');
const {stringify} = require('flatted/cjs');

exports.handler = async(event) => {
    const { httpMethod } = event;

    if (httpMethod === 'GET') {
        const response = await axios.get('http://www.ipwhois.app/json/')
        const data = stringify(response.data)
        return {
            statusCode: 200, 
            body: data
        }
    }

    return {statusCode: 404, body:'wah'}
}