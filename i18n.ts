import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import globalEn from "./locales/en/global.json";
import globalTr from "./locales/tr/global.json";
import globalRu from "./locales/ru/global.json";
import globalAz from "./locales/az/global.json";
const resources = {
  en: {
    global: globalEn,
  },
  tr: {
    global: globalTr,
  },
  ru: {
    global: globalRu,
  },
  az: {
    global: globalAz,
  },
};
const language = "az";

i18n.use(initReactI18next).init({
  resources,
  lng: language,
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
