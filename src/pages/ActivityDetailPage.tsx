import { useState, useEffect } from "react";
import { type Activity } from "../data/activities";
import { Link } from "../lib/router";
import { ActivityCard } from "../components/ActivityCard";
import { I } from "../components/Icon";
import { InquiryForm } from "../components/InquiryForm";
import { whatsappLink } from "../lib/whatsapp";
import { activitiesService } from "../services/activitiesService";
import { useSEO } from "../utils/seo";
import { trackEvent } from "../utils/analytics";
import { useLanguage } from "../lib/languageContext";

export function ActivityDetailPage({ slug }: { slug: string }) {
  const { language, t } = useLanguage();
  const [activity, setActivity] = useState<Activity | null>(null);
  const [similar, setSimilar] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeImg, setActiveImg] = useState(0);
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(2);

  useEffect(() => {
    let active = true;
    setLoading(true);
    activitiesService
      .getActivities()
      .then((list) => {
        if (!active) return;
        const found = list.find((a) => a.slug === slug);
        if (found) {
          setActivity(found);
          const sim = list
            .filter((a) => a.id !== found.id && a.category === found.category)
            .slice(0, 3);
          setSimilar(sim);
        } else {
          setActivity(null);
          setSimilar([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [slug]);

  useEffect(() => {
    setActiveImg(0);
  }, [slug]);

  useEffect(() => {
    if (activity && activity.slug === slug) {
      trackEvent("experience_view", { slug: activity.slug, title: activity.title });
    }
  }, [activity, slug]);

  const title = activity?.translations?.[language]?.title || activity?.title;
  const shortDescription = activity?.translations?.[language]?.shortDescription || activity?.shortDescription;
  const fullDescription = activity?.translations?.[language]?.fullDescription || activity?.fullDescription;
  const locationName = activity?.translations?.[language]?.locationName || activity?.locationName;
  const meetingPoint = activity?.translations?.[language]?.meetingPoint || activity?.meetingPoint;
  const highlights = activity?.translations?.[language]?.highlights || activity?.highlights || [];
  const included = activity?.translations?.[language]?.included || activity?.included || [];
  const notIncluded = activity?.translations?.[language]?.notIncluded || activity?.notIncluded || [];
  const whatToBring = activity?.translations?.[language]?.whatToBring || activity?.whatToBring || [];
  const duration = activity?.translations?.[language]?.duration || activity?.duration;
  const difficulty = activity?.translations?.[language]?.difficulty || activity?.difficulty;

  // Breadcrumbs Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://karpathosadventures.com" },
      { "@type": "ListItem", "position": 2, "name": "Experiences", "item": "https://karpathosadventures.com/#/explore" },
      { "@type": "ListItem", "position": 3, "name": title, "item": `https://karpathosadventures.com/#/experiences/${activity?.slug}` }
    ]
  };

  // TouristTrip / Offer Schema
  const touristTripSchema = activity ? {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": title,
    "description": shortDescription,
    "image": activity.imageUrls?.[0],
    "provider": {
      "@type": "TravelAgency",
      "name": "Karpathos Adventures",
      "telephone": "+306943666243",
      "url": "https://karpathosadventures.com"
    },
    "offers": {
      "@type": "Offer",
      "price": activity.fromPrice || 0,
      "priceCurrency": "EUR",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": activity.fromPrice || 0,
        "priceCurrency": "EUR",
        "referenceQuantity": {
          "@type": "QuantitativeValue",
          "value": 1,
          "unitText": activity.priceType === "per_group" ? "group" : "person"
        }
      },
      "url": `https://karpathosadventures.com/#/experiences/${activity.slug}`
    },
    "touristType": activity.bestFor || ["Tourists"],
    "itinerary": {
      "@type": "ItemList",
      "numberOfItems": 1,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Experience start",
          "description": `Duration: ${duration}. Starts at ${meetingPoint}.`
        }
      ]
    }
  } : null;

  // FAQ Schema
  const faqSchema = activity?.faqs && activity.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": activity.faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  } : null;

  const combinedSchema = [breadcrumbSchema, touristTripSchema, faqSchema].filter(Boolean);

  useSEO({
    title: activity ? `${title} in Karpathos | Karpathos Concierge` : "Karpathos Adventures",
    description: shortDescription || "",
    canonicalPath: activity ? `/experiences/${activity.slug}` : "",
    ogImage: activity?.imageUrls?.[0],
    schema: activity ? combinedSchema : undefined
  });

  const getWhatsappMessage = () => {
    if (activity?.whatsappPrefillTemplate) {
      return activity.whatsappPrefillTemplate
        .replace("[dates]", date || "[dates]")
        .replace("[number]", String(guests))
        .replace("[area]", locationName || "[area]");
    }
    return `Hi! I'd like to book "${title}"${
      date ? ` for ${date}` : ""
    }, ${guests} guests. Can you confirm availability?`;
  };

  if (loading) {
    return (
      <div className="pt-32 pb-24 text-center max-w-xl mx-auto px-4 flex flex-col items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-teal mb-4"></div>
        <p className="text-navy/70">Loading experience details...</p>
      </div>
    );
  }

  if (!activity) {
    return (
      <div className="pt-32 pb-24 text-center max-w-xl mx-auto px-4">
        <h1 className="font-display font-bold text-3xl text-navy">Activity not found</h1>
        <p className="text-navy/70 mt-2">We couldn't find that experience.</p>
        <Link to="/explore" className="inline-flex mt-5 px-5 py-3 rounded-full bg-teal text-white font-semibold">
          Browse all experiences
        </Link>
      </div>
    );
  }

  const priceLabel =
    activity.priceType === "quote"
      ? t("activity.onRequest", "On request")
      : activity.priceType === "per_group"
      ? `${t("activity.priceFrom", "From")} ${activity.currency}${activity.fromPrice} / ${t("activity.perGroup", "per group")}`
      : `${t("activity.priceFrom", "From")} ${activity.currency}${activity.fromPrice} / ${t("activity.perPerson", "per person")}`;

  return (
    <div className="pt-20 sm:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="text-xs text-navy/60 mb-4">
          <Link to="/" className="hover:text-teal">{t("nav.home", "Home")}</Link>
          <span className="mx-1.5">/</span>
          <Link to="/explore" className="hover:text-teal">{t("nav.explore", "Explore")}</Link>
          <span className="mx-1.5">/</span>
          <span className="text-navy">{title}</span>
        </nav>

        {/* Title row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 mb-5">
          <div>
            <div className="text-teal text-xs font-bold uppercase tracking-widest mb-1">
              {t("category." + activity.category, activity.category)}
            </div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-navy leading-tight">
              {title}
            </h1>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-navy/70">
              <span className="inline-flex items-center gap-1"><I.Pin size={14} /> {locationName}</span>
              <span className="inline-flex items-center gap-1"><I.Clock size={14} /> {duration}</span>
              <span className="inline-flex items-center gap-1"><I.Users size={14} /> {t("activity.guestsMax", "Up to {count} guests").replace("{count}", String(activity.maxGuests))}</span>
              <span className="inline-flex items-center gap-1"><I.Mountain size={14} /> {difficulty}</span>
              <span className="inline-flex items-center gap-1"><I.Calendar size={14} /> {activity.seasonStart}–{activity.seasonEnd}</span>
            </div>
          </div>
          <div className="bg-aqua/60 rounded-2xl px-4 py-3">
            <div className="text-[11px] font-bold uppercase tracking-wider text-teal-dark">{t("activity.priceFrom", "Price from")}</div>
            <div className="font-display font-bold text-teal-dark text-xl">{priceLabel}</div>
            {activity.priceNote && (
              <div className="text-[11px] text-navy/60">{activity.priceNote}</div>
            )}
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-3 mb-10">
          <div className="relative rounded-3xl overflow-hidden bg-mist aspect-[16/10]">
            <img
              src={activity.imageUrls[activeImg]}
              alt={title}
              className="w-full h-full object-cover"
            />
            {activity.badge && (
              <div className="absolute top-4 left-4 inline-flex items-center gap-1 bg-sand text-navy text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
                <I.Sparkle size={12} /> {activity.badge}
              </div>
            )}
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-1 gap-3">
            {activity.imageUrls.map((src, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-full transition-all ${
                  activeImg === i ? "ring-2 ring-teal" : "opacity-80 hover:opacity-100"
                }`}
              >
                <img src={src} alt={`${title} gallery view ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-8 pb-16">
          {/* MAIN */}
          <div>
            <Section title={t("activity.aboutThis", "About this experience")}>
              <p className="text-navy/80 leading-relaxed text-[15px]">{fullDescription}</p>
            </Section>

            {highlights && highlights.length > 0 && (
              <Section title={t("activity.highlights", "Highlights")}>
                <ul className="space-y-2">
                  {highlights.map((x: string) => (
                    <li key={x} className="flex gap-2 text-sm text-navy/80">
                      <I.Sparkle size={16} className="text-teal mt-0.5 shrink-0" /> {x}
                    </li>
                  ))}
                </ul>
              </Section>
            )}

            <Section title={t("activity.quickFacts", "Quick facts")}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <Fact icon={<I.Clock size={16} />} k={t("activity.duration", "Duration")} v={duration} />
                <Fact icon={<I.Users size={16} />} k={t("activity.groupType", "Group")} v={activity.groupType === "private" ? t("activity.groupType.privateOnly", "Private only") : activity.groupType === "both" ? t("activity.groupType.groupOrPrivate", "Group or private") : t("activity.groupType.groupOnly", "Group")} />
                <Fact icon={<I.Mountain size={16} />} k={t("activity.difficulty", "Difficulty")} v={difficulty} />
                <Fact icon={<I.Calendar size={16} />} k={t("activity.season", "Season")} v={`${activity.seasonStart}–${activity.seasonEnd}`} />
                <Fact icon={<I.Sun size={16} />} k={t("activity.weather", "Weather")} v={activity.weatherDependent ? t("activity.weatherDependent", "Weather-dependent") : t("activity.weather.any", "Any weather")} />
                <Fact icon={<I.Pin size={16} />} k={t("activity.meetingPoint", "Meeting Point")} v={meetingPoint} />
              </div>
            </Section>

            <div className="grid sm:grid-cols-2 gap-6">
              <Section title={t("activity.included", "What's Included")}>
                <ul className="space-y-2">
                  {included.map((x: string) => (
                    <li key={x} className="flex gap-2 text-sm text-navy/80">
                      <I.Check size={16} className="text-success mt-0.5 shrink-0" /> {x}
                    </li>
                  ))}
                </ul>
              </Section>
              <Section title={t("activity.notIncluded", "Not Included")}>
                <ul className="space-y-2">
                  {notIncluded.map((x: string) => (
                    <li key={x} className="flex gap-2 text-sm text-navy/70">
                      <I.X size={16} className="text-warn mt-0.5 shrink-0" /> {x}
                    </li>
                  ))}
                </ul>
              </Section>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <Section title={t("activity.whatToBring", "What to Bring")}>
                <ul className="space-y-2">
                  {whatToBring.map((x: string) => (
                    <li key={x} className="flex gap-2 text-sm text-navy/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0" /> {x}
                    </li>
                  ))}
                </ul>
              </Section>
              <Section title={t("activity.safety", "Safety Notes")}>
                <ul className="space-y-2">
                  {activity.safetyNotes.map((x) => (
                    <li key={x} className="flex gap-2 text-sm text-navy/80">
                      <I.Shield size={16} className="text-teal mt-0.5 shrink-0" /> {x}
                    </li>
                  ))}
                </ul>
              </Section>
            </div>

            <Section title={t("activity.meetingPointPickup", "Meeting point & pickup")}>
              <p className="text-sm text-navy/80">
                <span className="font-semibold">{t("activity.meetingPoint", "Meeting Point")}:</span> {meetingPoint}
              </p>
              {activity.googleMapsUrl && (
                <a
                  href={activity.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-teal font-semibold hover:underline"
                >
                  <I.Map size={14} /> {t("activity.openMaps", "Open in Google Maps")}
                </a>
              )}
              <p className="text-sm text-navy/80 mt-2">
                <span className="font-semibold">{t("activity.pickup", "Pickup:")}</span>{" "}
                {activity.pickupAvailable
                  ? t("activity.pickup.yes", "Available on request — we can arrange villa/hotel pickup.")
                  : t("activity.pickup.no", "Not included. Self-arrival to the meeting point.")}
              </p>
            </Section>

            <Section title={t("activity.cancellationWeather", "Cancellation & weather policy")}>
              <p className="text-sm text-navy/80">{activity.cancellationPolicy}</p>
              {activity.weatherDependent && (
                <p className="text-sm text-navy/70 mt-2 bg-warn/10 text-warn-darker border border-warn/30 rounded-xl p-3">
                  <span className="font-semibold">{t("activity.weatherNotice", "Weather notice:")}</span>{" "}
                  {t("activity.weatherNotice.desc", "this experience is weather-dependent. If we have to cancel for safety, you'll be fully refunded or rescheduled.")}
                </p>
              )}
            </Section>

            <Section title={t("activity.operator", "Operator")}>
              <div className="flex items-center gap-3 p-4 bg-cream rounded-2xl border border-mist">
                <div className="w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center">
                  <I.Shield size={22} />
                </div>
                <div>
                  <div className="font-semibold text-navy">
                    {activity.partnerName || "Partner-operated activity"}
                  </div>
                  <div className="text-xs text-navy/60 mt-0.5">
                    {t("activity.operator.vetted", "All operators are vetted by our concierge. Insurance and licenses confirmed before each season.")}
                  </div>
                </div>
              </div>
            </Section>

            {activity.faqs && activity.faqs.length > 0 && (
              <Section title={t("activity.faq", "Frequently Asked Questions")}>
                <div className="space-y-4">
                  {activity.faqs.map((faq, i) => (
                    <div key={i} className="bg-cream rounded-2xl p-4 border border-mist">
                      <h4 className="font-semibold text-navy text-sm">{faq.q}</h4>
                      <p className="text-xs text-navy/70 mt-2">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {/* Similar */}
            {similar.length > 0 && (
              <div className="mt-12">
                <h3 className="font-display font-bold text-2xl text-navy mb-4">
                  {t("activity.similar", "Similar experiences")}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {similar.map((a) => (
                    <ActivityCard key={a.id} activity={a} compact />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* STICKY BOOKING */}
          <aside className="lg:sticky lg:top-24 self-start">
            <div className="bg-white rounded-3xl border border-mist shadow-lg p-5 sm:p-6">
              <div className="text-[11px] font-bold uppercase tracking-wider text-teal-dark">
                {t("booking.title", "Request Availability")}
              </div>
              <div className="font-display font-bold text-2xl text-navy mt-1">{priceLabel}</div>
              {activity.priceNote && (
                <div className="text-xs text-navy/60 mt-0.5">{activity.priceNote}</div>
              )}

              <div className="mt-4 grid gap-2">
                <label className="block">
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-navy/60 mb-1">
                    {t("booking.date", "Preferred Date")}
                  </span>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-mist bg-cream focus:bg-white focus:border-teal outline-none text-sm"
                  />
                </label>
                <label className="block">
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-navy/60 mb-1">
                    {t("booking.guests", "Number of Guests")}
                  </span>
                  <input
                    type="number"
                    min={1}
                    max={activity.maxGuests}
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full px-3 py-2.5 rounded-xl border border-mist bg-cream focus:bg-white focus:border-teal outline-none text-sm"
                  />
                </label>
              </div>

              <a
                href={whatsappLink(getWhatsappMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-success text-white font-semibold hover:bg-success/90 transition"
                onClick={() => trackEvent("whatsapp_click", { context: "activity_detail_sidebar", activity_slug: activity.slug, activity_title: title })}
              >
                <I.Whatsapp size={18} /> {t("activity.requestWhatsapp", "Request via WhatsApp")}
              </a>

              <Link
                to={`/book?activity=${activity.slug}`}
                className="mt-2 w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-navy text-white font-semibold hover:bg-navy-soft transition"
              >
                <I.Calendar size={16} /> {t("activity.requestAvailability", "Request availability")}
              </Link>

              <div className="mt-4 pt-4 border-t border-mist text-xs text-navy/60 space-y-1.5">
                <div className="flex items-center gap-1.5"><I.Check size={13} className="text-success" /> {t("activity.freeInquire", "Free to inquire")}</div>
                <div className="flex items-center gap-1.5"><I.Check size={13} className="text-success" /> {t("activity.replyWithinHours", "Reply within hours")}</div>
                <div className="flex items-center gap-1.5"><I.Check size={13} className="text-success" /> {t("activity.conciergeSupport", "Local concierge support")}</div>
              </div>
            </div>

            <div id="inquiry-form" className="mt-5">
              <InquiryForm
                compact
                activityTitle={title}
                title={t("activity.sendInquiry", "Or send an inquiry")}
                subtitle={t("activity.inquirySubtitle", "We'll reply with availability, pricing and meeting details.")}
              />
            </div>
          </aside>
        </div>
      </div>

      {/* Mobile sticky bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-mist p-3 flex gap-2 shadow-2xl">
        <div className="flex-1">
          <div className="text-[10px] uppercase font-bold text-navy/60 tracking-wider">{t("activity.priceFrom", "Price from")}</div>
          <div className="font-display font-bold text-navy">
            {activity.priceType === "quote" ? t("activity.onRequest", "On request") : `${activity.currency}${activity.fromPrice}`}
          </div>
        </div>
        <a
          href={whatsappLink(getWhatsappMessage())}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-success text-white font-semibold text-sm"
          onClick={() => trackEvent("whatsapp_click", { context: "activity_detail_mobile", activity_slug: activity.slug, activity_title: title })}
        >
          <I.Whatsapp size={16} /> WhatsApp
        </a>
        <Link
          to={`/book?activity=${activity.slug}`}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-teal text-white font-semibold text-sm"
        >
          {t("activity.book", "Request")}
        </Link>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="py-5 border-b border-mist last:border-0">
      <h2 className="font-display font-bold text-xl text-navy mb-3">{title}</h2>
      {children}
    </section>
  );
}

function Fact({ icon, k, v }: { icon: React.ReactNode; k: string; v: string }) {
  return (
    <div className="bg-cream rounded-xl p-3">
      <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-navy/50 mb-1">
        <span className="text-teal">{icon}</span>
        {k}
      </div>
      <div className="text-sm font-semibold text-navy leading-snug">{v}</div>
    </div>
  );
}
