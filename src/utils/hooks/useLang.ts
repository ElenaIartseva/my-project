import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export enum Language {
  RU = 'ru',
  EN = 'en',
}

function resolveLanguage(language: string): Language {
  return language.startsWith(Language.EN) ? Language.EN : Language.RU;
}

const useLang = () => {
  const { i18n } = useTranslation();

  const currentLanguage = resolveLanguage(i18n.language);

  const toggleLanguage = useCallback(() => {
    const nextLanguage = currentLanguage === Language.RU ? Language.EN : Language.RU;
    i18n.changeLanguage(nextLanguage);
  }, [currentLanguage, i18n]);

  return {
    currentLanguage,
    toggleLanguage,
  };
};

export default useLang;
