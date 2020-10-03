import {rainy, cloudy, moon, cloudyNight, sun, cloudyMorning, windSign, windy, snowy, hail, showers, thunder, tornado, sunrise} from './CDN';
import i18n from './i18n';
export const getFavorability = (cover, seeing, transparency) => {
    cover = ((cover/9)**0.1) * 9
    const fav = Math.ceil((11*cover - transparency - seeing)/9)
    return fav
}
export const getIcon = (description, night) => {
    description = description.toLowerCase()
    if (description.includes("sun") && description.includes("cloud")) return cloudyMorning
    if (description.includes("rain")) return rainy
    if (description.includes("cloud")) return cloudy
    if (description.includes("thunder")) return thunder
    if (description.includes("snow")) return snowy
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
export const tNum = (text) => {
    if (i18n.language !== 'ar') {
        return text
    }
    text += ""
    const arabic = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩']
    const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let translated = ""
    for (let i = 0; i < text.length; i++) {
        if (nums.includes(text[i])) {
            translated = translated + arabic[nums.indexOf(text[i])]
        }
        else {
            translated += text[i]
        }
    }
    return translated
}