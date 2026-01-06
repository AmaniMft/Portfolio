import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
    translation: {
      nav_home: "Home",
      nav_about: "About",
      nav_skills: "Skills",
      nav_projects: "Projects",
      nav_contact: "Contact",
    },
  },
  fr: {
    translation: {
      nav_home: "Accueil",
      nav_about: "À propos",
      nav_skills: "Compétences",
      nav_projects: "Projets",
      nav_contact: "Contact",
    },
  },

  },
});

export default i18n;
