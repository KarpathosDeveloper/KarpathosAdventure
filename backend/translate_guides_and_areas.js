import { writeFileSync, readFileSync } from 'fs';
import { join } from 'path';

// Original English Data
const AREAS_DATA = {
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

const COLLECTIONS_DATA = {
  "sea-days": {
    name: "Sea Days: Boat Trips & Beach Cruises",
    title: "Karpathos Boat Trips & Sea Experiences | Saria, Snorkeling & Beach Cruises",
    description: "Book the best sea experiences in Karpathos. Excursions to Saria Island, glass-bottom boat tours, cave snorkeling, and cruises to Apella and Kyra Panagia.",
    intro: "Step on board to experience the wild beauty of Karpathos from the water. Cruise to the uninhabited reserve of Saria Island, snorkel through ancient volcanic sea caves, or relax on a sun-drenched deck as we sail to secluded pebble beaches only accessible by sea.",
    image: "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
    faqs: [
      { q: "What is the best boat trip in Karpathos?", a: "The Saria Island Guided Tour is highly recommended, featuring canyon hiking, snorkeling in sea caves, and a traditional seaside barbecue." },
      { q: "Where do the boat trips depart from?", a: "Daily cruises and private charters depart from the main harbor in Pigadia (Karpathos Town), with some northern trips starting from Diafani." }
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },
  "private-group-days": {
    name: "Private Group & Villa Experiences",
    title: "Private Group Experiences in Karpathos | Villa Guests, Families & Friends",
    description: "Curated private activities in Karpathos. Perfect for families, wedding groups, and villa guests. Private boat charters and custom day trips.",
    intro: "Traveling with a group of friends, family, or hosting a villa retreat? We specialize in organizing private speedboats, group tours, villa dinners, and team adventures customized to your dates and preferences, complete with private minivans.",
    image: "https://images.pexels.com/photos/8472735/pexels-photo-8472735.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
    faqs: [
      { q: "Can you customize itineraries for large families?", a: "Yes, we build custom day plans combining light hiking, private boat swim stops, and village lunches suitable for all ages." },
      { q: "Do you arrange private villa catering?", a: "Yes, we can send private chefs to prepare traditional dinners or barbecues directly at your villa." }
    ]
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
    ]
  }
};

// Guides Data
const GUIDES = {
  "things-to-do-in-karpathos": {
    slug: "things-to-do-in-karpathos",
    title: "15 Best Things to Do in Karpathos: The Ultimate Island Guide",
    seoTitle: "15 Best Things to Do in Karpathos | Top Activities & Tours",
    description: "Discover the best things to do in Karpathos, Greece: boat trips to Saria Island, windsurfing in Afiartis, Olympos tours, hiking, diving, and wellness.",
    heroImage: "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
    toc: ["1. Take a Boat Trip to Saria Island", "2. Explore Olympos Matriarchal Village", "3. Windsurf at Chicken Bay in Afiartis", "4. Scuba Dive in Crystal Waters", "5. Enjoy Scarpanto Wine Tasting"],
    introduction: "Karpathos is one of Greece's best-kept secrets. Positioned between Crete and Rhodes in the Dodecanese, this dramatic island offers high wind-swept ridges, ancient villages, and pristine beaches. Whether you are seeking high-adrenaline watersports, relaxing spa rituals, or cultural immersion, Karpathos has something unique for every traveler.",
    sections: [
      { heading: "1. Take a Boat Trip to Saria Island", text: "Separated from northern Karpathos by a narrow strait, Saria is an uninhabited wildlife haven. Cruising there by boat allows you to hike wild canyons, swim in neon-blue waters, and explore the vaulted ruins of a Saracen pirate settlement." },
      { heading: "2. Explore Olympos Matriarchal Village", text: "Perched high in the northern mountains, Olympos village is a living museum. Women wear hand-embroidered traditional costumes, speak a dialect with ancient Doric roots, and bake bread in communal outdoor stone ovens." },
      { heading: "3. Windsurf at Chicken Bay in Afiartis", text: "Known globally for its strong Meltemi winds, Afiartis is a top windsurfing hub. Chicken Bay features flat, shallow water perfect for beginners, while Devil's Bay hosts speed trials for advanced riders." },
      { heading: "4. Scuba Dive in Crystal Waters", text: "The volcanic seabed around Pigadia offers exceptional visibility (up to 30 meters), deep walls, underwater caves, and rich marine life like groupers, octopuses, and the rare Mediterranean monk seal." },
      { heading: "5. Enjoy Scarpanto Wine Tasting", text: "Visit a traditional family-run estate to taste indigenous grape varieties like Athiri and Fokiano. Sip wine overlooking organic vineyards and olive groves for a sensory taste of Karpathian soil." }
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
      { heading: "Saria Island Wilderness Excursion", text: "A bucket-list trip. Board a traditional boat from Pigadia or Diafani to Palatia beach on Saria Island. Snorkel in volcanic caves, hike through an impressive canyon to a ghost village, and enjoy a fresh seaside barbecue." },
      { heading: "Glass-Bottom Boat Cave Explorer", text: "Perfect for families. Peer through the glass keel to watch marine life, then cruise to coastal rock caves for snorkeling in shallow, calm waters." },
      { heading: "Famous Beaches Full-Day Cruise", text: "Relax on deck as you sail to Karpathos' most iconic beaches: Apella, Kyra Panagia, and Kato Lakkos. Enjoy swim stops and lunch on board." }
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
      { heading: "1. Snorkeling and Sand at Amoopi", text: "Amoopi is the most family-friendly resort on the island. Coves like Mikri Amoopi are protected from summer Meltemi winds and feature shallow, sandy entries ideal for small children to play and snorkel safely." },
      { heading: "2. Hands-on Pebble Art & Clay Workshops", text: "Host a creative mosaic, clay, or pebble workshop in the traditional mountain village of Volada. Kids can paint, sculpt, and bring home their own handcrafted souvenirs." },
      { heading: "3. Honey Tasting & Beekeeping Tours", text: "Meet local beekeepers in Pigadia to wear protective suits, look inside a hive, and taste sweet, pure thyme honey fresh from the honeycomb." }
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
      { heading: "Sunset Village Tours", text: "Walk through the historic mountain village of Olympos or watch the sun dip into the Aegean sea from the cliffs of Arkasa, followed by a candlelit dinner." },
      { heading: "Private Wine Tasting", text: "Visit Scarpanto Winery for a private tasting session of Dodecanese wines paired with local cheeses, overlooking the vine-covered valleys." },
      { heading: "Couples Spa & Massage in Adia", text: "Unwind with a stone massage ritual or outdoor couples yoga session in the tranquil pine-lined valley of Adia." }
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
      { heading: "Day 1: Saria Island Boat Excursion", text: "Spend your first day on a boat trip to Saria Island. Snorkel in blue caves, hike the rocky pirate canyon, and swim in pure waters." },
      { heading: "Day 2: Olympos Village & Northern Culture", text: "Drive north or take a boat to Diafani, then climb to Olympos village. Walk the ancient stone alleys, taste homemade Makarounes pasta, and explore the old windmills." },
      { heading: "Day 3: Windsurfing, Wine & Sunset", text: "Head south to Afiartis for a morning windsurfing lesson at Chicken Bay. In the afternoon, enjoy wine tasting at Scarpanto Winery, and finish with sunset drinks in Arkasa." }
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
      { heading: "Profitis Ilias Panoramic Climb", text: "A moderate 4-hour hike from Aperi village to the chapel of Profitis Ilias. Offers 360-degree views of the entire island and surrounding Aegean sea." },
      { heading: "Valley Walk of Pigadia", text: "An easy, scenic walk through olive groves, ancient agricultural fields, and wild pine forests surrounding the capital town of Pigadia." },
      { heading: "Lastos Off-the-Beaten-Path Route", text: "Hike near Lastos (the highest plateau in Karpathos) through dramatic limestone landscapes, herbal scrublands, and rustic stone huts." }
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
      { heading: "Why Afiartis is Globally Renowned", text: "The wind blows side-shore at a consistent 20 to 35 knots almost every day in summer. Because the wind blows across the land, the bays remain flat with no large swell, creating optimal speed conditions." },
      { heading: "Chicken Bay: The Beginner Sanctuary", text: "An enclosed lagoon with shallow, knee-deep sandy water. It is sheltered from the highest wind gusts, making it the safest place in Greece to stand on a board and learn windsurfing." },
      { heading: "Gun Bay & Devil's Bay", text: "Outside the lagoon, Devil's Bay features extreme wind and flat water, ideal for freestyle, speed windsurfing, and advanced wing foiling." }
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
      { heading: "Snorkeling at Palatia Beach", text: "Palatia features crystal-clear pebbles and deep blue water. Swim inside volcanic rock caves to see corals, sea anemones, and schools of colorful fish." },
      { heading: "Hiking the Canyon of Saria", text: "A 45-minute hike leads from the beach up through a rocky, dry canyon. The route climbs to a ridge overlooking the northern Dodecanese archipelago." },
      { heading: "The Historic Pirate Ruins", text: "On the ridge, discover the domed stone ruins of 'Palatia', a medieval settlement built by Saracen pirate populations fleeing mainland raids." }
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
      { heading: "Olympos: The Living Matriarchy", text: "Women in Olympos hold a central role in preserving customs and inheritance. They still wear traditional hand-embroidered outfits called 'kavai' daily, not just for festivals." },
      { heading: "Traditional Windmills & Architecture", text: "The village is crowned by old stone windmills, some of which are still used to grind barley. The houses climb the cliffs in a dense layout facing the western sunset." },
      { heading: "Tasting Makarounes Pasta", text: "Visit a local taverna to watch fresh 'Makarounes' (handmade pasta) being rolled, boiled, and served with caramelized onions and local goat cheese." }
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
      { heading: "Therapeutic Massage in Pigadia", text: "Unwind after a day of hiking or windsurfing with a tailored deep tissue massage or therapeutic reflexology session in Pigadia town." },
      { heading: "Nature Yoga in Adia", text: "Experience outdoor yoga on pine-shaded wooden platforms overlooking the cliffs and sea of Adia. Focus on breathwork and alignment." },
      { heading: "Sound Healing Therapy", text: "Relax to the vibrations of Tibetan singing bowls and gongs, designed to release tension and restore mental balance in a quiet forest setting." }
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
      { heading: "Private Speedboat Charters", text: "Charter a private boat from Pigadia to visit Saria Island or southern coves on your own schedule. Includes a custom lunch menu and open bar." },
      { heading: "In-Villa Wine Tasting & Cooking", text: "Our sommelier and local chefs will come to your villa to host a private wine tasting and prepare a traditional Karpathian dinner using organic ingredients." },
      { heading: "Custom Island Guided Tours", text: "Book a private minivan to explore mountain villages (Aperi, Volada, Olympos) with a local guide, avoiding tourist crowds." }
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
      { heading: "Snorkeling at Amoopi Coves", text: "The limestone formations in Amoopi create natural rock pools and coves like Kastelia. Snorkel in calm, crystal-clear water to see Mediterranean fish." },
      { heading: "Coastal Hiking Trails", text: "Walk the easy coastal paths connecting Amoopi to nearby beaches. Perfect for early morning or late afternoon walks during sunset." },
      { heading: "Wellness & Massage Near Amoopi", text: "Rejuvenate with a massage session at a nearby wellness spa or directly in the comfort of your Amoopi villa." }
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
      { heading: "Pigadia Harbor Boat Trips", text: "The main pier in Pigadia is where you board daily boat trips to Saria Island, glass-bottom cave explorers, and apella beach cruises." },
      { heading: "Scuba Diving & Snorkeling", text: "Pigadia is home to the island's primary diving centers. Dive the volcanic reef tunnels, shipwrecks, and sea grass meadows nearby." },
      { heading: "Valley Hikes & Mountain Trails", text: "Follow the old donkey trails from Pigadia up into the olive groves of Aperi or along the coast to Agia Kyriaki chapel." }
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
      { heading: "Windsurfing & Wing Foiling", text: "Afiartis bay offers conditions for all levels. Beginners can practice in the shallow sands of Chicken Bay, while pros ride Devil's Bay." },
      { heading: "Scuba Diving & Snorkeling", text: "Discover the rich marine ecosystems of the Dodecanese. The local diving center provides beginner PADI discover scuba courses and guided deep dives." },
      { heading: "Speedboat Adventure Tours", text: "Book a speedboat snorkeling tour to explore marine caves, hidden wrecks, and secluded bays around the Pigadia coast." }
    ],
    faqs: [
      { q: "Do I need prior experience for scuba diving?", a: "No, you can book a 'Discover Scuba Diving' session which includes pool-like shallow water training followed by a shallow sea dive with an instructor." },
      { q: "Are water sports stations open in October?", a: "Most stations operate until early or mid-October, depending on weather and wind conditions." }
    ],
    relatedCategory: "Watersports & Diving"
  }
};

const LANGUAGES = ['el', 'es', 'fr', 'de'];
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function translateText(text, lang) {
  if (!text || typeof text !== 'string' || text.trim() === '') return text;
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${lang}&dt=t&q=${encodeURIComponent(text)}`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    return json[0].map(item => item[0]).join('');
  } catch (err) {
    console.error(`Error translating to ${lang}:`, err.message);
    return text;
  }
}

async function translateArray(arr, lang) {
  if (!arr || !Array.isArray(arr) || arr.length === 0) return arr;
  const trans = [];
  for (const item of arr) {
    trans.push(await translateText(item, lang));
    await sleep(20);
  }
  return trans;
}

async function run() {
  // Translate Areas
  const translatedAreas = { en: AREAS_DATA };
  for (const lang of LANGUAGES) {
    console.log(`Translating areas into ${lang}...`);
    const langDict = {};
    for (const [key, area] of Object.entries(AREAS_DATA)) {
      const name = await translateText(area.name, lang);
      const intro = await translateText(area.intro, lang);
      const faqs = [];
      for (const faq of area.faqs) {
        faqs.push({
          q: await translateText(faq.q, lang),
          a: await translateText(faq.a, lang)
        });
        await sleep(20);
      }
      langDict[key] = { name, intro, faqs, image: area.image };
    }
    translatedAreas[lang] = langDict;
    await sleep(100);
  }

  // Translate Collections
  const translatedCollections = { en: COLLECTIONS_DATA };
  for (const lang of LANGUAGES) {
    console.log(`Translating collections into ${lang}...`);
    const langDict = {};
    for (const [key, col] of Object.entries(COLLECTIONS_DATA)) {
      const name = await translateText(col.name, lang);
      const title = await translateText(col.title, lang);
      const description = await translateText(col.description, lang);
      const intro = await translateText(col.intro, lang);
      const faqs = [];
      for (const faq of col.faqs) {
        faqs.push({
          q: await translateText(faq.q, lang),
          a: await translateText(faq.a, lang)
        });
        await sleep(20);
      }
      langDict[key] = { name, title, description, intro, faqs, image: col.image };
    }
    translatedCollections[lang] = langDict;
    await sleep(100);
  }

  // Translate Guides
  const translatedGuides = { en: GUIDES };
  for (const lang of LANGUAGES) {
    console.log(`Translating guides into ${lang}...`);
    const langDict = {};
    for (const [key, g] of Object.entries(GUIDES)) {
      const title = await translateText(g.title, lang);
      const seoTitle = await translateText(g.seoTitle, lang);
      const description = await translateText(g.description, lang);
      const introduction = await translateText(g.introduction, lang);
      const toc = await translateArray(g.toc, lang);
      const sections = [];
      for (const sec of g.sections) {
        sections.push({
          heading: await translateText(sec.heading, lang),
          text: await translateText(sec.text, lang),
          list: sec.list ? await translateArray(sec.list, lang) : undefined
        });
        await sleep(20);
      }
      const faqs = [];
      for (const faq of g.faqs) {
        faqs.push({
          q: await translateText(faq.q, lang),
          a: await translateText(faq.a, lang)
        });
        await sleep(20);
      }
      langDict[key] = {
        slug: g.slug,
        title,
        seoTitle,
        description,
        heroImage: g.heroImage,
        toc,
        introduction,
        sections,
        faqs,
        relatedCategory: g.relatedCategory
      };
    }
    translatedGuides[lang] = langDict;
    await sleep(100);
  }

  // Generate AreaPage.tsx
  const areaCode = `import { useState, useEffect } from "react";
import { type Activity } from "../data/activities";
import { activitiesService } from "../services/activitiesService";
import { ActivityCard } from "../components/ActivityCard";
import { Link } from "../lib/router";
import { I } from "../components/Icon";
import { useSEO } from "../utils/seo";
import { trackEvent } from "../utils/analytics";
import { useLanguage } from "../lib/languageContext";

export const TRANSLATED_AREAS_DATA: Record<string, Record<string, {
  name: string;
  intro: string;
  faqs: { q: string; a: string }[];
  image: string;
}>> = ${JSON.stringify(translatedAreas, null, 2)};

export function AreaPage({ slug }: { slug: string }) {
  const { language, t } = useLanguage();
  const area = TRANSLATED_AREAS_DATA[language]?.[slug] || TRANSLATED_AREAS_DATA["en"][slug];
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
        <h1 className="font-display font-bold text-4xl text-navy">{t("booking.notFound", "Area not found")}</h1>
        <p className="text-navy/70 mt-3">{t("booking.notFoundDesc", "We couldn't find the area you are looking for.")}</p>
        <Link to="/explore" className="mt-6 inline-block px-5 py-3 rounded-full bg-navy text-white font-semibold">
          {t("about.cta.btn2", "Browse all activities")}
        </Link>
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
      { "@type": "ListItem", "position": 3, "name": area.name, "item": \`https://karpathosadventures.com/#/areas/\${slug}\` }
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

  useSEO({
    title: \`Things to Do in \${area.name}, Karpathos | \${t("nav.concierge", "Karpathos Concierge")}\`,
    description: \`Discover curated things to do in \${area.name}, Karpathos, including nearby tours, boat trips, local experiences, wellness, watersports, and activities arranged through a local concierge.\`,
    canonicalPath: \`/areas/\${slug}\`,
    ogImage: area.image,
    schema: [breadcrumbSchema, faqSchema]
  });

  return (
    <div>
      {/* Area Hero Section */}
      <section className="relative min-h-[50vh] flex items-end text-white">
        <img src={area.image} alt={\`Things to do in \${area.name} Karpathos\`} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 w-full">
          {/* Breadcrumbs */}
          <nav className="text-xs text-white/80 mb-3 flex items-center gap-1.5">
            <Link to="/" className="hover:text-sand">{t("nav.home", "Home")}</Link>
            <span>/</span>
            <Link to="/explore" className="hover:text-sand">{t("nav.explore", "Explore")}</Link>
            <span>/</span>
            <span className="text-white font-medium">{area.name}</span>
          </nav>
          
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight">
            {t("area.titleText", "Things to Do in {area}, Karpathos").replace("{area}", area.name)}
          </h1>
          <p className="mt-3 text-white/95 text-lg max-w-3xl leading-relaxed">{area.intro}</p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-mist pb-4 mb-8">
          <div>
            <h2 className="font-display font-bold text-2xl text-navy">
              {t("area.curatedTitle", "Curated Experiences Near {area}").replace("{area}", area.name)}
            </h2>
            <p className="text-xs text-navy/60 mt-1">{t("area.curatedSub", "Vetted local activities available for online booking or inquiry.")}</p>
          </div>
          <div className="text-sm font-semibold text-navy">
            {matchedActivities.length} {matchedActivities.length === 1 ? t("explore.experience", "experience") : t("explore.experiences", "experiences")} {t("explore.found", "found")}
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12 text-navy/50 font-medium">{t("booking.loading", "Loading experiences...")}</div>
        ) : matchedActivities.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {matchedActivities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-mist p-8">
            <p className="text-navy/60 font-medium">{t("area.noExperiences", "No direct experiences mapped here yet.")}</p>
            <p className="text-sm text-navy/50 mt-1">{t("area.customItineraryTip", "Our concierge can still arrange custom plan routes for you.")}</p>
            <Link to="/contact" className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal text-white font-semibold text-sm">
              <I.Whatsapp size={15} /> {t("nav.concierge", "Contact Concierge")}
            </Link>
          </div>
        )}
      </section>

      {/* FAQ Section */}
      <section className="bg-cream border-t border-b border-mist py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy text-center mb-8">
            {t("area.faqHeading", "Frequently Asked Questions about {area}").replace("{area}", area.name)}
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
            <h2 className="font-display font-bold text-2xl sm:text-3xl">
              {t("area.planStay", "Plan your stay near {area}").replace("{area}", area.name)}
            </h2>
            <p className="text-white/80 text-sm sm:text-base mt-2">
              {t("area.planStayDesc", "Our local concierge works directly with top-rated villa owners, transfer services, and activity operators. Send us your dates and we'll handle the rest.")}
            </p>
          </div>
          <Link to="/contact" className="px-6 py-3 rounded-full bg-white text-navy font-semibold hover:bg-cream transition shrink-0 inline-flex items-center gap-2">
            <I.Whatsapp size={16} /> {t("area.getCustom", "Get Custom Itinerary")}
          </Link>
        </div>
      </section>
    </div>
  );
}
`;

  // Generate CollectionPage.tsx
  const collectionCode = `import { useState, useEffect } from "react";
import { type Activity } from "../data/activities";
import { activitiesService } from "../services/activitiesService";
import { ActivityCard } from "../components/ActivityCard";
import { Link } from "../lib/router";
import { I } from "../components/Icon";
import { useSEO } from "../utils/seo";
import { trackEvent } from "../utils/analytics";
import { useLanguage } from "../lib/languageContext";

export const TRANSLATED_COLLECTIONS_DATA: Record<string, Record<string, {
  name: string;
  title: string;
  description: string;
  intro: string;
  image: string;
  faqs: { q: string; a: string }[];
}>> = ${JSON.stringify(translatedCollections, null, 2)};

export function CollectionPage({ slug }: { slug: string }) {
  const { language, t } = useLanguage();
  const collection = TRANSLATED_COLLECTIONS_DATA[language]?.[slug] || TRANSLATED_COLLECTIONS_DATA["en"][slug];
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const matchFilters: Record<string, (activity: Activity) => boolean> = {
    "sea-days": (a) => a.category === "Sea & Boat Trips" || a.category === "Watersports & Diving",
    "culture-villages": (a) => a.category === "Culture & Village Tours",
    "active-karpathos": (a) => a.category === "Adventure & Watersports" || a.category === "Fitness & Lifestyle",
    "wellness-slow-travel": (a) => a.category === "Wellness & Massage",
    "creative-local-moments": (a) => a.category === "Workshops & Local Craft",
    "food-wine": (a) => a.category === "Food & Wine Tastings",
    "private-group-days": (a) => a.groupType === "private" || a.bestForGroups === true,
    "hidden-island-rituals": (a) => ["exp_001", "exp_002", "exp_023", "exp_028", "exp_030"].includes(a.id)
  };

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
        <h1 className="font-display font-bold text-4xl text-navy">{t("booking.notFound", "Collection not found")}</h1>
        <p className="text-navy/70 mt-3">{t("booking.notFoundDesc", "We couldn't find the collection you are looking for.")}</p>
        <Link to="/explore" className="mt-6 inline-block px-5 py-3 rounded-full bg-navy text-white font-semibold">
          {t("about.cta.btn2", "Browse all activities")}
        </Link>
      </div>
    );
  }

  const filterFn = matchFilters[slug] || (() => true);
  const matchedActivities = activities.filter(filterFn);

  // Generate Breadcrumbs Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://karpathosadventures.com" },
      { "@type": "ListItem", "position": 2, "name": "Collections", "item": "https://karpathosadventures.com/#/explore" },
      { "@type": "ListItem", "position": 3, "name": collection.name, "item": \`https://karpathosadventures.com/#/collections/\${slug}\` }
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

  useSEO({
    title: collection.title,
    description: collection.description,
    canonicalPath: \`/collections/\${slug}\`,
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
            <Link to="/" className="hover:text-sand">{t("nav.home", "Home")}</Link>
            <span>/</span>
            <Link to="/explore" className="hover:text-sand">{t("nav.explore", "Explore")}</Link>
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
            <h2 className="font-display font-bold text-2xl text-navy">{t("collection.curated", "Curated Selection")}</h2>
            <p className="text-xs text-navy/60 mt-1">{t("collection.curatedSub", "Explore our hand-picked experiences, fully vetted for service quality.")}</p>
          </div>
          <div className="text-sm font-semibold text-navy">
            {matchedActivities.length} {matchedActivities.length === 1 ? t("explore.experience", "experience") : t("explore.experiences", "experiences")} {t("explore.found", "listed")}
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12 text-navy/50 font-medium">{t("booking.loading", "Loading collection...")}</div>
        ) : matchedActivities.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {matchedActivities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-mist p-8">
            <p className="text-navy/60 font-medium">{t("collection.noExperiences", "No experiences in this collection yet.")}</p>
            <Link to="/explore" className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal text-white font-semibold text-sm">
              {t("about.cta.btn2", "Explore all activities")}
            </Link>
          </div>
        )}
      </section>

      {/* FAQ Section */}
      <section className="bg-cream border-t border-b border-mist py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy text-center mb-8">
            {t("activity.faq", "Frequently Asked Questions")}
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
            <h2 className="font-display font-bold text-2xl sm:text-3xl">{t("collection.groupTitle", "Want a personalized group package?")}</h2>
            <p className="text-white/80 text-sm sm:text-base mt-2">
              {t("collection.groupDesc", "Tell us your group size, interests, and preferred dates. We specialize in customizing events, villa days, and private boat cruises.")}
            </p>
          </div>
          <Link to="/contact" className="px-6 py-3 rounded-full bg-white text-navy font-semibold hover:bg-cream transition shrink-0 inline-flex items-center gap-2">
            <I.Whatsapp size={16} /> {t("collection.consult", "Consult with Local Concierge")}
          </Link>
        </div>
      </section>
    </div>
  );
}
`;

  // Generate src/data/guides.ts
  const guidesCode = `export interface Guide {
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

export const TRANSLATED_GUIDES: Record<string, Record<string, Guide>> = ${JSON.stringify(translatedGuides, null, 2)};

export const GUIDES: Record<string, Guide> = TRANSLATED_GUIDES["en"];
`;

  writeFileSync(join(process.cwd(), '../src/pages/AreaPage.tsx'), areaCode, 'utf8');
  writeFileSync(join(process.cwd(), '../src/pages/CollectionPage.tsx'), collectionCode, 'utf8');
  writeFileSync(join(process.cwd(), '../src/data/guides.ts'), guidesCode, 'utf8');
  console.log("AreaPage.tsx, CollectionPage.tsx, and guides.ts successfully translated and updated in root src!");
}

run();
