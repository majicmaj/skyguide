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
    GRID: 'https://api.weather.gov/points/',
    GEOCODE: {
        HEAD: 'https://geocode.xyz/', 
        TAIL:'?geoit=json'
    }
}
export const LAMBDA = "/.netlify/functions/lambda"
export const ENV = {
    PROD: 'production',
    DEV: 'developments'
}
export const NAVIGATOR = {
    options : {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
  }
}
export const version = '0.1'