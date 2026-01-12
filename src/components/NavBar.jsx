import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

/* Navigation items (clé i18n + href) */
const navItems = [
  { key: "nav_home", href: "#hero" },
  { key: "nav_about", href: "#about" },
  { key: "nav_skills", href: "#skills" },
  { key: "nav_projects", href: "#projects" },
  { key: "nav_contact", href: "#contact" },
];

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { t, i18n } = useTranslation();

  /* Scroll effect */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);

    handleScroll(); 
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    if (isMenuOpen) window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const fermerMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-[1000] transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* LOGO */}
        <a
          href="#hero"
          className="text-xl font-bold text-primary flex items-center"
          onClick={fermerMenu}
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Amani</span>{" "}
            Portfolio
          </span>
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {t(item.key)}
            </a>
          ))}

          {/* LANGUAGE SWITCHER */}
          <div className="flex items-center gap-2 text-sm ml-4">
            <button
              type="button"
              onClick={() => i18n.changeLanguage("en")}
              className={cn(
                "hover:text-primary transition",
                i18n.language === "en" && "text-primary font-medium"
              )}
            >
              EN
            </button>

            <span className="opacity-50">|</span>

            <button
              type="button"
              onClick={() => i18n.changeLanguage("fr")}
              className={cn(
                "hover:text-primary transition",
                i18n.language === "fr" && "text-primary font-medium"
              )}
            >
              FR
            </button>
          </div>

          {/* THEME TOGGLE */}
          <ThemeToggle className="ml-2" />
        </div>

        {/* MOBILE ACTIONS (Theme + Burger) */}
        <div className="md:hidden flex items-center gap-2">
          {/* THEME TOGGLE (MOBILE) */}
          <ThemeToggle />

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 text-foreground z-[1100]"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE OVERLAY NAV */}
        <div
          className={cn(
            "fixed top-0 left-0 w-screen h-[100dvh] bg-background/95 backdrop-blur-md",
            "z-[999] flex flex-col items-center justify-center md:hidden",
            "transition-all duration-300",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl text-center">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={fermerMenu}
              >
                {t(item.key)}
              </a>
            ))}

            {/* MOBILE LANGUAGE + THEME */}
            <div className="flex justify-center items-center gap-4 pt-6 text-base">
              <button
                type="button"
                onClick={() => {
                  i18n.changeLanguage("en");
                  fermerMenu();
                }}
                className={cn(
                  "hover:text-primary transition",
                  i18n.language === "en" && "text-primary font-medium"
                )}
              >
                EN
              </button>

              <button
                type="button"
                onClick={() => {
                  i18n.changeLanguage("fr");
                  fermerMenu();
                }}
                className={cn(
                  "hover:text-primary transition",
                  i18n.language === "fr" && "text-primary font-medium"
                )}
              >
                FR
              </button>

              {/* Theme toggle also available inside menu */}
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
