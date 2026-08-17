
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
          "Full Stack Engineer, I build high-performance Full Stack applications and tailored AI solutions.",
        hero_desc_line2:
          " I turn your complex needs into seamless, robust, and secure experiences.",
        hero_cta: "View my Work",
        hero_scroll: "Scroll",

        

        // ABOUT
        about_title_1: "About",
        about_title_2: "Me",

        about_role: "Full Stack Engineer",

        about_p1: "Full Stack Engineer specialized in Python (FastAPI, Django) and React ecosystems, with hands-on experience in AI integration (RAG, LLMs).",
        about_p2:
          "Proficient in building RESTful APIs, designing relational databases, and delivering production-grade web applications.",
        about_p3:
          " Focused on software engineering best practices: clean code, maintainability, and scalable architectures.",


        about_cta_contact: "Get In Touch",
        about_cta_cv: "Download CV",

        about_stack_title: "Stack",
        about_stack_value: "Python · FastAPI · Django · React · RAG / LLM",

        about_soft_title: "Soft Skills",
        about_soft_value: "Autonomous · Problem Solver · Proactive",

        about_exp_title: "Experience",
        about_exp_value:
          "Production Apps · REST APIs & SQL · AI & RAG Architecture",

  
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

        project_chatbot_title: "Local AI Chatbot",
        project_chatbot_desc: 
          " An intelligent virtual assistant designed to analyze PDF documents and answer user queries in natural language.",
        
        project_expertauto_title: "Local AI Chatbot",
        project_expertauto_desc: 
          " An intelligent virtual assistant designed to analyze PDF documents and answer user queries in natural language.",
        
        project_expertauto_title: "Showcase Website – Auto Expert",
        project_expertauto_desc: 
          " Responsive, bilingual (FR/AR) showcase site featuring WhatsApp integration, contact form, and real-time notifications.",
        

        // SKILLS
        skills_title_my: "My",
        skills_title_skills: "Skills",
        skills_filter_all: "all",
        skills_cat_frontend: "Frontend",
        skills_cat_backend: "Backend",
        skills_cat_database: "Database",
        skills_cat_os: "Operating Systems",
        skills_cat_ai:"AI",
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
          "Ingénieure Full Stack, Je conçois des applications Full Stack performantes et de solutions d'IA sur mesure.",
        hero_desc_line2:
          "Je transforme vos besoins complexes en expériences fluides, robustes et sécurisées.",
        hero_cta: "Voir mes projets",
        hero_scroll: "Défiler",

      



  

        // ABOUT
        about_title_1: "À propos",
        about_title_2: "de moi",

        about_role: "Ingénieure Full Stack ",

        about_p1:
          "Ingénieure Full axée sur l'écosystème Python (FastAPI, Django), React, et l'intégration de solutions IA (RAG, LLM)",
        about_p2:
          "Expertise en conception d'APIs REST, modélisation de bases de données relationnelles et développement d'applications web haute performance déployées en production.",
        about_p3:
          " Engagée sur la qualité logicielle : code propre, maintenable et architectures évolutives.",



        about_cta_contact: "Me contacter",
        about_cta_cv: "Télécharger le CV",

        about_stack_title: "Stack",
        about_stack_value: "Python · FastAPI · Django · React · RAG / LLM",

        about_soft_title: "Soft Skills",
        about_soft_value: "Autonome · Capacité d'analyse · Proactive",

        about_exp_title: "Expérience",
        about_exp_value:
          "Apps en production · APIs REST & SQL · Architecture IA & RAG",

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

        
        project_chatbot_title: "Chatbot IA Local",
        project_chatbot_desc: 
        "Un assistant virtuel intelligent conçu pour analyser des documents PDF et répondre aux questions en langage naturel.",
        
         
        project_expertauto_title: "Site Vitrine – Expert Auto",
        project_expertauto_desc: 
          "Site vitrine responsive et bilingue (FR/AR) avec intégration WhatsApp, formulaire et notifications en temps réel.",        

        // SKILLS
        skills_title_my: "Mes",
        skills_title_skills: "Compétences",
        skills_filter_all: "tous",
        skills_cat_frontend: "Frontend",
        skills_cat_backend: "Backend",
        skills_cat_database: "Base de données",
        skills_cat_os: "Systèmes d’exploitation",
        skills_cat_ai:"IA",
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
