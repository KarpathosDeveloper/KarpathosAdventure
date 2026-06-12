export interface Guide {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  heroImage: string;
  toc: string[];
  introduction: string;
  sections: { heading: string; text: string; list?: string[] }[];
  faqs: { q: string; a: string }[];
  relatedCategory?: string; // used to display experience cards dynamically
  relatedTags?: string[];
}

export const GUIDES: Record<string, Guide> = {
  "things-to-do-in-karpathos": {
    slug: "things-to-do-in-karpathos",
    title: "15 Best Things to Do in Karpathos: The Ultimate Island Guide",
    seoTitle: "15 Best Things to Do in Karpathos | Top Activities & Tours",
    description: "Discover the best things to do in Karpathos, Greece: boat trips to Saria Island, windsurfing in Afiartis, Olympos tours, hiking, diving, and wellness.",
    heroImage: "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
    toc: ["1. Take a Boat Trip to Saria Island", "2. Explore Olympos Matriarchal Village", "3. Windsurf at Chicken Bay in Afiartis", "4. Scuba Dive in Crystal Waters", "5. Enjoy Scarpanto Wine Tasting"],
    introduction: "Karpathos is one of Greece's best-kept secrets. Positioned between Crete and Rhodes in the Dodecanese, this dramatic island offers high wind-swept ridges, ancient villages, and pristine beaches. Whether you are seeking high-adrenaline watersports, relaxing spa rituals, or cultural immersion, Karpathos has something unique for every traveler.",
    sections: [
      {
        heading: "1. Take a Boat Trip to Saria Island",
        text: "Separated from northern Karpathos by a narrow strait, Saria is an uninhabited wildlife haven. Cruising there by boat allows you to hike wild canyons, swim in neon-blue waters, and explore the vaulted ruins of a Saracen pirate settlement.",
      },
      {
        heading: "2. Explore Olympos Matriarchal Village",
        text: "Perched high in the northern mountains, Olympos village is a living museum. Women wear hand-embroidered traditional costumes, speak a dialect with ancient Doric roots, and bake bread in communal outdoor stone ovens.",
      },
      {
        heading: "3. Windsurf at Chicken Bay in Afiartis",
        text: "Known globally for its strong Meltemi winds, Afiartis is a top windsurfing hub. Chicken Bay features flat, shallow water perfect for beginners, while Devil's Bay hosts speed trials for advanced riders.",
      },
      {
        heading: "4. Scuba Dive in Crystal Waters",
        text: "The volcanic seabed around Pigadia offers exceptional visibility (up to 30 meters), deep walls, underwater caves, and rich marine life like groupers, octopuses, and the rare Mediterranean monk seal.",
      },
      {
        heading: "5. Enjoy Scarpanto Wine Tasting",
        text: "Visit a traditional family-run estate to taste indigenous grape varieties like Athiri and Fokiano. Sip wine overlooking organic vineyards and olive groves for a sensory taste of Karpathian soil.",
      }
    ],
    faqs: [
      { q: "What is the best month to visit Karpathos?", a: "The best months are June through September when all local boat trips, windsurfing centers, and tavernas are fully open." },
      { q: "How many days do I need in Karpathos?", a: "We recommend at least 5 to 7 days to explore the southern beaches (Afiartis, Amoopi) and hike the northern villages (Olympos, Diafani)." }
    ]
  },
  "best-boat-trips-in-karpathos": {
    slug: "best-boat-trips-in-karpathos",
    title: "Best Boat Trips & Sea Excursions in Karpathos",
    seoTitle: "Best Boat Trips in Karpathos | Saria & Beach Cruises",
    description: "Book the top boat trips from Pigadia harbor in Karpathos. Explore Saria Island, blue caves, and isolated beaches accessible only by sea.",
    heroImage: "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
    toc: ["Departing from Pigadia Harbor", "Saria Island Wilderness Excursion", "Glass-Bottom Boat Cave Explorer", "Famous Beaches Full-Day Cruise"],
    introduction: "To truly experience Karpathos, you must view it from the sea. The island's sheer cliffs and hidden coves mean that some of the most spectacular beaches and historical ruins can only be reached by boat. Departing from Pigadia harbor, these cruises offer daily routes for every type of visitor.",
    sections: [
      {
        heading: "Saria Island Wilderness Excursion",
        text: "A bucket-list trip. Board a traditional boat from Pigadia or Diafani to Palatia beach on Saria Island. Snorkel in volcanic caves, hike through an impressive canyon to a ghost village, and enjoy a fresh seaside barbecue.",
      },
      {
        heading: "Glass-Bottom Boat Cave Explorer",
        text: "Perfect for families. Peer through the glass keel to watch marine life, then cruise to coastal rock caves for snorkeling in shallow, calm waters.",
      },
      {
        heading: "Famous Beaches Full-Day Cruise",
        text: "Relax on deck as you sail to Karpathos' most iconic beaches: Apella, Kyra Panagia, and Kato Lakkos. Enjoy swim stops and lunch on board.",
      }
    ],
    faqs: [
      { q: "Where do boat trips depart from in Karpathos?", a: "Most boat trips depart from the main harbor in Pigadia (Karpathos Town), while some northern excursions start from Diafani." },
      { q: "Are sea conditions safe?", a: "All boat captains monitor local Dodecanese winds. Excursions may be rescheduled if waves are too high, ensuring absolute safety." }
    ],
    relatedCategory: "Sea & Boat Trips"
  },
  "best-activities-for-families-in-karpathos": {
    slug: "best-activities-for-families-in-karpathos",
    title: "Top Things to Do in Karpathos for Families with Kids",
    seoTitle: "Family Activities in Karpathos | Kid-Friendly Tours & Coves",
    description: "The complete guide to kid-friendly activities in Karpathos: safe sandy beaches in Amoopi, glass-bottom boat trips, beekeeping tours, and creative workshops.",
    heroImage: "https://images.pexels.com/photos/30630904/pexels-photo-30630904.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
    toc: ["1. Snorkeling and Sand at Amoopi", "2. Hands-on Pebble Art & Clay Workshops", "3. Honey Tasting & Beekeeping Tours", "4. Glass-Bottom Boat Rides"],
    introduction: "Karpathos is an exceptional destination for families looking for a safe, non-commercialized Greek island experience. With gentle shallow coves, welcoming locals, and interactive workshops, children can learn about nature and history while having active fun.",
    sections: [
      {
        heading: "1. Snorkeling and Sand at Amoopi",
        text: "Amoopi is the most family-friendly resort on the island. Coves like Mikri Amoopi are protected from summer Meltemi winds and feature shallow, sandy entries ideal for small children to play and snorkel safely.",
      },
      {
        heading: "2. Hands-on Pebble Art & Clay Workshops",
        text: "Host a creative mosaic, clay, or pebble workshop in the traditional mountain village of Volada. Kids can paint, sculpt, and bring home their own handcrafted souvenirs.",
      },
      {
        heading: "3. Honey Tasting & Beekeeping Tours",
        text: "Meet local beekeepers in Pigadia to wear protective suits, look inside a hive, and taste sweet, pure thyme honey fresh from the honeycomb.",
      }
    ],
    faqs: [
      { q: "Is Karpathos safe for children?", a: "Yes, it is extremely safe. Crime is virtually non-existent, and the beaches in Amoopi and Pigadia have calm areas ideal for children." },
      { q: "Which areas are best for family lodging?", a: "Amoopi and Pigadia are highly recommended because of their close proximity to shallow beaches, family tavernas, and pharmacies." }
    ],
    relatedCategory: "Workshops & Local Craft"
  },
  "karpathos-for-couples": {
    slug: "karpathos-for-couples",
    title: "Romantic Karpathos: The Couples & Honeymoon Guide",
    seoTitle: "Karpathos for Couples | Romantic Activities & Sunsets",
    description: "Plan a romantic getaway in Karpathos. Best couples activities: sunset village tours, wine tasting, massage rituals in Adia, and private boat charters.",
    heroImage: "https://images.pexels.com/photos/34777293/pexels-photo-34777293.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
    toc: ["Sunset Village Tours", "Private Wine Tasting", "Couples Spa & Massage in Adia", "Hidden Beach Escapes"],
    introduction: "For couples seeking an escape from crowded mass-tourism, Karpathos offers raw romance. Its dramatic mountains, secluded beaches, and local gastronomy provide the perfect backdrop for honeymoons or romantic retreats.",
    sections: [
      {
        heading: "Sunset Village Tours",
        text: "Walk through the historic mountain village of Olympos or watch the sun dip into the Aegean sea from the cliffs of Arkasa, followed by a candlelit dinner.",
      },
      {
        heading: "Private Wine Tasting",
        text: "Visit Scarpanto Winery for a private tasting session of Dodecanese wines paired with local cheeses, overlooking the vine-covered valleys.",
      },
      {
        heading: "Couples Spa & Massage in Adia",
        text: "Unwind with a stone massage ritual or outdoor couples yoga session in the tranquil pine-lined valley of Adia.",
      }
    ],
    faqs: [
      { q: "Where is the best sunset view in Karpathos?", a: "The sunset from Arkasa village, or looking down from the heights of Olympos, offers breathtaking panoramic views." },
      { q: "Can we book a private boat trip?", a: "Yes, we arrange private speedboat charters from Pigadia harbor to secluded beaches with customized menus and snorkeling gear." }
    ],
    relatedCategory: "Wellness & Massage"
  },
  "what-to-do-in-karpathos-for-3-days": {
    slug: "what-to-do-in-karpathos-for-3-days",
    title: "The Perfect 3-Day Karpathos Itinerary",
    seoTitle: "What to Do in Karpathos for 3 Days | Itinerary & Highlights",
    description: "Maximize 3 days in Karpathos with this curated local guide. Highlights: Saria boat trip, Olympos village, Afiartis windsurfing, and Pigadia dining.",
    heroImage: "https://images.pexels.com/photos/31846705/pexels-photo-31846705.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
    toc: ["Day 1: Saria Island Boat Excursion", "Day 2: Olympos Village & Northern Culture", "Day 3: Windsurfing, Wine & Sunset"],
    introduction: "Only have three days in Karpathos? This high-intent itinerary is designed to show you the best the island has to offer, from uninhabited islands to cultural mountains and sports bays.",
    sections: [
      {
        heading: "Day 1: Saria Island Boat Excursion",
        text: "Spend your first day on a boat trip to Saria Island. Snorkel in blue caves, hike the rocky pirate canyon, and swim in pure waters.",
      },
      {
        heading: "Day 2: Olympos Village & Northern Culture",
        text: "Drive north or take a boat to Diafani, then climb to Olympos village. Walk the ancient stone alleys, taste homemade Makarounes pasta, and explore the old windmills.",
      },
      {
        heading: "Day 3: Windsurfing, Wine & Sunset",
        text: "Head south to Afiartis for a morning windsurfing lesson at Chicken Bay. In the afternoon, enjoy wine tasting at Scarpanto Winery, and finish with sunset drinks in Arkasa.",
      }
    ],
    faqs: [
      { q: "Is a rental car required in Karpathos?", a: "For a 3-day trip, we highly recommend renting a car to easily travel between northern mountain villages and southern bays." },
      { q: "Is 3 days enough?", a: "3 days is enough to cover the main highlights, but 5-7 days allows for a much more relaxed pace and exploring hidden hiking trails." }
    ]
  },
  "best-hikes-in-karpathos": {
    slug: "best-hikes-in-karpathos",
    title: "Top Guided Hikes and Walking Trails in Karpathos",
    seoTitle: "Karpathos Hiking Tours | Guided Hikes & Mountain Trails",
    description: "Guide to the best hiking trails in Karpathos. Hike the panoramic Profitis Ilias summit, valley paths of Pigadia, and Lastos ridges with local guides.",
    heroImage: "https://images.pexels.com/photos/31846705/pexels-photo-31846705.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
    toc: ["Profitis Ilias Panoramic Climb", "Valley Walk of Pigadia", "Lastos Off-the-Beaten-Path Route", "Agia Kyriaki Coastal Trail"],
    introduction: "With mountains rising over 1,200 meters directly out of the sea, Karpathos is a paradise for hikers. Old donkey paths connect ancient agricultural settlements, chapels, and beaches, offering dramatic sea views at every turn.",
    sections: [
      {
        heading: "Profitis Ilias Panoramic Climb",
        text: "A moderate 4-hour hike from Aperi village to the chapel of Profitis Ilias. Offers 360-degree views of the entire island and surrounding Aegean sea.",
      },
      {
        heading: "Valley Walk of Pigadia",
        text: "An easy, scenic walk through olive groves, ancient agricultural fields, and wild pine forests surrounding the capital town of Pigadia.",
      },
      {
        heading: "Lastos Off-the-Beaten-Path Route",
        text: "Hike near Lastos (the highest plateau in Karpathos) through dramatic limestone landscapes, herbal scrublands, and rustic stone huts.",
      }
    ],
    faqs: [
      { q: "Do I need a guide for hiking in Karpathos?", a: "While trails are marked, many paths are rocky and exposed. A guided tour ensures safe navigation, local historical facts, and botanic insights." },
      { q: "What should I wear?", a: "Sturdy hiking boots or trail shoes are essential due to sharp limestone. Bring plenty of water, sunscreen, and a windbreaker." }
    ],
    relatedCategory: "Hiking Tours"
  },
  "windsurfing-in-karpathos": {
    slug: "windsurfing-in-karpathos",
    title: "The Ultimate Guide to Windsurfing in Afiartis, Karpathos",
    seoTitle: "Windsurfing Karpathos | Lessons & Spots at Chicken Bay",
    description: "Learn about windsurfing in Afiartis, Karpathos. Guide to beginner lessons at Chicken Bay, advanced speed windsurfing, and top rental centers.",
    heroImage: "https://images.pexels.com/photos/12376921/pexels-photo-12376921.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
    toc: ["Why Afiartis is Globally Renowned", "Chicken Bay: The Beginner Sanctuary", "Gun Bay & Devil's Bay: Advanced Speed", "Wing Foiling and Kite Surfing"],
    introduction: "Afiartis bay in southern Karpathos is legendary among windsurfers. Powered by the strong summer Meltemi winds that compress through the island's valleys, it offers exceptionally reliable wind conditions from May to October.",
    sections: [
      {
        heading: "Why Afiartis is Globally Renowned",
        text: "The wind blows side-shore at a consistent 20 to 35 knots almost every day in summer. Because the wind blows across the land, the bays remain flat with no large swell, creating optimal speed conditions.",
      },
      {
        heading: "Chicken Bay: The Beginner Sanctuary",
        text: "An enclosed lagoon with shallow, knee-deep sandy water. It is sheltered from the highest wind gusts, making it the safest place in Greece to stand on a board and learn windsurfing.",
      },
      {
        heading: "Gun Bay & Devil's Bay",
        text: "Outside the lagoon, Devil's Bay features extreme wind and flat water, ideal for freestyle, speed windsurfing, and advanced wing foiling.",
      }
    ],
    faqs: [
      { q: "When is the wind season in Karpathos?", a: "The strongest winds blow from mid-June to early September, but windsurfing stations operate from May to October." },
      { q: "Can kids learn windsurfing?", a: "Yes, Chicken Bay's flat, shallow water is highly recommended for children as young as 6 to learn with small, lightweight sails." }
    ],
    relatedCategory: "Adventure & Watersports"
  },
  "saria-island-karpathos": {
    slug: "saria-island-karpathos",
    title: "Guide to Saria Island: Karpathos' Uninhabited Wilderness",
    seoTitle: "Saria Island Karpathos | Guided Hikes & Boat Excursions",
    description: "Explore Saria Island near Karpathos. Tips on guided boat trips, snorkeling in blue caves, canyon hiking, and Saracen pirate ruins.",
    heroImage: "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
    toc: ["Introduction to Saria", "Snorkeling at Palatia Beach", "Hiking the Canyon of Saria", "The Historic Pirate Ruins"],
    introduction: "Saria Island is a protected nature reserve located just north of Karpathos. It was once part of Karpathos but separated by an earthquake. Uninhabited today except for grazing goats and visiting nesting falcons, Saria offers wild beauty.",
    sections: [
      {
        heading: "Snorkeling at Palatia Beach",
        text: "Palatia features crystal-clear pebbles and deep blue water. Swim inside volcanic rock caves to see corals, sea anemones, and schools of colorful fish.",
      },
      {
        heading: "Hiking the Canyon of Saria",
        text: "A 45-minute hike leads from the beach up through a rocky, dry canyon. The route climbs to a ridge overlooking the northern Dodecanese archipelago.",
      },
      {
        heading: "The Historic Pirate Ruins",
        text: "On the ridge, discover the domed stone ruins of 'Palatia', a medieval settlement built by Saracen pirate populations fleeing mainland raids.",
      }
    ],
    faqs: [
      { q: "How do I get to Saria Island?", a: "Take a daily excursion boat from Pigadia harbor or Diafani. The boat ride takes about 1 hour from Pigadia." },
      { q: "Is there water or food on Saria?", a: "No, Saria has no shops. Guided tours include a lunch barbecue, but you must bring plenty of drinking water and snacks." }
    ]
  },
  "olympos-karpathos-day-trip": {
    slug: "olympos-karpathos-day-trip",
    title: "Olympos Village Day Trip Guide: History & Preserved Traditions",
    seoTitle: "Olympos Karpathos Day Trip | Matriarchal Village Guide",
    description: "Plan your day trip to Olympos village in Karpathos. Discover preserved matriarchal traditions, ancient windmills, and local Dodecanese food.",
    heroImage: "https://images.pexels.com/photos/37037773/pexels-photo-37037773.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
    toc: ["Olympos: The Living Matriarchy", "Traditional Windmills & Architecture", "How to Experience Olympos", "Tasting Makarounes Pasta"],
    introduction: "Olympos village is Karpathos' most iconic cultural site. Built on a steep mountain ridge to hide from medieval pirates, the village remained isolated without roads or electricity until late in the 20th century, preserving unique customs.",
    sections: [
      {
        heading: "Olympos: The Living Matriarchy",
        text: "Women in Olympos hold a central role in preserving customs and inheritance. They still wear traditional hand-embroidered outfits called 'kavai' daily, not just for festivals.",
      },
      {
        heading: "Traditional Windmills & Architecture",
        text: "The village is crowned by old stone windmills, some of which are still used to grind barley. The houses climb the cliffs in a dense layout facing the western sunset.",
      },
      {
        heading: "Tasting Makarounes Pasta",
        text: "Visit a local taverna to watch fresh 'Makarounes' (handmade pasta) being rolled, boiled, and served with caramelized onions and local goat cheese.",
      }
    ],
    faqs: [
      { q: "What is the best way to get to Olympos?", a: "You can take a day-trip boat from Pigadia to Diafani, then a bus to Olympos. Alternatively, you can drive the scenic mountain road from Pigadia." },
      { q: "Is Olympos touristy?", a: "While popular during midday, Olympos retains its authentic agricultural character. A guided tour helps you connect with locals and understand the culture." }
    ],
    relatedCategory: "Culture & Village Tours"
  },
  "best-wellness-experiences-in-karpathos": {
    slug: "best-wellness-experiences-in-karpathos",
    title: "Best Wellness, Massage, and Yoga in Karpathos",
    seoTitle: "Karpathos Wellness Experiences | Yoga, Massage & Spa",
    description: "Explore the best wellness experiences in Karpathos: therapeutic massage in Pigadia, sound healing in Adia, and private sunset yoga sessions.",
    heroImage: "https://images.pexels.com/photos/34777293/pexels-photo-34777293.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
    toc: ["Therapeutic Massage in Pigadia", "Nature Yoga in Adia", "Sound Healing Therapy", "Hot Stone Spa Rituals"],
    introduction: "Karpathos' wild landscapes and tranquil sea air make it a natural sanctuary for wellness. From modern therapeutic spas in Pigadia to off-the-grid wellness retreats in Adia, discover how to rejuvenate your body and mind.",
    sections: [
      {
        heading: "Therapeutic Massage in Pigadia",
        text: "Unwind after a day of hiking or windsurfing with a tailored deep tissue massage or therapeutic reflexology session in Pigadia town.",
      },
      {
        heading: "Nature Yoga in Adia",
        text: "Experience outdoor yoga on pine-shaded wooden platforms overlooking the cliffs and sea of Adia. Focus on breathwork and alignment.",
      },
      {
        heading: "Sound Healing Therapy",
        text: "Relax to the vibrations of Tibetan singing bowls and gongs, designed to release tension and restore mental balance in a quiet forest setting.",
      }
    ],
    faqs: [
      { q: "Are wellness sessions private?", a: "Yes, we arrange private massages, yoga classes, and sound healing sessions at your villa, hotel, or in secluded outdoor locations." },
      { q: "Can we book wellness packages?", a: "Yes, we offer custom multi-day wellness packages combining yoga, massage, and organic local meals." }
    ],
    relatedCategory: "Wellness & Massage"
  },
  "private-group-activities-karpathos": {
    slug: "private-group-activities-karpathos",
    title: "Curated Private Group & Villa Experiences in Karpathos",
    seoTitle: "Private Group Experiences in Karpathos | Villa Services",
    description: "Plan custom private group experiences in Karpathos. Ideal for villa guests, families, and friends: private boat charters, private chef nights, and custom tours.",
    heroImage: "https://images.pexels.com/photos/8472735/pexels-photo-8472735.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
    toc: ["Private Speedboat Charters", "In-Villa Wine Tasting & Cooking", "Custom Island Guided Tours", "Private Wellness Days"],
    introduction: "Traveling with a group of friends, family, or staying in a luxury villa? We specialize in building custom private itineraries that bring the best of Karpathos directly to you, with private transportation and premium support.",
    sections: [
      {
        heading: "Private Speedboat Charters",
        text: "Charter a private boat from Pigadia to visit Saria Island or southern coves on your own schedule. Includes a custom lunch menu and open bar.",
      },
      {
        heading: "In-Villa Wine Tasting & Cooking",
        text: "Our sommelier and local chefs will come to your villa to host a private wine tasting and prepare a traditional Karpathian dinner using organic ingredients.",
      },
      {
        heading: "Custom Island Guided Tours",
        text: "Book a private minivan to explore mountain villages (Aperi, Volada, Olympos) with a local guide, avoiding tourist crowds.",
      }
    ],
    faqs: [
      { q: "Do you arrange villa pickups?", a: "Yes, we can organize private minivan transfers directly from your villa to any boat, hiking trail, or experience location." },
      { q: "What is the minimum group size?", a: "Most private group experiences require a minimum of 4 to 6 guests, but we can customize plans for smaller couples or larger families." }
    ],
    relatedCategory: "Private Villa Experiences"
  },
  "things-to-do-near-amoopi-karpathos": {
    slug: "things-to-do-near-amoopi-karpathos",
    title: "Best Things to Do and Activities Near Amoopi, Karpathos",
    seoTitle: "Things to Do in Amoopi, Karpathos | Activities & Snorkeling",
    description: "Explore what to do near Amoopi, Karpathos. Guide to the best snorkeling coves, hiking paths, local dining, and wellness massage nearby.",
    heroImage: "https://images.pexels.com/photos/34777293/pexels-photo-34777293.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
    toc: ["Snorkeling at Amoopi Coves", "Coastal Hiking Trails", "Wellness & Massage Near Amoopi", "Traditional Taverna Dining"],
    introduction: "Amoopi is famous for its sheltered, clear beaches. It serves as an excellent base for tourists looking for a blend of quiet beach time, local taverna lunches, and outdoor exploration.",
    sections: [
      {
        heading: "Snorkeling at Amoopi Coves",
        text: "The limestone formations in Amoopi create natural rock pools and coves like Kastelia. Snorkel in calm, crystal-clear water to see Mediterranean fish.",
      },
      {
        heading: "Coastal Hiking Trails",
        text: "Walk the easy coastal paths connecting Amoopi to nearby beaches. Perfect for early morning or late afternoon walks during sunset.",
      },
      {
        heading: "Wellness & Massage Near Amoopi",
        text: "Rejuvenate with a massage session at a nearby wellness spa or directly in the comfort of your Amoopi villa.",
      }
    ],
    faqs: [
      { q: "Is Amoopi protected from Meltemi winds?", a: "Yes, Amoopi's main coves are south-facing and protected by rocky headlands, making them much calmer than the east coast bays." },
      { q: "Is public transport available from Amoopi?", a: "Yes, there is a regular summer bus service connecting Amoopi to Pigadia (Karpathos Town) which is just 10 minutes away." }
    ]
  },
  "things-to-do-near-pigadia-karpathos": {
    slug: "things-to-do-near-pigadia-karpathos",
    title: "Best Things to Do and Tours Near Pigadia, Karpathos",
    seoTitle: "Things to Do in Pigadia, Karpathos | Boat Tours & Activities",
    description: "The complete guide to activities near Pigadia (Karpathos Town). Discover harbor boat trips, hiking trails, diving spots, and honey tasting.",
    heroImage: "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
    toc: ["Pigadia Harbor Boat Trips", "Scuba Diving & Snorkeling", "Valley Hikes & Mountain Trails", "Local Food & Honey Tastings"],
    introduction: "Pigadia is the capital and main hub of Karpathos. It offers a lively harbor promenade, dozens of local restaurants, and serves as the primary departure port for all sea excursions and boat trips.",
    sections: [
      {
        heading: "Pigadia Harbor Boat Trips",
        text: "The main pier in Pigadia is where you board daily boat trips to Saria Island, glass-bottom cave explorers, and apella beach cruises.",
      },
      {
        heading: "Scuba Diving & Snorkeling",
        text: "Pigadia is home to the island's primary diving centers. Dive the volcanic reef tunnels, shipwrecks, and sea grass meadows nearby.",
      },
      {
        heading: "Valley Hikes & Mountain Trails",
        text: "Follow the old donkey trails from Pigadia up into the olive groves of Aperi or along the coast to Agia Kyriaki chapel.",
      }
    ],
    faqs: [
      { q: "Where can I park in Pigadia?", a: "Pigadia has free public parking lots near the main harbor port, which is a short walk from all excursion boats." },
      { q: "Is Pigadia good for nightlife?", a: "Yes, the harbor promenade is lined with cafes, cocktail bars, and traditional tavernas open late into the night." }
    ]
  },
  "karpathos-water-sports": {
    slug: "karpathos-water-sports",
    title: "The Guide to Water Sports and Diving in Karpathos",
    seoTitle: "Karpathos Water Sports & Diving | Windsurfing & Scuba",
    description: "Discover water sports in Karpathos. Guide to PADI scuba diving in Pigadia, windsurfing at Chicken Bay, wing foiling, and speedboat snorkeling.",
    heroImage: "https://images.pexels.com/photos/13010778/pexels-photo-13010778.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
    toc: ["Windsurfing & Wing Foiling", "Scuba Diving & Snorkeling", "Speedboat Adventure Tours"],
    introduction: "With its deep volcanic waters and reliable sea breezes, Karpathos is a major hub for water sports in the Aegean. Whether you want to sail, dive, surf, or glide on hydrofoils, here is where to find the best equipment and instructors.",
    sections: [
      {
        heading: "Windsurfing & Wing Foiling",
        text: "Afiartis bay offers conditions for all levels. Beginners can practice in the shallow sands of Chicken Bay, while pros ride Devil's Bay.",
      },
      {
        heading: "Scuba Diving & Snorkeling",
        text: "Discover the rich marine ecosystems of the Dodecanese. The local diving center provides beginner PADI discover scuba courses and guided deep dives.",
      },
      {
        heading: "Speedboat Adventure Tours",
        text: "Book a speedboat snorkeling tour to explore marine caves, hidden wrecks, and secluded bays around the Pigadia coast.",
      }
    ],
    faqs: [
      { q: "Do I need prior experience for scuba diving?", a: "No, you can book a 'Discover Scuba Diving' session which includes pool-like shallow water training followed by a shallow sea dive with an instructor." },
      { q: "Are water sports stations open in October?", a: "Most stations operate until early or mid-October, depending on weather and wind conditions." }
    ],
    relatedCategory: "Watersports & Diving"
  }
};

export const TRANSLATED_GUIDES: Record<string, Record<string, Guide>> = {
  en: GUIDES,
  el: {},
  es: {},
  fr: {},
  de: {}
};

