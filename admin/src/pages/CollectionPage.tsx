import { useState, useEffect } from "react";
import { type Activity } from "../data/activities";
import { activitiesService } from "../services/activitiesService";
import { ActivityCard } from "../components/ActivityCard";
import { Link } from "../lib/router";
import { I } from "../components/Icon";
import { useSEO } from "../utils/seo";
import { trackEvent } from "../utils/analytics";

export const COLLECTIONS_DATA: Record<string, {
  name: string;
  title: string;
  description: string;
  intro: string;
  image: string;
  faqs: { q: string; a: string }[];
  matchFilter: (activity: Activity) => boolean;
}> = {
  "sea-days": {
    name: "Sea Days: Boat Trips & Beach Cruises",
    title: "Karpathos Boat Trips & Sea Experiences | Saria, Snorkeling & Beach Cruises",
    description: "Book the best sea experiences in Karpathos. Excursions to Saria Island, glass-bottom boat tours, cave snorkeling, and cruises to Apella and Kyra Panagia.",
    intro: "Step on board to experience the wild beauty of Karpathos from the water. Cruise to the uninhabited reserve of Saria Island, snorkel through ancient volcanic sea caves, or relax on a sun-drenched deck as we sail to secluded pebble beaches only accessible by sea.",
    image: "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
    faqs: [
      { q: "What is the best boat trip in Karpathos?", a: "The Saria Island Guided Tour is highly recommended, featuring canyon hiking, snorkeling in sea caves, and a traditional seaside barbecue." },
      { q: "Where do the boat trips depart from?", a: "Daily cruises and private charters depart from the main harbor in Pigadia (Karpathos Town), with some northern trips starting from Diafani." }
    ],
    matchFilter: (a) => a.category === "Sea & Boat Trips" || a.category === "Watersports & Diving"
  },
  "culture-villages": {
    name: "Culture & Traditional Villages",
    title: "Karpathos Village Tours & Cultural Experiences | Olympos, Diafani & Local Life",
    description: "Discover traditional life in Karpathos. Book day trips to the matriarchal mountain village of Olympos, sunset village walking tours, and local guides.",
    intro: "Explore isolated mountain ridges where time has stood still. Our village guides show you the matriarchal village of Olympos, historic windmills, and ancient farming hamlets where locals still speak a unique Dodecanese dialect and preserve centuries-old Greek traditions.",
    image: "https://images.pexels.com/photos/37037773/pexels-photo-37037773.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
    faqs: [
      { q: "What is special about Olympos village?", a: "Olympos was isolated for centuries, preserving its matriarchal heritage, ancient windswept windmills, and traditional handmade clothing still worn daily by women." },
      { q: "What should I eat on a village tour?", a: "Try fresh handmade Makarounes (local pasta with caramelized onions) and traditional honey dumplings." }
    ],
    matchFilter: (a) => a.category === "Culture & Village Tours"
  },
  "active-karpathos": {
    name: "Active Karpathos: Adventure & Sports",
    title: "Active Experiences in Karpathos | Windsurfing, Diving, Biking & Adventure",
    description: "Plan active holidays in Karpathos. Book windsurfing at Chicken Bay, scuba diving in Pigadia, guided mountain biking, and rock climbing in Arkasa.",
    intro: "For the active traveler, Karpathos offers a natural playground. Harness the Meltemi winds for windsurfing in Afiartis, cycle mountain paths, scale limestone sea cliffs in Arkasa, or dive into deep volcanic tunnels with PADI guides.",
    image: "https://images.pexels.com/photos/12376921/pexels-photo-12376921.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
    faqs: [
      { q: "Where can I learn windsurfing in Karpathos?", a: "Chicken Bay in Afiartis is ideal for beginners due to its flat, knee-deep sandy water. Devils Bay hosts professional speed windsurfers." },
      { q: "Is rock climbing safe for beginners in Karpathos?", a: "Yes. Our guided climbing sessions include all safety gear and routes are selected based on your personal comfort and experience." }
    ],
    matchFilter: (a) => a.category === "Adventure & Watersports" || a.category === "Fitness & Lifestyle"
  },
  "wellness-slow-travel": {
    name: "Wellness, Yoga & Slow Travel",
    title: "Karpathos Wellness Experiences | Massage, Yoga & Slow Travel",
    description: "Rejuvenate in Karpathos. Book therapeutic massages in Pigadia, private sunset yoga in Adia, sound healing, and relaxing wellness rituals.",
    intro: "Reconnect with nature and restore your energy. From therapeutic massage sessions in Pigadia to off-the-grid sound healing therapy and private yoga overlooking the pine forests of Adia, discover slow travel wellness rituals designed to soothe.",
    image: "https://images.pexels.com/photos/34777293/pexels-photo-34777293.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
    faqs: [
      { q: "Can we book wellness sessions at our villa?", a: "Yes, we arrange private massages, spa treatments, and yoga classes directly at your holiday villa or hotel." },
      { q: "What is sound healing?", a: "It is a meditation session utilizing therapeutic acoustic vibrations from singing bowls to release physical and mental stress." }
    ],
    matchFilter: (a) => a.category === "Wellness & Massage"
  },
  "creative-local-moments": {
    name: "Creative Workshops & Local Craft",
    title: "Creative Workshops in Karpathos | Mosaic, Clay & Local Craft",
    description: "Unlock your creativity in Karpathos. Join local workshops: ancient pebble stones mosaic, botanical clay ateliers, and arts with local experts.",
    intro: "Create beautiful, personal souvenirs inspired by the Aegean. Join local artists in their garden studios to learn the ancient art of Greek pebble mosaics, sculpt clay using local wildflowers, or craft tiles under pine trees.",
    image: "https://images.pexels.com/photos/30630904/pexels-photo-30630904.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
    faqs: [
      { q: "Do I need prior experience for art workshops?", a: "No experience is needed. The workshops are designed for all ages and skill levels, with friendly step-by-step guidance." },
      { q: "Are materials included in the price?", a: "Yes, all clay, natural stones, paints, and tools are provided. You also get to keep and bring home whatever you create." }
    ],
    matchFilter: (a) => a.category === "Workshops & Local Craft"
  },
  "food-wine": {
    name: "Food & Wine Tastings",
    title: "Karpathos Wine Tasting, Honey & Local Food Experiences",
    description: "Taste authentic Karpathos. Book wine tasting at Scarpanto Winery, beekeeping and honey tours, and traditional cooking lessons.",
    intro: "Savor the organic flavors of the Dodecanese. Visit a family-run organic winery for sunset tastings, step into beekeeping suits to examine local beehives, or join a local grandma to learn how to roll fresh pasta in traditional clay ovens.",
    image: "https://images.pexels.com/photos/8472735/pexels-photo-8472735.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
    faqs: [
      { q: "What local products is Karpathos famous for?", a: "The island is famous for its dense, herbal thyme honey, dry white and red Athiri wines, and fresh goat cheeses." },
      { q: "Where does the wine tasting take place?", a: "Our signature tastings take place at Scarpanto Winery in the peaceful vineyards of Afiartis." }
    ],
    matchFilter: (a) => a.category === "Food & Wine Tastings"
  },
  "private-group-days": {
    name: "Private Group & Villa Experiences",
    title: "Private Group Experiences in Karpathos | Villa Guests, Families & Friends",
    description: "Curated private activities in Karpathos. Perfect for families, wedding groups, and villa guests. Private boat charters and custom day trips.",
    intro: "Traveling with a group, family, or hosting a villa retreat? We specialize in organizing private speedboats, group tours, villa dinners, and team adventures customized to your dates and preferences, complete with private minivans.",
    image: "https://images.pexels.com/photos/8472735/pexels-photo-8472735.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
    faqs: [
      { q: "Can you customize itineraries for large families?", a: "Yes, we build custom day plans combining light hiking, private boat swim stops, and village lunches suitable for all ages." },
      { q: "Do you arrange private villa catering?", a: "Yes, we can send private chefs to prepare traditional dinners or barbecues directly at your villa." }
    ],
    matchFilter: (a) => a.groupType === "private" || a.bestForGroups === true
  },
  "hidden-island-rituals": {
    name: "Hidden Island Rituals & Authenticity",
    title: "Authentic Karpathos Experiences | Local Producers, Villages & Slow Travel",
    description: "Discover authentic slow travel in Karpathos. Walk ancient valleys, visit small family farms, and learn from local artisans.",
    intro: "Step off the beaten path and slow down. Connect with local beekeepers, family grape growers, and hiking guides who will lead you down quiet valleys and forgotten trails to experience the slow, authentic soul of Karpathos.",
    image: "https://images.pexels.com/photos/31846705/pexels-photo-31846705.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
    faqs: [
      { q: "What is slow travel in Karpathos?", a: "It is about focusing on deep cultural connection, meeting independent local producers, and choosing non-motorized hiking or wellness activities." },
      { q: "Are these tours environmentally friendly?", a: "Yes, we work exclusively with local family-run micro-businesses that respect the natural environment and local heritage." }
    ],
    matchFilter: (a) => ["exp_001", "exp_002", "exp_023", "exp_028", "exp_030"].includes(a.id)
  }
};

export function CollectionPage({ slug }: { slug: string }) {
  const collection = COLLECTIONS_DATA[slug];
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
    if (collection) {
      trackEvent("collection_view", { slug, name: collection.name });
    }
  }, [slug, collection]);

  if (!collection) {
    return (
      <div className="pt-32 pb-24 text-center max-w-xl mx-auto px-4">
        <h1 className="font-display font-bold text-4xl text-navy">Collection not found</h1>
        <p className="text-navy/70 mt-3">We couldn't find the collection you are looking for.</p>
        <Link to="/explore" className="mt-6 inline-block px-5 py-3 rounded-full bg-navy text-white font-semibold">Browse all activities</Link>
      </div>
    );
  }

  const matchedActivities = activities.filter(collection.matchFilter);

  // Generate Breadcrumbs Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://karpathosadventures.com" },
      { "@type": "ListItem", "position": 2, "name": "Collections", "item": "https://karpathosadventures.com/#/explore" },
      { "@type": "ListItem", "position": 3, "name": collection.name, "item": `https://karpathosadventures.com/#/collections/${slug}` }
    ]
  };

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": collection.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a }
    }))
  };

  // Set SEO tags
  useSEO({
    title: collection.title,
    description: collection.description,
    canonicalPath: `/collections/${slug}`,
    ogImage: collection.image,
    schema: [breadcrumbSchema, faqSchema]
  });

  return (
    <div>
      {/* Collection Hero Section */}
      <section className="relative min-h-[50vh] flex items-end text-white">
        <img src={collection.image} alt={collection.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 w-full">
          {/* Breadcrumbs */}
          <nav className="text-xs text-white/80 mb-3 flex items-center gap-1.5">
            <Link to="/" className="hover:text-sand">Home</Link>
            <span>/</span>
            <Link to="/explore" className="hover:text-sand">Explore</Link>
            <span>/</span>
            <span className="text-white font-medium">{collection.name}</span>
          </nav>
          
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight">
            {collection.name}
          </h1>
          <p className="mt-3 text-white/95 text-lg max-w-3xl leading-relaxed">{collection.intro}</p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-mist pb-4 mb-8">
          <div>
            <h2 className="font-display font-bold text-2xl text-navy">Curated Selection</h2>
            <p className="text-xs text-navy/60 mt-1">Explore our hand-picked experiences, fully vetted for service quality.</p>
          </div>
          <div className="text-sm font-semibold text-navy">
            {matchedActivities.length} experience{matchedActivities.length !== 1 ? "s" : ""} listed
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12 text-navy/50 font-medium">Loading collection...</div>
        ) : matchedActivities.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {matchedActivities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-mist p-8">
            <p className="text-navy/60 font-medium">No experiences in this collection yet.</p>
            <Link to="/explore" className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal text-white font-semibold text-sm">
              Explore all activities
            </Link>
          </div>
        )}
      </section>

      {/* FAQ Section */}
      <section className="bg-cream border-t border-b border-mist py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {collection.faqs.map((faq, i) => (
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
            <h2 className="font-display font-bold text-2xl sm:text-3xl">Want a personalized group package?</h2>
            <p className="text-white/80 text-sm sm:text-base mt-2">
              Tell us your group size, interests, and preferred dates. We specialize in customizing events, villa days, and private boat cruises.
            </p>
          </div>
          <Link to="/contact" className="px-6 py-3 rounded-full bg-white text-navy font-semibold hover:bg-cream transition shrink-0 inline-flex items-center gap-2">
            <I.Whatsapp size={16} /> Consult with Local Concierge
          </Link>
        </div>
      </section>
    </div>
  );
}
