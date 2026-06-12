import { InquiryForm } from "../components/InquiryForm";
import { I } from "../components/Icon";
import { whatsappLink, CONCIERGE_EMAIL } from "../lib/whatsapp";
import { useSEO } from "../utils/seo";
import { trackEvent } from "../utils/analytics";
import { useLanguage } from "../lib/languageContext";

export function ContactPage() {
  const { t } = useLanguage();
  useSEO({
    title: t("contact.title", "Karpathos Concierge | Local Activity Planning & Private Experiences"),
    description: t("contact.metaDescription", "Ask a local Karpathos concierge to help arrange boat trips, tours, watersports, hiking, wine tasting, wellness, workshops, and private group experiences."),
    canonicalPath: "/concierge",
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Karpathos Concierge",
      "image": "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg",
      "telephone": "+306943666243",
      "url": "https://karpathosadventures.com/#/concierge",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pigadia, Karpathos",
        "addressRegion": "Dodecanese",
        "postalCode": "85700",
        "addressCountry": "GR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 35.5073,
        "longitude": 27.2132
      },
      "areaServed": "Karpathos, Greece",
      "priceRange": "$$"
    }
  });

  return (
    <div className="pt-24 pb-16">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-teal text-xs font-bold uppercase tracking-widest mb-2">
          {t("nav.concierge", "Concierge")}
        </div>
        <h1 className="font-display font-bold text-4xl sm:text-5xl text-navy leading-tight">
          {t("contact.heading", "Ask the Karpathos Concierge")}
        </h1>
        <p className="text-navy/75 text-lg mt-3 max-w-2xl">
          {t("contact.intro", "Tell us your dates, group and what kind of holiday you want. Our concierge replies within hours with a curated plan and honest pricing.")}
        </p>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 mt-10">
          <InquiryForm
            title={t("contact.formTitle", "Send us a message")}
            subtitle={t("contact.formSubtitle", "We reply on WhatsApp or email — usually the same day.")}
          />

          <div className="space-y-4">
            <a
              href={whatsappLink(t("contact.whatsappPrefill", "Hi Karpathos Adventures! I'd like to plan some experiences."))}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-success to-success/80 text-white rounded-3xl p-6 hover:scale-[1.01] transition"
              onClick={() => trackEvent("whatsapp_click", { context: "contact_page_concierge" })}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center">
                  <I.Whatsapp size={24} />
                </div>
                <div>
                  <div className="font-display font-bold text-xl">
                    {t("contact.whatsappBtn", "WhatsApp concierge")}
                  </div>
                  <div className="text-white/85 text-sm">
                    {t("contact.whatsappSubtitle", "Fastest way to plan & book")}
                  </div>
                </div>
              </div>
            </a>

            <a
              href={`mailto:${CONCIERGE_EMAIL}`}
              className="block bg-white border border-mist rounded-3xl p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-aqua text-teal-dark flex items-center justify-center font-semibold">
                  ✉
                </div>
                <div>
                  <div className="font-display font-bold text-navy">
                    {t("contact.emailBtn", "Email us")}
                  </div>
                  <div className="text-navy/70 text-sm">{CONCIERGE_EMAIL}</div>
                </div>
              </div>
            </a>

            <div className="bg-cream rounded-3xl border border-mist p-6">
              <div className="font-display font-bold text-navy mb-2">
                {t("contact.hoursTitle", "Office hours")}
              </div>
              <div className="text-sm text-navy/75 space-y-1">
                <div>{t("contact.hoursSubtitle", "Mon–Sun · 09:00 – 21:00 (local time, EET)")}</div>
                <div>{t("contact.hoursDesc", "Concierge replies within a few hours during summer season.")}</div>
              </div>
            </div>

            <div className="bg-aqua/50 rounded-3xl p-6 border border-aqua">
              <div className="flex items-center gap-2 font-display font-bold text-navy mb-1">
                <I.Sparkle size={18} className="text-teal" />
                {t("contact.tipTitle", "Tip")}
              </div>
              <p className="text-sm text-navy/75">
                {t("contact.tipDesc", "If you have a villa, send us the location and we'll suggest the best experiences nearby — and arrange pickups, drivers and chefs.")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
