export const API = {
    ASTRO: {
        HEAD: 'http://www.7timer.info/bin/astro.php?',
        TAIL: '&ac=0&unit=metric&output=json'
    },
    WEATHER: {
        HEAD: 'https://api.weather.gov/gridpoints/LWX/',
        TAIL: '/forecast',
        HOURLY: '/hourly'
    },
    GEO: 'http://ip-api.com/json/',
    GRID: 'https://api.weather.gov/points/'
}
export const LAMBDA = "/.netlify/functions/lambda"
export const ENV = {
    PROD: 'production',
    DEV: 'developments'
}