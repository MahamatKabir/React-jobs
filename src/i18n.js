import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Les fichiers de traduction (tu peux en ajouter d'autres)
import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';
import translationTR from './locales/tr/translation.json';

// La configuration de i18n
i18n
  .use(initReactI18next) // Utilise react-i18next
  .init({
    resources: {
      en: { translation: translationEN },
      fr: { translation: translationFR },
      tr: { translation: translationTR },
    },
    lng: 'en', // Langue par défaut
    fallbackLng: 'en', // Si une traduction est manquante, utiliser l'anglais
    interpolation: {
      escapeValue: false, // React se charge déjà de l'échappement des valeurs
    },
  });

export default i18n;
