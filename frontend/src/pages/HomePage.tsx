import { useState, useEffect } from "react";
import { Link } from "../lib/router";
import { CATEGORIES, CATEGORY_DESCRIPTIONS, CATEGORY_IMAGES, type Activity } from "../data/activities";
import { activitiesService } from "../services/activitiesService";
import { I } from "../components/Icon";
import { ActivityCard } from "../components/ActivityCard";
import { useSEO } from "../utils/seo";

const HERO_IMG =
  "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=2000";

const trustChips = [
  { icon: <I.Shield size={14} />, label: "Local partners" },
  { icon: <I.Users size={14} />, label: "Private & group options" },
  { icon: <I.Whatsapp size={14} />, label: "Easy WhatsApp booking" },
  { icon: <I.Heart size={14} />, label: "Family-friendly" },
  { icon: <I.Sun size={14} />, label: "Weather-aware planning" },
];

function categorySlug(c: string) {
  return c
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function HomePage() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  const homepageSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Karpathos Concierge",
    "url": "https://karpathosadventures.com",
    "description": "Curated Karpathos activities, tours, boat trips, watersports, hiking, workshops, wellness, and private group experiences arranged through a local concierge.",
    "telephone": "+306943666243",
    "priceRange": "$$",
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
    "areaServed": "Karpathos, Greece"
  };

  useSEO({
    title: "Karpathos Activities, Tours & Private Experiences | Karpathos Concierge",
    description: "Discover curated Karpathos activities, boat trips, Saria and Olympos tours, hiking, windsurfing, diving, snorkeling, wine tasting, workshops, wellness, and private group experiences arranged through a local concierge.",
    canonicalPath: "/",
    schema: homepageSchema
  });

  useEffect(() => {
    activitiesService.getActivities().then((data) => {
      setActivities(data);
      setLoading(false);
    });
  }, []);

  const featured = [...activities]
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 6);
  const signature = activities.filter((a) =>
    ["exp_025", "exp_002", "exp_023", "exp_004"].includes(a.id)
  );

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center text-white overflow-hidden">
        <img
          src={HERO_IMG}
          alt="Karpathos activities and coastal boat tours"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/55 via-navy/40 to-navy/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-success pulse-dot" />
              Concierge open · Summer season
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight">
              Your Private Gateway to <span className="text-sand">Karpathos Experiences</span>
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed">
              Discover the best things to do in Karpathos through a curated local concierge: boat trips from Pigadia, Saria Island excursions, Olympos village tours, guided hikes, windsurfing in Afiartis, scuba diving, snorkeling, wine tasting, creative workshops, wellness treatments, and private group experiences.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/explore"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-teal text-white font-semibold shadow-xl hover:bg-teal-dark hover:scale-[1.02] transition-all"
              >
                Explore activities <I.Arrow size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/95 backdrop-blur text-navy font-semibold hover:bg-white transition-all"
              >
                <I.Whatsapp size={18} className="text-success" /> Ask WhatsApp concierge
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {trustChips.map((c) => (
                <span
                  key={c.label}
                  className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/15 text-white/90 text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  {c.icon}
                  {c.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Quick stats card */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl px-6 py-4 flex items-center gap-8">
            <Stat n="30+" label="curated experiences" />
            <Divider />
            <Stat n="9" label="categories" />
            <Divider />
            <Stat n="100%" label="local partners" />
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-teal text-xs font-bold uppercase tracking-widest mb-2">
              Browse by category
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy">
              Nine ways to fall in love with Karpathos.
            </h2>
          </div>
          <Link
            to="/explore"
            className="hidden sm:inline-flex items-center gap-1 text-teal font-semibold text-sm hover:gap-2 transition-all"
          >
            See all activities <I.Arrow size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map((c) => {
            const count = activities.filter((a) => a.category === c).length;
            return (
              <Link
                key={c}
                to={`/category/${categorySlug(c)}`}
                className="group relative rounded-3xl overflow-hidden aspect-[5/4] block shadow-md hover:shadow-2xl transition-shadow"
              >
                <img
                  src={CATEGORY_IMAGES[c]}
                  alt={c}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-transparent" />
                <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end text-white">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-white/80 mb-1">
                    {count} experience{count !== 1 ? "s" : ""}
                  </div>
                  <h3 className="font-display font-bold text-2xl sm:text-[26px] leading-tight">
                    {c}
                  </h3>
                  <p className="text-sm text-white/85 mt-1 leading-relaxed">
                    {CATEGORY_DESCRIPTIONS[c]}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1 text-sand font-semibold text-sm group-hover:gap-2 transition-all">
                    View experiences <I.Arrow size={15} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* FEATURED ACTIVITIES */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-teal text-xs font-bold uppercase tracking-widest mb-2">
                Most popular
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy">
                Top experiences this season.
              </h2>
            </div>
            <Link
              to="/explore"
              className="hidden sm:inline-flex items-center gap-1 text-teal font-semibold text-sm hover:gap-2 transition-all"
            >
              All activities <I.Arrow size={16} />
            </Link>
          </div>
          {loading ? (
            <div className="text-center py-10 text-navy/50 font-medium">Loading experiences...</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {featured.map((a) => (
                <ActivityCard key={a.id} activity={a} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SIGNATURE STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-sand-dark text-xs font-bold uppercase tracking-widest mb-2">
              Signature experiences
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy leading-tight">
              The Karpathos days you'll talk about for years.
            </h2>
            <p className="mt-4 text-navy/70 leading-relaxed">
              From a guided boat trip to Saria Island to a wine tasting at Scarpanto Winery,
              a sunset village tour, or windsurfing at Chicken Bay — we curate the experiences
              that turn a holiday into a story.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {[
                { i: <I.Sparkle size={16} />, t: "Hand-picked partners we trust" },
                { i: <I.Shield size={16} />, t: "Safety & weather always come first" },
                { i: <I.Heart size={16} />, t: "Family, couple & group versions" },
                { i: <I.Whatsapp size={16} />, t: "One WhatsApp away from booking" },
              ].map((b) => (
                <div key={b.t} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-aqua text-teal-dark flex items-center justify-center shrink-0">
                    {b.i}
                  </div>
                  <div className="text-sm text-navy/80 leading-snug pt-1">{b.t}</div>
                </div>
              ))}
            </div>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-navy text-white font-semibold hover:bg-navy-soft transition"
            >
              Build my Karpathos day <I.Arrow size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {signature.map((a, i) => (
              <Link
                key={a.id}
                to={`/activities/${a.slug}`}
                className={`relative rounded-3xl overflow-hidden block group shadow-md ${
                  i % 2 === 0 ? "aspect-[3/4]" : "aspect-[3/4] mt-8"
                }`}
              >
                <img
                  src={a.imageUrls[0]}
                  alt={a.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-sand mb-1">
                    {a.category}
                  </div>
                  <div className="font-display font-bold leading-snug text-[15px]">{a.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-navy text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-sand text-xs font-bold uppercase tracking-widest mb-2">
              How it works
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl leading-tight">
              From inspiration to booked in three steps.
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { n: "01", t: "Browse experiences", d: "Filter by category, group, beach or village. Save the ones you love." },
              { n: "02", t: "Request availability", d: "Send a WhatsApp message or quick inquiry — we reply within hours." },
              { n: "03", t: "Show up and enjoy", d: "We confirm the meeting point, weather plan, and operator details." },
            ].map((s) => (
              <div key={s.n} className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6">
                <div className="text-sand font-display font-extrabold text-3xl mb-2">{s.n}</div>
                <div className="font-display font-bold text-xl mb-1.5">{s.t}</div>
                <p className="text-white/70 text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONCIERGE CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="bg-gradient-to-br from-teal to-navy rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-sand/30 rounded-full blur-3xl" />
          <div className="relative max-w-2xl">
            <div className="text-sand text-xs font-bold uppercase tracking-widest mb-2">
              Concierge
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl leading-tight">
              Not sure what to book? Let us plan your Karpathos days.
            </h2>
            <p className="mt-3 text-white/85 leading-relaxed">
              Tell us your villa, dates, group and pace. We'll send back a curated plan with
              honest pricing and only the operators we trust.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-navy font-semibold hover:bg-cream transition"
              >
                Build my Karpathos day <I.Arrow size={16} />
              </Link>
              <Link
                to="/explore"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/15 backdrop-blur border border-white/30 text-white font-semibold hover:bg-white/25 transition"
              >
                Browse activities
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="text-center">
      <div className="font-display font-extrabold text-navy text-xl leading-none">{n}</div>
      <div className="text-[11px] uppercase tracking-wider text-navy/60 mt-1">{label}</div>
    </div>
  );
}
function Divider() {
  return <div className="w-px h-8 bg-navy/15" />;
}
