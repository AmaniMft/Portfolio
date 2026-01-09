import { Mail, MapPin, Phone, Linkedin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

function ContactSection() {
  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_bvwjd4f",
        "template_3d00p8e",
        formRef.current,
        "hbgLM03WYwMAg7UP4"
      )
      .then(() => {
        setLoading(false);
        setToast(true);
        formRef.current.reset();

        setTimeout(() => {
          setToast(false);
        }, 3000);
      })
      .catch(() => {
        setLoading(false);
        alert(t("contact_error"));
      });
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t("contact_title_1")}{" "}
          <span className="text-primary">{t("contact_title_2")}</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("contact_intro")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {t("contact_info_title")}
            </h3>

            <div className="space-y-6">
              {/* EMAIL */}
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
                  <a
                    href="mailto:amani.meftah22@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    amani.meftah22@gmail.com
                  </a>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
                  <a
                    href="tel:+33758981256"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +33 7 58 98 12 56
                  </a>
                </div>
              </div>

              {/* LINKEDIN */}
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
                  <a
                    href="https://www.linkedin.com/in/amani-meftah-ab4645272"
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Amani Meftah
                  </a>
                </div>
              </div>

              {/* LOCATION */}
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
                  <p className="text-muted-foreground">Paris, Île-de-France</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">
              {t("contact_form_title")}
            </h3>

            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
              {/* NAME */}
              <div>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md bg-background border focus:ring-2 focus:ring-primary"
                  placeholder={t("contact_placeholder_name")}
                />
              </div>

              {/* EMAIL */}
              <div>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md bg-background border focus:ring-2 focus:ring-primary"
                  placeholder={t("contact_placeholder_email")}
                />
              </div>

              {/* MESSAGE */}
              <div>
                <textarea
                  name="message"
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-md bg-background border focus:ring-2 focus:ring-primary resize-none"
                  placeholder={t("contact_placeholder_message")}
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
                disabled={loading}
              >
                {loading ? t("contact_sending") : t("contact_send")}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* POPUP TOAST */}
      {toast && (
        <div
          className="
            fixed inset-0 flex items-center justify-center
            bg-black/40 backdrop-blur-sm
            animate-fade-scale z-50
          "
        >
          <div
            className="
              bg-white/10 dark:bg-black/30
              backdrop-blur-xl
              border border-white/20
              px-8 py-6 rounded-2xl shadow-2xl
              text-center text-white
            "
          >
            <Send size={26} className="mx-auto mb-2 text-primary" />
            <p className="text-lg font-semibold">{t("contact_toast_title")}</p>
            <p className="text-sm opacity-80">{t("contact_toast_subtitle")}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default ContactSection;
