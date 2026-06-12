import { Link } from "../lib/router";
import { I } from "../components/Icon";
import { useSEO } from "../utils/seo";
import { useLanguage } from "../lib/languageContext";

export function AboutPage() {
  const { t } = useLanguage();
  useSEO({
    title: t("about.title", "About Us | Karpathos Adventures Concierge"),
    description: t("about.metaDescription", "Learn about Karpathos Adventures, a curated local marketplace and concierge service for the best tours, hikes, and experiences in Karpathos, Greece."),
    canonicalPath: "/about"
  });

  return (
    <div className="pt-24 pb-16">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-teal text-xs font-bold uppercase tracking-widest mb-2">
          {t("nav.about", "About")}
        </div>
        <h1 className="font-display font-bold text-4xl sm:text-5xl text-navy leading-tight">
          {t("about.heading", "Karpathos Adventures is a local concierge for the best of the island.")}
        </h1>
        <p className="text-navy/75 text-lg mt-5 leading-relaxed">
          {t("about.intro", "We started Karpathos Adventures because guests kept asking the same questions: \"What's the best boat trip?\", \"Where can we go hiking?\", \"Can someone organize a private chef at our villa?\". So we built a curated marketplace and concierge service for the experiences that make Karpathos special — and we work only with local operators we personally trust.")}
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mt-10">
          {[
            { i: <I.Shield size={20} />, t: t("about.benefit1.t", "Curated, not crowded"), d: t("about.benefit1.d", "We only list experiences we'd send our family on.") },
            { i: <I.Whatsapp size={20} />, t: t("about.benefit2.t", "Real humans on WhatsApp"), d: t("about.benefit2.d", "No bots — real people who live on Karpathos.") },
            { i: <I.Sun size={20} />, t: t("about.benefit3.t", "Weather-aware planning"), d: t("about.benefit3.d", "We move things if the sea or wind isn't right.") },
          ].map((b) => (
            <div key={b.t} className="bg-white rounded-2xl border border-mist p-5">
              <div className="w-10 h-10 rounded-xl bg-aqua text-teal-dark flex items-center justify-center mb-3">{b.i}</div>
              <div className="font-display font-bold text-navy">{b.t}</div>
              <p className="text-sm text-navy/70 mt-1">{b.d}</p>
            </div>
          ))}
        </div>

        <h2 className="font-display font-bold text-2xl text-navy mt-14 mb-3">
          {t("about.cover.h", "What we cover")}
        </h2>
        <p className="text-navy/75 leading-relaxed">
          {t("about.cover.d", "Boat tours (including the iconic Saria Island day and private charters), hiking and land adventures, buggy and ATV safaris, diving and water sports, food & wine, and private villa experiences — chef dinners, drivers and fully custom Karpathos days.")}
        </p>

        <h2 className="font-display font-bold text-2xl text-navy mt-10 mb-3">
          {t("about.operators.h", "Our operators")}
        </h2>
        <p className="text-navy/75 leading-relaxed">
          {t("about.operators.d", "Many of our activities are run by independent local partners. We check licenses, insurance and reputation before listing them, and re-verify every season. If something ever doesn't meet our standard, you'll hear from us — and your booking is protected.")}
        </p>

        <div className="mt-10 bg-navy text-white rounded-3xl p-8 sm:p-10 relative overflow-hidden">
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-teal/30 rounded-full blur-3xl" />
          <div className="relative">
            <div className="text-sand text-xs font-bold uppercase tracking-widest mb-2">
              {t("about.cta.tag", "Let's plan")}
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl">
              {t("about.cta.h", "Tell us about your trip — we'll do the rest.")}
            </h3>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-navy font-semibold">
                <I.Whatsapp size={16} className="text-success" /> {t("about.cta.btn1", "WhatsApp concierge")}
              </Link>
              <Link to="/explore" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/15 border border-white/30 text-white font-semibold">
                {t("about.cta.btn2", "Browse activities")} <I.Arrow size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
