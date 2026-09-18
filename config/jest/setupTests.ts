import { TextDecoder, TextEncoder } from 'util';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

Object.assign(globalThis, {
  TextDecoder,
  TextEncoder,
});

i18n
  .use(initReactI18next)
  .init({
    lng: 'ru',
    fallbackLng: 'ru',
    resources: {
      ru: {
        common: {
          navMain: 'Главная',
          navAbout: 'О нас',
          sidebarExpand: 'Развернуть боковую панель',
          sidebarCollapse: 'Свернуть боковую панель',
          themeSwitchToDark: 'Включить тёмную тему',
          themeSwitchToLight: 'Включить светлую тему',
          langSwitchToEn: 'Переключить на английский',
          langSwitchToRu: 'Переключить на русский',
        },
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
