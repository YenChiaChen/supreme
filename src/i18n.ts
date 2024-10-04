import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import commonTW from './locales/tc/common.json'
import commonEN from './locales/en/common.json'
import diverse_growth_tc from './locales/tc/pages/enterprise/diverse-growth.json'
import diverse_growth_en from './locales/en/pages/enterprise/diverse-growth.json'
import occupationalSafety_tc from './locales/tc/pages/enterprise/occupational-safety.json'
import occupationalSafety_en from './locales/en/pages/enterprise/occupational-safety.json'
import safetyWorkplace_tw from './locales/tc/pages/enterprise/healthy-workplace.json'
import safetyWorkplace_en from './locales/en/pages/enterprise/healthy-workplace.json'
import humanRightPolicy_tw from './locales/tc/pages/enterprise/human-rights-policy.json'
import humanRightPolicy_en from './locales/en/pages/enterprise/human-rights-policy.json'

const resources = {
    zh_TW: {
      translation: {
          common: commonTW,
          diverse_growth: diverse_growth_tc,
          occupational_safety: occupationalSafety_tc,
          safety_workplace: safetyWorkplace_tw,
          human_right_policy: humanRightPolicy_tw,
      }
    },
    en: {
      translation: {
          common: commonEN,
          diverse_growth: diverse_growth_en,
          occupational_safety: occupationalSafety_en,
          safety_workplace: safetyWorkplace_en,
          human_right_policy: humanRightPolicy_en,
      }
    },
  };
  
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: "zh_TW", 
  
      interpolation: {
        escapeValue: false 
      }
    });
  
    export default i18n;