// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en/translation.json';
import uaTranslations from './locales/ua/translation.json'; // Украинский перевод

// Инициализация i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      ua: { translation: uaTranslations },
    },
    lng: 'en', // Язык по умолчанию
    fallbackLng: 'en', // Язык по умолчанию при отсутствии перевода
    interpolation: {
      escapeValue: false, // Не экранировать значения, так как мы используем React
    },
  });

export default i18n;
