// @ts-nocheck
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import vi from '../assets/locales/vi/translation.js';

const resources = {
  vi: {
    translation: vi,
  },
};
i18n.use(initReactI18next).init({
  resources: resources,
  fallbackLng: ['vi'],
  ns: ['translation'],
  defaultNS: ['translation'],
  interpolation: {
    escapeValue: false,
  },
  debug: false,
  react: {
    useSuspense: true,
    wait: true,
  },
});

export default i18n;
