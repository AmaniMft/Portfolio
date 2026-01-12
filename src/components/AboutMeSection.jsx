import { Code, User, Briefcase } from "lucide-react";
import { useTranslation } from "react-i18next";

function AboutMeSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t("about_title_1")} <span className="text-primary">{t("about_title_2")}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="space-y-6">
            <h3 className="text-2xl font">{t("about_role")}</h3>

            <p className="text-muted-foreground">{t("about_p1")}</p>
            <p className="text-muted-foreground">{t("about_p2")}</p>
            <p className="text-muted-foreground">{t("about_p3")}</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {t("about_cta_contact")}
              </a>

              {/* lien CV !!!!!!!*/}
              <a href="" className="cosmic-button">
                {t("about_cta_cv")}
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-1 gap-6">
            {/* Stack */}
            <div className="gradiant-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">{t("about_stack_title")}</h4>
                  <p className="text-muted-foreground">{t("about_stack_value")}</p>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="gradiant-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">{t("about_soft_title")}</h4>
                  <p className="text-muted-foreground">{t("about_soft_value")}</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="gradiant-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">{t("about_exp_title")}</h4>
                  <p className="text-muted-foreground">{t("about_exp_value")}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutMeSection;
