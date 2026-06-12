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
  relatedCategory?: string;
  relatedTags?: string[];
}

export const TRANSLATED_GUIDES: Record<string, Record<string, Guide>> = {
  "en": {
    "things-to-do-in-karpathos": {
      "slug": "things-to-do-in-karpathos",
      "title": "15 Best Things to Do in Karpathos: The Ultimate Island Guide",
      "seoTitle": "15 Best Things to Do in Karpathos | Top Activities & Tours",
      "description": "Discover the best things to do in Karpathos, Greece: boat trips to Saria Island, windsurfing in Afiartis, Olympos tours, hiking, diving, and wellness.",
      "heroImage": "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "1. Take a Boat Trip to Saria Island",
        "2. Explore Olympos Matriarchal Village",
        "3. Windsurf at Chicken Bay in Afiartis",
        "4. Scuba Dive in Crystal Waters",
        "5. Enjoy Scarpanto Wine Tasting"
      ],
      "introduction": "Karpathos is one of Greece's best-kept secrets. Positioned between Crete and Rhodes in the Dodecanese, this dramatic island offers high wind-swept ridges, ancient villages, and pristine beaches. Whether you are seeking high-adrenaline watersports, relaxing spa rituals, or cultural immersion, Karpathos has something unique for every traveler.",
      "sections": [
        {
          "heading": "1. Take a Boat Trip to Saria Island",
          "text": "Separated from northern Karpathos by a narrow strait, Saria is an uninhabited wildlife haven. Cruising there by boat allows you to hike wild canyons, swim in neon-blue waters, and explore the vaulted ruins of a Saracen pirate settlement."
        },
        {
          "heading": "2. Explore Olympos Matriarchal Village",
          "text": "Perched high in the northern mountains, Olympos village is a living museum. Women wear hand-embroidered traditional costumes, speak a dialect with ancient Doric roots, and bake bread in communal outdoor stone ovens."
        },
        {
          "heading": "3. Windsurf at Chicken Bay in Afiartis",
          "text": "Known globally for its strong Meltemi winds, Afiartis is a top windsurfing hub. Chicken Bay features flat, shallow water perfect for beginners, while Devil's Bay hosts speed trials for advanced riders."
        },
        {
          "heading": "4. Scuba Dive in Crystal Waters",
          "text": "The volcanic seabed around Pigadia offers exceptional visibility (up to 30 meters), deep walls, underwater caves, and rich marine life like groupers, octopuses, and the rare Mediterranean monk seal."
        },
        {
          "heading": "5. Enjoy Scarpanto Wine Tasting",
          "text": "Visit a traditional family-run estate to taste indigenous grape varieties like Athiri and Fokiano. Sip wine overlooking organic vineyards and olive groves for a sensory taste of Karpathian soil."
        }
      ],
      "faqs": [
        {
          "q": "What is the best month to visit Karpathos?",
          "a": "The best months are June through September when all local boat trips, windsurfing centers, and tavernas are fully open."
        },
        {
          "q": "How many days do I need in Karpathos?",
          "a": "We recommend at least 5 to 7 days to explore the southern beaches (Afiartis, Amoopi) and hike the northern villages (Olympos, Diafani)."
        }
      ]
    },
    "best-boat-trips-in-karpathos": {
      "slug": "best-boat-trips-in-karpathos",
      "title": "Best Boat Trips & Sea Excursions in Karpathos",
      "seoTitle": "Best Boat Trips in Karpathos | Saria & Beach Cruises",
      "description": "Book the top boat trips from Pigadia harbor in Karpathos. Explore Saria Island, blue caves, and isolated beaches accessible only by sea.",
      "heroImage": "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Departing from Pigadia Harbor",
        "Saria Island Wilderness Excursion",
        "Glass-Bottom Boat Cave Explorer",
        "Famous Beaches Full-Day Cruise"
      ],
      "introduction": "To truly experience Karpathos, you must view it from the sea. The island's sheer cliffs and hidden coves mean that some of the most spectacular beaches and historical ruins can only be reached by boat. Departing from Pigadia harbor, these cruises offer daily routes for every type of visitor.",
      "sections": [
        {
          "heading": "Saria Island Wilderness Excursion",
          "text": "A bucket-list trip. Board a traditional boat from Pigadia or Diafani to Palatia beach on Saria Island. Snorkel in volcanic caves, hike through an impressive canyon to a ghost village, and enjoy a fresh seaside barbecue."
        },
        {
          "heading": "Glass-Bottom Boat Cave Explorer",
          "text": "Perfect for families. Peer through the glass keel to watch marine life, then cruise to coastal rock caves for snorkeling in shallow, calm waters."
        },
        {
          "heading": "Famous Beaches Full-Day Cruise",
          "text": "Relax on deck as you sail to Karpathos' most iconic beaches: Apella, Kyra Panagia, and Kato Lakkos. Enjoy swim stops and lunch on board."
        }
      ],
      "faqs": [
        {
          "q": "Where do boat trips depart from in Karpathos?",
          "a": "Most boat trips depart from the main harbor in Pigadia (Karpathos Town), while some northern excursions start from Diafani."
        },
        {
          "q": "Are sea conditions safe?",
          "a": "All boat captains monitor local Dodecanese winds. Excursions may be rescheduled if waves are too high, ensuring absolute safety."
        }
      ],
      "relatedCategory": "Sea & Boat Trips"
    },
    "best-activities-for-families-in-karpathos": {
      "slug": "best-activities-for-families-in-karpathos",
      "title": "Top Things to Do in Karpathos for Families with Kids",
      "seoTitle": "Family Activities in Karpathos | Kid-Friendly Tours & Coves",
      "description": "The complete guide to kid-friendly activities in Karpathos: safe sandy beaches in Amoopi, glass-bottom boat trips, beekeeping tours, and creative workshops.",
      "heroImage": "https://images.pexels.com/photos/30630904/pexels-photo-30630904.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "1. Snorkeling and Sand at Amoopi",
        "2. Hands-on Pebble Art & Clay Workshops",
        "3. Honey Tasting & Beekeeping Tours",
        "4. Glass-Bottom Boat Rides"
      ],
      "introduction": "Karpathos is an exceptional destination for families looking for a safe, non-commercialized Greek island experience. With gentle shallow coves, welcoming locals, and interactive workshops, children can learn about nature and history while having active fun.",
      "sections": [
        {
          "heading": "1. Snorkeling and Sand at Amoopi",
          "text": "Amoopi is the most family-friendly resort on the island. Coves like Mikri Amoopi are protected from summer Meltemi winds and feature shallow, sandy entries ideal for small children to play and snorkel safely."
        },
        {
          "heading": "2. Hands-on Pebble Art & Clay Workshops",
          "text": "Host a creative mosaic, clay, or pebble workshop in the traditional mountain village of Volada. Kids can paint, sculpt, and bring home their own handcrafted souvenirs."
        },
        {
          "heading": "3. Honey Tasting & Beekeeping Tours",
          "text": "Meet local beekeepers in Pigadia to wear protective suits, look inside a hive, and taste sweet, pure thyme honey fresh from the honeycomb."
        }
      ],
      "faqs": [
        {
          "q": "Is Karpathos safe for children?",
          "a": "Yes, it is extremely safe. Crime is virtually non-existent, and the beaches in Amoopi and Pigadia have calm areas ideal for children."
        },
        {
          "q": "Which areas are best for family lodging?",
          "a": "Amoopi and Pigadia are highly recommended because of their close proximity to shallow beaches, family tavernas, and pharmacies."
        }
      ],
      "relatedCategory": "Workshops & Local Craft"
    },
    "karpathos-for-couples": {
      "slug": "karpathos-for-couples",
      "title": "Romantic Karpathos: The Couples & Honeymoon Guide",
      "seoTitle": "Karpathos for Couples | Romantic Activities & Sunsets",
      "description": "Plan a romantic getaway in Karpathos. Best couples activities: sunset village tours, wine tasting, massage rituals in Adia, and private boat charters.",
      "heroImage": "https://images.pexels.com/photos/34777293/pexels-photo-34777293.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Sunset Village Tours",
        "Private Wine Tasting",
        "Couples Spa & Massage in Adia",
        "Hidden Beach Escapes"
      ],
      "introduction": "For couples seeking an escape from crowded mass-tourism, Karpathos offers raw romance. Its dramatic mountains, secluded beaches, and local gastronomy provide the perfect backdrop for honeymoons or romantic retreats.",
      "sections": [
        {
          "heading": "Sunset Village Tours",
          "text": "Walk through the historic mountain village of Olympos or watch the sun dip into the Aegean sea from the cliffs of Arkasa, followed by a candlelit dinner."
        },
        {
          "heading": "Private Wine Tasting",
          "text": "Visit Scarpanto Winery for a private tasting session of Dodecanese wines paired with local cheeses, overlooking the vine-covered valleys."
        },
        {
          "heading": "Couples Spa & Massage in Adia",
          "text": "Unwind with a stone massage ritual or outdoor couples yoga session in the tranquil pine-lined valley of Adia."
        }
      ],
      "faqs": [
        {
          "q": "Where is the best sunset view in Karpathos?",
          "a": "The sunset from Arkasa village, or looking down from the heights of Olympos, offers breathtaking panoramic views."
        },
        {
          "q": "Can we book a private boat trip?",
          "a": "Yes, we arrange private speedboat charters from Pigadia harbor to secluded beaches with customized menus and snorkeling gear."
        }
      ],
      "relatedCategory": "Wellness & Massage"
    },
    "what-to-do-in-karpathos-for-3-days": {
      "slug": "what-to-do-in-karpathos-for-3-days",
      "title": "The Perfect 3-Day Karpathos Itinerary",
      "seoTitle": "What to Do in Karpathos for 3 Days | Itinerary & Highlights",
      "description": "Maximize 3 days in Karpathos with this curated local guide. Highlights: Saria boat trip, Olympos village, Afiartis windsurfing, and Pigadia dining.",
      "heroImage": "https://images.pexels.com/photos/31846705/pexels-photo-31846705.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Day 1: Saria Island Boat Excursion",
        "Day 2: Olympos Village & Northern Culture",
        "Day 3: Windsurfing, Wine & Sunset"
      ],
      "introduction": "Only have three days in Karpathos? This high-intent itinerary is designed to show you the best the island has to offer, from uninhabited islands to cultural mountains and sports bays.",
      "sections": [
        {
          "heading": "Day 1: Saria Island Boat Excursion",
          "text": "Spend your first day on a boat trip to Saria Island. Snorkel in blue caves, hike the rocky pirate canyon, and swim in pure waters."
        },
        {
          "heading": "Day 2: Olympos Village & Northern Culture",
          "text": "Drive north or take a boat to Diafani, then climb to Olympos village. Walk the ancient stone alleys, taste homemade Makarounes pasta, and explore the old windmills."
        },
        {
          "heading": "Day 3: Windsurfing, Wine & Sunset",
          "text": "Head south to Afiartis for a morning windsurfing lesson at Chicken Bay. In the afternoon, enjoy wine tasting at Scarpanto Winery, and finish with sunset drinks in Arkasa."
        }
      ],
      "faqs": [
        {
          "q": "Is a rental car required in Karpathos?",
          "a": "For a 3-day trip, we highly recommend renting a car to easily travel between northern mountain villages and southern bays."
        },
        {
          "q": "Is 3 days enough?",
          "a": "3 days is enough to cover the main highlights, but 5-7 days allows for a much more relaxed pace and exploring hidden hiking trails."
        }
      ]
    },
    "best-hikes-in-karpathos": {
      "slug": "best-hikes-in-karpathos",
      "title": "Top Guided Hikes and Walking Trails in Karpathos",
      "seoTitle": "Karpathos Hiking Tours | Guided Hikes & Mountain Trails",
      "description": "Guide to the best hiking trails in Karpathos. Hike the panoramic Profitis Ilias summit, valley paths of Pigadia, and Lastos ridges with local guides.",
      "heroImage": "https://images.pexels.com/photos/31846705/pexels-photo-31846705.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Profitis Ilias Panoramic Climb",
        "Valley Walk of Pigadia",
        "Lastos Off-the-Beaten-Path Route",
        "Agia Kyriaki Coastal Trail"
      ],
      "introduction": "With mountains rising over 1,200 meters directly out of the sea, Karpathos is a paradise for hikers. Old donkey paths connect ancient agricultural settlements, chapels, and beaches, offering dramatic sea views at every turn.",
      "sections": [
        {
          "heading": "Profitis Ilias Panoramic Climb",
          "text": "A moderate 4-hour hike from Aperi village to the chapel of Profitis Ilias. Offers 360-degree views of the entire island and surrounding Aegean sea."
        },
        {
          "heading": "Valley Walk of Pigadia",
          "text": "An easy, scenic walk through olive groves, ancient agricultural fields, and wild pine forests surrounding the capital town of Pigadia."
        },
        {
          "heading": "Lastos Off-the-Beaten-Path Route",
          "text": "Hike near Lastos (the highest plateau in Karpathos) through dramatic limestone landscapes, herbal scrublands, and rustic stone huts."
        }
      ],
      "faqs": [
        {
          "q": "Do I need a guide for hiking in Karpathos?",
          "a": "While trails are marked, many paths are rocky and exposed. A guided tour ensures safe navigation, local historical facts, and botanic insights."
        },
        {
          "q": "What should I wear?",
          "a": "Sturdy hiking boots or trail shoes are essential due to sharp limestone. Bring plenty of water, sunscreen, and a windbreaker."
        }
      ],
      "relatedCategory": "Hiking Tours"
    },
    "windsurfing-in-karpathos": {
      "slug": "windsurfing-in-karpathos",
      "title": "The Ultimate Guide to Windsurfing in Afiartis, Karpathos",
      "seoTitle": "Windsurfing Karpathos | Lessons & Spots at Chicken Bay",
      "description": "Learn about windsurfing in Afiartis, Karpathos. Guide to beginner lessons at Chicken Bay, advanced speed windsurfing, and top rental centers.",
      "heroImage": "https://images.pexels.com/photos/12376921/pexels-photo-12376921.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Why Afiartis is Globally Renowned",
        "Chicken Bay: The Beginner Sanctuary",
        "Gun Bay & Devil's Bay: Advanced Speed",
        "Wing Foiling and Kite Surfing"
      ],
      "introduction": "Afiartis bay in southern Karpathos is legendary among windsurfers. Powered by the strong summer Meltemi winds that compress through the island's valleys, it offers exceptionally reliable wind conditions from May to October.",
      "sections": [
        {
          "heading": "Why Afiartis is Globally Renowned",
          "text": "The wind blows side-shore at a consistent 20 to 35 knots almost every day in summer. Because the wind blows across the land, the bays remain flat with no large swell, creating optimal speed conditions."
        },
        {
          "heading": "Chicken Bay: The Beginner Sanctuary",
          "text": "An enclosed lagoon with shallow, knee-deep sandy water. It is sheltered from the highest wind gusts, making it the safest place in Greece to stand on a board and learn windsurfing."
        },
        {
          "heading": "Gun Bay & Devil's Bay",
          "text": "Outside the lagoon, Devil's Bay features extreme wind and flat water, ideal for freestyle, speed windsurfing, and advanced wing foiling."
        }
      ],
      "faqs": [
        {
          "q": "When is the wind season in Karpathos?",
          "a": "The strongest winds blow from mid-June to early September, but windsurfing stations operate from May to October."
        },
        {
          "q": "Can kids learn windsurfing?",
          "a": "Yes, Chicken Bay's flat, shallow water is highly recommended for children as young as 6 to learn with small, lightweight sails."
        }
      ],
      "relatedCategory": "Adventure & Watersports"
    },
    "saria-island-karpathos": {
      "slug": "saria-island-karpathos",
      "title": "Guide to Saria Island: Karpathos' Uninhabited Wilderness",
      "seoTitle": "Saria Island Karpathos | Guided Hikes & Boat Excursions",
      "description": "Explore Saria Island near Karpathos. Tips on guided boat trips, snorkeling in blue caves, canyon hiking, and Saracen pirate ruins.",
      "heroImage": "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Introduction to Saria",
        "Snorkeling at Palatia Beach",
        "Hiking the Canyon of Saria",
        "The Historic Pirate Ruins"
      ],
      "introduction": "Saria Island is a protected nature reserve located just north of Karpathos. It was once part of Karpathos but separated by an earthquake. Uninhabited today except for grazing goats and visiting nesting falcons, Saria offers wild beauty.",
      "sections": [
        {
          "heading": "Snorkeling at Palatia Beach",
          "text": "Palatia features crystal-clear pebbles and deep blue water. Swim inside volcanic rock caves to see corals, sea anemones, and schools of colorful fish."
        },
        {
          "heading": "Hiking the Canyon of Saria",
          "text": "A 45-minute hike leads from the beach up through a rocky, dry canyon. The route climbs to a ridge overlooking the northern Dodecanese archipelago."
        },
        {
          "heading": "The Historic Pirate Ruins",
          "text": "On the ridge, discover the domed stone ruins of 'Palatia', a medieval settlement built by Saracen pirate populations fleeing mainland raids."
        }
      ],
      "faqs": [
        {
          "q": "How do I get to Saria Island?",
          "a": "Take a daily excursion boat from Pigadia harbor or Diafani. The boat ride takes about 1 hour from Pigadia."
        },
        {
          "q": "Is there water or food on Saria?",
          "a": "No, Saria has no shops. Guided tours include a lunch barbecue, but you must bring plenty of drinking water and snacks."
        }
      ]
    },
    "olympos-karpathos-day-trip": {
      "slug": "olympos-karpathos-day-trip",
      "title": "Olympos Village Day Trip Guide: History & Preserved Traditions",
      "seoTitle": "Olympos Karpathos Day Trip | Matriarchal Village Guide",
      "description": "Plan your day trip to Olympos village in Karpathos. Discover preserved matriarchal traditions, ancient windmills, and local Dodecanese food.",
      "heroImage": "https://images.pexels.com/photos/37037773/pexels-photo-37037773.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Olympos: The Living Matriarchy",
        "Traditional Windmills & Architecture",
        "How to Experience Olympos",
        "Tasting Makarounes Pasta"
      ],
      "introduction": "Olympos village is Karpathos' most iconic cultural site. Built on a steep mountain ridge to hide from medieval pirates, the village remained isolated without roads or electricity until late in the 20th century, preserving unique customs.",
      "sections": [
        {
          "heading": "Olympos: The Living Matriarchy",
          "text": "Women in Olympos hold a central role in preserving customs and inheritance. They still wear traditional hand-embroidered outfits called 'kavai' daily, not just for festivals."
        },
        {
          "heading": "Traditional Windmills & Architecture",
          "text": "The village is crowned by old stone windmills, some of which are still used to grind barley. The houses climb the cliffs in a dense layout facing the western sunset."
        },
        {
          "heading": "Tasting Makarounes Pasta",
          "text": "Visit a local taverna to watch fresh 'Makarounes' (handmade pasta) being rolled, boiled, and served with caramelized onions and local goat cheese."
        }
      ],
      "faqs": [
        {
          "q": "What is the best way to get to Olympos?",
          "a": "You can take a day-trip boat from Pigadia to Diafani, then a bus to Olympos. Alternatively, you can drive the scenic mountain road from Pigadia."
        },
        {
          "q": "Is Olympos touristy?",
          "a": "While popular during midday, Olympos retains its authentic agricultural character. A guided tour helps you connect with locals and understand the culture."
        }
      ],
      "relatedCategory": "Culture & Village Tours"
    },
    "best-wellness-experiences-in-karpathos": {
      "slug": "best-wellness-experiences-in-karpathos",
      "title": "Best Wellness, Massage, and Yoga in Karpathos",
      "seoTitle": "Karpathos Wellness Experiences | Yoga, Massage & Spa",
      "description": "Explore the best wellness experiences in Karpathos: therapeutic massage in Pigadia, sound healing in Adia, and private sunset yoga sessions.",
      "heroImage": "https://images.pexels.com/photos/34777293/pexels-photo-34777293.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Therapeutic Massage in Pigadia",
        "Nature Yoga in Adia",
        "Sound Healing Therapy",
        "Hot Stone Spa Rituals"
      ],
      "introduction": "Karpathos' wild landscapes and tranquil sea air make it a natural sanctuary for wellness. From modern therapeutic spas in Pigadia to off-the-grid wellness retreats in Adia, discover how to rejuvenate your body and mind.",
      "sections": [
        {
          "heading": "Therapeutic Massage in Pigadia",
          "text": "Unwind after a day of hiking or windsurfing with a tailored deep tissue massage or therapeutic reflexology session in Pigadia town."
        },
        {
          "heading": "Nature Yoga in Adia",
          "text": "Experience outdoor yoga on pine-shaded wooden platforms overlooking the cliffs and sea of Adia. Focus on breathwork and alignment."
        },
        {
          "heading": "Sound Healing Therapy",
          "text": "Relax to the vibrations of Tibetan singing bowls and gongs, designed to release tension and restore mental balance in a quiet forest setting."
        }
      ],
      "faqs": [
        {
          "q": "Are wellness sessions private?",
          "a": "Yes, we arrange private massages, yoga classes, and sound healing sessions at your villa, hotel, or in secluded outdoor locations."
        },
        {
          "q": "Can we book wellness packages?",
          "a": "Yes, we offer custom multi-day wellness packages combining yoga, massage, and organic local meals."
        }
      ],
      "relatedCategory": "Wellness & Massage"
    },
    "private-group-activities-karpathos": {
      "slug": "private-group-activities-karpathos",
      "title": "Curated Private Group & Villa Experiences in Karpathos",
      "seoTitle": "Private Group Experiences in Karpathos | Villa Services",
      "description": "Plan custom private group experiences in Karpathos. Ideal for villa guests, families, and friends: private boat charters, private chef nights, and custom tours.",
      "heroImage": "https://images.pexels.com/photos/8472735/pexels-photo-8472735.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Private Speedboat Charters",
        "In-Villa Wine Tasting & Cooking",
        "Custom Island Guided Tours",
        "Private Wellness Days"
      ],
      "introduction": "Traveling with a group of friends, family, or staying in a luxury villa? We specialize in building custom private itineraries that bring the best of Karpathos directly to you, with private transportation and premium support.",
      "sections": [
        {
          "heading": "Private Speedboat Charters",
          "text": "Charter a private boat from Pigadia to visit Saria Island or southern coves on your own schedule. Includes a custom lunch menu and open bar."
        },
        {
          "heading": "In-Villa Wine Tasting & Cooking",
          "text": "Our sommelier and local chefs will come to your villa to host a private wine tasting and prepare a traditional Karpathian dinner using organic ingredients."
        },
        {
          "heading": "Custom Island Guided Tours",
          "text": "Book a private minivan to explore mountain villages (Aperi, Volada, Olympos) with a local guide, avoiding tourist crowds."
        }
      ],
      "faqs": [
        {
          "q": "Do you arrange villa pickups?",
          "a": "Yes, we can organize private minivan transfers directly from your villa to any boat, hiking trail, or experience location."
        },
        {
          "q": "What is the minimum group size?",
          "a": "Most private group experiences require a minimum of 4 to 6 guests, but we can customize plans for smaller couples or larger families."
        }
      ],
      "relatedCategory": "Private Villa Experiences"
    },
    "things-to-do-near-amoopi-karpathos": {
      "slug": "things-to-do-near-amoopi-karpathos",
      "title": "Best Things to Do and Activities Near Amoopi, Karpathos",
      "seoTitle": "Things to Do in Amoopi, Karpathos | Activities & Snorkeling",
      "description": "Explore what to do near Amoopi, Karpathos. Guide to the best snorkeling coves, hiking paths, local dining, and wellness massage nearby.",
      "heroImage": "https://images.pexels.com/photos/34777293/pexels-photo-34777293.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Snorkeling at Amoopi Coves",
        "Coastal Hiking Trails",
        "Wellness & Massage Near Amoopi",
        "Traditional Taverna Dining"
      ],
      "introduction": "Amoopi is famous for its sheltered, clear beaches. It serves as an excellent base for tourists looking for a blend of quiet beach time, local taverna lunches, and outdoor exploration.",
      "sections": [
        {
          "heading": "Snorkeling at Amoopi Coves",
          "text": "The limestone formations in Amoopi create natural rock pools and coves like Kastelia. Snorkel in calm, crystal-clear water to see Mediterranean fish."
        },
        {
          "heading": "Coastal Hiking Trails",
          "text": "Walk the easy coastal paths connecting Amoopi to nearby beaches. Perfect for early morning or late afternoon walks during sunset."
        },
        {
          "heading": "Wellness & Massage Near Amoopi",
          "text": "Rejuvenate with a massage session at a nearby wellness spa or directly in the comfort of your Amoopi villa."
        }
      ],
      "faqs": [
        {
          "q": "Is Amoopi protected from Meltemi winds?",
          "a": "Yes, Amoopi's main coves are south-facing and protected by rocky headlands, making them much calmer than the east coast bays."
        },
        {
          "q": "Is public transport available from Amoopi?",
          "a": "Yes, there is a regular summer bus service connecting Amoopi to Pigadia (Karpathos Town) which is just 10 minutes away."
        }
      ]
    },
    "things-to-do-near-pigadia-karpathos": {
      "slug": "things-to-do-near-pigadia-karpathos",
      "title": "Best Things to Do and Tours Near Pigadia, Karpathos",
      "seoTitle": "Things to Do in Pigadia, Karpathos | Boat Tours & Activities",
      "description": "The complete guide to activities near Pigadia (Karpathos Town). Discover harbor boat trips, hiking trails, diving spots, and honey tasting.",
      "heroImage": "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Pigadia Harbor Boat Trips",
        "Scuba Diving & Snorkeling",
        "Valley Hikes & Mountain Trails",
        "Local Food & Honey Tastings"
      ],
      "introduction": "Pigadia is the capital and main hub of Karpathos. It offers a lively harbor promenade, dozens of local restaurants, and serves as the primary departure port for all sea excursions and boat trips.",
      "sections": [
        {
          "heading": "Pigadia Harbor Boat Trips",
          "text": "The main pier in Pigadia is where you board daily boat trips to Saria Island, glass-bottom cave explorers, and apella beach cruises."
        },
        {
          "heading": "Scuba Diving & Snorkeling",
          "text": "Pigadia is home to the island's primary diving centers. Dive the volcanic reef tunnels, shipwrecks, and sea grass meadows nearby."
        },
        {
          "heading": "Valley Hikes & Mountain Trails",
          "text": "Follow the old donkey trails from Pigadia up into the olive groves of Aperi or along the coast to Agia Kyriaki chapel."
        }
      ],
      "faqs": [
        {
          "q": "Where can I park in Pigadia?",
          "a": "Pigadia has free public parking lots near the main harbor port, which is a short walk from all excursion boats."
        },
        {
          "q": "Is Pigadia good for nightlife?",
          "a": "Yes, the harbor promenade is lined with cafes, cocktail bars, and traditional tavernas open late into the night."
        }
      ]
    },
    "karpathos-water-sports": {
      "slug": "karpathos-water-sports",
      "title": "The Guide to Water Sports and Diving in Karpathos",
      "seoTitle": "Karpathos Water Sports & Diving | Windsurfing & Scuba",
      "description": "Discover water sports in Karpathos. Guide to PADI scuba diving in Pigadia, windsurfing at Chicken Bay, wing foiling, and speedboat snorkeling.",
      "heroImage": "https://images.pexels.com/photos/13010778/pexels-photo-13010778.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Windsurfing & Wing Foiling",
        "Scuba Diving & Snorkeling",
        "Speedboat Adventure Tours"
      ],
      "introduction": "With its deep volcanic waters and reliable sea breezes, Karpathos is a major hub for water sports in the Aegean. Whether you want to sail, dive, surf, or glide on hydrofoils, here is where to find the best equipment and instructors.",
      "sections": [
        {
          "heading": "Windsurfing & Wing Foiling",
          "text": "Afiartis bay offers conditions for all levels. Beginners can practice in the shallow sands of Chicken Bay, while pros ride Devil's Bay."
        },
        {
          "heading": "Scuba Diving & Snorkeling",
          "text": "Discover the rich marine ecosystems of the Dodecanese. The local diving center provides beginner PADI discover scuba courses and guided deep dives."
        },
        {
          "heading": "Speedboat Adventure Tours",
          "text": "Book a speedboat snorkeling tour to explore marine caves, hidden wrecks, and secluded bays around the Pigadia coast."
        }
      ],
      "faqs": [
        {
          "q": "Do I need prior experience for scuba diving?",
          "a": "No, you can book a 'Discover Scuba Diving' session which includes pool-like shallow water training followed by a shallow sea dive with an instructor."
        },
        {
          "q": "Are water sports stations open in October?",
          "a": "Most stations operate until early or mid-October, depending on weather and wind conditions."
        }
      ],
      "relatedCategory": "Watersports & Diving"
    }
  },
  "el": {
    "things-to-do-in-karpathos": {
      "slug": "things-to-do-in-karpathos",
      "title": "15 καλύτερα πράγματα να κάνετε στην Κάρπαθο: Ο απόλυτος οδηγός του νησιού",
      "seoTitle": "15 καλύτερα πράγματα να κάνετε στην Κάρπαθο | Κορυφαίες Δραστηριότητες & Περιηγήσεις",
      "description": "Ανακαλύψτε τα καλύτερα πράγματα που μπορείτε να κάνετε στην Κάρπαθο, Ελλάδα: εκδρομές με σκάφος στη Σαρία, ιστιοσανίδα στον Αφιάρτη, περιηγήσεις στον Όλυμπο, πεζοπορία, καταδύσεις και ευεξία.",
      "heroImage": "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "1. Κάντε μια εκδρομή με πλοίο στο νησί Σαρία",
        "2. Εξερευνήστε το Μητριαρχικό χωριό Όλυμπος",
        "3. Windsurf στο Chicken Bay στον Αφιάρτη",
        "4. Καταδύσεις σε Κρυστάλλινα Νερά",
        "5. Απολαύστε τη δοκιμή κρασιού Scarpanto"
      ],
      "introduction": "Η Κάρπαθος είναι ένα από τα καλύτερα κρυμμένα μυστικά της Ελλάδας. Τοποθετημένο ανάμεσα στην Κρήτη και τη Ρόδο στα Δωδεκάνησα, αυτό το δραματικό νησί προσφέρει ψηλές ανεμοδαρμένες κορυφογραμμές, αρχαία χωριά και παρθένες παραλίες. Είτε αναζητάτε θαλάσσια σπορ με υψηλή αδρεναλίνη, χαλαρωτικές τελετουργίες σπα ή πολιτιστική βύθιση, η Κάρπαθος έχει κάτι μοναδικό για κάθε ταξιδιώτη.",
      "sections": [
        {
          "heading": "1. Κάντε μια εκδρομή με πλοίο στο νησί Σαρία",
          "text": "Χωρισμένη από τη βόρεια Κάρπαθο με ένα στενό στενό, η Σαρία είναι ένα ακατοίκητο καταφύγιο άγριας ζωής. Η κρουαζιέρα εκεί με βάρκα σάς επιτρέπει να κάνετε πεζοπορία σε άγρια ​​φαράγγια, να κολυμπήσετε σε γαλάζια νερά και να εξερευνήσετε τα θολωτά ερείπια ενός πειρατικού οικισμού των Σαρακηνών."
        },
        {
          "heading": "2. Εξερευνήστε το Μητριαρχικό χωριό Όλυμπος",
          "text": "Σκαρφαλωμένο ψηλά στα βόρεια βουνά, το χωριό Όλυμπος είναι ένα ζωντανό μουσείο. Οι γυναίκες φορούν κεντημένες στο χέρι παραδοσιακές φορεσιές, μιλούν μια διάλεκτο με αρχαίες δωρικές ρίζες και ψήνουν ψωμί σε κοινόχρηστους εξωτερικούς πέτρινους φούρνους."
        },
        {
          "heading": "3. Windsurf στο Chicken Bay στον Αφιάρτη",
          "text": "Γνωστός παγκοσμίως για τους δυνατούς ανέμους Μελτέμι, ο Αφιάρτης είναι κορυφαίος κόμβος ιστιοσανίδας. Το Chicken Bay διαθέτει επίπεδα, ρηχά νερά, τέλεια για αρχάριους, ενώ το Devil's Bay φιλοξενεί δοκιμές ταχύτητας για προχωρημένους αναβάτες."
        },
        {
          "heading": "4. Καταδύσεις σε Κρυστάλλινα Νερά",
          "text": "Ο ηφαιστειακός βυθός γύρω από τα Πηγάδια προσφέρει εξαιρετική ορατότητα (έως 30 μέτρα), βαθιά τείχη, υποβρύχιες σπηλιές και πλούσια θαλάσσια ζωή όπως σφυρίδες, χταπόδια και τη σπάνια μεσογειακή φώκια."
        },
        {
          "heading": "5. Απολαύστε τη δοκιμή κρασιού Scarpanto",
          "text": "Επισκεφτείτε ένα παραδοσιακό οικογενειακό κτήμα για να δοκιμάσετε γηγενείς ποικιλίες σταφυλιού όπως το Αθήρι και το Φωκιανό. Πιείτε κρασί με θέα στους βιολογικούς αμπελώνες και τους ελαιώνες για μια αισθησιακή γεύση καρπάθιου εδάφους."
        }
      ],
      "faqs": [
        {
          "q": "Ποιος είναι ο καλύτερος μήνας για να επισκεφθείτε την Κάρπαθο;",
          "a": "Οι καλύτεροι μήνες είναι ο Ιούνιος έως τον Σεπτέμβριο, όταν όλα τα τοπικά ταξίδια με σκάφος, τα κέντρα ιστιοσανίδας και οι ταβέρνες είναι πλήρως ανοιχτά."
        },
        {
          "q": "Πόσες μέρες χρειάζομαι στην Κάρπαθο;",
          "a": "Συνιστούμε τουλάχιστον 5 με 7 ημέρες για να εξερευνήσετε τις νότιες παραλίες (Αφιάρτης, Αμμοοπή) και να περπατήσετε στα βόρεια χωριά (Όλυμπος, Διαφάνι)."
        }
      ]
    },
    "best-boat-trips-in-karpathos": {
      "slug": "best-boat-trips-in-karpathos",
      "title": "Καλύτερες εκδρομές με σκάφος και θαλάσσιες εκδρομές στην Κάρπαθο",
      "seoTitle": "Καλύτερες εκδρομές με σκάφος στην Κάρπαθο | Saria & Beach Cruises",
      "description": "Κλείστε τις κορυφαίες εκδρομές με πλοίο από το λιμάνι Πηγάδια στην Κάρπαθο. Εξερευνήστε το νησί Σαρία, τις γαλάζιες σπηλιές και τις απομονωμένες παραλίες που είναι προσβάσιμες μόνο από τη θάλασσα.",
      "heroImage": "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Αναχώρηση από το λιμάνι των Πηγαδίων",
        "Εκδρομή στην άγρια ​​φύση στο νησί της Σαρίας",
        "Εξερεύνηση σπηλαίου βάρκας με γυάλινο πάτο",
        "Ολοήμερη κρουαζιέρα στις διάσημες παραλίες"
      ],
      "introduction": "Για να ζήσετε πραγματικά την Κάρπαθο, πρέπει να τη δείτε από τη θάλασσα. Οι απότομοι βράχοι και οι κρυμμένοι όρμοι του νησιού σημαίνουν ότι μερικές από τις πιο εντυπωσιακές παραλίες και ιστορικά ερείπια είναι προσβάσιμες μόνο με βάρκα. Αναχωρώντας από το λιμάνι Πηγάδια, αυτές οι κρουαζιέρες προσφέρουν καθημερινά δρομολόγια για κάθε τύπο επισκέπτη.",
      "sections": [
        {
          "heading": "Εκδρομή στην άγρια ​​φύση στο νησί της Σαρίας",
          "text": "Ένα ταξίδι με λίστα κουβάδων. Επιβιβαστείτε σε ένα παραδοσιακό καραβάκι από τα Πηγάδια ή το Διαφάνι για την παραλία Παλάτια στη Σαρία. Αναπνευστήρας σε ηφαιστειακές σπηλιές, περπάτημα μέσα από ένα εντυπωσιακό φαράγγι σε ένα χωριό φαντάσματα και απολαύστε ένα φρέσκο ​​παραθαλάσσιο μπάρμπεκιου."
        },
        {
          "heading": "Εξερεύνηση σπηλαίου βάρκας με γυάλινο πάτο",
          "text": "Ιδανικό για οικογένειες. Κοιτάξτε μέσα από τη γυάλινη καρίνα για να παρακολουθήσετε τη θαλάσσια ζωή και, στη συνέχεια, κάντε κρουαζιέρα σε παράκτιες βραχώδεις σπηλιές για κολύμβηση με αναπνευστήρα σε ρηχά, ήρεμα νερά."
        },
        {
          "heading": "Ολοήμερη κρουαζιέρα στις διάσημες παραλίες",
          "text": "Χαλαρώστε στο κατάστρωμα καθώς πλέετε στις πιο εμβληματικές παραλίες της Καρπάθου: την Άπελλα, την Κυρά Παναγιά και τον Κάτω Λάκκο. Απολαύστε στάσεις κολύμβησης και μεσημεριανό γεύμα στο σκάφος."
        }
      ],
      "faqs": [
        {
          "q": "Από πού αναχωρούν τα ταξίδια με πλοίο στην Κάρπαθο;",
          "a": "Οι περισσότερες εκδρομές με καραβάκι αναχωρούν από το κεντρικό λιμάνι στα Πηγάδια (Χώρα της Καρπάθου), ενώ κάποιες βόρειες εκδρομές ξεκινούν από το Διαφάνι."
        },
        {
          "q": "Είναι ασφαλείς οι συνθήκες της θάλασσας;",
          "a": "Όλοι οι καπετάνιοι των σκαφών παρακολουθούν τους τοπικούς ανέμους της Δωδεκανήσου. Οι εκδρομές ενδέχεται να επαναπρογραμματιστούν εάν τα κύματα είναι πολύ ψηλά, διασφαλίζοντας απόλυτη ασφάλεια."
        }
      ],
      "relatedCategory": "Sea & Boat Trips"
    },
    "best-activities-for-families-in-karpathos": {
      "slug": "best-activities-for-families-in-karpathos",
      "title": "Κορυφαία πράγματα να κάνετε στην Κάρπαθο για οικογένειες με παιδιά",
      "seoTitle": "Οικογενειακές Δραστηριότητες στην Κάρπαθο | Περιηγήσεις και όρμοι φιλικές προς τα παιδιά",
      "description": "Ο πλήρης οδηγός για δραστηριότητες φιλικές προς τα παιδιά στην Κάρπαθο: ασφαλείς αμμώδεις παραλίες στην Αμμοοπή, εκδρομές με βάρκα με γυάλινο πυθμένα, ξεναγήσεις μελισσοκομίας και δημιουργικά εργαστήρια.",
      "heroImage": "https://images.pexels.com/photos/30630904/pexels-photo-30630904.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "1. Ψαροντούφεκο και Άμμος στην Αμμοοπή",
        "2. Εργαστήρια τέχνης με βότσαλο και πηλό",
        "3. Γευσιγνωσία μελιού & Εκδρομές Μελισσοκομίας",
        "4. Βόλτες με βάρκα με γυάλινο πάτο"
      ],
      "introduction": "Η Κάρπαθος είναι ένας εξαιρετικός προορισμός για οικογένειες που αναζητούν μια ασφαλή, μη εμπορική εμπειρία στο ελληνικό νησί. Με απαλούς ρηχούς κολπίσκους, φιλόξενους ντόπιους και διαδραστικά εργαστήρια, τα παιδιά μπορούν να μάθουν για τη φύση και την ιστορία διασκεδάζοντας παράλληλα.",
      "sections": [
        {
          "heading": "1. Ψαροντούφεκο και Άμμος στην Αμμοοπή",
          "text": "Η Αμμοοπή είναι το πιο οικογενειακό θέρετρο του νησιού. Ορμίσκοι όπως η Μικρή Αμμοοπή προστατεύονται από τους καλοκαιρινούς ανέμους Μελτέμι και διαθέτουν ρηχές, αμμώδεις εισόδους ιδανικές για τα μικρά παιδιά να παίζουν και να κολυμπούν με αναπνευστήρα με ασφάλεια."
        },
        {
          "heading": "2. Εργαστήρια τέχνης με βότσαλο και πηλό",
          "text": "Φιλοξενήστε ένα δημιουργικό εργαστήριο μωσαϊκού, πηλού ή βότσαλου στο παραδοσιακό ορεινό χωριό Βολάδα. Τα παιδιά μπορούν να ζωγραφίσουν, να γλυπτούν και να φέρουν στο σπίτι τα δικά τους χειροποίητα αναμνηστικά."
        },
        {
          "heading": "3. Γευσιγνωσία μελιού & Εκδρομές Μελισσοκομίας",
          "text": "Γνωρίστε ντόπιους μελισσοκόμους στα Πηγάδια για να φορέσετε προστατευτικές στολές, να κοιτάξετε μέσα σε μια κυψέλη και να δοκιμάσετε γλυκό, αγνό θυμαρίσιο μέλι φρέσκο ​​από την κηρήθρα."
        }
      ],
      "faqs": [
        {
          "q": "Είναι η Κάρπαθος ασφαλής για τα παιδιά;",
          "a": "Ναι, είναι εξαιρετικά ασφαλές. Η εγκληματικότητα είναι ουσιαστικά ανύπαρκτη και οι παραλίες στην Αμμοοπή και τα Πηγάδια έχουν ήρεμες περιοχές ιδανικές για παιδιά."
        },
        {
          "q": "Ποιες περιοχές είναι καλύτερες για οικογενειακή διαμονή;",
          "a": "Η Αμμοοπή και τα Πηγάδια συνιστώνται ανεπιφύλακτα λόγω της κοντινής τους απόστασης από ρηχές παραλίες, οικογενειακές ταβέρνες και φαρμακεία."
        }
      ],
      "relatedCategory": "Workshops & Local Craft"
    },
    "karpathos-for-couples": {
      "slug": "karpathos-for-couples",
      "title": "Romantic Karpathos: The Couples & Honeymoon Guide",
      "seoTitle": "Κάρπαθος για ζευγάρια | Ρομαντικές δραστηριότητες και ηλιοβασιλέματα",
      "description": "Προγραμματίστε μια ρομαντική απόδραση στην Κάρπαθο. Οι καλύτερες δραστηριότητες για ζευγάρια: περιηγήσεις στο ηλιοβασίλεμα στο χωριό, γευσιγνωσία κρασιού, τελετουργίες μασάζ στην Άντια και ναυλώσεις ιδιωτικών σκαφών.",
      "heroImage": "https://images.pexels.com/photos/34777293/pexels-photo-34777293.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Περιηγήσεις στο Sunset Village",
        "Ιδιωτική Γευσιγνωσία Οίνου",
        "Spa & Μασάζ Ζευγαριών στην Άντια",
        "Κρυφές αποδράσεις στην παραλία"
      ],
      "introduction": "Για ζευγάρια που αναζητούν μια απόδραση από τον πολυσύχναστο μαζικό τουρισμό, η Κάρπαθος προσφέρει ακατέργαστο ρομαντισμό. Τα εντυπωσιακά βουνά, οι απομονωμένες παραλίες και η τοπική γαστρονομία προσφέρουν το τέλειο σκηνικό για μήνα του μέλιτος ή ρομαντικά καταφύγια.",
      "sections": [
        {
          "heading": "Περιηγήσεις στο Sunset Village",
          "text": "Περπατήστε στο ιστορικό ορεινό χωριό του Ολύμπου ή παρακολουθήστε τον ήλιο να βυθίζεται στο Αιγαίο από τα βράχια της Αρκάσας, ακολουθούμενο από δείπνο υπό το φως των κεριών."
        },
        {
          "heading": "Ιδιωτική Γευσιγνωσία Οίνου",
          "text": "Επισκεφθείτε το Οινοποιείο Scarpanto για μια ιδιωτική γευσιγνωσία δωδεκανήσιων κρασιών σε συνδυασμό με τοπικά τυριά, με θέα στις καλυμμένες με αμπέλια κοιλάδες."
        },
        {
          "heading": "Spa & Μασάζ Ζευγαριών στην Άντια",
          "text": "Χαλαρώστε με ένα τελετουργικό μασάζ με πέτρες ή υπαίθρια συνεδρία γιόγκα για ζευγάρια στην ήρεμη πευκοδέννη κοιλάδα της Adia."
        }
      ],
      "faqs": [
        {
          "q": "Πού είναι η καλύτερη θέα στο ηλιοβασίλεμα στην Κάρπαθο;",
          "a": "Το ηλιοβασίλεμα από το χωριό Αρκάσα, ή κοιτάζοντας προς τα κάτω από τα ύψη του Ολύμπου, προσφέρει εκπληκτική πανοραμική θέα."
        },
        {
          "q": "Μπορούμε να κλείσουμε ένα ιδιωτικό ταξίδι με σκάφος;",
          "a": "Ναι, κανονίζουμε ναυλώσεις με ιδιωτικά ταχύπλοα από το λιμάνι Πηγάδια σε απομονωμένες παραλίες με προσαρμοσμένα μενού και εξοπλισμό για κολύμβηση με αναπνευστήρα."
        }
      ],
      "relatedCategory": "Wellness & Massage"
    },
    "what-to-do-in-karpathos-for-3-days": {
      "slug": "what-to-do-in-karpathos-for-3-days",
      "title": "Το τέλειο 3ήμερο δρομολόγιο στην Κάρπαθο",
      "seoTitle": "Τι να κάνετε στην Κάρπαθο για 3 ημέρες | Δρομολόγιο & Στιγμιότυπα",
      "description": "Μεγιστοποιήστε 3 ημέρες στην Κάρπαθο με αυτόν τον επιμελημένο τοπικό οδηγό. Χαρακτηριστικά: Εκδρομή με πλοίο στη Σαρία, χωριό Όλυμπος, ιστιοσανίδα στον Αφιάρτη και φαγητό στα Πηγάδια.",
      "heroImage": "https://images.pexels.com/photos/31846705/pexels-photo-31846705.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "1η μέρα: Εκδρομή με πλοίο στο νησί της Σαρίας",
        "2η μέρα: Χωριό Όλυμπος & Βόρειος Πολιτισμός",
        "3η μέρα: Windsurfing, κρασί και ηλιοβασίλεμα"
      ],
      "introduction": "Έχετε μόνο τρεις μέρες στην Κάρπαθο; Αυτό το δρομολόγιο υψηλής πρόθεσης έχει σχεδιαστεί για να σας δείξει ό,τι καλύτερο έχει να προσφέρει το νησί, από ακατοίκητα νησιά μέχρι πολιτιστικά βουνά και αθλητικούς κόλπους.",
      "sections": [
        {
          "heading": "1η μέρα: Εκδρομή με πλοίο στο νησί της Σαρίας",
          "text": "Περάστε την πρώτη σας μέρα σε ένα ταξίδι με πλοίο στη Σαρία. Κολυμπήστε με αναπνευστήρα σε γαλάζιες σπηλιές, κάντε πεζοπορία στο βραχώδες φαράγγι των πειρατών και κολυμπήστε σε καθαρά νερά."
        },
        {
          "heading": "2η μέρα: Χωριό Όλυμπος & Βόρειος Πολιτισμός",
          "text": "Οδηγήστε βόρεια ή πάρτε μια βάρκα για το Διαφάνι και μετά ανεβείτε στο χωριό Όλυμπος. Περπατήστε στα αρχαία πέτρινα σοκάκια, δοκιμάστε σπιτικά ζυμαρικά Μακαρούνες και εξερευνήστε τους παλιούς ανεμόμυλους."
        },
        {
          "heading": "3η μέρα: Windsurfing, κρασί και ηλιοβασίλεμα",
          "text": "Κατευθυνθείτε νότια προς τον Αφιάρτη για ένα πρωινό μάθημα windsurf στο Chicken Bay. Το απόγευμα, απολαύστε οινογευσία στο Οινοποιείο Scarpanto και ολοκληρώστε με ποτά ηλιοβασιλέματος στην Αρκάσα."
        }
      ],
      "faqs": [
        {
          "q": "Απαιτείται ενοικίαση αυτοκινήτου στην Κάρπαθο;",
          "a": "Για ένα 3ήμερο ταξίδι, συνιστούμε ανεπιφύλακτα να νοικιάσετε αυτοκίνητο για να μετακινηθείτε εύκολα ανάμεσα στα βόρεια ορεινά χωριά και τους νότιους κόλπους."
        },
        {
          "q": "3 μέρες είναι αρκετές;",
          "a": "3 ημέρες είναι αρκετές για να καλύψουν τα κύρια σημεία, αλλά 5-7 ημέρες επιτρέπουν έναν πολύ πιο χαλαρό ρυθμό και την εξερεύνηση κρυμμένων μονοπατιών πεζοπορίας."
        }
      ]
    },
    "best-hikes-in-karpathos": {
      "slug": "best-hikes-in-karpathos",
      "title": "Κορυφαίες πεζοπορίες και μονοπάτια πεζοπορίας με οδηγό στην Κάρπαθο",
      "seoTitle": "Κάρπαθος Πεζοπορικές Εκδρομές | Πεζοπορίες με οδηγό και ορεινά μονοπάτια",
      "description": "Οδηγός για τα καλύτερα μονοπάτια πεζοπορίας στην Κάρπαθο. Πεζοπορήστε την πανοραμική κορυφή του Προφήτη Ηλία, τα μονοπάτια της κοιλάδας των Πηγαδίων και τις κορυφογραμμές Λάστου με ντόπιους οδηγούς.",
      "heroImage": "https://images.pexels.com/photos/31846705/pexels-photo-31846705.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Πανοραμική Ανάβαση Προφήτη Ηλία",
        "Κοιλάδα Πηγάδια",
        "Lastos Off-the-Beaten-Path Διαδρομή",
        "Παραθαλάσσιο μονοπάτι Αγίας Κυριακής"
      ],
      "introduction": "Με βουνά που υψώνονται πάνω από 1.200 μέτρα απευθείας από τη θάλασσα, η Κάρπαθος είναι ένας παράδεισος για πεζοπόρους. Παλιά μονοπάτια γαϊδουριών συνδέουν αρχαίους αγροτικούς οικισμούς, ξωκλήσια και παραλίες, προσφέροντας εντυπωσιακή θέα στη θάλασσα σε κάθε στροφή.",
      "sections": [
        {
          "heading": "Πανοραμική Ανάβαση Προφήτη Ηλία",
          "text": "Μια μέτρια πεζοπορία 4 ωρών από το χωριό Απέρι στο ξωκλήσι του Προφήτη Ηλία. Προσφέρει θέα 360 μοιρών σε ολόκληρο το νησί και τη γύρω περιοχή του Αιγαίου."
        },
        {
          "heading": "Κοιλάδα Πηγάδια",
          "text": "Ένας εύκολος, γραφικός περίπατος μέσα από ελαιώνες, αρχαία γεωργικά χωράφια και άγρια ​​πευκοδάση που περιβάλλουν την πρωτεύουσα Πηγάδια."
        },
        {
          "heading": "Lastos Off-the-Beaten-Path Διαδρομή",
          "text": "Περπατήστε κοντά στον Λαστό (το ψηλότερο οροπέδιο της Καρπάθου) μέσα από εντυπωσιακά ασβεστολιθικά τοπία, θαμνώνες με βότανα και ρουστίκ πέτρινες καλύβες."
        }
      ],
      "faqs": [
        {
          "q": "Χρειάζομαι οδηγό για πεζοπορία στην Κάρπαθο;",
          "a": "Ενώ τα μονοπάτια είναι σηματοδοτημένα, πολλά μονοπάτια είναι βραχώδη και εκτεθειμένα. Μια ξενάγηση εξασφαλίζει ασφαλή πλοήγηση, τοπικά ιστορικά γεγονότα και βοτανικές γνώσεις."
        },
        {
          "q": "Τι να φορέσω;",
          "a": "Οι γερές μπότες πεζοπορίας ή τα παπούτσια μονοπατιού είναι απαραίτητα λόγω του αιχμηρού ασβεστόλιθου. Φέρτε άφθονο νερό, αντηλιακό και αντιανεμικό."
        }
      ],
      "relatedCategory": "Hiking Tours"
    },
    "windsurfing-in-karpathos": {
      "slug": "windsurfing-in-karpathos",
      "title": "Ο απόλυτος οδηγός για ιστιοσανίδα στον Αφιάρτη Καρπάθου",
      "seoTitle": "Windsurfing Κάρπαθος | Μαθήματα & Σποτ στο Chicken Bay",
      "description": "Μάθετε για το windsurfing στον Αφιάρτη Καρπάθου. Οδηγός για μαθήματα αρχαρίων στο Chicken Bay, ιστιοσανίδα προηγμένης ταχύτητας και κορυφαία κέντρα ενοικίασης.",
      "heroImage": "https://images.pexels.com/photos/12376921/pexels-photo-12376921.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Γιατί ο Αφιάρτης είναι παγκοσμίως γνωστός",
        "Chicken Bay: The Beginner Sanctuary",
        "Gun Bay & Devil's Bay: Advanced Speed",
        "Wing Foiling και Kite Surfing"
      ],
      "introduction": "Ο κόλπος του Αφιάρτη στη νότια Κάρπαθο είναι θρυλικός μεταξύ των windsurfers. Τροφοδοτούμενο από τους ισχυρούς καλοκαιρινούς ανέμους Μελτέμι που συμπιέζονται μέσα από τις κοιλάδες του νησιού, προσφέρει εξαιρετικά αξιόπιστες συνθήκες ανέμου από τον Μάιο έως τον Οκτώβριο.",
      "sections": [
        {
          "heading": "Γιατί ο Αφιάρτης είναι παγκοσμίως γνωστός",
          "text": "Ο άνεμος φυσά από την ακτή με σταθερούς 20 έως 35 κόμβους σχεδόν κάθε μέρα το καλοκαίρι. Επειδή ο άνεμος φυσά σε όλη τη στεριά, οι όρμοι παραμένουν επίπεδοι χωρίς μεγάλο κύμα, δημιουργώντας συνθήκες βέλτιστης ταχύτητας."
        },
        {
          "heading": "Chicken Bay: The Beginner Sanctuary",
          "text": "Μια κλειστή λιμνοθάλασσα με ρηχά, αμμώδη νερά μέχρι τα γόνατα. Είναι προφυλαγμένο από τις υψηλότερες ριπές ανέμου, καθιστώντας το το πιο ασφαλές μέρος στην Ελλάδα για να σταθείτε σε μια σανίδα και να μάθετε windsurfing."
        },
        {
          "heading": "Gun Bay & Devil's Bay",
          "text": "Έξω από τη λιμνοθάλασσα, το Devil's Bay διαθέτει ακραίο άνεμο και πεδινό νερό, ιδανικό για freestyle, ταχύτητα ιστιοσανίδας και προηγμένο φτερό."
        }
      ],
      "faqs": [
        {
          "q": "Πότε είναι η εποχή του ανέμου στην Κάρπαθο;",
          "a": "Οι ισχυρότεροι άνεμοι πνέουν από τα μέσα Ιουνίου έως τις αρχές Σεπτεμβρίου, αλλά οι σταθμοί windsurfing λειτουργούν από τον Μάιο έως τον Οκτώβριο."
        },
        {
          "q": "Μπορούν τα παιδιά να μάθουν windsurfing;",
          "a": "Ναι, το επίπεδο, ρηχό νερό του Chicken Bay συνιστάται ιδιαίτερα για παιδιά ηλικίας 6 ετών να μαθαίνουν με μικρά, ελαφριά πανιά."
        }
      ],
      "relatedCategory": "Adventure & Watersports"
    },
    "saria-island-karpathos": {
      "slug": "saria-island-karpathos",
      "title": "Οδηγός για το νησί Σαρία: Η ακατοίκητη ερημιά της Καρπάθου",
      "seoTitle": "Σαρία Κάρπαθος | Πεζοπορίες με ξεναγό και εκδρομές με σκάφος",
      "description": "Εξερευνήστε το νησί Σαρία κοντά στην Κάρπαθο. Συμβουλές για εκδρομές με σκάφος με οδηγό, κολύμβηση με αναπνευστήρα σε μπλε σπηλιές, πεζοπορία σε φαράγγι και ερείπια πειρατών Σαρακηνών.",
      "heroImage": "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Εισαγωγή στη Σαρία",
        "Κολύμβηση με αναπνευστήρα στην παραλία Παλάτια",
        "Πεζοπορία στο φαράγγι της Σαρίας",
        "Τα ιστορικά ερείπια των πειρατών"
      ],
      "introduction": "Το νησί Σαρία είναι ένα προστατευόμενο φυσικό καταφύγιο που βρίσκεται ακριβώς βόρεια της Καρπάθου. Κάποτε ήταν μέρος της Καρπάθου αλλά το χώρισε ένας σεισμός. Ακατοίκητη σήμερα, εκτός από τις κατσίκες που βόσκουν και τα γεράκια που φωλιάζουν, η Σαρία προσφέρει άγρια ​​ομορφιά.",
      "sections": [
        {
          "heading": "Κολύμβηση με αναπνευστήρα στην παραλία Παλάτια",
          "text": "Το Palatia διαθέτει κρυστάλλινα βότσαλα και καταγάλανα νερά. Κολυμπήστε μέσα σε ηφαιστειακές σπηλιές για να δείτε κοράλλια, θαλάσσιες ανεμώνες και κοπάδια πολύχρωμων ψαριών."
        },
        {
          "heading": "Πεζοπορία στο φαράγγι της Σαρίας",
          "text": "Μια πεζοπορία 45 λεπτών οδηγεί από την παραλία μέσα από ένα βραχώδες, ξηρό φαράγγι. Η διαδρομή ανεβαίνει σε μια κορυφογραμμή με θέα στο βόρειο αρχιπέλαγος των Δωδεκανήσων."
        },
        {
          "heading": "Τα ιστορικά ερείπια των πειρατών",
          "text": "Στην κορυφογραμμή, ανακαλύψτε τα πέτρινα ερείπια με τρούλο της «Παλατίας», ενός μεσαιωνικού οικισμού που χτίστηκε από πληθυσμούς πειρατών Σαρακηνών που διέφυγαν από επιδρομές στην ηπειρωτική χώρα."
        }
      ],
      "faqs": [
        {
          "q": "Πώς θα πάω στο νησί Σαρία;",
          "a": "Πάρτε μια ημερήσια εκδρομική βάρκα από το λιμάνι των Πηγαδίων ή το Διαφάνι. Η βόλτα με το πλοίο διαρκεί περίπου 1 ώρα από τα Πηγάδια."
        },
        {
          "q": "Υπάρχει νερό ή φαγητό στη Σαρία;",
          "a": "Όχι, η Σαρία δεν έχει μαγαζιά. Οι ξεναγήσεις περιλαμβάνουν μεσημεριανό μπάρμπεκιου, αλλά πρέπει να φέρετε άφθονο πόσιμο νερό και σνακ."
        }
      ]
    },
    "olympos-karpathos-day-trip": {
      "slug": "olympos-karpathos-day-trip",
      "title": "Οδηγός ημερήσιας εκδρομής στο χωριό Όλυμπος: Ιστορία και διατηρημένες παραδόσεις",
      "seoTitle": "Όλυμπος Κάρπαθος Ημερήσια Εκδρομή | Μητριαρχικός Οδηγός Χωριού",
      "description": "Προγραμματίστε την ημερήσια εκδρομή σας στο χωριό Όλυμπος στην Κάρπαθο. Ανακαλύψτε διατηρημένες μητριαρχικές παραδόσεις, αρχαίους ανεμόμυλους και τοπικά δωδεκανησιακά φαγητά.",
      "heroImage": "https://images.pexels.com/photos/37037773/pexels-photo-37037773.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Όλυμπος: Η Ζωντανή Μητριαρχία",
        "Παραδοσιακοί Ανεμόμυλοι & Αρχιτεκτονική",
        "Πώς να ζήσετε τον Όλυμπο",
        "Δοκιμάζοντας ζυμαρικά Μακαρούνες"
      ],
      "introduction": "Το χωριό Όλυμπος είναι ο πιο εμβληματικός πολιτιστικός χώρος της Καρπάθου. Χτισμένο σε μια απότομη κορυφογραμμή βουνού για να κρυφτεί από τους μεσαιωνικούς πειρατές, το χωριό παρέμεινε απομονωμένο χωρίς δρόμους ή ηλεκτρικό ρεύμα μέχρι τα τέλη του 20ου αιώνα, διατηρώντας μοναδικά έθιμα.",
      "sections": [
        {
          "heading": "Όλυμπος: Η Ζωντανή Μητριαρχία",
          "text": "Οι γυναίκες στον Όλυμπο κατέχουν κεντρικό ρόλο στη διατήρηση των εθίμων και της κληρονομιάς. Εξακολουθούν να φορούν καθημερινά παραδοσιακά κεντημένα στο χέρι ρούχα που ονομάζονται «καβάι», όχι μόνο για φεστιβάλ."
        },
        {
          "heading": "Παραδοσιακοί Ανεμόμυλοι & Αρχιτεκτονική",
          "text": "Το χωριό στεφανώνεται από παλιούς πέτρινους ανεμόμυλους, μερικοί από τους οποίους χρησιμοποιούνται ακόμα για την άλεση του κριθαριού. Τα σπίτια σκαρφαλώνουν στα βράχια σε μια πυκνή διάταξη με θέα το δυτικό ηλιοβασίλεμα."
        },
        {
          "heading": "Δοκιμάζοντας ζυμαρικά Μακαρούνες",
          "text": "Επισκεφθείτε μια τοπική ταβέρνα για να παρακολουθήσετε φρέσκες «Μακαρούνες» (χειροποίητα ζυμαρικά) να τυλίγονται, να βράζονται και να σερβίρονται με καραμελωμένα κρεμμύδια και ντόπιο κατσικίσιο τυρί."
        }
      ],
      "faqs": [
        {
          "q": "Ποιος είναι ο καλύτερος τρόπος για να φτάσετε στον Όλυμπο;",
          "a": "Μπορείτε να πάρετε ημερήσιο καραβάκι από τα Πηγάδια για το Διαφάνι και μετά με λεωφορείο για τον Όλυμπο. Εναλλακτικά, μπορείτε να οδηγήσετε τον γραφικό ορεινό δρόμο από τα Πηγάδια."
        },
        {
          "q": "Ο Όλυμπος είναι τουριστικός;",
          "a": "Αν και δημοφιλής το μεσημέρι, ο Όλυμπος διατηρεί τον αυθεντικό αγροτικό του χαρακτήρα. Μια ξενάγηση σάς βοηθά να συνδεθείτε με τους ντόπιους και να κατανοήσετε τον πολιτισμό."
        }
      ],
      "relatedCategory": "Culture & Village Tours"
    },
    "best-wellness-experiences-in-karpathos": {
      "slug": "best-wellness-experiences-in-karpathos",
      "title": "Καλύτερη ευεξία, μασάζ και γιόγκα στην Κάρπαθο",
      "seoTitle": "Karpathos Wellness Experiences | Γιόγκα, Μασάζ & Σπα",
      "description": "Εξερευνήστε τις καλύτερες εμπειρίες ευεξίας στην Κάρπαθο: θεραπευτικό μασάζ στα Πηγάδια, ηχοθεραπεία στην Άδια και ιδιωτικές συνεδρίες γιόγκα στο ηλιοβασίλεμα.",
      "heroImage": "https://images.pexels.com/photos/34777293/pexels-photo-34777293.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Θεραπευτικό Μασάζ στα Πηγάδια",
        "Nature Yoga στην Adia",
        "Ηχοθεραπευτική θεραπεία",
        "Hot Stone Spa Rituals"
      ],
      "introduction": "Τα άγρια ​​τοπία και ο ήρεμος θαλασσινός αέρας της Καρπάθου την καθιστούν φυσικό καταφύγιο ευεξίας. Από σύγχρονα ιαματικά λουτρά στα Πηγάδια μέχρι καταφύγια ευεξίας εκτός δικτύου στην Άδια, ανακαλύψτε πώς να αναζωογονήσετε το σώμα και το μυαλό σας.",
      "sections": [
        {
          "heading": "Θεραπευτικό Μασάζ στα Πηγάδια",
          "text": "Χαλαρώστε μετά από μια μέρα πεζοπορίας ή ιστιοσανίδας με ένα προσαρμοσμένο βαθύ μασάζ ιστών ή θεραπευτική συνεδρία ρεφλεξολογίας στην πόλη των Πηγάδια."
        },
        {
          "heading": "Nature Yoga στην Adia",
          "text": "Ζήστε τη γιόγκα σε εξωτερικούς χώρους σε ξύλινες πλατφόρμες με σκιά πεύκου με θέα στους βράχους και τη θάλασσα της Αδίας. Εστιάστε στην αναπνοή και την ευθυγράμμιση."
        },
        {
          "heading": "Ηχοθεραπευτική θεραπεία",
          "text": "Χαλαρώστε στις δονήσεις των θιβετιανών μπολ και γκονγκ, σχεδιασμένων να απελευθερώνουν την ένταση και να αποκαθιστούν την ψυχική ισορροπία σε ένα ήσυχο δάσος."
        }
      ],
      "faqs": [
        {
          "q": "Οι συνεδρίες ευεξίας είναι ιδιωτικές;",
          "a": "Ναι, κανονίζουμε ιδιωτικά μασάζ, μαθήματα γιόγκα και συνεδρίες ηχοθεραπείας στη βίλα, το ξενοδοχείο σας ή σε απομονωμένους υπαίθριους χώρους."
        },
        {
          "q": "Μπορούμε να κλείσουμε πακέτα ευεξίας;",
          "a": "Ναι, προσφέρουμε προσαρμοσμένα πολυήμερα πακέτα ευεξίας που συνδυάζουν γιόγκα, μασάζ και βιολογικά τοπικά γεύματα."
        }
      ],
      "relatedCategory": "Wellness & Massage"
    },
    "private-group-activities-karpathos": {
      "slug": "private-group-activities-karpathos",
      "title": "Επιμέλεια Private Group & Villa Experiences στην Κάρπαθο",
      "seoTitle": "Ιδιωτικές Ομαδικές Εμπειρίες στην Κάρπαθο | Υπηρεσίες Βίλας",
      "description": "Σχεδιάστε προσαρμοσμένες ιδιωτικές ομαδικές εμπειρίες στην Κάρπαθο. Ιδανικό για επισκέπτες της βίλας, οικογένειες και φίλους: ναυλώσεις ιδιωτικών σκαφών, ιδιωτικές βραδιές σεφ και προσαρμοσμένες περιηγήσεις.",
      "heroImage": "https://images.pexels.com/photos/8472735/pexels-photo-8472735.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Ναυλώσεις ιδιωτικών ταχύπλοων σκαφών",
        "Γευσιγνωσία και μαγείρεμα κρασιού στη βίλα",
        "Προσαρμοσμένες ξεναγήσεις στο νησί",
        "Ιδιωτικές Ημέρες Ευεξίας"
      ],
      "introduction": "Ταξιδεύοντας με μια ομάδα φίλων, οικογένεια ή διαμονή σε μια πολυτελή βίλα; Ειδικευόμαστε στην κατασκευή εξατομικευμένων ιδιωτικών δρομολογίων που φέρνουν τα καλύτερα της Καρπάθου απευθείας σε εσάς, με ιδιωτική μεταφορά και premium υποστήριξη.",
      "sections": [
        {
          "heading": "Ναυλώσεις ιδιωτικών ταχύπλοων σκαφών",
          "text": "Ναυλώστε ένα ιδιωτικό σκάφος από τα Πηγάδια για να επισκεφθείτε τη Σαρία ή τους νότιους όρμους με το δικό σας πρόγραμμα. Περιλαμβάνει ένα προσαρμοσμένο μενού για μεσημεριανό γεύμα και ανοιχτό μπαρ."
        },
        {
          "heading": "Γευσιγνωσία και μαγείρεμα κρασιού στη βίλα",
          "text": "Οι σομελιέ και οι ντόπιοι σεφ μας θα έρθουν στη βίλα σας για να φιλοξενήσουν μια ιδιωτική γευσιγνωσία κρασιού και να ετοιμάσουν ένα παραδοσιακό καρπάθικο δείπνο με βιολογικά υλικά."
        },
        {
          "heading": "Προσαρμοσμένες ξεναγήσεις στο νησί",
          "text": "Κλείστε ένα ιδιωτικό μίνι βαν για να εξερευνήσετε ορεινά χωριά (Απέρι, Βολάδα, Όλυμπος) με τοπικό οδηγό, αποφεύγοντας τα τουριστικά πλήθη."
        }
      ],
      "faqs": [
        {
          "q": "Κανονίζετε παραλαβές βίλας;",
          "a": "Ναι, μπορούμε να οργανώσουμε ιδιωτικές μεταφορές με μίνι βαν απευθείας από τη βίλα σας σε οποιοδήποτε σκάφος, μονοπάτι πεζοπορίας ή τοποθεσία εμπειρίας."
        },
        {
          "q": "Ποιο είναι το ελάχιστο μέγεθος ομάδας;",
          "a": "Οι περισσότερες ιδιωτικές ομαδικές εμπειρίες απαιτούν τουλάχιστον 4 έως 6 επισκέπτες, αλλά μπορούμε να προσαρμόσουμε τα σχέδια για μικρότερα ζευγάρια ή μεγαλύτερες οικογένειες."
        }
      ],
      "relatedCategory": "Private Villa Experiences"
    },
    "things-to-do-near-amoopi-karpathos": {
      "slug": "things-to-do-near-amoopi-karpathos",
      "title": "Τα καλύτερα πράγματα και δραστηριότητες κοντά στην Αμμοοπή, στην Κάρπαθο",
      "seoTitle": "Δραστηριότητες στην Αμμοοπή, Κάρπαθος | Δραστηριότητες και κολύμβηση με αναπνευστήρα",
      "description": "Εξερευνήστε τι να κάνετε κοντά στην Αμμοοπή, στην Κάρπαθο. Οδηγός για τους καλύτερους κολπίσκους για κολύμβηση με αναπνευστήρα, μονοπάτια πεζοπορίας, τοπική κουζίνα και μασάζ ευεξίας σε κοντινή απόσταση.",
      "heroImage": "https://images.pexels.com/photos/34777293/pexels-photo-34777293.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Κολύμβηση με αναπνευστήρα στους όρμους Amoopi",
        "Παράκτια μονοπάτια πεζοπορίας",
        "Ευεξία & Μασάζ Κοντά στην Αμμοοπή",
        "Παραδοσιακή Ταβέρνα Τραπεζαρία"
      ],
      "introduction": "Η Αμμοοπή φημίζεται για τις απάνεμες, καθαρές παραλίες της. Χρησιμεύει ως εξαιρετική βάση για τουρίστες που αναζητούν έναν συνδυασμό ήσυχου χρόνου στην παραλία, μεσημεριανά γεύματα σε τοπικές ταβέρνες και υπαίθρια εξερεύνηση.",
      "sections": [
        {
          "heading": "Κολύμβηση με αναπνευστήρα στους όρμους Amoopi",
          "text": "Οι ασβεστολιθικοί σχηματισμοί στην Αμμοοπή δημιουργούν φυσικές πισίνες βράχου και όρμους όπως τα Καστέλια. Αναπνευστήρας σε ήρεμα, κρυστάλλινα νερά για να δείτε μεσογειακά ψάρια."
        },
        {
          "heading": "Παράκτια μονοπάτια πεζοπορίας",
          "text": "Περπατήστε στα εύκολα παραλιακά μονοπάτια που συνδέουν την Αμμοοπή με τις κοντινές παραλίες. Ιδανικό για βόλτες νωρίς το πρωί ή αργά το απόγευμα κατά τη διάρκεια του ηλιοβασιλέματος."
        },
        {
          "heading": "Ευεξία & Μασάζ Κοντά στην Αμμοοπή",
          "text": "Αναζωογονηθείτε με μια συνεδρία μασάζ σε ένα κοντινό σπα ευεξίας ή απευθείας στην άνεση της βίλας σας στο Amoopi."
        }
      ],
      "faqs": [
        {
          "q": "Προστατεύεται η Αμμοοπή από τους μελτέμιους ανέμους;",
          "a": "Ναι, οι κύριοι όρμοι της Αμμοοπής έχουν νότιο προσανατολισμό και προστατεύονται από βραχώδη ακρωτήρια, καθιστώντας τους πολύ πιο ήρεμους από τους κόλπους της ανατολικής ακτής."
        },
        {
          "q": "Διατίθεται δημόσια συγκοινωνία από το Amoopi;",
          "a": "Ναι, υπάρχει τακτικό καλοκαιρινό λεωφορείο που συνδέει την Αμμοοπή με τα Πηγάδια (Χώρα της Κάρπαθου) που απέχει μόλις 10 λεπτά."
        }
      ]
    },
    "things-to-do-near-pigadia-karpathos": {
      "slug": "things-to-do-near-pigadia-karpathos",
      "title": "Τα καλύτερα πράγματα να κάνετε και εκδρομές κοντά στα Πηγάδια, στην Κάρπαθο",
      "seoTitle": "Δραστηριότητες στα Πηγάδια, Κάρπαθος | Εκδρομές και δραστηριότητες με σκάφος",
      "description": "Ο πλήρης οδηγός για δραστηριότητες κοντά στα Πηγάδια (Χώρα Κάρπαθου). Ανακαλύψτε εκδρομές με βάρκα στο λιμάνι, μονοπάτια πεζοπορίας, σημεία κατάδυσης και γευσιγνωσία μελιού.",
      "heroImage": "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Εκδρομές με σκάφος στο λιμάνι Πηγαδίων",
        "Scuba Diving & Snorkeling",
        "Πεζοπορίες στην κοιλάδα και μονοπάτια στο βουνό",
        "Τοπικές γευσιγνωσίες φαγητού και μελιού"
      ],
      "introduction": "Τα Πηγάδια είναι η πρωτεύουσα και κύριος κόμβος της Καρπάθου. Προσφέρει έναν πολυσύχναστο χώρο περιπάτου στο λιμάνι, δεκάδες τοπικά εστιατόρια και λειτουργεί ως το κύριο λιμάνι αναχώρησης για όλες τις θαλάσσιες εκδρομές και εκδρομές με σκάφος.",
      "sections": [
        {
          "heading": "Εκδρομές με σκάφος στο λιμάνι Πηγαδίων",
          "text": "Η κύρια προβλήτα στα Πηγάδια είναι όπου επιβιβάζεστε σε καθημερινές εκδρομές με σκάφος στη Σαρία, εξερευνητές σπηλαίων με γυάλινο πυθμένα και κρουαζιέρες στην παραλία apella."
        },
        {
          "heading": "Scuba Diving & Snorkeling",
          "text": "Τα Πηγάδια φιλοξενούν τα κύρια καταδυτικά κέντρα του νησιού. Βουτήξτε τις σήραγγες των ηφαιστειακών υφάλων, τα ναυάγια και τα λιβάδια με θαλάσσιο γρασίδι σε κοντινή απόσταση."
        },
        {
          "heading": "Πεζοπορίες στην κοιλάδα και μονοπάτια στο βουνό",
          "text": "Ακολουθήστε τα παλιά μονοπάτια των γαϊδάρων από τα Πηγάδια μέχρι τους ελαιώνες του Απέριου ή κατά μήκος της ακτής μέχρι το εκκλησάκι της Αγίας Κυριακής."
        }
      ],
      "faqs": [
        {
          "q": "Πού μπορώ να παρκάρω στα Πηγάδια;",
          "a": "Τα Πηγάδια διαθέτουν δωρεάν δημόσιους χώρους στάθμευσης κοντά στο κεντρικό λιμάνι του λιμανιού, το οποίο βρίσκεται σε μικρή απόσταση με τα πόδια από όλα τα εκδρομικά σκάφη."
        },
        {
          "q": "Τα Πηγάδια είναι καλά για νυχτερινή ζωή;",
          "a": "Ναι, ο παραλιακός πεζόδρομος του λιμανιού είναι γεμάτος καφετέριες, κοκτέιλ μπαρ και παραδοσιακές ταβέρνες ανοιχτές μέχρι αργά το βράδυ."
        }
      ]
    },
    "karpathos-water-sports": {
      "slug": "karpathos-water-sports",
      "title": "Ο Οδηγός Θαλάσσιων Σπορ και Καταδύσεων στην Κάρπαθο",
      "seoTitle": "Κάρπαθος Θαλάσσια Σπορ & Καταδύσεις | Windsurfing & Scuba",
      "description": "Ανακαλύψτε θαλάσσια σπορ στην Κάρπαθο. Οδηγός για καταδύσεις PADI στα Πηγάδια, windsurfing στο Chicken Bay, φτερό φτερού και κολύμβηση με ταχύπλοο.",
      "heroImage": "https://images.pexels.com/photos/13010778/pexels-photo-13010778.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Windsurfing & Wing Foiling",
        "Scuba Diving & Snorkeling",
        "Περιπέτειες με ταχύπλοο"
      ],
      "introduction": "Με τα βαθιά ηφαιστειογενή νερά και τις αξιόπιστες θαλάσσιες αύρες, η Κάρπαθος αποτελεί σημαντικό κόμβο για θαλάσσια σπορ στο Αιγαίο. Είτε θέλετε να πλέετε, να βουτήξετε, να σερφάρετε ή να γλιστρήσετε σε ιπτάμενα δελφίνια, εδώ θα βρείτε τον καλύτερο εξοπλισμό και τους καλύτερους εκπαιδευτές.",
      "sections": [
        {
          "heading": "Windsurfing & Wing Foiling",
          "text": "Ο κόλπος Αφιάρτης προσφέρει συνθήκες για όλα τα επίπεδα. Οι αρχάριοι μπορούν να εξασκηθούν στη ρηχή άμμο του Chicken Bay, ενώ οι επαγγελματίες οδηγούν το Devil's Bay."
        },
        {
          "heading": "Scuba Diving & Snorkeling",
          "text": "Ανακαλύψτε τα πλούσια θαλάσσια οικοσυστήματα των Δωδεκανήσων. Το τοπικό κέντρο καταδύσεων παρέχει μαθήματα καταδύσεων για αρχάριους PADI Discover και καθοδηγούμενες βαθιές καταδύσεις."
        },
        {
          "heading": "Περιπέτειες με ταχύπλοο",
          "text": "Κάντε κράτηση για μια περιήγηση με ταχύπλοο για να εξερευνήσετε θαλάσσιες σπηλιές, κρυμμένα ναυάγια και απομονωμένους όρμους γύρω από την ακτή Πηγάδια."
        }
      ],
      "faqs": [
        {
          "q": "Χρειάζομαι προηγούμενη εμπειρία για καταδύσεις;",
          "a": "Όχι, μπορείτε να κάνετε κράτηση για μια συνεδρία «Discover Scuba Diving», η οποία περιλαμβάνει εκπαίδευση σε ρηχά νερά που μοιάζει με πισίνα, ακολουθούμενη από μια κατάδυση στη ρηχή θάλασσα με έναν εκπαιδευτή."
        },
        {
          "q": "Ανοίγουν οι σταθμοί θαλάσσιων σπορ τον Οκτώβριο;",
          "a": "Οι περισσότεροι σταθμοί λειτουργούν μέχρι τις αρχές ή τα μέσα Οκτωβρίου, ανάλογα με τις καιρικές συνθήκες και τις συνθήκες ανέμου."
        }
      ],
      "relatedCategory": "Watersports & Diving"
    }
  },
  "es": {
    "things-to-do-in-karpathos": {
      "slug": "things-to-do-in-karpathos",
      "title": "15 mejores cosas para hacer en Karpathos: la guía definitiva de la isla",
      "seoTitle": "15 mejores cosas para hacer en Kárpatos | Principales actividades y tours",
      "description": "Descubra las mejores cosas para hacer en Karpathos, Grecia: viajes en barco a la isla de Saria, windsurf en Afiartis, excursiones al Olimpo, senderismo, buceo y bienestar.",
      "heroImage": "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "1. Haga un viaje en barco a la isla Saria",
        "2. Explora la aldea matriarcal de Olympos",
        "3. Windsurf en Chicken Bay en Afiartis",
        "4. Bucear en aguas cristalinas",
        "5. Disfrute de la cata de vinos Scarpanto"
      ],
      "introduction": "Karpathos es uno de los secretos mejor guardados de Grecia. Situada entre Creta y Rodas, en el Dodecaneso, esta espectacular isla ofrece altas crestas barridas por el viento, pueblos antiguos y playas vírgenes. Ya sea que busque deportes acuáticos llenos de adrenalina, relajantes rituales de spa o inmersión cultural, Karpathos tiene algo único para cada viajero.",
      "sections": [
        {
          "heading": "1. Haga un viaje en barco a la isla Saria",
          "text": "Separada del norte de Karpathos por un estrecho, Saria es un paraíso de vida silvestre deshabitado. Navegar hasta allí en barco le permitirá caminar por cañones salvajes, nadar en aguas de color azul neón y explorar las ruinas abovedadas de un asentamiento pirata sarraceno."
        },
        {
          "heading": "2. Explora la aldea matriarcal de Olympos",
          "text": "En lo alto de las montañas del norte, el pueblo de Olympos es un museo viviente. Las mujeres visten trajes tradicionales bordados a mano, hablan un dialecto con antiguas raíces dóricas y cuecen pan en hornos de piedra comunitarios al aire libre."
        },
        {
          "heading": "3. Windsurf en Chicken Bay en Afiartis",
          "text": "Conocido mundialmente por sus fuertes vientos Meltemi, Afiartis es un importante centro de windsurf. Chicken Bay cuenta con aguas planas y poco profundas, perfectas para principiantes, mientras que Devil's Bay alberga pruebas de velocidad para ciclistas avanzados."
        },
        {
          "heading": "4. Bucear en aguas cristalinas",
          "text": "El fondo marino volcánico que rodea Pigadia ofrece una visibilidad excepcional (hasta 30 metros), paredes profundas, cuevas submarinas y una rica vida marina como meros, pulpos y la rara foca monje del Mediterráneo."
        },
        {
          "heading": "5. Disfrute de la cata de vinos Scarpanto",
          "text": "Visite una finca familiar tradicional para degustar variedades de uva autóctonas como Athiri y Fokiano. Beba vino con vistas a viñedos orgánicos y olivares para disfrutar del sabor sensorial del suelo de los Karpatos."
        }
      ],
      "faqs": [
        {
          "q": "¿Cuál es el mejor mes para visitar Kárpatos?",
          "a": "Los mejores meses son de junio a septiembre, cuando todos los viajes en barco, centros de windsurf y tabernas locales están completamente abiertos."
        },
        {
          "q": "¿Cuántos días necesito en Kárpatos?",
          "a": "Recomendamos al menos de 5 a 7 días para explorar las playas del sur (Afiartis, Amoopi) y caminar por los pueblos del norte (Olympos, Diafani)."
        }
      ]
    },
    "best-boat-trips-in-karpathos": {
      "slug": "best-boat-trips-in-karpathos",
      "title": "Los mejores paseos en barco y excursiones marítimas en Karpathos",
      "seoTitle": "Los mejores paseos en barco en Karpathos | Cruceros por Saria y Playa",
      "description": "Reserve los mejores viajes en barco desde el puerto de Pigadia en Karpathos. Explore la isla Saria, las cuevas azules y las playas aisladas a las que solo se puede acceder por mar.",
      "heroImage": "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Saliendo del puerto de Pigadia",
        "Excursión al desierto de la isla de Saria",
        "Explorador de cuevas en barco con fondo de cristal",
        "Crucero de día completo por playas famosas"
      ],
      "introduction": "Para experimentar verdaderamente Kárpatos, debes verlo desde el mar. Los escarpados acantilados y las calas escondidas de la isla hacen que solo se pueda llegar en barco a algunas de las playas y ruinas históricas más espectaculares. Saliendo del puerto de Pigadia, estos cruceros ofrecen rutas diarias para todo tipo de visitantes.",
      "sections": [
        {
          "heading": "Excursión al desierto de la isla de Saria",
          "text": "Un viaje de lista de deseos. Suba a bordo de un barco tradicional desde Pigadia o Diafani hasta la playa de Palatia en la isla de Saria. Practique snorkel en cuevas volcánicas, camine por un impresionante cañón hasta un pueblo fantasma y disfrute de una fresca barbacoa junto al mar."
        },
        {
          "heading": "Explorador de cuevas en barco con fondo de cristal",
          "text": "Perfecto para familias. Mire a través de la quilla de cristal para observar la vida marina, luego navegue hasta las cuevas rocosas costeras para practicar snorkel en aguas tranquilas y poco profundas."
        },
        {
          "heading": "Crucero de día completo por playas famosas",
          "text": "Relájese en cubierta mientras navega hacia las playas más emblemáticas de Karpathos: Apella, Kyra Panagia y Kato Lakkos. Disfrute de paradas para nadar y almuerzo a bordo."
        }
      ],
      "faqs": [
        {
          "q": "¿Desde dónde salen los paseos en barco en Kárpatos?",
          "a": "La mayoría de los viajes en barco salen del puerto principal de Pigadia (ciudad de Karpathos), mientras que algunas excursiones al norte parten de Diafani."
        },
        {
          "q": "¿Las condiciones del mar son seguras?",
          "a": "Todos los capitanes de barcos monitorean los vientos locales del Dodecaneso. Las excursiones pueden reprogramarse si las olas son demasiado altas, garantizando absoluta seguridad."
        }
      ],
      "relatedCategory": "Sea & Boat Trips"
    },
    "best-activities-for-families-in-karpathos": {
      "slug": "best-activities-for-families-in-karpathos",
      "title": "Las mejores cosas que hacer en Kárpatos para familias con niños",
      "seoTitle": "Actividades familiares en Kárpatos | Tours y calas para niños",
      "description": "La guía completa de actividades para niños en Karpathos: playas seguras de arena en Amoopi, paseos en barcos con fondo de cristal, recorridos de apicultura y talleres creativos.",
      "heroImage": "https://images.pexels.com/photos/30630904/pexels-photo-30630904.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "1. Snorkel y arena en Amoopi",
        "2. Talleres prácticos de arcilla y arte con guijarros",
        "3. Tours de degustación de miel y apicultura",
        "4. Paseos en barco con fondo de cristal"
      ],
      "introduction": "Karpathos es un destino excepcional para familias que buscan una experiencia isleña griega segura y no comercializada. Con suaves calas poco profundas, lugareños acogedores y talleres interactivos, los niños pueden aprender sobre la naturaleza y la historia mientras se divierten activamente.",
      "sections": [
        {
          "heading": "1. Snorkel y arena en Amoopi",
          "text": "Amoopi es el complejo más familiar de la isla. Las calas como Mikri Amoopi están protegidas de los vientos de Meltemi en verano y cuentan con entradas arenosas poco profundas, ideales para que los niños pequeños jueguen y hagan snorkel con seguridad."
        },
        {
          "heading": "2. Talleres prácticos de arcilla y arte con guijarros",
          "text": "Organice un taller creativo de mosaicos, arcilla o guijarros en el tradicional pueblo de montaña de Volada. Los niños pueden pintar, esculpir y llevarse a casa sus propios recuerdos hechos a mano."
        },
        {
          "heading": "3. Tours de degustación de miel y apicultura",
          "text": "Conozca a los apicultores locales en Pigadia para usar trajes protectores, mirar dentro de una colmena y probar la dulce y pura miel de tomillo recién sacada del panal."
        }
      ],
      "faqs": [
        {
          "q": "¿Karpathos es seguro para los niños?",
          "a": "Sí, es extremadamente seguro. La delincuencia es prácticamente inexistente y las playas de Amoopi y Pigadia tienen zonas tranquilas ideales para los niños."
        },
        {
          "q": "¿Qué zonas son mejores para alojamiento familiar?",
          "a": "Amoopi y Pigadia son muy recomendables debido a su proximidad a playas poco profundas, tabernas familiares y farmacias."
        }
      ],
      "relatedCategory": "Workshops & Local Craft"
    },
    "karpathos-for-couples": {
      "slug": "karpathos-for-couples",
      "title": "Karpathos romántico: la guía para parejas y luna de miel",
      "seoTitle": "Kárpatos para parejas | Actividades románticas y atardeceres",
      "description": "Planifique una escapada romántica en Karpathos. Las mejores actividades para parejas: recorridos por pueblos al atardecer, catas de vinos, rituales de masajes en Adia y alquiler de barcos privados.",
      "heroImage": "https://images.pexels.com/photos/34777293/pexels-photo-34777293.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Visitas guiadas al pueblo al atardecer",
        "Cata de vinos privada",
        "Spa y masajes para parejas en Adia",
        "Escapadas a la playa escondida"
      ],
      "introduction": "Para las parejas que buscan escapar del abarrotado turismo de masas, Karpathos ofrece un romance puro. Sus espectaculares montañas, playas solitarias y gastronomía local brindan el escenario perfecto para lunas de miel o retiros románticos.",
      "sections": [
        {
          "heading": "Visitas guiadas al pueblo al atardecer",
          "text": "Camine por el histórico pueblo de montaña de Olympos o observe cómo el sol se esconde en el mar Egeo desde los acantilados de Arkasa, seguido de una cena a la luz de las velas."
        },
        {
          "heading": "Cata de vinos privada",
          "text": "Visite la bodega Scarpanto para una sesión de degustación privada de vinos del Dodecaneso combinados con quesos locales, con vistas a los valles cubiertos de viñas."
        },
        {
          "heading": "Spa y masajes para parejas en Adia",
          "text": "Relájese con un ritual de masaje con piedras o una sesión de yoga para parejas al aire libre en el tranquilo valle rodeado de pinos de Adia."
        }
      ],
      "faqs": [
        {
          "q": "¿Dónde está la mejor vista del atardecer en Kárpatos?",
          "a": "La puesta de sol desde el pueblo de Arkasa, o la vista desde las alturas del Olimpo, ofrece impresionantes vistas panorámicas."
        },
        {
          "q": "¿Podemos reservar un viaje en barco privado?",
          "a": "Sí, organizamos vuelos privados en lanchas rápidas desde el puerto de Pigadia hasta playas solitarias con menús personalizados y equipo de snorkel."
        }
      ],
      "relatedCategory": "Wellness & Massage"
    },
    "what-to-do-in-karpathos-for-3-days": {
      "slug": "what-to-do-in-karpathos-for-3-days",
      "title": "El itinerario perfecto de 3 días por Karpathos",
      "seoTitle": "Qué hacer en Karpathos durante 3 días | Itinerario y aspectos destacados",
      "description": "Maximice 3 días en Karpathos con esta guía local seleccionada. Puntos destacados: paseo en barco por Saria, pueblo de Olympos, windsurf en Afiartis y cena en Pigadia.",
      "heroImage": "https://images.pexels.com/photos/31846705/pexels-photo-31846705.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Día 1: Excursión en barco a la isla de Saria",
        "Día 2: Pueblo Olympos y cultura del norte",
        "Día 3: Windsurf, vino y puesta de sol"
      ],
      "introduction": "¿Solo tienes tres días en Karpathos? Este itinerario de gran intención está diseñado para mostrarle lo mejor que la isla tiene para ofrecer, desde islas deshabitadas hasta montañas culturales y bahías deportivas.",
      "sections": [
        {
          "heading": "Día 1: Excursión en barco a la isla de Saria",
          "text": "Pase su primer día en un viaje en barco a la isla de Saria. Practique snorkel en cuevas azules, camine por el rocoso cañón pirata y nade en aguas puras."
        },
        {
          "heading": "Día 2: Pueblo Olympos y cultura del norte",
          "text": "Conduzca hacia el norte o tome un barco hasta Diafani y luego suba hasta el pueblo de Olympos. Camine por los antiguos callejones de piedra, pruebe la pasta casera Makarounes y explore los antiguos molinos de viento."
        },
        {
          "heading": "Día 3: Windsurf, vino y puesta de sol",
          "text": "Dirígete hacia el sur, hasta Afiartis, para recibir una lección de windsurf por la mañana en Chicken Bay. Por la tarde, disfrute de una cata de vinos en la bodega Scarpanto y termine con una bebida al atardecer en Arkasa."
        }
      ],
      "faqs": [
        {
          "q": "¿Se requiere alquilar un coche en Kárpatos?",
          "a": "Para un viaje de 3 días, recomendamos alquilar un coche para viajar fácilmente entre los pueblos de montaña del norte y las bahías del sur."
        },
        {
          "q": "¿Son suficientes 3 días?",
          "a": "3 días son suficientes para cubrir los aspectos más destacados, pero 5 a 7 días permiten un ritmo mucho más relajado y explorar rutas de senderismo ocultas."
        }
      ]
    },
    "best-hikes-in-karpathos": {
      "slug": "best-hikes-in-karpathos",
      "title": "Las mejores caminatas guiadas y rutas para caminar en Kárpatos",
      "seoTitle": "Excursiones a Kárpatos | Caminatas guiadas y senderos de montaña",
      "description": "Guía de las mejores rutas de senderismo en Karpathos. Camine por la cumbre panorámica de Profitis Ilias, los senderos del valle de Pigadia y las crestas de Lastos con guías locales.",
      "heroImage": "https://images.pexels.com/photos/31846705/pexels-photo-31846705.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Ascenso panorámico al Profitis Ilias",
        "Paseo del Valle de Pigadia",
        "Ruta fuera de lo común de Lastos",
        "Sendero costero de Agia Kyriaki"
      ],
      "introduction": "Con montañas que se elevan a más de 1200 metros directamente sobre el mar, Karpathos es un paraíso para los excursionistas. Los antiguos senderos para burros conectan antiguos asentamientos agrícolas, capillas y playas, y ofrecen espectaculares vistas al mar en cada esquina.",
      "sections": [
        {
          "heading": "Ascenso panorámico al Profitis Ilias",
          "text": "Una caminata moderada de 4 horas desde el pueblo de Aperi hasta la capilla de Profitis Ilias. Ofrece vistas de 360 ​​grados de toda la isla y del mar Egeo circundante."
        },
        {
          "heading": "Paseo del Valle de Pigadia",
          "text": "Un paseo sencillo y pintoresco a través de olivares, antiguos campos agrícolas y bosques de pinos silvestres que rodean la ciudad capital de Pigadia."
        },
        {
          "heading": "Ruta fuera de lo común de Lastos",
          "text": "Camine cerca de Lastos (la meseta más alta de Karpathos) a través de espectaculares paisajes de piedra caliza, matorrales de hierbas y cabañas rústicas de piedra."
        }
      ],
      "faqs": [
        {
          "q": "¿Necesito una guía para hacer senderismo en Karpathos?",
          "a": "Si bien los senderos están marcados, muchos caminos son rocosos y expuestos. Una visita guiada garantiza una navegación segura, hechos históricos locales y conocimientos botánicos."
        },
        {
          "q": "¿Qué debo ponerme?",
          "a": "Debido a la piedra caliza afilada, es esencial llevar botas de montaña resistentes o zapatos de montaña. Lleva mucha agua, bloqueador solar y una cazadora."
        }
      ],
      "relatedCategory": "Hiking Tours"
    },
    "windsurfing-in-karpathos": {
      "slug": "windsurfing-in-karpathos",
      "title": "La guía definitiva para practicar windsurf en Afiartis, Karpathos",
      "seoTitle": "Windsurf Kárpatos | Lecciones y lugares en Chicken Bay",
      "description": "Aprende sobre windsurf en Afiartis, Karpathos. Guía de lecciones para principiantes en Chicken Bay, windsurf de velocidad avanzada y los mejores centros de alquiler.",
      "heroImage": "https://images.pexels.com/photos/12376921/pexels-photo-12376921.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Por qué Afiartis es mundialmente reconocida",
        "Chicken Bay: el santuario para principiantes",
        "Gun Bay y Devil's Bay: velocidad avanzada",
        "Wing foiling y kitesurf"
      ],
      "introduction": "La bahía de Afiartis, en el sur de Karpathos, es legendaria entre los amantes del windsurf. Impulsado por los fuertes vientos de verano Meltemi que comprimen los valles de la isla, ofrece condiciones de viento excepcionalmente confiables de mayo a octubre.",
      "sections": [
        {
          "heading": "Por qué Afiartis es mundialmente reconocida",
          "text": "El viento sopla de lado a lado de la costa a una velocidad constante de 20 a 35 nudos casi todos los días en verano. Debido a que el viento sopla a través de la tierra, las bahías permanecen planas sin grandes oleajes, creando condiciones óptimas de velocidad."
        },
        {
          "heading": "Chicken Bay: el santuario para principiantes",
          "text": "Una laguna cerrada con aguas arenosas poco profundas que llegan hasta las rodillas. Está protegido de las ráfagas de viento más fuertes, lo que lo convierte en el lugar más seguro de Grecia para subirse a una tabla y aprender a hacer windsurf."
        },
        {
          "heading": "Bahía Gun y Bahía del Diablo",
          "text": "Fuera de la laguna, Devil's Bay presenta viento extremo y agua plana, ideal para estilo libre, windsurf de velocidad y foiling avanzado."
        }
      ],
      "faqs": [
        {
          "q": "¿Cuándo es la temporada de viento en Kárpatos?",
          "a": "Los vientos más fuertes soplan desde mediados de junio hasta principios de septiembre, pero las estaciones de windsurf funcionan de mayo a octubre."
        },
        {
          "q": "¿Pueden los niños aprender a hacer windsurf?",
          "a": "Sí, las aguas planas y poco profundas de Chicken Bay son muy recomendables para que niños de hasta 6 años aprendan con velas pequeñas y livianas."
        }
      ],
      "relatedCategory": "Adventure & Watersports"
    },
    "saria-island-karpathos": {
      "slug": "saria-island-karpathos",
      "title": "Guía de la isla de Saria: el desierto deshabitado de Karpathos",
      "seoTitle": "Isla Saria Kárpatos | Caminatas guiadas y excursiones en barco",
      "description": "Explora la isla de Saria, cerca de Karpathos. Consejos sobre viajes guiados en barco, snorkel en cuevas azules, caminatas por cañones y ruinas de piratas sarracenos.",
      "heroImage": "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Introducción a Saría",
        "Snorkel en la playa de Palatia",
        "Senderismo por el Cañón de Saría",
        "Las históricas ruinas piratas"
      ],
      "introduction": "La isla Saria es una reserva natural protegida ubicada justo al norte de Karpathos. Alguna vez fue parte de Karpathos, pero fue separada por un terremoto. Deshabitada hoy en día excepto por las cabras pastando y los halcones que visitan sus nidos, Saria ofrece una belleza salvaje.",
      "sections": [
        {
          "heading": "Snorkel en la playa de Palatia",
          "text": "Palatia cuenta con guijarros cristalinos y agua de un azul intenso. Nade dentro de cuevas de roca volcánica para ver corales, anémonas de mar y bancos de peces de colores."
        },
        {
          "heading": "Senderismo por el Cañón de Saría",
          "text": "Una caminata de 45 minutos conduce desde la playa a través de un cañón seco y rocoso. La ruta sube hasta una cresta que domina el archipiélago del norte del Dodecaneso."
        },
        {
          "heading": "Las históricas ruinas piratas",
          "text": "En la cresta, descubra las ruinas de piedra con cúpula de 'Palatia', un asentamiento medieval construido por poblaciones de piratas sarracenos que huían de las incursiones en el continente."
        }
      ],
      "faqs": [
        {
          "q": "¿Cómo llego a la Isla de Saría?",
          "a": "Tome una excursión en barco diaria desde el puerto de Pigadia o Diafani. El paseo en barco dura aproximadamente 1 hora desde Pigadia."
        },
        {
          "q": "¿Hay agua o comida en Saria?",
          "a": "No, Saria no tiene tiendas. Las visitas guiadas incluyen un almuerzo con barbacoa, pero es necesario llevar abundante agua potable y snacks."
        }
      ]
    },
    "olympos-karpathos-day-trip": {
      "slug": "olympos-karpathos-day-trip",
      "title": "Guía de excursión de un día a Olympos Village: historia y tradiciones preservadas",
      "seoTitle": "Excursión de un día a Olimpo y Kárpatos | Guía del pueblo matriarcal",
      "description": "Planifique su viaje de un día al pueblo de Olympos en Karpathos. Descubra tradiciones matriarcales conservadas, antiguos molinos de viento y comida local del Dodecaneso.",
      "heroImage": "https://images.pexels.com/photos/37037773/pexels-photo-37037773.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Olimpos: el matriarcado viviente",
        "Molinos de viento tradicionales y arquitectura",
        "Cómo experimentar el Olimpo",
        "Degustación de pasta Makarounes"
      ],
      "introduction": "El pueblo de Olympos es el sitio cultural más emblemático de Karpathos. Construido sobre una empinada cresta montañosa para esconderse de los piratas medievales, el pueblo permaneció aislado sin carreteras ni electricidad hasta finales del siglo XX, preservando costumbres únicas.",
      "sections": [
        {
          "heading": "Olimpos: el matriarcado viviente",
          "text": "Las mujeres en Olympos desempeñan un papel central en la preservación de las costumbres y la herencia. Todavía visten a diario trajes tradicionales bordados a mano llamados 'kavai', no sólo para los festivales."
        },
        {
          "heading": "Molinos de viento tradicionales y arquitectura",
          "text": "El pueblo está coronado por antiguos molinos de viento de piedra, algunos de los cuales todavía se utilizan para moler cebada. Las casas trepan por los acantilados en un diseño denso frente al atardecer occidental."
        },
        {
          "heading": "Degustación de pasta Makarounes",
          "text": "Visite una taberna local para ver cómo se enrollan, hierven y sirven 'Makarounes' (pasta hecha a mano) frescas con cebollas caramelizadas y queso de cabra local."
        }
      ],
      "faqs": [
        {
          "q": "¿Cuál es la mejor manera de llegar al Olimpo?",
          "a": "Puedes tomar un barco de un día desde Pigadia a Diafani y luego un autobús a Olympos. Como alternativa, puedes conducir por la pintoresca carretera de montaña desde Pigadia."
        },
        {
          "q": "¿El Olimpo es turístico?",
          "a": "Aunque es popular durante el mediodía, Olympos conserva su auténtico carácter agrícola. Una visita guiada lo ayuda a conectarse con los lugareños y comprender la cultura."
        }
      ],
      "relatedCategory": "Culture & Village Tours"
    },
    "best-wellness-experiences-in-karpathos": {
      "slug": "best-wellness-experiences-in-karpathos",
      "title": "El mejor bienestar, masajes y yoga en Karpathos",
      "seoTitle": "Experiencias de bienestar en Kárpatos | Yoga, masajes y spa",
      "description": "Explore las mejores experiencias de bienestar en Karpathos: masajes terapéuticos en Pigadia, curación con sonido en Adia y sesiones privadas de yoga al atardecer.",
      "heroImage": "https://images.pexels.com/photos/34777293/pexels-photo-34777293.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Masaje Terapéutico en Pigadia",
        "Yoga en la naturaleza en Adia",
        "Terapia de sanación con sonido",
        "Rituales de spa con piedras calientes"
      ],
      "introduction": "Los paisajes salvajes de Kárpatos y la tranquila brisa del mar lo convierten en un santuario natural para el bienestar. Desde modernos spas terapéuticos en Pigadia hasta retiros de bienestar fuera de la red en Adia, descubra cómo rejuvenecer su cuerpo y su mente.",
      "sections": [
        {
          "heading": "Masaje Terapéutico en Pigadia",
          "text": "Relájese después de un día de senderismo o windsurf con un masaje de tejido profundo personalizado o una sesión de reflexología terapéutica en la ciudad de Pigadia."
        },
        {
          "heading": "Yoga en la naturaleza en Adia",
          "text": "Experimente yoga al aire libre en plataformas de madera a la sombra de los pinos con vistas a los acantilados y al mar de Adia. Concéntrate en la respiración y la alineación."
        },
        {
          "heading": "Terapia de sanación con sonido",
          "text": "Relájese con las vibraciones de los gongs y cuencos tibetanos, diseñados para liberar tensiones y restablecer el equilibrio mental en un tranquilo entorno forestal."
        }
      ],
      "faqs": [
        {
          "q": "¿Las sesiones de bienestar son privadas?",
          "a": "Sí, organizamos masajes privados, clases de yoga y sesiones de sanación con sonido en su villa, hotel o en lugares apartados al aire libre."
        },
        {
          "q": "¿Podemos reservar paquetes de bienestar?",
          "a": "Sí, ofrecemos paquetes de bienestar personalizados de varios días que combinan yoga, masajes y comidas locales orgánicas."
        }
      ],
      "relatedCategory": "Wellness & Massage"
    },
    "private-group-activities-karpathos": {
      "slug": "private-group-activities-karpathos",
      "title": "Experiencias seleccionadas para grupos privados y villas en Karpathos",
      "seoTitle": "Experiencias de grupos privados en Karpathos | Servicios de villas",
      "description": "Planifique experiencias grupales privadas personalizadas en Karpathos. Ideal para huéspedes de villas, familias y amigos: alquiler de barcos privados, noches de chef privadas y recorridos personalizados.",
      "heroImage": "https://images.pexels.com/photos/8472735/pexels-photo-8472735.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Alquiler de lanchas privadas",
        "Degustación de vinos y cocina en la villa",
        "Visitas guiadas personalizadas a la isla",
        "Jornadas privadas de bienestar"
      ],
      "introduction": "¿Viaja con un grupo de amigos, familiares o se aloja en una villa de lujo? Nos especializamos en crear itinerarios privados personalizados que le traen lo mejor de Karpathos directamente, con transporte privado y soporte premium.",
      "sections": [
        {
          "heading": "Alquiler de lanchas privadas",
          "text": "Alquile un barco privado desde Pigadia para visitar la isla de Saria o las calas del sur según su propio horario. Incluye un menú de almuerzo personalizado y barra libre."
        },
        {
          "heading": "Degustación de vinos y cocina en la villa",
          "text": "Nuestro sumiller y chefs locales acudirán a su villa para organizar una cata de vinos privada y preparar una cena tradicional de los Karpatos con ingredientes orgánicos."
        },
        {
          "heading": "Visitas guiadas personalizadas a la isla",
          "text": "Reserve una minivan privada para explorar pueblos de montaña (Aperi, Volada, Olympos) con un guía local, evitando las aglomeraciones de turistas."
        }
      ],
      "faqs": [
        {
          "q": "¿Organizan recogidas en las villas?",
          "a": "Sí, podemos organizar traslados privados en minivan directamente desde su villa a cualquier barco, ruta de senderismo o lugar de experiencia."
        },
        {
          "q": "¿Cuál es el tamaño mínimo del grupo?",
          "a": "La mayoría de las experiencias de grupos privados requieren un mínimo de 4 a 6 invitados, pero podemos personalizar planes para parejas más pequeñas o familias más numerosas."
        }
      ],
      "relatedCategory": "Private Villa Experiences"
    },
    "things-to-do-near-amoopi-karpathos": {
      "slug": "things-to-do-near-amoopi-karpathos",
      "title": "Las mejores cosas que hacer y actividades cerca de Amoopi, Kárpatos",
      "seoTitle": "Cosas que hacer en Amoopi, Kárpatos | Actividades y snorkel",
      "description": "Explora qué hacer cerca de Amoopi, Karpathos. Guía de las mejores calas para practicar snorkel, rutas de senderismo, restaurantes locales y masajes de bienestar cercanos.",
      "heroImage": "https://images.pexels.com/photos/34777293/pexels-photo-34777293.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Snorkel en las calas de Amoopi",
        "Rutas de senderismo costeras",
        "Bienestar y masajes cerca de Amoopi",
        "Comedor tradicional en taberna"
      ],
      "introduction": "Amoopi es famosa por sus playas limpias y protegidas. Sirve como una base excelente para los turistas que buscan una combinación de tiempo tranquilo en la playa, almuerzos en tabernas locales y exploración al aire libre.",
      "sections": [
        {
          "heading": "Snorkel en las calas de Amoopi",
          "text": "Las formaciones de piedra caliza de Amoopi crean piscinas de roca naturales y calas como Kastelia. Practique snorkel en aguas tranquilas y cristalinas para ver peces del Mediterráneo."
        },
        {
          "heading": "Rutas de senderismo costeras",
          "text": "Camine por los sencillos senderos costeros que conectan Amoopi con las playas cercanas. Perfecto para paseos temprano en la mañana o al final de la tarde durante el atardecer."
        },
        {
          "heading": "Bienestar y masajes cerca de Amoopi",
          "text": "Rejuvenezca con una sesión de masaje en un spa de bienestar cercano o directamente en la comodidad de su villa en Amoopi."
        }
      ],
      "faqs": [
        {
          "q": "¿Amoopi está protegido de los vientos Meltemi?",
          "a": "Sí, las principales calas de Amoopi están orientadas al sur y protegidas por promontorios rocosos, lo que las hace mucho más tranquilas que las bahías de la costa este."
        },
        {
          "q": "¿Hay transporte público disponible desde Amoopi?",
          "a": "Sí, hay un servicio regular de autobús de verano que conecta Amoopi con Pigadia (ciudad de Karpathos), que está a sólo 10 minutos."
        }
      ]
    },
    "things-to-do-near-pigadia-karpathos": {
      "slug": "things-to-do-near-pigadia-karpathos",
      "title": "Las mejores cosas para hacer y tours cerca de Pigadia, Karpathos",
      "seoTitle": "Cosas que hacer en Pigadia, Karpathos | Tours y actividades en barco",
      "description": "La guía completa de actividades cerca de Pigadia (ciudad de Karpathos). Descubra paseos en barco por el puerto, rutas de senderismo, lugares para bucear y degustaciones de miel.",
      "heroImage": "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Paseos en barco por el puerto de Pigadia",
        "Buceo y snorkel",
        "Caminatas por el valle y senderos de montaña",
        "Degustaciones de comida local y miel"
      ],
      "introduction": "Pigadia es la capital y centro principal de Karpathos. Ofrece un animado paseo por el puerto, docenas de restaurantes locales y sirve como puerto de salida principal para todas las excursiones marítimas y viajes en barco.",
      "sections": [
        {
          "heading": "Paseos en barco por el puerto de Pigadia",
          "text": "El muelle principal de Pigadia es donde se realizan excursiones diarias en barco a la isla de Saria, exploraciones de cuevas con fondo de cristal y cruceros por la playa de Apella."
        },
        {
          "heading": "Buceo y snorkel",
          "text": "Pigadia alberga los principales centros de buceo de la isla. Bucee en los túneles de arrecifes volcánicos, los naufragios y las praderas de pastos marinos cercanos."
        },
        {
          "heading": "Caminatas por el valle y senderos de montaña",
          "text": "Siga los antiguos senderos de burros desde Pigadia hasta los olivares de Aperi o a lo largo de la costa hasta la capilla de Agia Kyriaki."
        }
      ],
      "faqs": [
        {
          "q": "¿Dónde puedo aparcar en Pigadia?",
          "a": "Pigadia dispone de aparcamientos públicos gratuitos cerca del puerto principal, que se encuentra a pocos pasos de todos los barcos de excursión."
        },
        {
          "q": "¿Pigadia es buena para la vida nocturna?",
          "a": "Sí, el paseo del puerto está repleto de cafeterías, bares de copas y tabernas tradicionales abiertas hasta altas horas de la noche."
        }
      ]
    },
    "karpathos-water-sports": {
      "slug": "karpathos-water-sports",
      "title": "La guía de deportes acuáticos y buceo en Karpathos",
      "seoTitle": "Karpathos Deportes acuáticos y buceo | Windsurf y buceo",
      "description": "Descubra los deportes acuáticos en Karpathos. Guía de buceo PADI en Pigadia, windsurf en Chicken Bay, foiling y snorkel en lancha rápida.",
      "heroImage": "https://images.pexels.com/photos/13010778/pexels-photo-13010778.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Windsurf y foiling",
        "Buceo y snorkel",
        "Tours de aventura en lancha rápida"
      ],
      "introduction": "Con sus profundas aguas volcánicas y su confiable brisa marina, Karpathos es un importante centro para los deportes acuáticos en el Egeo. Ya sea que quieras navegar, bucear, surfear o deslizarte en hidroalas, aquí encontrarás el mejor equipo e instructores.",
      "sections": [
        {
          "heading": "Windsurf y foiling",
          "text": "La bahía de Afiartis ofrece condiciones para todos los niveles. Los principiantes pueden practicar en las arenas poco profundas de Chicken Bay, mientras que los profesionales viajan en Devil's Bay."
        },
        {
          "heading": "Buceo y snorkel",
          "text": "Descubra los ricos ecosistemas marinos del Dodecaneso. El centro de buceo local ofrece cursos de buceo PADI para principiantes e inmersiones profundas guiadas."
        },
        {
          "heading": "Tours de aventura en lancha rápida",
          "text": "Reserve un recorrido de snorkel en lancha rápida para explorar cuevas marinas, restos de naufragios escondidos y bahías apartadas alrededor de la costa de Pigadia."
        }
      ],
      "faqs": [
        {
          "q": "¿Necesito experiencia previa para bucear?",
          "a": "No, puedes reservar una sesión de 'Descubre el buceo' que incluye entrenamiento en aguas poco profundas similar a una piscina seguido de una inmersión en aguas poco profundas con un instructor."
        },
        {
          "q": "¿Están abiertas las estaciones de deportes acuáticos en octubre?",
          "a": "La mayoría de las estaciones funcionan hasta principios o mediados de octubre, dependiendo de las condiciones climáticas y del viento."
        }
      ],
      "relatedCategory": "Watersports & Diving"
    }
  },
  "fr": {
    "things-to-do-in-karpathos": {
      "slug": "things-to-do-in-karpathos",
      "title": "15 meilleures choses à faire à Karpathos : le guide ultime de l'île",
      "seoTitle": "15 meilleures choses à faire à Karpathos | Meilleures activités et visites",
      "description": "Découvrez les meilleures choses à faire à Karpathos, en Grèce : excursions en bateau sur l'île de Saria, planche à voile à Afiartis, visites d'Olympos, randonnée, plongée et bien-être.",
      "heroImage": "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "1. Faites une excursion en bateau sur l'île de Saria",
        "2. Explorez le village matriarcal d'Olympos",
        "3. Planche à voile à Chicken Bay à Afiartis",
        "4. Plongée sous-marine dans les eaux cristallines",
        "5. Profitez de la dégustation de vins de Scarpanto"
      ],
      "introduction": "Karpathos est l'un des secrets les mieux gardés de Grèce. Située entre la Crète et Rhodes dans le Dodécanèse, cette île spectaculaire offre de hautes crêtes balayées par les vents, des villages anciens et des plages immaculées. Que vous recherchiez des sports nautiques riches en adrénaline, des rituels de spa relaxants ou une immersion culturelle, Karpathos a quelque chose d'unique pour chaque voyageur.",
      "sections": [
        {
          "heading": "1. Faites une excursion en bateau sur l'île de Saria",
          "text": "Séparée du nord de Karpathos par un étroit détroit, Saria est un refuge faunique inhabité. Une croisière en bateau vous permet de parcourir des canyons sauvages, de nager dans des eaux bleu fluo et d'explorer les ruines voûtées d'une colonie de pirates sarrasins."
        },
        {
          "heading": "2. Explorez le village matriarcal d'Olympos",
          "text": "Perché dans les montagnes du nord, le village d’Olympos est un musée vivant. Les femmes portent des costumes traditionnels brodés à la main, parlent un dialecte aux anciennes racines doriques et cuisent du pain dans des fours communs en pierre extérieurs."
        },
        {
          "heading": "3. Planche à voile à Chicken Bay à Afiartis",
          "text": "Connue mondialement pour ses forts vents Meltemi, Afiartis est une plaque tournante de premier plan pour la planche à voile. Chicken Bay présente des eaux plates et peu profondes, parfaites pour les débutants, tandis que Devil's Bay accueille des essais de vitesse pour les cavaliers avancés."
        },
        {
          "heading": "4. Plongée sous-marine dans les eaux cristallines",
          "text": "Les fonds marins volcaniques autour de Pigadia offrent une visibilité exceptionnelle (jusqu'à 30 mètres), des parois profondes, des grottes sous-marines et une riche vie marine comme les mérous, les poulpes et le rare phoque moine de Méditerranée."
        },
        {
          "heading": "5. Profitez de la dégustation de vins de Scarpanto",
          "text": "Visitez un domaine familial traditionnel pour déguster des cépages indigènes comme l'Athiri et le Fokiano. Sirotez du vin en surplomb des vignobles biologiques et des oliveraies pour un goût sensoriel du sol des Karpates."
        }
      ],
      "faqs": [
        {
          "q": "Quel est le meilleur mois pour visiter Karpathos ?",
          "a": "Les meilleurs mois vont de juin à septembre, lorsque toutes les excursions en bateau, les centres de planche à voile et les tavernes locales sont entièrement ouverts."
        },
        {
          "q": "De combien de jours ai-je besoin à Karpathos?",
          "a": "Nous recommandons au moins 5 à 7 jours pour explorer les plages du sud (Afiartis, Amoopi) et randonner dans les villages du nord (Olympos, Diafani)."
        }
      ]
    },
    "best-boat-trips-in-karpathos": {
      "slug": "best-boat-trips-in-karpathos",
      "title": "Meilleures excursions en bateau et excursions en mer à Karpathos",
      "seoTitle": "Meilleures excursions en bateau à Karpathos | Saria et croisières sur la plage",
      "description": "Réservez les meilleures excursions en bateau depuis le port de Pigadia à Karpathos. Explorez l'île de Saria, les grottes bleues et les plages isolées accessibles uniquement par la mer.",
      "heroImage": "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Au départ du port de Pigadia",
        "Excursion dans la nature sauvage de l'île de Saria",
        "Explorateur de grottes en bateau à fond de verre",
        "Croisière d'une journée sur les plages célèbres"
      ],
      "introduction": "Pour vraiment découvrir Karpathos, vous devez la voir depuis la mer. Les falaises abruptes et les criques cachées de l'île signifient que certaines des plages et des ruines historiques les plus spectaculaires ne sont accessibles que par bateau. Au départ du port de Pigadia, ces croisières proposent des itinéraires quotidiens pour tout type de visiteur.",
      "sections": [
        {
          "heading": "Excursion dans la nature sauvage de l'île de Saria",
          "text": "Un voyage incontournable. Montez à bord d'un bateau traditionnel de Pigadia ou Diafani à la plage de Palatia sur l'île de Saria. Faites de la plongée avec tuba dans des grottes volcaniques, faites une randonnée dans un canyon impressionnant jusqu'à un village fantôme et savourez un barbecue frais en bord de mer."
        },
        {
          "heading": "Explorateur de grottes en bateau à fond de verre",
          "text": "Parfait pour les familles. Regardez à travers la quille en verre pour observer la vie marine, puis naviguez jusqu'aux grottes rocheuses côtières pour faire de la plongée en apnée dans des eaux calmes et peu profondes."
        },
        {
          "heading": "Croisière d'une journée sur les plages célèbres",
          "text": "Détendez-vous sur le pont en naviguant vers les plages les plus emblématiques de Karpathos : Apella, Kyra Panagia et Kato Lakkos. Profitez des arrêts baignade et du déjeuner à bord."
        }
      ],
      "faqs": [
        {
          "q": "D'où partent les excursions en bateau à Karpathos ?",
          "a": "La plupart des excursions en bateau partent du port principal de Pigadia (ville de Karpathos), tandis que certaines excursions vers le nord partent de Diafani."
        },
        {
          "q": "Les conditions de mer sont-elles sûres ?",
          "a": "Tous les capitaines de bateau surveillent les vents locaux du Dodécanèse. Les excursions peuvent être reprogrammées si les vagues sont trop hautes, garantissant ainsi une sécurité absolue."
        }
      ],
      "relatedCategory": "Sea & Boat Trips"
    },
    "best-activities-for-families-in-karpathos": {
      "slug": "best-activities-for-families-in-karpathos",
      "title": "Principales activités à Karpathos pour les familles avec enfants",
      "seoTitle": "Activités familiales à Karpathos | Visites et criques adaptées aux enfants",
      "description": "Le guide complet des activités adaptées aux enfants à Karpathos : plages de sable sûres à Amoopi, excursions en bateau à fond de verre, visites apicoles et ateliers créatifs.",
      "heroImage": "https://images.pexels.com/photos/30630904/pexels-photo-30630904.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "1. Snorkeling et sable à Amoopi",
        "2. Ateliers pratiques sur l'art des galets et l'argile",
        "3. Visites de dégustation de miel et d'apiculture",
        "4. Promenades en bateau à fond de verre"
      ],
      "introduction": "Karpathos est une destination exceptionnelle pour les familles à la recherche d'une expérience insulaire grecque sûre et non commercialisée. Avec des criques douces et peu profondes, des habitants accueillants et des ateliers interactifs, les enfants peuvent découvrir la nature et l'histoire tout en s'amusant activement.",
      "sections": [
        {
          "heading": "1. Snorkeling et sable à Amoopi",
          "text": "Amoopi est la station balnéaire la plus familiale de l'île. Les criques comme Mikri Amoopi sont protégées des vents estivaux Meltemi et comportent des entrées sablonneuses peu profondes, idéales pour que les jeunes enfants puissent jouer et plonger en toute sécurité."
        },
        {
          "heading": "2. Ateliers pratiques sur l'art des galets et l'argile",
          "text": "Organisez un atelier créatif de mosaïque, d'argile ou de galets dans le village de montagne traditionnel de Volada. Les enfants peuvent peindre, sculpter et ramener à la maison leurs propres souvenirs artisanaux."
        },
        {
          "heading": "3. Visites de dégustation de miel et d'apiculture",
          "text": "Rencontrez des apiculteurs locaux à Pigadia pour porter des combinaisons de protection, regarder à l'intérieur d'une ruche et goûter au miel de thym pur et sucré fraîchement sorti du nid d'abeilles."
        }
      ],
      "faqs": [
        {
          "q": "Karpathos est-il sans danger pour les enfants ?",
          "a": "Oui, c'est extrêmement sûr. La criminalité est quasiment inexistante et les plages d'Amoopi et de Pigadia disposent de zones calmes idéales pour les enfants."
        },
        {
          "q": "Quelles zones sont les meilleures pour un hébergement familial ?",
          "a": "Amoopi et Pigadia sont fortement recommandées en raison de leur proximité avec des plages peu profondes, des tavernes familiales et des pharmacies."
        }
      ],
      "relatedCategory": "Workshops & Local Craft"
    },
    "karpathos-for-couples": {
      "slug": "karpathos-for-couples",
      "title": "Karpathos romantique : le guide des couples et de la lune de miel",
      "seoTitle": "Karpathos pour les couples | Activités romantiques et couchers de soleil",
      "description": "Planifiez une escapade romantique à Karpathos. Meilleures activités en couple : visites de villages au coucher du soleil, dégustations de vins, rituels de massage à Adia et locations de bateaux privés.",
      "heroImage": "https://images.pexels.com/photos/34777293/pexels-photo-34777293.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Visites du village au coucher du soleil",
        "Dégustation de vins privée",
        "Spa et massage pour couples à Adia",
        "Escapades sur la plage cachée"
      ],
      "introduction": "Pour les couples cherchant à échapper au tourisme de masse bondé, Karpathos offre une romance brute. Ses montagnes spectaculaires, ses plages isolées et sa gastronomie locale constituent le cadre idéal pour des lunes de miel ou des retraites romantiques.",
      "sections": [
        {
          "heading": "Visites du village au coucher du soleil",
          "text": "Promenez-vous dans le village de montagne historique d'Olympos ou regardez le soleil plonger dans la mer Égée depuis les falaises d'Arkasa, suivi d'un dîner aux chandelles."
        },
        {
          "heading": "Dégustation de vins privée",
          "text": "Visitez Scarpanto Winery pour une séance de dégustation privée de vins du Dodécanèse accompagnés de fromages locaux, surplombant les vallées couvertes de vignes."
        },
        {
          "heading": "Spa et massage pour couples à Adia",
          "text": "Détendez-vous avec un rituel de massage aux pierres ou une séance de yoga en couple en plein air dans la paisible vallée bordée de pins d'Adia."
        }
      ],
      "faqs": [
        {
          "q": "Où est le meilleur coucher de soleil à Karpathos?",
          "a": "Le coucher de soleil depuis le village d'Arkasa, ou depuis les hauteurs d'Olympos, offre des vues panoramiques à couper le souffle."
        },
        {
          "q": "Pouvons-nous réserver une excursion en bateau privé ?",
          "a": "Oui, nous organisons des locations de hors-bord privés depuis le port de Pigadia vers des plages isolées avec des menus personnalisés et du matériel de plongée en apnée."
        }
      ],
      "relatedCategory": "Wellness & Massage"
    },
    "what-to-do-in-karpathos-for-3-days": {
      "slug": "what-to-do-in-karpathos-for-3-days",
      "title": "L'itinéraire parfait de 3 jours à Karpathos",
      "seoTitle": "Que faire à Karpathos pendant 3 jours | Itinéraire et points forts",
      "description": "Maximisez 3 jours à Karpathos avec ce guide local sélectionné. Points forts : excursion en bateau à Saria, village d'Olympos, planche à voile Afiartis et dîner à Pigadia.",
      "heroImage": "https://images.pexels.com/photos/31846705/pexels-photo-31846705.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Jour 1 : Excursion en bateau sur l'île de Saria",
        "Jour 2 : Village d'Olympos et culture du Nord",
        "Jour 3 : Planche à voile, vin et coucher de soleil"
      ],
      "introduction": "Vous n'avez que trois jours à Karpathos ? Cet itinéraire à haute intention est conçu pour vous montrer le meilleur de l'île, des îles inhabitées aux montagnes culturelles et aux baies sportives.",
      "sections": [
        {
          "heading": "Jour 1 : Excursion en bateau sur l'île de Saria",
          "text": "Passez votre première journée en excursion en bateau vers l'île de Saria. Faites de la plongée avec tuba dans des grottes bleues, parcourez le canyon rocheux des pirates et nagez dans des eaux pures."
        },
        {
          "heading": "Jour 2 : Village d'Olympos et culture du Nord",
          "text": "Roulez vers le nord ou prenez un bateau jusqu'à Diafani, puis montez jusqu'au village d'Olympos. Promenez-vous dans les anciennes ruelles en pierre, dégustez des pâtes Makarounes faites maison et explorez les vieux moulins à vent."
        },
        {
          "heading": "Jour 3 : Planche à voile, vin et coucher de soleil",
          "text": "Dirigez-vous vers le sud jusqu'à Afiartis pour un cours matinal de planche à voile à Chicken Bay. Dans l'après-midi, profitez d'une dégustation de vin au Scarpanto Winery et terminez avec un verre au coucher du soleil à Arkasa."
        }
      ],
      "faqs": [
        {
          "q": "Une voiture de location est-elle obligatoire à Kárpathos ?",
          "a": "Pour un voyage de 3 jours, nous vous recommandons vivement de louer une voiture pour circuler facilement entre les villages de montagne du nord et les baies du sud."
        },
        {
          "q": "Est-ce que 3 jours suffisent ?",
          "a": "3 jours suffisent pour couvrir les principaux points forts, mais 5 à 7 jours permettent un rythme beaucoup plus détendu et l'exploration de sentiers de randonnée cachés."
        }
      ]
    },
    "best-hikes-in-karpathos": {
      "slug": "best-hikes-in-karpathos",
      "title": "Meilleures randonnées guidées et sentiers pédestres à Karpathos",
      "seoTitle": "Randonnées à Karpathos | Randonnées guidées et sentiers de montagne",
      "description": "Guide des meilleurs sentiers de randonnée de Karpathos. Parcourez le sommet panoramique de Profitis Ilias, les sentiers de la vallée de Pigadia et les crêtes de Lastos avec des guides locaux.",
      "heroImage": "https://images.pexels.com/photos/31846705/pexels-photo-31846705.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Ascension panoramique Profitis Ilias",
        "Promenade dans la vallée de Pigadia",
        "Itinéraire hors des sentiers battus de Lastos",
        "Sentier côtier d'Agia Kyriaki"
      ],
      "introduction": "Avec des montagnes s'élevant à plus de 1 200 mètres directement hors de la mer, Karpathos est un paradis pour les randonneurs. D'anciens sentiers empruntés par des ânes relient d'anciennes colonies agricoles, des chapelles et des plages, offrant des vues spectaculaires sur la mer à chaque tournant.",
      "sections": [
        {
          "heading": "Ascension panoramique Profitis Ilias",
          "text": "Une randonnée modérée de 4 heures du village d'Aperi à la chapelle de Profitis Ilias. Offre une vue à 360 degrés sur toute l'île et la mer Égée environnante."
        },
        {
          "heading": "Promenade dans la vallée de Pigadia",
          "text": "Une promenade facile et pittoresque à travers les oliveraies, les anciens champs agricoles et les forêts de pins sauvages entourant la capitale, Pigadia."
        },
        {
          "heading": "Itinéraire hors des sentiers battus de Lastos",
          "text": "Faites une randonnée près de Lastos (le plus haut plateau de Karpathos) à travers des paysages calcaires spectaculaires, des garrigues herbacées et des cabanes rustiques en pierre."
        }
      ],
      "faqs": [
        {
          "q": "Ai-je besoin d’un guide pour faire une randonnée à Karpathos ?",
          "a": "Bien que les sentiers soient balisés, de nombreux sentiers sont rocailleux et exposés. Une visite guidée garantit une navigation sûre, des faits historiques locaux et des informations botaniques."
        },
        {
          "q": "Que dois-je porter ?",
          "a": "Des chaussures de randonnée ou des chaussures de trail robustes sont essentielles en raison du calcaire tranchant. Apportez beaucoup d'eau, de la crème solaire et un coupe-vent."
        }
      ],
      "relatedCategory": "Hiking Tours"
    },
    "windsurfing-in-karpathos": {
      "slug": "windsurfing-in-karpathos",
      "title": "Le guide ultime de la planche à voile à Afiartis, Karpathos",
      "seoTitle": "Planche à voile Karpathos | Cours et spots à Chicken Bay",
      "description": "Apprenez-en davantage sur la planche à voile à Afiartis, Karpathos. Guide des cours pour débutants à Chicken Bay, de la planche à voile de vitesse avancée et des meilleurs centres de location.",
      "heroImage": "https://images.pexels.com/photos/12376921/pexels-photo-12376921.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Pourquoi Afiartis est mondialement connu",
        "Chicken Bay : le sanctuaire des débutants",
        "Gun Bay et Devil's Bay : vitesse avancée",
        "Wing Foil et Kite Surf"
      ],
      "introduction": "La baie d'Afiartis, dans le sud de Karpathos, est légendaire parmi les véliplanchistes. Propulsé par les forts vents estivaux Meltemi qui se propagent dans les vallées de l'île, il offre des conditions de vent exceptionnellement fiables de mai à octobre.",
      "sections": [
        {
          "heading": "Pourquoi Afiartis est mondialement connu",
          "text": "Le vent souffle side-shore à une vitesse constante de 20 à 35 nœuds presque tous les jours en été. Parce que le vent souffle sur les terres, les baies restent plates, sans grosse houle, créant des conditions de vitesse optimales."
        },
        {
          "heading": "Chicken Bay : le sanctuaire des débutants",
          "text": "Un lagon fermé avec de l'eau sablonneuse peu profonde jusqu'aux genoux. Il est abrité des rafales de vent les plus fortes, ce qui en fait l'endroit le plus sûr de Grèce pour monter sur une planche et apprendre la planche à voile."
        },
        {
          "heading": "Baie des Guns et Baie du Diable",
          "text": "En dehors du lagon, Devil's Bay présente des vents extrêmes et des eaux calmes, idéales pour le freestyle, la planche à voile rapide et le wing foil avancé."
        }
      ],
      "faqs": [
        {
          "q": "Quelle est la saison du vent à Karpathos?",
          "a": "Les vents les plus forts soufflent de mi-juin à début septembre, mais les stations de planche à voile fonctionnent de mai à octobre."
        },
        {
          "q": "Les enfants peuvent-ils apprendre la planche à voile ?",
          "a": "Oui, les eaux plates et peu profondes de Chicken Bay sont fortement recommandées aux enfants dès l'âge de 6 ans pour apprendre avec de petites voiles légères."
        }
      ],
      "relatedCategory": "Adventure & Watersports"
    },
    "saria-island-karpathos": {
      "slug": "saria-island-karpathos",
      "title": "Guide de l'île de Saria : la nature sauvage inhabitée de Karpathos",
      "seoTitle": "Île de Saria Karpathos | Randonnées guidées et excursions en bateau",
      "description": "Explore Saria Island near Karpathos. Tips on guided boat trips, snorkeling in blue caves, canyon hiking, and Saracen pirate ruins.",
      "heroImage": "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Introduction to Saria",
        "Snorkeling at Palatia Beach",
        "Hiking the Canyon of Saria",
        "The Historic Pirate Ruins"
      ],
      "introduction": "Saria Island is a protected nature reserve located just north of Karpathos. It was once part of Karpathos but separated by an earthquake. Uninhabited today except for grazing goats and visiting nesting falcons, Saria offers wild beauty.",
      "sections": [
        {
          "heading": "Snorkeling at Palatia Beach",
          "text": "Palatia présente des galets cristallins et une eau d'un bleu profond. Nagez dans des grottes de roche volcanique pour observer des coraux, des anémones de mer et des bancs de poissons colorés."
        },
        {
          "heading": "Randonnée dans le canyon de Saria",
          "text": "Une randonnée de 45 minutes mène de la plage à un canyon rocheux et sec. L'itinéraire grimpe jusqu'à une crête surplombant l'archipel du nord du Dodécanèse."
        },
        {
          "heading": "Les ruines historiques des pirates",
          "text": "Sur la crête, découvrez les ruines en pierre du dôme de « Palatia », une colonie médiévale construite par des populations de pirates sarrasins fuyant les raids du continent."
        }
      ],
      "faqs": [
        {
          "q": "Comment se rendre à l'île de Saria?",
          "a": "Prenez un bateau d'excursion quotidien depuis le port de Pigadia ou de Diafani. Le trajet en bateau dure environ 1 heure depuis Pigadia."
        },
        {
          "q": "Y a-t-il de l’eau ou de la nourriture à Saria ?",
          "a": "Non, Saria n'a pas de magasins. Les visites guidées comprennent un déjeuner barbecue, mais vous devez apporter beaucoup d'eau potable et des collations."
        }
      ]
    },
    "olympos-karpathos-day-trip": {
      "slug": "olympos-karpathos-day-trip",
      "title": "Guide d'excursion d'une journée au village d'Olympos : histoire et traditions préservées",
      "seoTitle": "Excursion d'une journée à Olympos Karpathos | Guide du village matriarcal",
      "description": "Planifiez votre excursion d'une journée au village d'Olympos à Karpathos. Découvrez les traditions matriarcales préservées, les anciens moulins à vent et la cuisine locale du Dodécanèse.",
      "heroImage": "https://images.pexels.com/photos/37037773/pexels-photo-37037773.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Olympos : le matriarcat vivant",
        "Moulins à vent et architecture traditionnels",
        "Comment découvrir Olympos",
        "Dégustation de pâtes Makarounes"
      ],
      "introduction": "Le village d'Olympos est le site culturel le plus emblématique de Karpathos. Construit sur une crête de montagne escarpée pour se cacher des pirates médiévaux, le village est resté isolé sans routes ni électricité jusqu'à la fin du XXe siècle, préservant ainsi des coutumes uniques.",
      "sections": [
        {
          "heading": "Olympos : le matriarcat vivant",
          "text": "Les femmes d’Olympos jouent un rôle central dans la préservation des coutumes et de l’héritage. Ils portent encore quotidiennement des tenues traditionnelles brodées à la main appelées «kavai», et pas seulement pour les festivals."
        },
        {
          "heading": "Moulins à vent et architecture traditionnels",
          "text": "Le village est couronné de vieux moulins à vent en pierre, dont certains servent encore à moudre l'orge. Les maisons escaladent les falaises selon un agencement dense face au coucher de soleil occidental."
        },
        {
          "heading": "Dégustation de pâtes Makarounes",
          "text": "Visitez une taverne locale pour regarder des « Makarounes » fraîches (pâtes faites à la main) roulées, bouillies et servies avec des oignons caramélisés et du fromage de chèvre local."
        }
      ],
      "faqs": [
        {
          "q": "Quelle est la meilleure façon de se rendre à Olympos?",
          "a": "Vous pouvez prendre un bateau d’excursion d’une journée de Pigadia à Diafani, puis un bus pour Olympos. Alternativement, vous pouvez emprunter la route de montagne pittoresque depuis Pigadia."
        },
        {
          "q": "Olympos est-il touristique ?",
          "a": "Bien que populaire à midi, Olympos conserve son caractère agricole authentique. Une visite guidée vous aide à vous connecter avec les habitants et à comprendre la culture."
        }
      ],
      "relatedCategory": "Culture & Village Tours"
    },
    "best-wellness-experiences-in-karpathos": {
      "slug": "best-wellness-experiences-in-karpathos",
      "title": "Meilleurs bien-être, massages et yoga à Karpathos",
      "seoTitle": "Expériences de bien-être à Karpathos | Yoga, massages et spas",
      "description": "Découvrez les meilleures expériences de bien-être à Karpathos : massage thérapeutique à Pigadia, guérison sonore à Adia et séances privées de yoga au coucher du soleil.",
      "heroImage": "https://images.pexels.com/photos/34777293/pexels-photo-34777293.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Massage Thérapeutique à Pigadia",
        "Yoga nature à Adia",
        "Thérapie de guérison sonore",
        "Rituels de spa aux pierres chaudes"
      ],
      "introduction": "Les paysages sauvages de Karpathos et l'air marin tranquille en font un sanctuaire naturel pour le bien-être. Des spas thérapeutiques modernes de Pigadia aux retraites de bien-être hors réseau à Adia, découvrez comment rajeunir votre corps et votre esprit.",
      "sections": [
        {
          "heading": "Massage Thérapeutique à Pigadia",
          "text": "Détendez-vous après une journée de randonnée ou de planche à voile avec un massage des tissus profonds sur mesure ou une séance de réflexologie thérapeutique dans la ville de Pigadia."
        },
        {
          "heading": "Yoga nature à Adia",
          "text": "Faites du yoga en plein air sur des plates-formes en bois ombragées de pins surplombant les falaises et la mer d'Adia. Concentrez-vous sur la respiration et l’alignement."
        },
        {
          "heading": "Thérapie de guérison sonore",
          "text": "Détendez-vous aux vibrations des bols chantants et des gongs tibétains, conçus pour relâcher les tensions et rétablir l'équilibre mental dans un cadre forestier calme."
        }
      ],
      "faqs": [
        {
          "q": "Les séances de bien-être sont-elles privées ?",
          "a": "Oui, nous organisons des massages privés, des cours de yoga et des séances de guérison sonore dans votre villa, votre hôtel ou dans des lieux extérieurs isolés."
        },
        {
          "q": "Pouvons-nous réserver des forfaits bien-être ?",
          "a": "Oui, nous proposons des forfaits bien-être personnalisés sur plusieurs jours combinant yoga, massage et repas locaux bio."
        }
      ],
      "relatedCategory": "Wellness & Massage"
    },
    "private-group-activities-karpathos": {
      "slug": "private-group-activities-karpathos",
      "title": "Expériences de groupe et de villa privées organisées à Karpathos",
      "seoTitle": "Expériences de groupe privé à Karpathos | Services des villas",
      "description": "Planifiez des expériences de groupe privées personnalisées à Karpathos. Idéal pour les invités de la villa, les familles et les amis : locations de bateaux privés, soirées de chefs privés et visites personnalisées.",
      "heroImage": "https://images.pexels.com/photos/8472735/pexels-photo-8472735.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Chartes de hors-bord privés",
        "Dégustation de vins et cuisine dans la villa",
        "Visites guidées personnalisées de l'île",
        "Journées Privées Bien-Être"
      ],
      "introduction": "Vous voyagez avec un groupe d'amis, en famille ou séjournez dans une villa de luxe ? Nous sommes spécialisés dans la création d'itinéraires privés personnalisés qui vous apportent directement le meilleur de Karpathos, avec un transport privé et un support premium.",
      "sections": [
        {
          "heading": "Chartes de hors-bord privés",
          "text": "Louez un bateau privé depuis Pigadia pour visiter l'île de Saria ou les criques du sud selon votre propre horaire. Comprend un menu de déjeuner personnalisé et un bar ouvert."
        },
        {
          "heading": "Dégustation de vins et cuisine dans la villa",
          "text": "Notre sommelier et nos chefs locaux viendront dans votre villa pour organiser une dégustation de vins privée et préparer un dîner traditionnel des Karpates à base d'ingrédients biologiques."
        },
        {
          "heading": "Visites guidées personnalisées de l'île",
          "text": "Réservez un minibus privé pour explorer les villages de montagne (Aperi, Volada, Olympos) avec un guide local, en évitant les foules de touristes."
        }
      ],
      "faqs": [
        {
          "q": "Organisez-vous une prise en charge à la villa ?",
          "a": "Oui, nous pouvons organiser des transferts privés en minibus directement de votre villa vers n'importe quel bateau, sentier de randonnée ou lieu d'expérience."
        },
        {
          "q": "Quelle est la taille minimale du groupe ?",
          "a": "La plupart des expériences de groupe privées nécessitent un minimum de 4 à 6 personnes, mais nous pouvons personnaliser des plans pour des couples plus petits ou des familles plus nombreuses."
        }
      ],
      "relatedCategory": "Private Villa Experiences"
    },
    "things-to-do-near-amoopi-karpathos": {
      "slug": "things-to-do-near-amoopi-karpathos",
      "title": "Meilleures choses à faire et activités près de Amoopi, Karpathos",
      "seoTitle": "Activités à Amoopi, Karpathos | Activités et plongée en apnée",
      "description": "Découvrez ce qu'il faut faire près d'Amoopi, Karpathos. Guide des meilleures criques de plongée en apnée, sentiers de randonnée, restaurants locaux et massages bien-être à proximité.",
      "heroImage": "https://images.pexels.com/photos/34777293/pexels-photo-34777293.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Plongée en apnée dans les criques d'Amoopi",
        "Sentiers de randonnée côtiers",
        "Bien-être et massage près d'Amoopi",
        "Dîner dans une taverne traditionnelle"
      ],
      "introduction": "Amoopi est célèbre pour ses plages abritées et claires. Il constitue une excellente base pour les touristes à la recherche d'un mélange de temps tranquille à la plage, de déjeuners dans une taverne locale et d'exploration en plein air.",
      "sections": [
        {
          "heading": "Plongée en apnée dans les criques d'Amoopi",
          "text": "Les formations calcaires d'Amoopi créent des piscines rocheuses naturelles et des criques comme Kastelia. Faites de la plongée avec tuba dans des eaux calmes et cristallines pour observer les poissons méditerranéens."
        },
        {
          "heading": "Sentiers de randonnée côtiers",
          "text": "Parcourez les sentiers côtiers faciles reliant Amoopi aux plages voisines. Parfait pour les promenades tôt le matin ou en fin d'après-midi au coucher du soleil."
        },
        {
          "heading": "Bien-être et massage près d'Amoopi",
          "text": "Ressourcez-vous avec une séance de massage dans un spa bien-être à proximité ou directement dans le confort de votre villa Amoopi."
        }
      ],
      "faqs": [
        {
          "q": "Amoopi est-il protégé des vents de Meltemi ?",
          "a": "Oui, les principales criques d'Amoopi sont exposées au sud et protégées par des promontoires rocheux, ce qui les rend beaucoup plus calmes que les baies de la côte est."
        },
        {
          "q": "Les transports en commun sont-ils disponibles depuis Amoopi ?",
          "a": "Oui, il existe un service de bus régulier en été reliant Amoopi à Pigadia (ville de Karpathos), qui se trouve à seulement 10 minutes."
        }
      ]
    },
    "things-to-do-near-pigadia-karpathos": {
      "slug": "things-to-do-near-pigadia-karpathos",
      "title": "Meilleures choses à faire et visites près de Pigadia, Karpathos",
      "seoTitle": "Activités à Pigadia, Karpathos | Excursions et activités en bateau",
      "description": "Le guide complet des activités près de Pigadia (ville de Karpathos). Découvrez des excursions en bateau dans le port, des sentiers de randonnée, des sites de plongée et des dégustations de miel.",
      "heroImage": "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Excursions en bateau dans le port de Pigadia",
        "Plongée sous-marine et snorkeling",
        "Randonnées dans la vallée et sentiers de montagne",
        "Dégustations de produits locaux et de miel"
      ],
      "introduction": "Pigadia est la capitale et le centre principal de Karpathos. Il offre une promenade portuaire animée, des dizaines de restaurants locaux et sert de principal port de départ pour toutes les excursions en mer et en bateau.",
      "sections": [
        {
          "heading": "Excursions en bateau dans le port de Pigadia",
          "text": "La jetée principale de Pigadia est l'endroit où vous embarquerez pour des excursions quotidiennes en bateau vers l'île de Saria, des explorateurs de grottes à fond de verre et des croisières sur la plage d'Apella."
        },
        {
          "heading": "Plongée sous-marine et snorkeling",
          "text": "Pigadia abrite les principaux centres de plongée de l'île. Plongez dans les tunnels des récifs volcaniques, les épaves et les herbiers marins à proximité."
        },
        {
          "heading": "Randonnées dans la vallée et sentiers de montagne",
          "text": "Suivez les anciens sentiers équestres depuis Pigadia jusqu'aux oliveraies d'Aperi ou le long de la côte jusqu'à la chapelle Agia Kyriaki."
        }
      ],
      "faqs": [
        {
          "q": "Où puis-je me garer à Pigadia ?",
          "a": "Pigadia dispose de parkings publics gratuits à proximité du port principal, à quelques pas de tous les bateaux d'excursion."
        },
        {
          "q": "Pigadia est-il bon pour la vie nocturne ?",
          "a": "Oui, la promenade du port est bordée de cafés, de bars à cocktails et de tavernes traditionnelles ouvertes tard dans la nuit."
        }
      ]
    },
    "karpathos-water-sports": {
      "slug": "karpathos-water-sports",
      "title": "Le guide des sports nautiques et de la plongée à Karpathos",
      "seoTitle": "Karpathos Sports nautiques et plongée | Planche à voile et plongée sous-marine",
      "description": "Découvrez les sports nautiques à Karpathos. Guide de plongée sous-marine PADI à Pigadia, planche à voile à Chicken Bay, wing foil et plongée en apnée en hors-bord.",
      "heroImage": "https://images.pexels.com/photos/13010778/pexels-photo-13010778.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Planche à voile et Wing Foil",
        "Plongée sous-marine et snorkeling",
        "Tours d'aventure en hors-bord"
      ],
      "introduction": "Avec ses eaux volcaniques profondes et ses brises marines fiables, Karpathos est une plaque tournante majeure des sports nautiques dans la mer Égée. Que vous souhaitiez naviguer, plonger, surfer ou glisser sur des hydroptères, voici où trouver le meilleur matériel et les meilleurs moniteurs.",
      "sections": [
        {
          "heading": "Planche à voile et Wing Foil",
          "text": "La baie d'Afiartis offre des conditions pour tous les niveaux. Les débutants peuvent s'entraîner dans les sables peu profonds de Chicken Bay, tandis que les pros parcourent Devil's Bay."
        },
        {
          "heading": "Plongée sous-marine et snorkeling",
          "text": "Découvrez les riches écosystèmes marins du Dodécanèse. Le centre de plongée local propose des cours de plongée PADI pour débutants et des plongées profondes guidées."
        },
        {
          "heading": "Tours d'aventure en hors-bord",
          "text": "Réservez une excursion de plongée en apnée en hors-bord pour explorer les grottes marines, les épaves cachées et les baies isolées autour de la côte de Pigadia."
        }
      ],
      "faqs": [
        {
          "q": "Ai-je besoin d’une expérience préalable pour la plongée sous-marine ?",
          "a": "Non, vous pouvez réserver une séance « Découverte de la plongée sous-marine » qui comprend une formation en piscine en eaux peu profondes suivie d'une plongée en mer peu profonde avec un instructeur."
        },
        {
          "q": "Les stations de sports nautiques sont-elles ouvertes en octobre ?",
          "a": "La plupart des stations fonctionnent jusqu'au début ou à la mi-octobre, en fonction des conditions météorologiques et du vent."
        }
      ],
      "relatedCategory": "Watersports & Diving"
    }
  },
  "de": {
    "things-to-do-in-karpathos": {
      "slug": "things-to-do-in-karpathos",
      "title": "Die 15 besten Aktivitäten auf Karpathos: Der ultimative Inselführer",
      "seoTitle": "Die 15 besten Aktivitäten auf Karpathos | Top-Aktivitäten und Touren",
      "description": "Entdecken Sie die besten Aktivitäten in Karpathos, Griechenland: Bootsfahrten zur Insel Saria, Windsurfen in Afiartis, Olympos-Touren, Wandern, Tauchen und Wellness.",
      "heroImage": "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "1. Machen Sie eine Bootsfahrt zur Insel Saria",
        "2. Erkunden Sie das Matriarchalische Dorf Olympos",
        "3. Windsurfen in der Chicken Bay in Afiartis",
        "4. Tauchen in kristallklarem Wasser",
        "5. Genießen Sie eine Scarpanto-Weinprobe"
      ],
      "introduction": "Karpathos ist eines der bestgehüteten Geheimnisse Griechenlands. Diese dramatische Insel liegt zwischen Kreta und Rhodos im Dodekanes und bietet hohe, windgepeitschte Bergrücken, alte Dörfer und unberührte Strände. Ganz gleich, ob Sie auf der Suche nach adrenalingeladenen Wassersportarten, entspannenden Spa-Ritualen oder dem Eintauchen in die Kultur sind, Karpathos hat für jeden Reisenden etwas Einzigartiges zu bieten.",
      "sections": [
        {
          "heading": "1. Machen Sie eine Bootsfahrt zur Insel Saria",
          "text": "Saria ist durch eine schmale Meerenge vom nördlichen Karpathos getrennt und ein unbewohntes Naturparadies. Wenn Sie mit dem Boot dorthin fahren, können Sie durch wilde Schluchten wandern, im neonblauen Wasser schwimmen und die gewölbten Ruinen einer sarazenischen Piratensiedlung erkunden."
        },
        {
          "heading": "2. Erkunden Sie das Matriarchalische Dorf Olympos",
          "text": "Das hoch oben in den nördlichen Bergen gelegene Dorf Olympos ist ein lebendiges Museum. Frauen tragen handbestickte traditionelle Kostüme, sprechen einen Dialekt mit alten dorischen Wurzeln und backen Brot in gemeinschaftlichen Steinöfen im Freien."
        },
        {
          "heading": "3. Windsurfen in der Chicken Bay in Afiartis",
          "text": "Afiartis ist weltweit für seine starken Meltemi-Winde bekannt und ein Top-Windsurf-Zentrum. Chicken Bay verfügt über flaches, seichtes Wasser, das sich perfekt für Anfänger eignet, während in Devil's Bay Geschwindigkeitsprüfungen für fortgeschrittene Fahrer stattfinden."
        },
        {
          "heading": "4. Tauchen in kristallklarem Wasser",
          "text": "Der vulkanische Meeresboden rund um Pigadia bietet außergewöhnliche Sichtweiten (bis zu 30 Meter), tiefe Wände, Unterwasserhöhlen und ein reiches Meeresleben wie Zackenbarsche, Kraken und die seltene Mittelmeer-Mönchsrobbe."
        },
        {
          "heading": "5. Genießen Sie eine Scarpanto-Weinprobe",
          "text": "Besuchen Sie ein traditionelles, familiengeführtes Weingut und probieren Sie einheimische Rebsorten wie Athiri und Fokiano. Genießen Sie den Wein mit Blick auf Bio-Weinberge und Olivenhaine und genießen Sie den sinnlichen Geschmack des karpatischen Bodens."
        }
      ],
      "faqs": [
        {
          "q": "Was ist der beste Monat, um Karpathos zu besuchen?",
          "a": "Die besten Monate sind Juni bis September, wenn alle örtlichen Bootsfahrten, Windsurfzentren und Tavernen vollständig geöffnet sind."
        },
        {
          "q": "Wie viele Tage benötige ich auf Karpathos?",
          "a": "Wir empfehlen mindestens 5 bis 7 Tage, um die südlichen Strände (Afiartis, Amoopi) zu erkunden und die nördlichen Dörfer (Olympos, Diafani) zu wandern."
        }
      ]
    },
    "best-boat-trips-in-karpathos": {
      "slug": "best-boat-trips-in-karpathos",
      "title": "Die besten Bootsfahrten und Meeresausflüge in Karpathos",
      "seoTitle": "Beste Bootsausflüge in Karpathos | Saria & Strandkreuzfahrten",
      "description": "Buchen Sie die besten Bootsausflüge vom Hafen Pigadia auf Karpathos. Erkunden Sie die Insel Saria, blaue Höhlen und einsame Strände, die nur über das Meer erreichbar sind.",
      "heroImage": "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Abfahrt vom Hafen von Pigadia",
        "Ausflug in die Wildnis der Insel Saria",
        "Höhlenforscher mit Glasbodenboot",
        "Ganztägige Kreuzfahrt zu berühmten Stränden"
      ],
      "introduction": "Um Karpathos wirklich zu erleben, müssen Sie es vom Meer aus betrachten. Aufgrund der steilen Klippen und versteckten Buchten der Insel sind einige der spektakulärsten Strände und historischen Ruinen nur mit dem Boot erreichbar. Diese Kreuzfahrten starten im Hafen von Pigadia und bieten tägliche Routen für jeden Besuchertyp.",
      "sections": [
        {
          "heading": "Ausflug in die Wildnis der Insel Saria",
          "text": "Eine Reise, die auf Ihrer Wunschliste steht. Steigen Sie in ein traditionelles Boot von Pigadia oder Diafani zum Strand Palatia auf der Insel Saria. Schnorcheln Sie in Vulkanhöhlen, wandern Sie durch eine beeindruckende Schlucht zu einem Geisterdorf und genießen Sie ein frisches Barbecue am Meer."
        },
        {
          "heading": "Höhlenforscher mit Glasbodenboot",
          "text": "Perfekt für Familien. Schauen Sie durch den Glaskiel, um das Meeresleben zu beobachten, und fahren Sie dann zu den Felshöhlen an der Küste, um in seichten, ruhigen Gewässern zu schnorcheln."
        },
        {
          "heading": "Ganztägige Kreuzfahrt zu berühmten Stränden",
          "text": "Entspannen Sie sich an Deck, während Sie zu den berühmtesten Stränden von Karpathos segeln: Apella, Kyra Panagia und Kato Lakkos. Genießen Sie Badestopps und Mittagessen an Bord."
        }
      ],
      "faqs": [
        {
          "q": "Wo starten Bootsfahrten auf Karpathos?",
          "a": "Die meisten Bootsfahrten starten am Haupthafen in Pigadia (Karpathos-Stadt), während einige Ausflüge in den Norden von Diafani aus starten."
        },
        {
          "q": "Sind die Meeresbedingungen sicher?",
          "a": "Alle Bootskapitäne überwachen die lokalen Dodekanes-Winde. Bei zu hohem Wellengang können Ausflüge verschoben werden, um absolute Sicherheit zu gewährleisten."
        }
      ],
      "relatedCategory": "Sea & Boat Trips"
    },
    "best-activities-for-families-in-karpathos": {
      "slug": "best-activities-for-families-in-karpathos",
      "title": "Top-Aktivitäten in Karpathos für Familien mit Kindern",
      "seoTitle": "Familienaktivitäten in Karpathos | Kinderfreundliche Touren und Buchten",
      "description": "Der komplette Leitfaden für kinderfreundliche Aktivitäten auf Karpathos: sichere Sandstrände in Amoopi, Fahrten mit Glasbodenbooten, Imkereitouren und kreative Workshops.",
      "heroImage": "https://images.pexels.com/photos/30630904/pexels-photo-30630904.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "1. Schnorcheln und Sand in Amoopi",
        "2. Praktische Kieselkunst- und Ton-Workshops",
        "3. Honigverkostungs- und Imkereitouren",
        "4. Fahrten mit dem Glasbodenboot"
      ],
      "introduction": "Karpathos ist ein außergewöhnliches Reiseziel für Familien, die ein sicheres, nicht kommerzialisiertes griechisches Inselerlebnis suchen. Mit sanften, flachen Buchten, einladenden Einheimischen und interaktiven Workshops können Kinder etwas über Natur und Geschichte lernen und gleichzeitig aktiven Spaß haben.",
      "sections": [
        {
          "heading": "1. Schnorcheln und Sand in Amoopi",
          "text": "Amoopi ist der familienfreundlichste Ferienort der Insel. Buchten wie Mikri Amoopi sind vor den Meltemi-Winden im Sommer geschützt und verfügen über flache, sandige Eingänge, die sich ideal für kleine Kinder zum sicheren Spielen und Schnorcheln eignen."
        },
        {
          "heading": "2. Praktische Kieselkunst- und Ton-Workshops",
          "text": "Veranstalten Sie einen kreativen Mosaik-, Ton- oder Kiesel-Workshop im traditionellen Bergdorf Volada. Kinder können malen, formen und ihre eigenen handgefertigten Souvenirs mit nach Hause nehmen."
        },
        {
          "heading": "3. Honigverkostungs- und Imkereitouren",
          "text": "Treffen Sie lokale Imker in Pigadia, um Schutzanzüge zu tragen, einen Blick in einen Bienenstock zu werfen und süßen, reinen Thymianhonig frisch aus der Wabe zu probieren."
        }
      ],
      "faqs": [
        {
          "q": "Ist Karpathos für Kinder sicher?",
          "a": "Ja, es ist äußerst sicher. Kriminalität gibt es praktisch nicht und die Strände in Amoopi und Pigadia verfügen über ruhige Bereiche, die ideal für Kinder sind."
        },
        {
          "q": "Welche Gegenden eignen sich am besten für Familienunterkünfte?",
          "a": "Amoopi und Pigadia sind aufgrund ihrer unmittelbaren Nähe zu flachen Stränden, Familientavernen und Apotheken sehr zu empfehlen."
        }
      ],
      "relatedCategory": "Workshops & Local Craft"
    },
    "karpathos-for-couples": {
      "slug": "karpathos-for-couples",
      "title": "Romantisches Karpathos: Der Leitfaden für Paare und Flitterwochen",
      "seoTitle": "Karpathos für Paare | Romantische Aktivitäten und Sonnenuntergänge",
      "description": "Planen Sie einen romantischen Kurzurlaub auf Karpathos. Beste Aktivitäten für Paare: Dorfrundfahrten bei Sonnenuntergang, Weinproben, Massagerituale in Adia und private Bootscharter.",
      "heroImage": "https://images.pexels.com/photos/34777293/pexels-photo-34777293.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Sunset Village-Touren",
        "Private Weinprobe",
        "Spa und Massage für Paare in Adia",
        "Versteckte Strandausflüge"
      ],
      "introduction": "Für Paare, die dem überfüllten Massentourismus entfliehen möchten, bietet Karpathos pure Romantik. Seine dramatischen Berge, einsamen Strände und die lokale Gastronomie bieten die perfekte Kulisse für Flitterwochen oder romantische Rückzugsorte.",
      "sections": [
        {
          "heading": "Sunset Village-Touren",
          "text": "Spazieren Sie durch das historische Bergdorf Olympos oder beobachten Sie von den Klippen von Arkasa aus, wie die Sonne im Ägäischen Meer versinkt, gefolgt von einem Abendessen bei Kerzenschein."
        },
        {
          "heading": "Private Weinprobe",
          "text": "Besuchen Sie das Weingut Scarpanto für eine private Verkostung von Dodekanes-Weinen gepaart mit Käse aus der Region mit Blick auf die mit Weinreben bewachsenen Täler."
        },
        {
          "heading": "Spa und Massage für Paare in Adia",
          "text": "Entspannen Sie sich bei einem Steinmassageritual oder einer Yoga-Sitzung für Paare im Freien im ruhigen, von Pinien gesäumten Tal von Adia."
        }
      ],
      "faqs": [
        {
          "q": "Wo hat man auf Karpathos die beste Aussicht auf den Sonnenuntergang?",
          "a": "Der Sonnenuntergang vom Dorf Arkasa oder der Blick von den Höhen von Olympos bietet atemberaubende Panoramablicke."
        },
        {
          "q": "Können wir eine private Bootsfahrt buchen?",
          "a": "Ja, wir arrangieren private Schnellbootcharter vom Hafen von Pigadia zu einsamen Stränden mit maßgeschneiderten Menüs und Schnorchelausrüstung."
        }
      ],
      "relatedCategory": "Wellness & Massage"
    },
    "what-to-do-in-karpathos-for-3-days": {
      "slug": "what-to-do-in-karpathos-for-3-days",
      "title": "Die perfekte 3-tägige Karpathos-Reiseroute",
      "seoTitle": "Was man in Karpathos für 3 Tage unternehmen kann | Reiseroute und Höhepunkte",
      "description": "Maximieren Sie Ihren 3-Tage-Aufenthalt auf Karpathos mit diesem kuratierten lokalen Reiseführer. Höhepunkte: Saria-Bootsfahrt, Olympos-Dorf, Afiartis-Windsurfen und Pigadia-Essen.",
      "heroImage": "https://images.pexels.com/photos/31846705/pexels-photo-31846705.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Tag 1: Bootsausflug zur Insel Saria",
        "Tag 2: Olympos-Dorf und nördliche Kultur",
        "Tag 3: Windsurfen, Wein und Sonnenuntergang"
      ],
      "introduction": "Sie haben nur drei Tage auf Karpathos? Diese anspruchsvolle Reiseroute soll Ihnen das Beste zeigen, was die Insel zu bieten hat, von unbewohnten Inseln bis hin zu Kulturbergen und Sportbuchten.",
      "sections": [
        {
          "heading": "Tag 1: Bootsausflug zur Insel Saria",
          "text": "Verbringen Sie Ihren ersten Tag mit einer Bootsfahrt zur Insel Saria. Schnorcheln Sie in blauen Höhlen, wandern Sie durch die felsige Piratenschlucht und schwimmen Sie in klarem Wasser."
        },
        {
          "heading": "Tag 2: Olympos-Dorf und nördliche Kultur",
          "text": "Fahren Sie nach Norden oder nehmen Sie ein Boot nach Diafani und steigen Sie dann zum Dorf Olympos auf. Spazieren Sie durch die alten Steingassen, probieren Sie hausgemachte Makarounes-Pasta und erkunden Sie die alten Windmühlen."
        },
        {
          "heading": "Tag 3: Windsurfen, Wein und Sonnenuntergang",
          "text": "Fahren Sie Richtung Süden nach Afiartis, um morgens Windsurfunterricht in Chicken Bay zu nehmen. Genießen Sie am Nachmittag eine Weinprobe im Weingut Scarpanto und genießen Sie zum Abschluss einen Drink bei Sonnenuntergang in Arkasa."
        }
      ],
      "faqs": [
        {
          "q": "Ist in Karpathos ein Mietwagen erforderlich?",
          "a": "Für eine dreitägige Reise empfehlen wir dringend, ein Auto zu mieten, um problemlos zwischen nördlichen Bergdörfern und südlichen Buchten hin und her zu gelangen."
        },
        {
          "q": "Reichen 3 Tage?",
          "a": "3 Tage reichen aus, um die wichtigsten Highlights abzudecken, aber 5–7 Tage ermöglichen ein viel entspannteres Tempo und die Erkundung versteckter Wanderwege."
        }
      ]
    },
    "best-hikes-in-karpathos": {
      "slug": "best-hikes-in-karpathos",
      "title": "Die besten geführten Wanderungen und Spazierwege auf Karpathos",
      "seoTitle": "Karpathos-Wandertouren | Geführte Wanderungen und Bergtouren",
      "description": "Führer zu den besten Wanderwegen auf Karpathos. Wandern Sie mit lokalen Führern auf dem Panoramagipfel des Profitis Ilias, auf den Talpfaden von Pigadia und auf den Lastos-Bergrücken.",
      "heroImage": "https://images.pexels.com/photos/31846705/pexels-photo-31846705.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Profitis Ilias Panoramaaufstieg",
        "Talwanderung von Pigadia",
        "Lastos abseits der ausgetretenen Pfade",
        "Küstenweg Agia Kyriaki"
      ],
      "introduction": "Mit seinen über 1.200 Meter hohen Bergen direkt aus dem Meer ist Karpathos ein Paradies für Wanderer. Alte Eselspfade verbinden alte landwirtschaftliche Siedlungen, Kapellen und Strände und bieten auf Schritt und Tritt atemberaubende Ausblicke auf das Meer.",
      "sections": [
        {
          "heading": "Profitis Ilias Panoramaaufstieg",
          "text": "Eine mittelschwere 4-stündige Wanderung vom Dorf Aperi zur Kapelle von Profitis Ilias. Bietet einen 360-Grad-Blick auf die gesamte Insel und das umliegende Ägäische Meer."
        },
        {
          "heading": "Talwanderung von Pigadia",
          "text": "Ein einfacher, malerischer Spaziergang durch Olivenhaine, alte landwirtschaftliche Felder und wilde Kiefernwälder rund um die Hauptstadt Pigadia."
        },
        {
          "heading": "Lastos abseits der ausgetretenen Pfade",
          "text": "Wandern Sie in der Nähe von Lastos (dem höchsten Plateau von Karpathos) durch dramatische Kalksteinlandschaften, Kräuterbüsche und rustikale Steinhütten."
        }
      ],
      "faqs": [
        {
          "q": "Brauche ich einen Führer zum Wandern auf Karpathos?",
          "a": "Während die Wege markiert sind, sind viele Wege steinig und ausgesetzt. Eine geführte Tour sorgt für sichere Navigation, lokale historische Fakten und botanische Einblicke."
        },
        {
          "q": "Was soll ich anziehen?",
          "a": "Aufgrund des scharfkantigen Kalksteins sind feste Wander- oder Wanderschuhe unerlässlich. Bringen Sie viel Wasser, Sonnencreme und eine Windjacke mit."
        }
      ],
      "relatedCategory": "Hiking Tours"
    },
    "windsurfing-in-karpathos": {
      "slug": "windsurfing-in-karpathos",
      "title": "Der ultimative Leitfaden zum Windsurfen in Afiartis, Karpathos",
      "seoTitle": "Windsurfen Karpathos | Unterricht & Spots in Chicken Bay",
      "description": "Erfahren Sie mehr über Windsurfen in Afiartis, Karpathos. Leitfaden für Anfängerkurse in Chicken Bay, Fortgeschrittenes Speed-Windsurfen und Top-Verleihzentren.",
      "heroImage": "https://images.pexels.com/photos/12376921/pexels-photo-12376921.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Warum Afiartis weltweit bekannt ist",
        "Chicken Bay: Das Zufluchtsort für Anfänger",
        "Gun Bay & Devil's Bay: Erweiterte Geschwindigkeit",
        "Wing-Foiling und Kitesurfen"
      ],
      "introduction": "Die Bucht von Afiartis im Süden von Karpathos ist unter Windsurfern legendär. Angetrieben durch die starken Meltemi-Sommerwinde, die durch die Täler der Insel strömen, bietet es von Mai bis Oktober außergewöhnlich zuverlässige Windbedingungen.",
      "sections": [
        {
          "heading": "Warum Afiartis weltweit bekannt ist",
          "text": "Der Wind weht im Sommer fast täglich seitwärts mit konstanten 20 bis 35 Knoten. Da der Wind über das Land weht, bleiben die Buchten flach und es gibt keinen großen Wellengang, was optimale Geschwindigkeitsbedingungen schafft."
        },
        {
          "heading": "Chicken Bay: Das Zufluchtsort für Anfänger",
          "text": "Eine geschlossene Lagune mit flachem, knietiefem Sandwasser. Es ist vor den stärksten Windböen geschützt und somit der sicherste Ort in Griechenland, um auf einem Brett zu stehen und Windsurfen zu lernen."
        },
        {
          "heading": "Gun Bay und Devil's Bay",
          "text": "Außerhalb der Lagune bietet Devil's Bay extremen Wind und flaches Wasser, ideal für Freestyle, Speed-Windsurfen und fortgeschrittenes Wing-Foilen."
        }
      ],
      "faqs": [
        {
          "q": "Wann ist die Windsaison auf Karpathos?",
          "a": "Die stärksten Winde wehen von Mitte Juni bis Anfang September, Windsurfstationen sind jedoch von Mai bis Oktober in Betrieb."
        },
        {
          "q": "Können Kinder Windsurfen lernen?",
          "a": "Ja, das flache, flache Wasser von Chicken Bay ist für Kinder ab 6 Jahren sehr zu empfehlen, um mit kleinen, leichten Segeln zu lernen."
        }
      ],
      "relatedCategory": "Adventure & Watersports"
    },
    "saria-island-karpathos": {
      "slug": "saria-island-karpathos",
      "title": "Reiseführer zur Insel Saria: Die unbewohnte Wildnis von Karpathos",
      "seoTitle": "Saria-Insel Karpathos | Geführte Wanderungen und Bootsausflüge",
      "description": "Erkunden Sie die Insel Saria in der Nähe von Karpathos. Tipps zu geführten Bootsfahrten, Schnorcheln in blauen Höhlen, Canyon-Wanderungen und sarazenischen Piratenruinen.",
      "heroImage": "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Einführung in Saria",
        "Schnorcheln am Palatia Beach",
        "Wandern im Canyon of Saria",
        "Die historischen Piratenruinen"
      ],
      "introduction": "Die Insel Saria ist ein Naturschutzgebiet nördlich von Karpathos. Es war einst Teil von Karpathos, wurde aber durch ein Erdbeben getrennt. Heute ist Saria bis auf grasende Ziegen und nistende Falken unbewohnt und bietet wilde Schönheit.",
      "sections": [
        {
          "heading": "Schnorcheln am Palatia Beach",
          "text": "Palatia bietet kristallklare Kieselsteine ​​und tiefblaues Wasser. Schwimmen Sie in Höhlen aus Vulkangestein, um Korallen, Seeanemonen und bunte Fischschwärme zu sehen."
        },
        {
          "heading": "Wandern im Canyon of Saria",
          "text": "Eine 45-minütige Wanderung führt vom Strand hinauf durch eine felsige, trockene Schlucht. Die Route führt hinauf zu einem Bergrücken mit Blick auf den nördlichen Dodekanes-Archipel."
        },
        {
          "heading": "Die historischen Piratenruinen",
          "text": "Entdecken Sie auf dem Bergrücken die gewölbten Steinruinen von „Palatia“, einer mittelalterlichen Siedlung, die von sarazenischen Piraten auf der Flucht vor Überfällen auf dem Festland erbaut wurde."
        }
      ],
      "faqs": [
        {
          "q": "Wie komme ich zur Insel Saria?",
          "a": "Nehmen Sie täglich ein Ausflugsboot vom Hafen Pigadia oder Diafani. Die Bootsfahrt ab Pigadia dauert etwa 1 Stunde."
        },
        {
          "q": "Gibt es auf Saria Wasser oder Nahrung?",
          "a": "Nein, Saria hat keine Geschäfte. Zu den geführten Touren gehört ein Mittagsgrill, Sie müssen jedoch ausreichend Trinkwasser und Snacks mitbringen."
        }
      ]
    },
    "olympos-karpathos-day-trip": {
      "slug": "olympos-karpathos-day-trip",
      "title": "Tagesausflugsführer zum Dorf Olympos: Geschichte und erhaltene Traditionen",
      "seoTitle": "Tagesausflug nach Olympos und Karpathos | Matriarchalischer Dorfführer",
      "description": "Planen Sie Ihren Tagesausflug in das Dorf Olympos auf Karpathos. Entdecken Sie erhaltene matriarchale Traditionen, alte Windmühlen und lokale dodekanesische Küche.",
      "heroImage": "https://images.pexels.com/photos/37037773/pexels-photo-37037773.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Olympos: Das lebendige Matriarchat",
        "Traditionelle Windmühlen und Architektur",
        "So erleben Sie Olympos",
        "Verkostung von Makarounes-Nudeln"
      ],
      "introduction": "Das Dorf Olympos ist die berühmteste Kulturstätte von Karpathos. Das Dorf wurde auf einem steilen Bergrücken erbaut, um sich vor mittelalterlichen Piraten zu verstecken. Bis zum Ende des 20. Jahrhunderts blieb es isoliert ohne Straßen oder Elektrizität und bewahrte so seine einzigartigen Bräuche.",
      "sections": [
        {
          "heading": "Olympos: Das lebendige Matriarchat",
          "text": "Frauen in Olympos spielen eine zentrale Rolle bei der Bewahrung von Bräuchen und Erbe. Sie tragen immer noch täglich traditionelle handgestickte Outfits namens „Kavai“, nicht nur zu Festivals."
        },
        {
          "heading": "Traditionelle Windmühlen und Architektur",
          "text": "Das Dorf wird von alten Steinwindmühlen gekrönt, von denen einige noch heute zum Mahlen von Gerste genutzt werden. Die Häuser erklimmen in dichter Anordnung die Klippen mit Blick auf den westlichen Sonnenuntergang."
        },
        {
          "heading": "Verkostung von Makarounes-Nudeln",
          "text": "Besuchen Sie eine örtliche Taverne und beobachten Sie, wie frische „Makarounes“ (handgemachte Nudeln) gerollt, gekocht und mit karamellisierten Zwiebeln und lokalem Ziegenkäse serviert werden."
        }
      ],
      "faqs": [
        {
          "q": "Wie komme ich am besten nach Olympos?",
          "a": "Sie können einen Tagesausflug mit dem Boot von Pigadia nach Diafani unternehmen und dann einen Bus nach Olympos nehmen. Alternativ können Sie von Pigadia aus die malerische Bergstraße fahren."
        },
        {
          "q": "Ist Olympos touristisch?",
          "a": "Olympos ist zwar mittags beliebt, behält aber seinen authentischen landwirtschaftlichen Charakter. Eine geführte Tour hilft Ihnen, mit Einheimischen in Kontakt zu treten und die Kultur zu verstehen."
        }
      ],
      "relatedCategory": "Culture & Village Tours"
    },
    "best-wellness-experiences-in-karpathos": {
      "slug": "best-wellness-experiences-in-karpathos",
      "title": "Bestes Wellness, Massage und Yoga in Karpathos",
      "seoTitle": "Karpathos Wellness-Erlebnisse | Yoga, Massage und Spa",
      "description": "Entdecken Sie die besten Wellness-Erlebnisse auf Karpathos: therapeutische Massage in Pigadia, Klangheilung in Adia und private Yoga-Sitzungen bei Sonnenuntergang.",
      "heroImage": "https://images.pexels.com/photos/34777293/pexels-photo-34777293.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Therapeutische Massage in Pigadia",
        "Naturyoga in Adia",
        "Klangheilungstherapie",
        "Hot-Stone-Spa-Rituale"
      ],
      "introduction": "Die wilden Landschaften und die ruhige Meeresluft machen Karpathos zu einem natürlichen Zufluchtsort für Wellness. Von modernen therapeutischen Spas in Pigadia bis hin zu abgelegenen Wellness-Retreats in Adia – entdecken Sie, wie Sie Ihren Körper und Geist verjüngen können.",
      "sections": [
        {
          "heading": "Therapeutische Massage in Pigadia",
          "text": "Entspannen Sie sich nach einem Tag beim Wandern oder Windsurfen bei einer maßgeschneiderten Tiefengewebsmassage oder einer therapeutischen Reflexzonenmassage-Sitzung in der Stadt Pigadia."
        },
        {
          "heading": "Naturyoga in Adia",
          "text": "Erleben Sie Yoga im Freien auf von Pinien beschatteten Holzplattformen mit Blick auf die Klippen und das Meer von Adia. Konzentrieren Sie sich auf Atemarbeit und Ausrichtung."
        },
        {
          "heading": "Klangheilungstherapie",
          "text": "Entspannen Sie sich bei den Schwingungen tibetischer Klangschalen und Gongs, die Spannungen lösen und das geistige Gleichgewicht in einer ruhigen Waldumgebung wiederherstellen sollen."
        }
      ],
      "faqs": [
        {
          "q": "Sind Wellness-Sitzungen privat?",
          "a": "Ja, wir organisieren private Massagen, Yoga-Kurse und Klangheilungssitzungen in Ihrer Villa, Ihrem Hotel oder an abgelegenen Orten im Freien."
        },
        {
          "q": "Können wir Wellnesspakete buchen?",
          "a": "Ja, wir bieten maßgeschneiderte mehrtägige Wellnesspakete an, die Yoga, Massage und Bio-Mahlzeiten aus der Region kombinieren."
        }
      ],
      "relatedCategory": "Wellness & Massage"
    },
    "private-group-activities-karpathos": {
      "slug": "private-group-activities-karpathos",
      "title": "Kuratierte private Gruppen- und Villa-Erlebnisse in Karpathos",
      "seoTitle": "Private Gruppenerlebnisse in Karpathos | Villa-Dienstleistungen",
      "description": "Planen Sie individuelle private Gruppenerlebnisse auf Karpathos. Ideal für Villengäste, Familien und Freunde: private Bootscharter, private Kochabende und maßgeschneiderte Touren.",
      "heroImage": "https://images.pexels.com/photos/8472735/pexels-photo-8472735.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Private Schnellboot-Charter",
        "Weinprobe und Kochen in der Villa",
        "Individuelle Inselführungen",
        "Private Wellness-Tage"
      ],
      "introduction": "Reisen Sie mit einer Gruppe von Freunden, der Familie oder wohnen Sie in einer Luxusvilla? Wir sind darauf spezialisiert, maßgeschneiderte private Reiserouten zu erstellen, die Ihnen das Beste von Karpathos direkt zu Ihnen bringen, mit privatem Transport und erstklassigem Support.",
      "sections": [
        {
          "heading": "Private Schnellboot-Charter",
          "text": "Chartern Sie ein privates Boot von Pigadia aus, um die Insel Saria oder die südlichen Buchten nach Ihrem eigenen Zeitplan zu besuchen. Beinhaltet ein individuelles Mittagsmenü und eine offene Bar."
        },
        {
          "heading": "Weinprobe und Kochen in der Villa",
          "text": "Unser Sommelier und lokale Köche kommen zu Ihrer Villa, um eine private Weinprobe zu veranstalten und ein traditionelles Karpaten-Abendessen mit Bio-Zutaten zuzubereiten."
        },
        {
          "heading": "Individuelle Inselführungen",
          "text": "Buchen Sie einen privaten Minivan, um mit einem lokalen Führer Bergdörfer (Aperi, Volada, Olympos) zu erkunden und Touristenmassen zu vermeiden."
        }
      ],
      "faqs": [
        {
          "q": "Vereinbaren Sie eine Abholung von Ihrer Villa?",
          "a": "Ja, wir können private Minivan-Transfers direkt von Ihrer Villa zu jedem Boot, Wanderweg oder Erlebnisort organisieren."
        },
        {
          "q": "Was ist die Mindestgruppengröße?",
          "a": "Die meisten privaten Gruppenerlebnisse erfordern eine Mindestteilnehmerzahl von 4 bis 6 Gästen, aber wir können Pläne auch für kleinere Paare oder größere Familien anpassen."
        }
      ],
      "relatedCategory": "Private Villa Experiences"
    },
    "things-to-do-near-amoopi-karpathos": {
      "slug": "things-to-do-near-amoopi-karpathos",
      "title": "Die besten Aktivitäten und Aktivitäten in der Nähe von Amoopi, Karpathos",
      "seoTitle": "Aktivitäten in Amoopi, Karpathos | Aktivitäten und Schnorcheln",
      "description": "Entdecken Sie, was Sie in der Nähe von Amoopi, Karpathos, unternehmen können. Führer zu den besten Schnorchelbuchten, Wanderwegen, lokalen Restaurants und Wellnessmassagen in der Nähe.",
      "heroImage": "https://images.pexels.com/photos/34777293/pexels-photo-34777293.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Schnorcheln in Amoopi Coves",
        "Küstenwanderwege",
        "Wellness & Massage in der Nähe von Amoopi",
        "Traditionelles Tavernenessen"
      ],
      "introduction": "Amoopi ist berühmt für seine geschützten, klaren Strände. Es dient als ausgezeichneter Ausgangspunkt für Touristen, die eine Mischung aus ruhiger Zeit am Strand, Mittagessen in einer örtlichen Taverne und Erkundungen im Freien suchen.",
      "sections": [
        {
          "heading": "Schnorcheln in Amoopi Coves",
          "text": "Die Kalksteinformationen in Amoopi bilden natürliche Felsenbecken und Buchten wie Kastelia. Schnorcheln Sie im ruhigen, kristallklaren Wasser, um mediterrane Fische zu beobachten."
        },
        {
          "heading": "Küstenwanderwege",
          "text": "Wandern Sie auf einfachen Küstenwegen, die Amoopi mit den nahegelegenen Stränden verbinden. Perfekt für Spaziergänge am frühen Morgen oder späten Nachmittag bei Sonnenuntergang."
        },
        {
          "heading": "Wellness & Massage in der Nähe von Amoopi",
          "text": "Erholen Sie sich bei einer Massage in einem nahegelegenen Wellness-Spa oder direkt im Komfort Ihrer Amoopi-Villa."
        }
      ],
      "faqs": [
        {
          "q": "Ist Amoopi vor Meltemi-Winden geschützt?",
          "a": "Ja, die Hauptbuchten von Amoopi sind nach Süden ausgerichtet und durch felsige Landzungen geschützt, wodurch sie viel ruhiger sind als die Buchten an der Ostküste."
        },
        {
          "q": "Gibt es von Amoopi aus öffentliche Verkehrsmittel?",
          "a": "Ja, es gibt eine regelmäßige Busverbindung im Sommer, die Amoopi mit Pigadia (Karpathos-Stadt) verbindet, das nur 10 Minuten entfernt ist."
        }
      ]
    },
    "things-to-do-near-pigadia-karpathos": {
      "slug": "things-to-do-near-pigadia-karpathos",
      "title": "Die besten Aktivitäten und Touren in der Nähe von Pigadia, Karpathos",
      "seoTitle": "Aktivitäten in Pigadia, Karpathos | Bootstouren und Aktivitäten",
      "description": "Der vollständige Leitfaden für Aktivitäten in der Nähe von Pigadia (Karpathos-Stadt). Entdecken Sie Hafenrundfahrten, Wanderwege, Tauchplätze und Honigverkostungen.",
      "heroImage": "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Bootsfahrten im Hafen von Pigadia",
        "Tauchen und Schnorcheln",
        "Talwanderungen und Bergwege",
        "Verkostungen lokaler Speisen und Honig"
      ],
      "introduction": "Pigadia ist die Hauptstadt und wichtigstes Zentrum von Karpathos. Es bietet eine lebhafte Hafenpromenade, Dutzende lokaler Restaurants und dient als Hauptabfahrtshafen für alle Seeausflüge und Bootsfahrten.",
      "sections": [
        {
          "heading": "Bootsfahrten im Hafen von Pigadia",
          "text": "Am Hauptpier in Pigadia können Sie täglich Bootsausflüge zur Insel Saria unternehmen, Höhlenforscher mit Glasboden erkunden und Kreuzfahrten am Strand von Apella unternehmen."
        },
        {
          "heading": "Tauchen und Schnorcheln",
          "text": "Pigadia ist die Heimat der wichtigsten Tauchzentren der Insel. Tauchen Sie in den vulkanischen Rifftunneln, Schiffswracks und Seegraswiesen in der Nähe."
        },
        {
          "heading": "Talwanderungen und Bergwege",
          "text": "Folgen Sie den alten Eselspfaden von Pigadia hinauf in die Olivenhaine von Aperi oder entlang der Küste zur Kapelle Agia Kyriaki."
        }
      ],
      "faqs": [
        {
          "q": "Wo kann ich in Pigadia parken?",
          "a": "Pigadia verfügt über kostenlose öffentliche Parkplätze in der Nähe des Haupthafens, der nur einen kurzen Spaziergang von allen Ausflugsbooten entfernt ist."
        },
        {
          "q": "Ist Pigadia gut für das Nachtleben?",
          "a": "Ja, die Hafenpromenade ist gesäumt von Cafés, Cocktailbars und traditionellen Tavernen, die bis spät in die Nacht geöffnet haben."
        }
      ]
    },
    "karpathos-water-sports": {
      "slug": "karpathos-water-sports",
      "title": "Der Leitfaden für Wassersport und Tauchen auf Karpathos",
      "seoTitle": "Karpathos Wassersport & Tauchen | Windsurfen und Tauchen",
      "description": "Entdecken Sie Wassersport auf Karpathos. Leitfaden für PADI-Tauchen in Pigadia, Windsurfen in Chicken Bay, Wing-Foiling und Schnellboot-Schnorcheln.",
      "heroImage": "https://images.pexels.com/photos/13010778/pexels-photo-13010778.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "toc": [
        "Windsurfen und Wing-Foilen",
        "Tauchen und Schnorcheln",
        "Schnellboot-Abenteuertouren"
      ],
      "introduction": "Mit seinem tiefen vulkanischen Wasser und der zuverlässigen Meeresbrise ist Karpathos ein wichtiger Knotenpunkt für Wassersportarten in der Ägäis. Egal, ob Sie segeln, tauchen, surfen oder auf Tragflächenbooten gleiten möchten, hier finden Sie die beste Ausrüstung und die besten Lehrer.",
      "sections": [
        {
          "heading": "Windsurfen und Wing-Foilen",
          "text": "Die Bucht von Afiartis bietet Bedingungen für alle Niveaus. Anfänger können im flachen Sand von Chicken Bay üben, während Profis in Devil's Bay reiten."
        },
        {
          "heading": "Tauchen und Schnorcheln",
          "text": "Entdecken Sie die reichen Meeresökosysteme des Dodekanes. Das örtliche Tauchzentrum bietet PADI-Entdeckungstauchkurse für Anfänger und geführte Tieftauchgänge an."
        },
        {
          "heading": "Schnellboot-Abenteuertouren",
          "text": "Buchen Sie eine Schnorcheltour mit dem Schnellboot, um Meereshöhlen, versteckte Wracks und abgelegene Buchten rund um die Küste von Pigadia zu erkunden."
        }
      ],
      "faqs": [
        {
          "q": "Benötige ich Vorkenntnisse zum Tauchen?",
          "a": "Nein, Sie können eine „Discover Scuba Diving“-Sitzung buchen, die ein poolähnliches Flachwassertraining gefolgt von einem Tauchgang im flachen Meer mit einem Tauchlehrer umfasst."
        },
        {
          "q": "Sind Wassersportstationen im Oktober geöffnet?",
          "a": "Most stations operate until early or mid-October, depending on weather and wind conditions."
        }
      ],
      "relatedCategory": "Watersports & Diving"
    }
  }
};

export const GUIDES: Record<string, Guide> = TRANSLATED_GUIDES["en"];
