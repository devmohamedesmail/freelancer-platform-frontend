import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: require('../public/locales/en/translation.json')
            },
            ar: {
                translation: require('../public/locales/ar/translation.json')
            }
        },
        fallbackLng: 'ar', // Arabic as default
        lng: 'ar', // Default language is Arabic
        debug: false,
        interpolation: {
            escapeValue: false
        },
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage']
        }
    });

export default i18n;
