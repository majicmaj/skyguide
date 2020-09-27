import {rainy, cloudy, moon, cloudyNight, sun, cloudyMorning, windSign, windy, snowy, hail, showers, thunder, tornado, sunrise} from './CDN';
export const getIcon = (description, night) => {

    if (description.toLowerCase().includes("rain")) return rainy
    if (description.toLowerCase().includes("cloud")) return cloudy

    switch(description.toLowerCase()) {
        case "partly sunny":
            return cloudyMorning
        case "sunny":
            return sun
        case "Fair/clear":
            return night?moon:sun
        case "a few clouds":
            return night?cloudyNight:cloudyMorning;
        case "partly cloudy" :
            return night?cloudyNight:cloudyMorning;
        case "mostly cloudy":
            return cloudy
        case "overcast":
            return cloudy
        case "fair/clear and windy":
            return windSign
        case "a few clouds and windy":
            return windy
        case "partly cloudy and windy":
            return windy
        case "mostly cloudy and windy":
            return windy
        case "overcast and windy":
            return windy
        case "snow":
            return snowy
        case "rain/snow":
            return snowy
        case "rain/sleet":
            return hail
        case "snow/sleet":
            return hail
        case "freezing rain":
            return hail
        case "rain/freezing rain":
            return hail
        case "freezing rain/snow":
            return hail
        case "sleet":
            return hail
        case "rain":
            return rainy
        case "isolated rain showers":
            return showers
        case "chance rain showers":
            return showers
        case "slight chance rain showers":
            return rainy;
        case "rain showers (high cloud cover)":
            return showers
        case "rain showers (low cloud cover)":
            return showers
        case "thunderstorm (high cloud cover)":
            return thunder
        case "thunderstorm (medium cloud cover)":
            return thunder
        case "thunderstorm (low cloud cover)":
            return thunder
        case "tornado":
            return tornado
        case "hurricane conditions":
            return tornado
        case "dust":
            return cloudy
        case "smoke":
            return cloudy
        case "haze":
            return cloudy
        case "hot":
            return sunrise
        case "cold":
            return cloudy
        case "blizzard":
            return snowy
        case "fog/mist":
            return cloudy 
        default:
            break
    }

    if (description.toLowerCase().includes("rain")) return rainy
    return cloudy
}