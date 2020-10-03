import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import en from "./i18n/en.json"
import ar from "./i18n/ar.json"

const resources = {
    en: {
        translation: en
    },
    ar: {
        translation: ar
    }
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",

        keySeparator: false,

        interpolation: {
            escapeValue: false
        }
    })

export default i18n;