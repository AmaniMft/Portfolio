
// i18next configuration for the portfolio (EN/FR)
// Default language: English
// Fallback language: English


import i18n from "i18next";
import { initReactI18next } from "react-i18next";


i18n.use(initReactI18next).init({
  // Default language
  lng: "en",

  // If a key is missing in the active language, fallback to English
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },

  resources: {
    // ==================== ENGLISH ==============================
    en: {
      translation: {
    
        // NAVBAR
        nav_home: "Home",
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contact: "Contact",

        // HERO
        hero_hi_im: "Hi, I'm",
        hero_desc_line1:
          "Full Stack Developer, building modern and reliable web applications.",
        hero_desc_line2:
          "I enjoy transforming ideas into functional products and continuously improving my technical skills through real-world projects.",
        hero_cta: "View my Work",
        hero_scroll: "Scroll",

        // ABOUT
        about_title_1: "About",
        about_title_2: "Me",

        about_role: "Full Stack Developer",

        about_p1: "Full Stack developer specialized in Python/Django and React.",
        about_p2:
          "I have experience working on internal applications used in production, contributing to both backend development (REST APIs, relational databases) and frontend integration.",
        about_p3:
          "I enjoy building well-structured applications, writing clear and maintainable code, and collaborating in organized development environments.",

        about_cta_contact: "Get In Touch",
        about_cta_cv: "Download CV",

        about_stack_title: "Stack",
        about_stack_value: "Python · Django · React",

        about_soft_title: "Soft Skills",
        about_soft_value: "Autonomous · Curious",

        about_exp_title: "Experience",
        about_exp_value:
          "Internal tools · Production environments · APIs & databases",

  
        // PROJECTS
        projects_title_1: "My",
        projects_title_2: "Work",
        projects_intro:
          "Here are some of my projects, each crafted with attention to detail, performance and user experience.",

        project_msg_title: "Messaging system",
        project_msg_desc:
          "Real-time messaging application similar to WhatsApp, enabling user management, private conversations and secure message exchange.",
        project_arg_title: "Automated Report Generation",
        project_arg_desc:
          "Enterprise web application that automatically generates Word reports from Excel files, with secure uploads and structured metadata management.",

        project_bio_title: "Data Analysis Automation",
        project_bio_desc:
          "Application designed to analyze, clean and validate biological data .",

        // SKILLS
        skills_title_my: "My",
        skills_title_skills: "Skills",
        skills_filter_all: "all",
        skills_cat_frontend: "Frontend",
        skills_cat_backend: "Backend",
        skills_cat_database: "Database",
        skills_cat_os: "Operating Systems",
        skills_cat_tools: "Tools",

        // CONTACT
        contact_title_1: "Get In",
        contact_title_2: "Touch",
        contact_intro:
          "Have a project in mind or want to collaborate ! I’m always open to new opportunities. Feel free to reach out!",

        contact_info_title: "Contact Information",
        contact_form_title: "Send a Message",

        contact_placeholder_name: "Name",
        contact_placeholder_email: "Email",
        contact_placeholder_message: "Message",

        contact_send: "Send Message",
        contact_sending: "Sending...",

        contact_toast_title: "Message Sent ✨",
        contact_toast_subtitle: "Thank you for reaching out.",

        contact_error: "Something went wrong. Try again.",
      },
    },

  
    // ==================== FRENCH ==============================

    fr: {
      translation: {

        // NAVBAR
        nav_home: "Accueil",
        nav_about: "À propos",
        nav_skills: "Compétences",
        nav_projects: "Projets",
        nav_contact: "Contact",

        // HERO
        hero_hi_im: "Bonjour, je suis",
        hero_desc_line1:
          "Développeuse Full Stack, je crée des applications web modernes et fiables.",
        hero_desc_line2:
          "J’aime transformer des idées en produits concrets et améliorer continuellement mes compétences techniques grâce à des projets réels.",
        hero_cta: "Voir mes projets",
        hero_scroll: "Défiler",

        // ABOUT
        about_title_1: "À propos",
        about_title_2: "de moi",

        about_role: "Développeuse Full Stack",

        about_p1:
          "Développeuse full stack spécialisée en Python/Django et React.",
        about_p2:
          "Expérience sur des applications internes utilisées en production, avec contribution au backend (APIs REST, bases relationnelles) et à l’intégration frontend.",
        about_p3:
          "J’aime concevoir des applications bien structurées, écrire un code clair et maintenable, et évoluer dans des environnements de développement organisés.",

        about_cta_contact: "Me contacter",
        about_cta_cv: "Télécharger le CV",

        about_stack_title: "Stack",
        about_stack_value: "Python · Django · React",

        about_soft_title: "Soft Skills",
        about_soft_value: "Autonome · Curieuse",

        about_exp_title: "Expérience",
        about_exp_value:
          "Outils internes · Environnements de production · APIs & bases de données",

        // PROJECTS
        projects_title_1: "Mes",
        projects_title_2: "réalisations",
        projects_intro:
          "Voici quelques projets, réalisés avec soin, orientés performance et expérience utilisateur.",

        project_msg_title: "Système de messagerie",
        project_msg_desc:
          "Application de messagerie en temps réel de type WhatsApp, permettant la gestion des utilisateurs, des conversations privées et l’échange sécurisé de messages.",

        project_arg_title: "Génération automatique de rapports",
        project_arg_desc:
          "Application web qui automatise la génération de rapports Word à partir de fichiers Excel, avec upload sécurisé et gestion des métadonnées ",

        project_bio_title: "Automatisation d’analyse de données",
        project_bio_desc:
          "Application conçue pour analyser, nettoyer et valider des données biologiques .",

        // SKILLS
        skills_title_my: "Mes",
        skills_title_skills: "Compétences",
        skills_filter_all: "tous",
        skills_cat_frontend: "Frontend",
        skills_cat_backend: "Backend",
        skills_cat_database: "Base de données",
        skills_cat_os: "Systèmes d’exploitation",
        skills_cat_tools: "Outils",

        // CONTACT
        contact_title_1: "Me",
        contact_title_2: "contacter",
        contact_intro:
          "Vous avez un projet ou une idée de collaboration ! Je suis ouverte aux opportunités. N’hésitez pas à me contacter !",

        contact_info_title: "Informations de contact",
        contact_form_title: "Envoyer un message",

        contact_placeholder_name: "Nom",
        contact_placeholder_email: "Email",
        contact_placeholder_message: "Message",

        contact_send: "Envoyer",
        contact_sending: "Envoi...",

        contact_toast_title: "Message envoyé ✨",
        contact_toast_subtitle: "Merci pour votre message.",

        contact_error: "Une erreur est survenue. Réessayez.",
      },
    },
  },
});

export default i18n;
