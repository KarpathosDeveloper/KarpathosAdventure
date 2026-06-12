import { useState, useEffect } from "react";
import { TRANSLATED_GUIDES } from "../data/guides";
import { type Activity } from "../data/activities";
import { activitiesService } from "../services/activitiesService";
import { Link } from "../lib/router";
import { I } from "../components/Icon";
import { useSEO } from "../utils/seo";
import { trackEvent } from "../utils/analytics";
import { useLanguage } from "../lib/languageContext";

export function GuidePage({ slug }: { slug: string }) {
  const { language, t } = useLanguage();
  const guide = TRANSLATED_GUIDES[language]?.[slug] || TRANSLATED_GUIDES["en"][slug];
  const [activities, setActivities] = useState<Activity[]>([]);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  useEffect(() => {
    activitiesService.getActivities().then((data) => {
      setActivities(data);
    });
  }, [slug]);

  useEffect(() => {
    if (guide) {
      trackEvent("guide_view", { slug, title: guide.title });
    }
  }, [slug, guide]);

  if (!guide) {
    return (
      <div className="pt-32 pb-24 text-center max-w-xl mx-auto px-4">
        <h1 className="font-display font-bold text-4xl text-navy">{t("booking.notFound", "Guide not found")}</h1>
        <p className="text-navy/70 mt-3">{t("booking.notFoundDesc", "We couldn't find the guide page you are looking for.")}</p>
        <Link to="/" className="mt-6 inline-block px-5 py-3 rounded-full bg-navy text-white font-semibold">{t("booking.backHome", "Back home")}</Link>
      </div>
    );
  }

  // Filter related experiences dynamically
  let relatedActivities: Activity[] = [];
  if (guide.relatedCategory) {
    relatedActivities = activities
      .filter((a) => a.category === guide.relatedCategory)
      .slice(0, 3);
  } else {
    // Match by keywords in tags or slug
    relatedActivities = activities
      .filter((a) => {
        const keywords = slug.split("-");
        return (
          a.tags.some((t) => keywords.includes(t.toLowerCase())) ||
          keywords.some((kw) => a.title.toLowerCase().includes(kw))
        );
      })
      .slice(0, 3);
  }

  // Fallback if no specific matches found
  if (relatedActivities.length === 0 && activities.length > 0) {
    relatedActivities = [...activities]
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, 3);
  }

  // Schema: BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://karpathosadventures.com" },
      { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://karpathosadventures.com/#/explore" },
      { "@type": "ListItem", "position": 3, "name": guide.title, "item": `https://karpathosadventures.com/#/guides/${slug}` }
    ]
  };

  // Schema: Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": guide.title,
    "description": guide.description,
    "image": guide.heroImage,
    "author": {
      "@type": "Organization",
      "name": "Karpathos Adventures",
      "url": "https://karpathosadventures.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Karpathos Adventures",
      "logo": {
        "@type": "ImageObject",
        "url": "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg"
      }
    },
    "mainEntityOfPage": `https://karpathosadventures.com/#/guides/${slug}`
  };

  // Schema: FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": guide.faqs.map((faq: { q: string; a: string }) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a }
    }))
  };

  useSEO({
    title: guide.seoTitle,
    description: guide.description,
    canonicalPath: `/guides/${slug}`,
    ogImage: guide.heroImage,
    schema: [breadcrumbSchema, articleSchema, faqSchema]
  });

  return (
    <div className="bg-cream pt-20 sm:pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb links */}
        <nav className="text-xs text-navy/60 mb-4 flex items-center gap-1.5">
          <Link to="/" className="hover:text-teal">{t("nav.home", "Home")}</Link>
          <span>/</span>
          <Link to="/explore" className="hover:text-teal">{t("guide.breadcrumbGuides", "Guides")}</Link>
          <span>/</span>
          <span className="text-navy font-medium line-clamp-1">{guide.title}</span>
        </nav>

        {/* Layout: Guide Article Grid */}
        <div className="grid lg:grid-cols-[1fr_320px] gap-8">
          
          {/* Main Article Content */}
          <article className="bg-white rounded-3xl border border-mist p-6 sm:p-8 shadow-sm">
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-navy leading-tight mb-4">
              {guide.title}
            </h1>
            
            <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-mist mb-6">
              <img src={guide.heroImage} alt={guide.title} className="w-full h-full object-cover" />
            </div>

            {/* Table of Contents */}
            {guide.toc && guide.toc.length > 0 && (
              <div className="bg-cream rounded-2xl p-5 border border-mist mb-6">
                <div className="font-display font-bold text-navy text-sm uppercase tracking-wider mb-3">
                  {t("guide.toc", "Table of Contents")}
                </div>
                <ul className="space-y-2 text-sm text-teal-dark font-medium">
                  {guide.toc.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-teal">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Introduction */}
            <p className="text-navy/80 text-base leading-relaxed mb-6 font-medium border-l-4 border-teal pl-4 italic">
              {guide.introduction}
            </p>

            {/* Sections */}
            <div className="space-y-8 mt-6">
              {guide.sections.map((sec: { heading: string; text: string; list?: string[] }, idx: number) => (
                <section key={idx} className="border-t border-mist/60 pt-6 first:border-0 first:pt-0">
                  <h2 className="font-display font-bold text-xl sm:text-2xl text-navy mb-3">
                    {sec.heading}
                  </h2>
                  <p className="text-navy/70 text-sm sm:text-base leading-relaxed">
                    {sec.text}
                  </p>
                  {sec.list && sec.list.length > 0 && (
                    <ul className="mt-3 space-y-1.5 pl-5 list-disc text-sm text-navy/70">
                      {sec.list.map((item: string, lIdx: number) => (
                        <li key={lIdx}>{item}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            {/* FAQs Accordion */}
            {guide.faqs && guide.faqs.length > 0 && (
              <div className="border-t border-mist/80 mt-10 pt-8">
                <h2 className="font-display font-bold text-2xl text-navy mb-6">
                  {t("activity.faq", "Frequently Asked Questions")}
                </h2>
                <div className="space-y-3">
                  {guide.faqs.map((faq: { q: string; a: string }, idx: number) => (
                    <div key={idx} className="bg-cream rounded-xl border border-mist overflow-hidden">
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                        className="w-full text-left px-4 py-3.5 flex justify-between items-center gap-3 hover:bg-mist/35 transition"
                      >
                        <span className="font-display font-semibold text-navy text-sm sm:text-base">{faq.q}</span>
                        <span className="text-teal font-extrabold">{expandedFaq === idx ? "−" : "+"}</span>
                      </button>
                      {expandedFaq === idx && (
                        <div className="px-4 pb-3.5 text-sm text-navy/70 leading-relaxed border-t border-mist/40 pt-2 bg-white">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            
            {/* WhatsApp Concierge Sticky Box */}
            <div className="bg-gradient-to-br from-teal to-navy text-white rounded-3xl p-5 sm:p-6 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center mb-4 text-white">
                <I.Whatsapp size={20} />
              </div>
              <h3 className="font-display font-bold text-lg leading-tight">{t("guide.customPlan", "Need a custom plan?")}</h3>
              <p className="text-white/80 text-xs mt-2 leading-relaxed">
                {t("guide.customPlanDesc", "Connect with our local concierge via WhatsApp. We organize tailor-made itineraries, private villa pickups, transfers, and custom group events.")}
              </p>
              <a
                href="https://wa.me/306943666243?text=Hi!%20I%20am%20reading%20your%20guides%20and%20would%20like%20to%20plan%20a%20custom%20itinerary%20in%20Karpathos."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full py-2.5 rounded-full bg-success text-white font-semibold text-xs flex items-center justify-center gap-1.5 hover:bg-success/90 transition shadow-sm"
                onClick={() => trackEvent("whatsapp_click", { context: "guide_page_sidebar", guide_slug: slug })}
              >
                <I.Whatsapp size={14} /> {t("guide.planWhatsapp", "Plan on WhatsApp")}
              </a>
            </div>

            {/* Related Experiences */}
            <div className="bg-white rounded-3xl border border-mist p-5 shadow-sm">
              <h3 className="font-display font-bold text-navy text-sm uppercase tracking-wider mb-4 border-b border-mist pb-2">
                {t("guide.bookableTitle", "Bookable Activities")}
              </h3>
              <div className="space-y-4">
                {relatedActivities.map((act) => {
                  const actTitle = act.translations?.[language]?.title || act.title;
                  return (
                    <div key={act.id} className="group flex gap-3 border-b border-mist/55 pb-3 last:border-0 last:pb-0">
                      <div className="w-16 h-12 rounded-lg overflow-hidden bg-mist shrink-0">
                        <img src={act.imageUrls[0]} alt={actTitle} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <Link to={`/experiences/${act.slug}`} className="font-display font-bold text-xs text-navy group-hover:text-teal transition-colors line-clamp-1">
                          {actTitle}
                        </Link>
                        <div className="text-[10px] text-teal mt-0.5 font-semibold">
                          {act.priceType === "quote" ? t("activity.onRequest", "On request") : `${t("activity.priceFrom", "From")} €${act.fromPrice}`}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* More Guides navigation */}
            <div className="bg-white rounded-3xl border border-mist p-5 shadow-sm">
              <h3 className="font-display font-bold text-navy text-sm uppercase tracking-wider mb-3 border-b border-mist pb-2">
                {t("guide.popularGuides", "Popular Guides")}
              </h3>
              <ul className="space-y-2 text-xs text-navy/70">
                {Object.keys(TRANSLATED_GUIDES["en"])
                  .filter((gSlug) => gSlug !== slug)
                  .slice(0, 6)
                  .map((gSlug) => {
                    const g = TRANSLATED_GUIDES[language]?.[gSlug] || TRANSLATED_GUIDES["en"][gSlug];
                    return (
                      <li key={gSlug}>
                        <Link to={`/guides/${gSlug}`} className="hover:text-teal font-medium flex items-center gap-1">
                          <span className="text-teal">•</span>
                          <span className="line-clamp-1">{g.seoTitle.split(" | ")[0]}</span>
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
