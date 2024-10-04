import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useFontFamily = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const language = i18n.language;

    document.body.classList.remove('font-en', 'font-tc', 'font-cn');

    switch (language) {
      case 'en':
        document.body.classList.add('font-en');
        break;
      case 'zh_TW':
        document.body.classList.add('font-tc');
        break;
      default:
        document.body.classList.add('font-tc');
    }
  }, [i18n.language]);
};