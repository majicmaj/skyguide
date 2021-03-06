const axios = require('axios');
const { API } = require('../src/Constants');

exports.handler = async(event, context) => {
    const { httpMethod } = event;
    if (httpMethod === 'GET') {
        const params = event.queryStringParameters
        switch(params.API) {
            case "GEO":
                const ip = () => {
                    if (event.headers['X-Forwarded-For'] === "127.0.0.1") return ''
                    if (event.headers['X-Nf-Client-Connection-Ip']) return event.headers['X-Nf-Client-Connection-Ip']
                    return ''
                }
                const response = await axios.get(`${API.GEO}${ip()}`)
                const data = {
                    status: response.data.status,
                    city: response.data.city,
                    region: response.data.region,
                    lat: response.data.lat,
                    lon: response.data.lon
                }
                return {
                    statusCode: 200, 
                    body: JSON.stringify(data)
                }

            case "GEOCODE":
                if (params.lat && params.lon) {
                    const response = await axios.get(
                        `${API.GEOCODE.HEAD}${params.lat},${params.lon}${API.GEOCODE.TAIL}`)
                    const data = {
                        city: response.data.city,
                        state: response.data.state
                    }
                    return {
                        statusCode: 200, 
                        body: JSON.stringify(data)
                    }
                }
                return {
                    statusCode: 400,
                    body: JSON.stringify({message: "Missing Params"})
                }

            case "ASTRO":
                if (params.lat && params.lon) {
                    const response = await axios.get(
                        `${API.ASTRO.HEAD}lon=-${params.lon}&lat=${params.lat}${API.ASTRO.TAIL}`
                        )
                    const data = {
                        status: response.status,
                        dataseries: response.data.dataseries
                    }
                    return {
                        statusCode: 200, 
                        body: JSON.stringify(data)
                    }
                }
            return {
                statusCode: 400,
                body: JSON.stringify({message: "Missing Params"})
            }
            case "GRID":
                if (params.lat && params.lon) {
                    const response = await axios.get(
                        `${API.GRID}${params.lat},${params.lon}`)
                    const data = {
                        gridX: response.data.properties.gridX,
                        gridY: response.data.properties.gridY
                    }
                    return {
                        statusCode: 200, 
                        body: JSON.stringify(data)
                    }
                }
                return {
                    statusCode: 400,
                    body: JSON.stringify({message: "Missing Params"})
                }
            case "WEATHER":
                if (params.gridX && params.gridY) {
                    const response = await axios.get(
                        `${API.WEATHER.HEAD}${params.gridX},${params.gridY}${API.WEATHER.TAIL}${params.hourly?API.WEATHER.HOURLY:""}`
                        )
                    const data = {
                        status: response.status,
                        periods: response.data.properties.periods
                    }
                    return {
                        statusCode: 200, 
                        body: JSON.stringify(data)
                    }
                }
            return {
                statusCode: 400,
                body: JSON.stringify({message: "Missing Params"})
            }
            default:
                return {
                    statusCode: 404,
                    body: JSON.stringify({message: "API Not found."})
                }
        }
    }

    return {statusCode: 404, body:'wah'}
}