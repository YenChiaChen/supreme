import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import hr_distribution_tc from './locales/tc/enterprise/hr-distribution.json'
import common_tc from './locales/tc/common.json'
import hr_distribution_en from './locales/en/enterprise/hr-distribution.json'
import common_en from './locales/en/common.json'
import hr_distribution_cn from './locales/cn/enterprise/hr-distribution.json'
import common_cn from './locales/cn/common.json'

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  zh_TW: {
    translation: {
        hr_distribution: hr_distribution_tc,
        common: common_tc
    }
  },
  en: {
    translation: {
        hr_distribution: hr_distribution_en,
        common: common_en
    }
  },
  zh_CN: {
    translation: {
        hr_distribution: hr_distribution_cn,
        common: common_cn
    }
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "zh_TW", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;