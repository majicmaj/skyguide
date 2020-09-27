const axios = require('axios');

exports.handler = async(event) => {
    const { httpMethod } = event;

    if (httpMethod === 'GET') {
        const response = await axios.get('http://www.ip-api.com/json/')
        const data = {
            status: response.data.status,
            city: response.data.city,
            latitude: response.data.lat,
            longitude: response.data.lon
        }
        return {
            statusCode: 200, 
            body: JSON.stringify(data)
        }
    }

    return {statusCode: 404, body:'wah'}
}