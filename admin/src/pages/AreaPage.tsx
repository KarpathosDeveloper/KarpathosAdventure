import { useState, useEffect } from "react";
import { type Activity } from "../data/activities";
import { activitiesService } from "../services/activitiesService";
import { ActivityCard } from "../components/ActivityCard";
import { Link } from "../lib/router";
import { I } from "../components/Icon";
import { useSEO } from "../utils/seo";
import { trackEvent } from "../utils/analytics";

export const AREAS_DATA: Record<string, {
  name: string;
  intro: string;
  faqs: { q: string; a: string }[];
  image: string;
}> = {
  pigadia: {
    name: "Pigadia",
    intro: "Pigadia (also known as Karpathos Town) is the vibrant capital and harbor of Karpathos. Flanked by a long sandy beach, it serves as the ultimate launching point for daily boat trips to Saria Island, scuba diving, and exploring mountain trails. It is perfect for families, couples, and groups seeking dining, nightlife, and convenience.",
    faqs: [
      { q: "What are the best things to do in Pigadia Karpathos?", a: "Top activities include taking a Saria Island boat tour from the harbor, booking a speedboat snorkeling session, visiting local honey producers, or hiking up nearby pine trails." },
      { q: "Are there boat trips from Pigadia?", a: "Yes, Pigadia harbor is the primary departure point for almost all day cruises, snorkeling boat trips, and boat excursions to Saria Island." }
    ],
    image: "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
  },
  amoopi: {
    name: "Amoopi",
    intro: "Amoopi is famous for its shallow, crystal-clear turquoise waters and calm sandy coves. Nestled on the east coast, it is a protected haven from strong winds, making it the most popular area for families, couples, and snorkeling enthusiasts.",
    faqs: [
      { q: "Is Amoopi beach suitable for children?", a: "Yes, coves like Little Amoopi have a gentle sandy slope and shallow waters, which is highly recommended for families with kids." },
      { q: "What can you do in Amoopi Karpathos?", a: "Enjoy snorkeling in the rocky coves, go on scenic coastal walks, relax with premium massages, or dine at authentic seaside tavernas." }
    ],
    image: "https://images.pexels.com/photos/34777293/pexels-photo-34777293.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
  },
  afiartis: {
    name: "Afiartis",
    intro: "Afiartis is the windsurfing and watersports heart of Karpathos. Positioned on the flat southern tip of the island, the bay is subject to strong, consistent Meltemi winds. It offers Chicken Bay for flat-water beginners and Devil's Bay for world-class speed trials.",
    faqs: [
      { q: "Can beginners learn windsurfing in Afiartis?", a: "Absolutely. Chicken Bay features waist-deep, flat water with shelter from waves, making it one of the absolute best spots in Europe to learn windsurfing or wing foiling." },
      { q: "What is the wind season in Afiartis?", a: "The strongest winds blow daily from mid-June to early September, but stations open from May to October." }
    ],
    image: "https://images.pexels.com/photos/12376921/pexels-photo-12376921.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
  },
  "volada-pini": {
    name: "Volada & Pini",
    intro: "Volada and Pini are traditional mountain settlements set amidst pine forests and rocky summits. This area is the center of local crafts and art workshops. It is a fantastic destination for hikers climbing Profitis Ilias and travelers seeking authentic Karpathian culture.",
    faqs: [
      { q: "What workshops can I do in Volada?", a: "Volada hosts creative mosaic workshops, pebble stones workshops, and botanical clay ateliers taught by local artists." },
      { q: "Is hiking popular near Volada & Pini?", a: "Yes, the area is the starting point for panoramic mountain trails, including hikes up to Lastos and Aperi." }
    ],
    image: "https://images.pexels.com/photos/30630904/pexels-photo-30630904.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
  },
  arkasa: {
    name: "Arkasa",
    intro: "Arkasa sits on the sunny southwest coast and is famous for its rich history and dramatic wave beaches. Visitors come to climb the ancient Acropolis of Paleokastro, surf at Agios Nikolaos beach, or go rock climbing on limestone cliffs.",
    faqs: [
      { q: "What should I see in Arkasa?", a: "Do not miss the ancient basilica mosaics of Agia Sophia, the sunset views from Paleokastro hill, and local seafood in the traditional village square." },
      { q: "Is there climbing in Arkasa?", a: "Yes, the cliffs near Arkasa offer excellent guided rock climbing routes for both beginners and experienced climbers." }
    ],
    image: "https://images.pexels.com/photos/31846705/pexels-photo-31846705.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
  },
  "olympos-diafani": {
    name: "Olympos & Diafani",
    intro: "Olympos is an isolated mountain village famous for its preserved matriarchal traditions, windmills, and Dodecanese dialect. Diafani is the quiet harbor port serving Olympos. A day trip here is a journey back in time.",
    faqs: [
      { q: "Why is Olympos Karpathos matriarchal?", a: "Olympos preserves an inheritance system where houses and customs are passed down through the firstborn daughters, who wear hand-woven costumes daily." },
      { q: "How do I get to Olympos and Diafani?", a: "The most scenic way is a day-trip cruise boat from Pigadia harbor to Diafani, followed by a short bus ride up to Olympos." }
    ],
    image: "https://images.pexels.com/photos/37037773/pexels-photo-37037773.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
  },
  adia: {
    name: "Adia",
    intro: "Adia is a remote, forested valley on the west coast, known for its rugged limestone cliffs, pine forests, and quiet pebble beaches. It is the perfect place for wellness, yoga, meditation, and off-grid relaxation.",
    faqs: [
      { q: "What wellness options exist in Adia?", a: "We arrange private forest yoga classes, stone massage rituals, and reflexology sessions in Adia's serene pine-wood platforms." },
      { q: "Is Adia good for nature lovers?", a: "Yes, it is one of the most forested areas in Karpathos, offering quiet coastal walks and organic tavernas." }
    ],
    image: "https://images.pexels.com/photos/34777293/pexels-photo-34777293.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
  },
  saria: {
    name: "Saria",
    intro: "Saria is an uninhabited island north of Karpathos, protected as a wildlife sanctuary. It features white pebble beaches, marine caves, a dramatic dry canyon, and the ruins of an ancient Byzantine and Saracen pirate settlement.",
    faqs: [
      { q: "How can I visit Saria Island?", a: "Book a guided boat excursion departing from Pigadia or Diafani. The tour includes boat transfers, canyon hiking, snorkeling, and a fresh lunch." },
      { q: "Is Saria Island suitable for hiking?", a: "Yes, hiking the gorge from Palatia beach up to the vaulted ruins of the historic pirate settlement is a key highlight of the tour." }
    ],
    image: "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
  }
};

export function AreaPage({ slug }: { slug: string }) {
  const area = AREAS_DATA[slug];
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  useEffect(() => {
    activitiesService.getActivities().then((data) => {
      setActivities(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (area) {
      trackEvent("area_view", { slug, name: area.name });
    }
  }, [slug, area]);

  if (!area) {
    return (
      <div className="pt-32 pb-24 text-center max-w-xl mx-auto px-4">
        <h1 className="font-display font-bold text-4xl text-navy">Area not found</h1>
        <p className="text-navy/70 mt-3">We couldn't find the area you are looking for.</p>
        <Link to="/explore" className="mt-6 inline-block px-5 py-3 rounded-full bg-navy text-white font-semibold">Browse all activities</Link>
      </div>
    );
  }

  // Filter activities in or near this area
  const matchedActivities = activities.filter((a) => {
    const normalized = (a.closestTo || []).concat(a.locationName || "").map((s) => s.toLowerCase());
    if (slug === "volada-pini") {
      return normalized.some((s) => s.includes("volada") || s.includes("pini") || s.includes("aperi"));
    }
    if (slug === "olympos-diafani") {
      return normalized.some((s) => s.includes("olympos") || s.includes("diafani"));
    }
    return normalized.some((s) => s.includes(slug));
  });

  // Generate Breadcrumbs Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://karpathosadventures.com" },
      { "@type": "ListItem", "position": 2, "name": "Areas", "item": "https://karpathosadventures.com/#/explore" },
      { "@type": "ListItem", "position": 3, "name": area.name, "item": `https://karpathosadventures.com/#/areas/${slug}` }
    ]
  };

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": area.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a }
    }))
  };

  // Set SEO tags
  useSEO({
    title: `Things to Do in ${area.name}, Karpathos | Karpathos Concierge`,
    description: `Discover curated things to do in ${area.name}, Karpathos, including nearby tours, boat trips, local experiences, wellness, watersports, and activities arranged through a local concierge.`,
    canonicalPath: `/areas/${slug}`,
    ogImage: area.image,
    schema: [breadcrumbSchema, faqSchema]
  });

  return (
    <div>
      {/* Area Hero Section */}
      <section className="relative min-h-[50vh] flex items-end text-white">
        <img src={area.image} alt={`Things to do in ${area.name} Karpathos`} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 w-full">
          {/* Breadcrumbs */}
          <nav className="text-xs text-white/80 mb-3 flex items-center gap-1.5">
            <Link to="/" className="hover:text-sand">Home</Link>
            <span>/</span>
            <Link to="/explore" className="hover:text-sand">Explore</Link>
            <span>/</span>
            <span className="text-white font-medium">{area.name}</span>
          </nav>
          
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Things to Do in {area.name}, Karpathos
          </h1>
          <p className="mt-3 text-white/95 text-lg max-w-3xl leading-relaxed">{area.intro}</p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-mist pb-4 mb-8">
          <div>
            <h2 className="font-display font-bold text-2xl text-navy">Curated Experiences Near {area.name}</h2>
            <p className="text-xs text-navy/60 mt-1">Vetted local activities available for online booking or inquiry.</p>
          </div>
          <div className="text-sm font-semibold text-navy">
            {matchedActivities.length} experience{matchedActivities.length !== 1 ? "s" : ""} found
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12 text-navy/50 font-medium">Loading experiences...</div>
        ) : matchedActivities.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {matchedActivities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-mist p-8">
            <p className="text-navy/60 font-medium">No direct experiences mapped here yet.</p>
            <p className="text-sm text-navy/50 mt-1">Our concierge can still arrange custom plan routes for you.</p>
            <Link to="/contact" className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal text-white font-semibold text-sm">
              <I.Whatsapp size={15} /> Contact Concierge
            </Link>
          </div>
        )}
      </section>

      {/* FAQ Section */}
      <section className="bg-cream border-t border-b border-mist py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy text-center mb-8">
            Frequently Asked Questions about {area.name}
          </h2>
          <div className="space-y-3">
            {area.faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-mist overflow-hidden transition-shadow duration-200">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full text-left px-5 py-4 flex justify-between items-center gap-4 hover:bg-mist/30 transition-colors"
                >
                  <span className="font-display font-bold text-navy text-sm sm:text-base">{faq.q}</span>
                  <span className="text-teal font-extrabold text-lg shrink-0">
                    {expandedFaq === i ? "−" : "+"}
                  </span>
                </button>
                {expandedFaq === i && (
                  <div className="px-5 pb-4 text-sm text-navy/70 leading-relaxed border-t border-mist/50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Concierge CTA banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-gradient-to-br from-teal to-navy rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="max-w-xl">
            <h2 className="font-display font-bold text-2xl sm:text-3xl">Plan your stay near {area.name}</h2>
            <p className="text-white/80 text-sm sm:text-base mt-2">
              Our local concierge works directly with top-rated villa owners, transfer services, and activity operators. Send us your dates and we'll handle the rest.
            </p>
          </div>
          <Link to="/contact" className="px-6 py-3 rounded-full bg-white text-navy font-semibold hover:bg-cream transition shrink-0 inline-flex items-center gap-2">
            <I.Whatsapp size={16} /> Get Custom Itinerary
          </Link>
        </div>
      </section>
    </div>
  );
}
