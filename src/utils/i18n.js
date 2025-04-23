import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translations from "./translations.json";

i18n
  .use(initReactI18next)
  .init({
    resources: translations, // Use translations.json as the resource
    lng: "en", // Set English as the default language
    fallbackLng: "en", // Fallback to English if a key is missing
    interpolation: {
      escapeValue: false // React already handles XSS protection
    }
  });

export default i18n;