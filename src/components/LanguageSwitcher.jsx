import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center gap-3 text-sm">
      <button
        onClick={() => i18n.changeLanguage("en")}
        className="hover:text-primary"
      >
        EN
      </button>
      <span className="opacity-50">|</span>
      <button
        onClick={() => i18n.changeLanguage("fr")}
        className="hover:text-primary"
      >
        FR
      </button>
    </div>
  );
}


export default LanguageSwitcher;
