import { useState, useEffect } from "react";
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
}>> = {
  "en": {
    "sea-days": {
      "name": "Sea Days: Boat Trips & Beach Cruises",
      "title": "Karpathos Boat Trips & Sea Experiences | Saria, Snorkeling & Beach Cruises",
      "description": "Book the best sea experiences in Karpathos. Excursions to Saria Island, glass-bottom boat tours, cave snorkeling, and cruises to Apella and Kyra Panagia.",
      "intro": "Step on board to experience the wild beauty of Karpathos from the water. Cruise to the uninhabited reserve of Saria Island, snorkel through ancient volcanic sea caves, or relax on a sun-drenched deck as we sail to secluded pebble beaches only accessible by sea.",
      "image": "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "faqs": [
        {
          "q": "What is the best boat trip in Karpathos?",
          "a": "The Saria Island Guided Tour is highly recommended, featuring canyon hiking, snorkeling in sea caves, and a traditional seaside barbecue."
        },
        {
          "q": "Where do the boat trips depart from?",
          "a": "Daily cruises and private charters depart from the main harbor in Pigadia (Karpathos Town), with some northern trips starting from Diafani."
        }
      ]
    },
    "culture-villages": {
      "name": "Culture & Traditional Villages",
      "title": "Karpathos Village Tours & Cultural Experiences | Olympos, Diafani & Local Life",
      "description": "Discover traditional life in Karpathos. Book day trips to the matriarchal mountain village of Olympos, sunset village walking tours, and local guides.",
      "intro": "Explore isolated mountain ridges where time has stood still. Our village guides show you the matriarchal village of Olympos, historic windmills, and ancient farming hamlets where locals still speak a unique Dodecanese dialect and preserve centuries-old Greek traditions.",
      "image": "https://images.pexels.com/photos/37037773/pexels-photo-37037773.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "faqs": [
        {
          "q": "What is special about Olympos village?",
          "a": "Olympos was isolated for centuries, preserving its matriarchal heritage, ancient windswept windmills, and traditional handmade clothing still worn daily by women."
        },
        {
          "q": "What should I eat on a village tour?",
          "a": "Try fresh handmade Makarounes (local pasta with caramelized onions) and traditional honey dumplings."
        }
      ]
    },
    "active-karpathos": {
      "name": "Active Karpathos: Adventure & Sports",
      "title": "Active Experiences in Karpathos | Windsurfing, Diving, Biking & Adventure",
      "description": "Plan active holidays in Karpathos. Book windsurfing at Chicken Bay, scuba diving in Pigadia, guided mountain biking, and rock climbing in Arkasa.",
      "intro": "For the active traveler, Karpathos offers a natural playground. Harness the Meltemi winds for windsurfing in Afiartis, cycle mountain paths, scale limestone sea cliffs in Arkasa, or dive into deep volcanic tunnels with PADI guides.",
      "image": "https://images.pexels.com/photos/12376921/pexels-photo-12376921.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "faqs": [
        {
          "q": "Where can I learn windsurfing in Karpathos?",
          "a": "Chicken Bay in Afiartis is ideal for beginners due to its flat, knee-deep sandy water. Devils Bay hosts professional speed windsurfers."
        },
        {
          "q": "Is rock climbing safe for beginners in Karpathos?",
          "a": "Yes. Our guided climbing sessions include all safety gear and routes are selected based on your personal comfort and experience."
        }
      ]
    },
    "wellness-slow-travel": {
      "name": "Wellness, Yoga & Slow Travel",
      "title": "Karpathos Wellness Experiences | Massage, Yoga & Slow Travel",
      "description": "Rejuvenate in Karpathos. Book therapeutic massages in Pigadia, private sunset yoga in Adia, sound healing, and relaxing wellness rituals.",
      "intro": "Reconnect with nature and restore your energy. From therapeutic massage sessions in Pigadia to off-the-grid sound healing therapy and private yoga overlooking the pine forests of Adia, discover slow travel wellness rituals designed to soothe.",
      "image": "https://images.pexels.com/photos/34777293/pexels-photo-34777293.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "faqs": [
        {
          "q": "Can we book wellness sessions at our villa?",
          "a": "Yes, we arrange private massages, spa treatments, and yoga classes directly at your holiday villa or hotel."
        },
        {
          "q": "What is sound healing?",
          "a": "It is a meditation session utilizing therapeutic acoustic vibrations from singing bowls to release physical and mental stress."
        }
      ]
    },
    "creative-local-moments": {
      "name": "Creative Workshops & Local Craft",
      "title": "Creative Workshops in Karpathos | Mosaic, Clay & Local Craft",
      "description": "Unlock your creativity in Karpathos. Join local workshops: ancient pebble stones mosaic, botanical clay ateliers, and arts with local experts.",
      "intro": "Create beautiful, personal souvenirs inspired by the Aegean. Join local artists in their garden studios to learn the ancient art of Greek pebble mosaics, sculpt clay using local wildflowers, or craft tiles under pine trees.",
      "image": "https://images.pexels.com/photos/30630904/pexels-photo-30630904.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "faqs": [
        {
          "q": "Do I need prior experience for art workshops?",
          "a": "No experience is needed. The workshops are designed for all ages and skill levels, with friendly step-by-step guidance."
        },
        {
          "q": "Are materials included in the price?",
          "a": "Yes, all clay, natural stones, paints, and tools are provided. You also get to keep and bring home whatever you create."
        }
      ]
    },
    "food-wine": {
      "name": "Food & Wine Tastings",
      "title": "Karpathos Wine Tasting, Honey & Local Food Experiences",
      "description": "Taste authentic Karpathos. Book wine tasting at Scarpanto Winery, beekeeping and honey tours, and traditional cooking lessons.",
      "intro": "Savor the organic flavors of the Dodecanese. Visit a family-run organic winery for sunset tastings, step into beekeeping suits to examine local beehives, or join a local grandma to learn how to roll fresh pasta in traditional clay ovens.",
      "image": "https://images.pexels.com/photos/8472735/pexels-photo-8472735.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "faqs": [
        {
          "q": "What local products is Karpathos famous for?",
          "a": "The island is famous for its dense, herbal thyme honey, dry white and red Athiri wines, and fresh goat cheeses."
        },
        {
          "q": "Where does the wine tasting take place?",
          "a": "Our signature tastings take place at Scarpanto Winery in the peaceful vineyards of Afiartis."
        }
      ]
    },
    "private-group-days": {
      "name": "Private Group & Villa Experiences",
      "title": "Private Group Experiences in Karpathos | Villa Guests, Families & Friends",
      "description": "Curated private activities in Karpathos. Perfect for families, wedding groups, and villa guests. Private boat charters and custom day trips.",
      "intro": "Traveling with a group of friends, family, or hosting a villa retreat? We specialize in organizing private speedboats, group tours, villa dinners, and team adventures customized to your dates and preferences, complete with private minivans.",
      "image": "https://images.pexels.com/photos/8472735/pexels-photo-8472735.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "faqs": [
        {
          "q": "Can you customize itineraries for large families?",
          "a": "Yes, we build custom day plans combining light hiking, private boat swim stops, and village lunches suitable for all ages."
        },
        {
          "q": "Do you arrange private villa catering?",
          "a": "Yes, we can send private chefs to prepare traditional dinners or barbecues directly at your villa."
        }
      ]
    },
    "hidden-island-rituals": {
      "name": "Hidden Island Rituals & Authenticity",
      "title": "Authentic Karpathos Experiences | Local Producers, Villages & Slow Travel",
      "description": "Discover authentic slow travel in Karpathos. Walk ancient valleys, visit small family farms, and learn from local artisans.",
      "intro": "Step off the beaten path and slow down. Connect with local beekeepers, family grape growers, and hiking guides who will lead you down quiet valleys and forgotten trails to experience the slow, authentic soul of Karpathos.",
      "image": "https://images.pexels.com/photos/31846705/pexels-photo-31846705.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "faqs": [
        {
          "q": "What is slow travel in Karpathos?",
          "a": "It is about focusing on deep cultural connection, meeting independent local producers, and choosing non-motorized hiking or wellness activities."
        },
        {
          "q": "Are these tours environmentally friendly?",
          "a": "Yes, we work exclusively with local family-run micro-businesses that respect the natural environment and local heritage."
        }
      ]
    }
  },
  "el": {
    "sea-days": {
      "name": "Sea Days: Εκδρομές με σκάφος & Κρουαζιέρες στην παραλία",
      "title": "Κάρπαθος Εκδρομές με Σκάφος & Θαλάσσιες Εμπειρίες | Saria, Snorkeling & Beach Cruises",
      "description": "Κλείστε τις καλύτερες θαλάσσιες εμπειρίες στην Κάρπαθο. Εκδρομές στη Σαρία, ξεναγήσεις με βάρκα με γυάλινο πυθμένα, κολύμβηση με αναπνευστήρα σε σπήλαια και κρουαζιέρες στην Απέλλα και την Κυρά Παναγιά.",
      "intro": "Επιβιβαστείτε για να γνωρίσετε την άγρια ​​ομορφιά της Καρπάθου από το νερό. Κάντε κρουαζιέρα στο ακατοίκητο καταφύγιο του νησιού Σαρία, κάντε κολύμβηση με αναπνευστήρα μέσα από αρχαίες ηφαιστειακές θαλάσσιες σπηλιές ή χαλαρώστε σε ένα ηλιόλουστο κατάστρωμα καθώς ταξιδεύουμε σε απομονωμένες παραλίες με βότσαλο, προσβάσιμες μόνο από τη θάλασσα.",
      "faqs": [
        {
          "q": "Ποιο είναι το καλύτερο ταξίδι με πλοίο στην Κάρπαθο;",
          "a": "Συνιστάται ιδιαίτερα η ξενάγηση στο νησί Saria, η οποία περιλαμβάνει πεζοπορία στο φαράγγι, κολύμβηση με αναπνευστήρα σε θαλάσσιες σπηλιές και παραδοσιακό παραθαλάσσιο μπάρμπεκιου."
        },
        {
          "q": "Από πού αναχωρούν τα ταξίδια με πλοίο;",
          "a": "Καθημερινές κρουαζιέρες και ιδιωτικά τσάρτερ αναχωρούν από το κεντρικό λιμάνι στα Πηγάδια (Χώρα της Κάρπαθου), με μερικά βόρεια ταξίδια που ξεκινούν από το Διαφάνι."
        }
      ],
      "image": "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "culture-villages": {
      "name": "Πολιτισμός & Παραδοσιακά Χωριά",
      "title": "Εκδρομές & Πολιτιστικές Εμπειρίες στο χωριό Κάρπαθος | Όλυμπος, Διαφάνι & Τοπική Ζωή",
      "description": "Ανακαλύψτε την παραδοσιακή ζωή στην Κάρπαθο. Κάντε κράτηση για ημερήσιες εκδρομές στο μητριαρχικό ορεινό χωριό του Ολύμπου, περιηγήσεις με τα πόδια στο ηλιοβασίλεμα και τοπικούς οδηγούς.",
      "intro": "Εξερευνήστε απομονωμένες βουνοκορφές όπου ο χρόνος έχει σταματήσει. Οι ξεναγοί του χωριού μας σας δείχνουν το μητριαρχικό χωριό του Ολύμπου, τους ιστορικούς ανεμόμυλους και τους αρχαίους οικισμούς, όπου οι ντόπιοι εξακολουθούν να μιλούν μια μοναδική δωδεκανησιακή διάλεκτο και διατηρούν τις ελληνικές παραδόσεις αιώνων.",
      "faqs": [
        {
          "q": "Τι το ιδιαίτερο έχει το χωριό Όλυμπος;",
          "a": "Ο Όλυμπος ήταν απομονωμένος για αιώνες, διατηρώντας τη μητριαρχική του κληρονομιά, τους αρχαίους ανεμοδαρμένους ανεμόμυλους και τα παραδοσιακά χειροποίητα ρούχα που φορούν ακόμη καθημερινά οι γυναίκες."
        },
        {
          "q": "Τι να φάω σε μια περιήγηση στο χωριό;",
          "a": "Δοκιμάστε φρέσκες χειροποίητες μακαρούνες (τοπικά ζυμαρικά με καραμελωμένα κρεμμύδια) και παραδοσιακούς ντάμπλινγκ με μέλι."
        }
      ],
      "image": "https://images.pexels.com/photos/37037773/pexels-photo-37037773.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "active-karpathos": {
      "name": "Active Karpathos: Adventure & Sports",
      "title": "Ενεργές Εμπειρίες στην Κάρπαθο | Windsurfing, καταδύσεις, ποδηλασία και περιπέτεια",
      "description": "Προγραμματίστε ενεργές διακοπές στην Κάρπαθο. Κάντε κράτηση για windsurfing στο Chicken Bay, καταδύσεις στα Πηγάδια, ορειβατική ποδηλασία με οδηγό και αναρρίχηση στην Αρκάσα.",
      "intro": "Για τον δραστήριο ταξιδιώτη, η Κάρπαθος προσφέρει μια φυσική παιδική χαρά. Εκμεταλλευτείτε τους ανέμους Μελτέμι για ιστιοσανίδα στον Αφιάρτη, ποδηλατικά ορεινά μονοπάτια, κλιμακώστε τους ασβεστολιθικούς θαλάσσιους βράχους στην Αρκάσα ή βουτήξτε σε βαθιά ηφαιστειακά τούνελ με οδηγούς PADI.",
      "faqs": [
        {
          "q": "Πού μπορώ να μάθω windsurfing στην Κάρπαθο;",
          "a": "Το Chicken Bay στον Αφιάρτη είναι ιδανικό για αρχάριους λόγω της επίπεδης αμμουδιάς του μέχρι τα γόνατα. Το Devils Bay φιλοξενεί επαγγελματίες ταχύτητας windsurfers."
        },
        {
          "q": "Είναι ασφαλής η αναρρίχηση για αρχάριους στην Κάρπαθο;",
          "a": "Ναί. Οι συνεδρίες αναρρίχησης με καθοδήγηση περιλαμβάνουν όλα τα εργαλεία ασφαλείας και οι διαδρομές επιλέγονται με βάση την προσωπική σας άνεση και εμπειρία."
        }
      ],
      "image": "https://images.pexels.com/photos/12376921/pexels-photo-12376921.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "wellness-slow-travel": {
      "name": "Ευεξία, γιόγκα & αργό ταξίδι",
      "title": "Karpathos Wellness Experiences | Μασάζ, γιόγκα & αργό ταξίδι",
      "description": "Αναζωογόνηση στην Κάρπαθο. Κάντε κράτηση για θεραπευτικά μασάζ στα Πηγάδια, ιδιωτική γιόγκα ηλιοβασιλέματος στην Άδια, ηχοθεραπεία και χαλαρωτικές τελετουργίες ευεξίας.",
      "intro": "Επανασυνδεθείτε με τη φύση και αποκαταστήστε την ενέργειά σας. Από θεραπευτικές συνεδρίες μασάζ στα Πηγάδια μέχρι ηχοθεραπευτική θεραπεία εκτός δικτύου και ιδιωτική γιόγκα με θέα στα πευκοδάση της Άντιας, ανακαλύψτε τελετουργίες ευεξίας αργού ταξιδιού που έχουν σχεδιαστεί για να ηρεμούν.",
      "faqs": [
        {
          "q": "Μπορούμε να κλείσουμε συνεδρίες ευεξίας στη βίλα μας;",
          "a": "Ναι, κανονίζουμε ιδιωτικά μασάζ, θεραπείες σπα και μαθήματα γιόγκα απευθείας στη βίλα ή το ξενοδοχείο των διακοπών σας."
        },
        {
          "q": "Τι είναι η ηχοθεραπεία;",
          "a": "Είναι μια συνεδρία διαλογισμού που χρησιμοποιεί θεραπευτικές ακουστικές δονήσεις από μπολ τραγουδιού για να απελευθερώσει το σωματικό και ψυχικό στρες."
        }
      ],
      "image": "https://images.pexels.com/photos/34777293/pexels-photo-34777293.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "creative-local-moments": {
      "name": "Δημιουργικά Εργαστήρια & Τοπική Χειροτεχνία",
      "title": "Δημιουργικά Εργαστήρια στην Κάρπαθο | Μωσαϊκό, Πηλός & Τοπική Χειροτεχνία",
      "description": "Ξεκλειδώστε τη δημιουργικότητά σας στην Κάρπαθο. Συμμετέχετε σε τοπικά εργαστήρια: μωσαϊκό με αρχαία βότσαλα, ατελιέ βοτανικού πηλού και τέχνες με τοπικούς ειδικούς.",
      "intro": "Δημιουργήστε όμορφα, προσωπικά αναμνηστικά εμπνευσμένα από το Αιγαίο. Ελάτε με ντόπιους καλλιτέχνες στα στούντιο κήπου τους για να μάθετε την αρχαία τέχνη των ελληνικών μωσαϊκών με βότσαλο, να γλυπτείτε πηλό χρησιμοποιώντας τοπικά αγριολούλουδα ή να φτιάξετε πλακάκια κάτω από πεύκα.",
      "faqs": [
        {
          "q": "Χρειάζομαι προηγούμενη εμπειρία για καλλιτεχνικά εργαστήρια;",
          "a": "Δεν απαιτείται εμπειρία. Τα εργαστήρια έχουν σχεδιαστεί για όλες τις ηλικίες και τα επίπεδα δεξιοτήτων, με φιλική καθοδήγηση βήμα προς βήμα."
        },
        {
          "q": "Τα υλικά περιλαμβάνονται στην τιμή;",
          "a": "Ναι, παρέχεται όλος ο πηλός, οι φυσικές πέτρες, τα χρώματα και τα εργαλεία. Μπορείτε επίσης να κρατήσετε και να φέρετε στο σπίτι ό,τι δημιουργείτε."
        }
      ],
      "image": "https://images.pexels.com/photos/30630904/pexels-photo-30630904.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "food-wine": {
      "name": "Γευσιγνωσίες φαγητού και κρασιού",
      "title": "Γευσιγνωσία κρασιού Καρπάθου, εμπειρίες μελιού & τοπικών φαγητών",
      "description": "Γευτείτε την αυθεντική Κάρπαθο. Κάντε κράτηση για γευσιγνωσία κρασιού στο Οινοποιείο Scarpanto, ξεναγήσεις μελισσοκομίας και μελιού και μαθήματα παραδοσιακής μαγειρικής.",
      "intro": "Απολαύστε τις βιολογικές γεύσεις των Δωδεκανήσων. Επισκεφτείτε ένα οικογενειακά διοικούμενο βιολογικό οινοποιείο για γευσιγνωσίες στο ηλιοβασίλεμα, μπείτε σε μελισσοκομικές στολές για να εξετάσετε τοπικές κυψέλες ή επισκεφτείτε μια ντόπια γιαγιά για να μάθετε πώς να τυλίγετε φρέσκα ζυμαρικά σε παραδοσιακούς πήλινους φούρνους.",
      "faqs": [
        {
          "q": "Για ποια τοπικά προϊόντα φημίζεται η Κάρπαθος;",
          "a": "Το νησί φημίζεται για το πυκνό, φυτικό θυμαρίσιο μέλι, τα ξηρά λευκά και κόκκινα κρασιά Αθήρι και τα φρέσκα κατσικίσια τυριά."
        },
        {
          "q": "Πού γίνεται η οινογευσία;",
          "a": "Οι γευστικές δοκιμές μας πραγματοποιούνται στο Οινοποιείο Scarpanto στους ήσυχους αμπελώνες του Αφιάρτη."
        }
      ],
      "image": "https://images.pexels.com/photos/8472735/pexels-photo-8472735.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "private-group-days": {
      "name": "Private Group & Villa Experiences",
      "title": "Ιδιωτικές Ομαδικές Εμπειρίες στην Κάρπαθο | Επισκέπτες, οικογένειες και φίλοι της βίλας",
      "description": "Επιμέλεια ιδιωτικών δραστηριοτήτων στην Κάρπαθο. Ιδανικό για οικογένειες, παρέες γάμου και επισκέπτες σε βίλες. Ναυλώσεις ιδιωτικών σκαφών και προσαρμοσμένες ημερήσιες εκδρομές.",
      "intro": "Ταξιδεύετε με μια ομάδα φίλων, οικογένεια ή φιλοξενείτε ένα καταφύγιο σε βίλα; We specialize in organizing private speedboats, group tours, villa dinners, and team adventures customized to your dates and preferences, complete with private minivans.",
      "faqs": [
        {
          "q": "Μπορείτε να προσαρμόσετε τα δρομολόγια για μεγάλες οικογένειες;",
          "a": "Ναι, κατασκευάζουμε προσαρμοσμένα ημερήσια σχέδια που συνδυάζουν ελαφριά πεζοπορία, στάσεις κολύμβησης με ιδιωτικό σκάφος και γεύματα στο χωριό κατάλληλα για όλες τις ηλικίες."
        },
        {
          "q": "Do you arrange private villa catering?",
          "a": "Ναι, μπορούμε να στείλουμε ιδιώτες σεφ για να ετοιμάσουν παραδοσιακά δείπνα ή μπάρμπεκιου απευθείας στη βίλα σας."
        }
      ],
      "image": "https://images.pexels.com/photos/8472735/pexels-photo-8472735.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "hidden-island-rituals": {
      "name": "Τελετουργίες και αυθεντικότητα κρυμμένων νησιών",
      "title": "Αυθεντικές εμπειρίες Καρπάθου | Τοπικοί παραγωγοί, χωριά & αργό ταξίδι",
      "description": "Discover authentic slow travel in Karpathos. Περπατήστε στις αρχαίες κοιλάδες, επισκεφθείτε μικρές οικογενειακές φάρμες και μάθετε από ντόπιους τεχνίτες.",
      "intro": "Βγείτε από το μονοπάτι και επιβραδύνετε. Συνδεθείτε με ντόπιους μελισσοκόμους, οικογενειακούς αμπελουργούς και οδηγούς πεζοπορίας που θα σας οδηγήσουν σε ήσυχες κοιλάδες και ξεχασμένα μονοπάτια για να ζήσετε την αργή, αυθεντική ψυχή της Καρπάθου.",
      "faqs": [
        {
          "q": "Τι είναι το αργό ταξίδι στην Κάρπαθο;",
          "a": "Πρόκειται για την εστίαση στη βαθιά πολιτιστική σύνδεση, τη συνάντηση με ανεξάρτητους τοπικούς παραγωγούς και την επιλογή μη μηχανοκίνητων δραστηριοτήτων πεζοπορίας ή ευεξίας."
        },
        {
          "q": "Είναι αυτές οι περιηγήσεις φιλικές προς το περιβάλλον;",
          "a": "Ναι, συνεργαζόμαστε αποκλειστικά με τοπικές οικογενειακές μικροεπιχειρήσεις που σέβονται το φυσικό περιβάλλον και την τοπική κληρονομιά."
        }
      ],
      "image": "https://images.pexels.com/photos/31846705/pexels-photo-31846705.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    }
  },
  "es": {
    "sea-days": {
      "name": "Días de mar: paseos en barco y cruceros por la playa",
      "title": "Karpathos Paseos en barco y experiencias en el mar | Saria, snorkel y cruceros por la playa",
      "description": "Reserva las mejores experiencias marítimas en Karpathos. Excursiones a la isla de Saria, recorridos en barcos con fondo de cristal, snorkel en cuevas y cruceros a Apella y Kyra Panagia.",
      "intro": "Sube a bordo para experimentar la belleza salvaje de Karpathos desde el agua. Navegue hasta la reserva deshabitada de la isla Saria, practique snorkel en antiguas cuevas marinas volcánicas o relájese en una terraza bañada por el sol mientras navegamos hacia playas solitarias de guijarros a las que solo se puede acceder por mar.",
      "faqs": [
        {
          "q": "¿Cuál es el mejor paseo en barco en Kárpatos?",
          "a": "Se recomienda encarecidamente la visita guiada a la isla de Saria, que incluye caminatas por cañones, snorkel en cuevas marinas y una barbacoa tradicional junto al mar."
        },
        {
          "q": "¿Desde dónde salen los paseos en barco?",
          "a": "Los cruceros diarios y los charters privados salen del puerto principal de Pigadia (ciudad de Karpathos), y algunos viajes al norte parten de Diafani."
        }
      ],
      "image": "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "culture-villages": {
      "name": "Cultura y Pueblos Tradicionales",
      "title": "Tours al pueblo de Karpathos y experiencias culturales | Olimpo, Diafani y vida local",
      "description": "Descubra la vida tradicional en Karpathos. Reserve excursiones de un día al pueblo matriarcal de montaña de Olympos, recorridos a pie por el pueblo al atardecer y guías locales.",
      "intro": "Explora crestas montañosas aisladas donde el tiempo se ha detenido. Nuestros guías del pueblo le mostrarán el pueblo matriarcal de Olympos, molinos de viento históricos y antiguas aldeas agrícolas donde los lugareños todavía hablan un dialecto único del Dodecaneso y conservan tradiciones griegas centenarias.",
      "faqs": [
        {
          "q": "¿Qué tiene de especial el pueblo de Olympos?",
          "a": "Olimpo estuvo aislada durante siglos, preservando su herencia matriarcal, sus antiguos molinos azotados por el viento y la ropa tradicional hecha a mano que las mujeres aún usan a diario."
        },
        {
          "q": "¿Qué debo comer en un tour por el pueblo?",
          "a": "Pruebe los Makarounes (pasta local con cebolla caramelizada) frescos hechos a mano y las tradicionales albóndigas de miel."
        }
      ],
      "image": "https://images.pexels.com/photos/37037773/pexels-photo-37037773.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "active-karpathos": {
      "name": "Active Karpathos: aventura y deportes",
      "title": "Experiencias activas en Karpathos | Windsurf, Buceo, Ciclismo y Aventura",
      "description": "Planifique unas vacaciones activas en Karpathos. Reserve windsurf en Chicken Bay, buceo en Pigadia, ciclismo de montaña guiado y escalada en roca en Arkasa.",
      "intro": "Para el viajero activo, Karpathos ofrece un parque natural. Aproveche los vientos de Meltemi para practicar windsurf en Afiartis, andar en bicicleta por senderos de montaña, escalar acantilados de piedra caliza en Arkasa o sumergirse en profundos túneles volcánicos con guías PADI.",
      "faqs": [
        {
          "q": "¿Dónde puedo aprender windsurf en Karpathos?",
          "a": "Chicken Bay en Afiartis es ideal para principiantes debido a su agua arenosa plana y hasta las rodillas. Devils Bay acoge a practicantes de windsurf de velocidad profesionales."
        },
        {
          "q": "¿Es segura la escalada en roca para principiantes en Karpathos?",
          "a": "Sí. Nuestras sesiones de escalada guiadas incluyen todo el equipo de seguridad y las rutas se seleccionan en función de su comodidad y experiencia personal."
        }
      ],
      "image": "https://images.pexels.com/photos/12376921/pexels-photo-12376921.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "wellness-slow-travel": {
      "name": "Bienestar, yoga y viajes lentos",
      "title": "Experiencias de bienestar en Kárpatos | Masajes, yoga y viajes lentos",
      "description": "Rejuvenezca en Karpathos. Reserve masajes terapéuticos en Pigadia, yoga privado al atardecer en Adia, sanación con sonido y rituales relajantes de bienestar.",
      "intro": "Reconéctate con la naturaleza y recupera tu energía. Desde sesiones de masajes terapéuticos en Pigadia hasta terapias curativas con sonido fuera de la red y yoga privado con vista a los bosques de pinos de Adia, descubra rituales de bienestar de viaje lento diseñados para calmar.",
      "faqs": [
        {
          "q": "¿Podemos reservar sesiones de bienestar en nuestra villa?",
          "a": "Sí, organizamos masajes privados, tratamientos de spa y clases de yoga directamente en su villa u hotel de vacaciones."
        },
        {
          "q": "¿Qué es la curación con sonido?",
          "a": "Es una sesión de meditación que utiliza vibraciones acústicas terapéuticas de cuencos cantores para liberar el estrés físico y mental."
        }
      ],
      "image": "https://images.pexels.com/photos/34777293/pexels-photo-34777293.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "creative-local-moments": {
      "name": "Talleres creativos y artesanía local",
      "title": "Talleres creativos en Karpathos | Mosaicos, arcilla y artesanía local",
      "description": "Desbloquea tu creatividad en Karpathos. Únase a talleres locales: mosaicos de piedras antiguas, talleres de arcilla botánica y artes con expertos locales.",
      "intro": "Crea hermosos recuerdos personales inspirados en el Egeo. Únase a los artistas locales en sus estudios de jardinería para aprender el antiguo arte de los mosaicos de guijarros griegos, esculpir arcilla con flores silvestres locales o fabricar azulejos debajo de los pinos.",
      "faqs": [
        {
          "q": "¿Necesito experiencia previa para talleres de arte?",
          "a": "No se necesita experiencia. Los talleres están diseñados para todas las edades y niveles de habilidad, con una amigable guía paso a paso."
        },
        {
          "q": "¿Los materiales están incluidos en el precio?",
          "a": "Sí, se proporcionan toda la arcilla, piedras naturales, pinturas y herramientas. También puedes conservar y llevarte a casa todo lo que crees."
        }
      ],
      "image": "https://images.pexels.com/photos/30630904/pexels-photo-30630904.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "food-wine": {
      "name": "Catas de comida y vino",
      "title": "Experiencias de cata de vinos, miel y comida local en Karpathos",
      "description": "Pruebe el auténtico Karpathos. Reserve catas de vino en la bodega Scarpanto, recorridos sobre apicultura y miel y lecciones de cocina tradicional.",
      "intro": "Saboree los sabores orgánicos del Dodecaneso. Visite una bodega orgánica familiar para realizar degustaciones al atardecer, póngase trajes de apicultor para examinar las colmenas locales o únase a una abuela local para aprender a enrollar pasta fresca en hornos de barro tradicionales.",
      "faqs": [
        {
          "q": "¿Por qué productos locales es famosa Kárpatos?",
          "a": "La isla es famosa por su densa miel de tomillo a base de hierbas, sus vinos secos blancos y tintos de Athiri y sus quesos frescos de cabra."
        },
        {
          "q": "¿Dónde se realiza la cata de vinos?",
          "a": "Nuestras degustaciones exclusivas se llevan a cabo en la bodega Scarpanto, en los tranquilos viñedos de Afiartis."
        }
      ],
      "image": "https://images.pexels.com/photos/8472735/pexels-photo-8472735.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "private-group-days": {
      "name": "Experiencias privadas para grupos y villas",
      "title": "Experiencias de grupos privados en Karpathos | Huéspedes de la villa, familias y amigos",
      "description": "Actividades privadas curadas en Karpathos. Perfecto para familias, grupos de bodas e invitados de villas. Alquiler de barcos privados y excursiones de un día personalizadas.",
      "intro": "¿Viaja con un grupo de amigos, familiares o organiza un retiro en una villa? Nos especializamos en organizar lanchas rápidas privadas, recorridos grupales, cenas en villas y aventuras en equipo personalizadas según sus fechas y preferencias, con minivans privadas.",
      "faqs": [
        {
          "q": "¿Se pueden personalizar itinerarios para familias numerosas?",
          "a": "Sí, creamos planes de día personalizados que combinan caminatas ligeras, paradas privadas para nadar en botes y almuerzos en el pueblo adecuados para todas las edades."
        },
        {
          "q": "¿Organizan catering privado en villas?",
          "a": "Sí, podemos enviar chefs privados para preparar cenas tradicionales o barbacoas directamente en su villa."
        }
      ],
      "image": "https://images.pexels.com/photos/8472735/pexels-photo-8472735.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "hidden-island-rituals": {
      "name": "Rituales y autenticidad de las islas escondidas",
      "title": "Experiencias auténticas en Kárpatos | Productores locales, pueblos y viajes lentos",
      "description": "Descubra auténticos viajes lentos en Karpathos. Camine por valles antiguos, visite pequeñas granjas familiares y aprenda de los artesanos locales.",
      "intro": "Salga del camino trillado y reduzca la velocidad. Conéctese con apicultores locales, productores de uvas familiares y guías de senderismo que lo llevarán por valles tranquilos y senderos olvidados para experimentar el alma lenta y auténtica de Karpathos.",
      "faqs": [
        {
          "q": "¿Qué es el viaje lento en Kárpatos?",
          "a": "Se trata de centrarse en una conexión cultural profunda, conocer a productores locales independientes y elegir caminatas no motorizadas o actividades de bienestar."
        },
        {
          "q": "¿Son estos tours amigables con el medio ambiente?",
          "a": "Sí, trabajamos exclusivamente con microempresas familiares locales que respetan el entorno natural y el patrimonio local."
        }
      ],
      "image": "https://images.pexels.com/photos/31846705/pexels-photo-31846705.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    }
  },
  "fr": {
    "sea-days": {
      "name": "Journées en mer : excursions en bateau et croisières sur la plage",
      "title": "Excursions en bateau et expériences en mer à Karpathos | Saria, plongée en apnée et croisières sur la plage",
      "description": "Réservez les meilleures expériences en mer à Karpathos. Excursions sur l'île de Saria, excursions en bateau à fond de verre, plongée en apnée dans les grottes et croisières à Apella et Kyra Panagia.",
      "intro": "Montez à bord pour découvrir la beauté sauvage de Karpathos depuis l'eau. Naviguez vers la réserve inhabitée de l'île de Saria, faites de la plongée avec tuba dans d'anciennes grottes marines volcaniques ou détendez-vous sur une terrasse ensoleillée pendant que nous naviguons vers des plages de galets isolées uniquement accessibles par la mer.",
      "faqs": [
        {
          "q": "Quelle est la meilleure excursion en bateau à Karpathos ?",
          "a": "La visite guidée de l'île de Saria est fortement recommandée, comprenant une randonnée dans le canyon, de la plongée en apnée dans des grottes marines et un barbecue traditionnel en bord de mer."
        },
        {
          "q": "D'où partent les excursions en bateau ?",
          "a": "Des croisières quotidiennes et des charters privés partent du port principal de Pigadia (ville de Karpathos), avec quelques voyages vers le nord au départ de Diafani."
        }
      ],
      "image": "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "culture-villages": {
      "name": "Culture et villages traditionnels",
      "title": "Visites du village de Karpathos et expériences culturelles | Olympos, Diafani et la vie locale",
      "description": "Découvrez la vie traditionnelle à Karpathos. Réservez des excursions d'une journée au village de montagne matriarcal d'Olympos, des visites à pied du village au coucher du soleil et des guides locaux.",
      "intro": "Explorez des crêtes de montagnes isolées où le temps s'est arrêté. Nos guides de village vous montrent le village matriarcal d'Olympos, des moulins à vent historiques et d'anciens hameaux agricoles où les habitants parlent encore un dialecte unique du Dodécanèse et préservent des traditions grecques vieilles de plusieurs siècles.",
      "faqs": [
        {
          "q": "Quelle est la particularité du village d’Olympos ?",
          "a": "Olympos a été isolée pendant des siècles, préservant son héritage matriarcal, ses anciens moulins à vent balayés par le vent et ses vêtements traditionnels faits à la main, encore portés quotidiennement par les femmes."
        },
        {
          "q": "Que dois-je manger lors d'une visite du village ?",
          "a": "Essayez les Makarounes fraîches faites à la main (pâtes locales aux oignons caramélisés) et les boulettes de miel traditionnelles."
        }
      ],
      "image": "https://images.pexels.com/photos/37037773/pexels-photo-37037773.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "active-karpathos": {
      "name": "Karpathos actif : aventure et sport",
      "title": "Expériences actives à Karpathos | Planche à voile, plongée, vélo et aventure",
      "description": "Planifiez des vacances actives à Karpathos. Réservez de la planche à voile à Chicken Bay, de la plongée sous-marine à Pigadia, du VTT guidé et de l'escalade à Arkasa.",
      "intro": "Pour le voyageur actif, Karpathos offre un terrain de jeu naturel. Exploitez les vents Meltemi pour faire de la planche à voile à Afiartis, faites du vélo sur des sentiers de montagne, escaladez des falaises calcaires à Arkasa ou plongez dans de profonds tunnels volcaniques avec des guides PADI.",
      "faqs": [
        {
          "q": "Où puis-je apprendre la planche à voile à Karpathos ?",
          "a": "Chicken Bay à Afiartis est idéale pour les débutants en raison de son eau sablonneuse plate jusqu'aux genoux. Devils Bay accueille des véliplanchistes professionnels."
        },
        {
          "q": "L'escalade est-elle sûre pour les débutants à Karpathos ?",
          "a": "Oui. Nos séances d'escalade guidées comprennent tous les équipements de sécurité et les itinéraires sont sélectionnés en fonction de votre confort et de votre expérience personnels."
        }
      ],
      "image": "https://images.pexels.com/photos/12376921/pexels-photo-12376921.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "wellness-slow-travel": {
      "name": "Bien-être, yoga et voyage lent",
      "title": "Expériences de bien-être à Karpathos | Massage, yoga et voyage lent",
      "description": "Rajeunissez-vous à Karpathos. Réservez des massages thérapeutiques à Pigadia, du yoga privé au coucher du soleil à Adia, des soins sonores et des rituels de bien-être relaxants.",
      "intro": "Reconnectez-vous à la nature et retrouvez votre énergie. Des séances de massage thérapeutique à Pigadia à la thérapie sonore hors réseau et au yoga privé avec vue sur les forêts de pins d'Adia, découvrez des rituels de bien-être lents conçus pour apaiser.",
      "faqs": [
        {
          "q": "Pouvons-nous réserver des séances de bien-être dans notre villa ?",
          "a": "Oui, nous organisons des massages privés, des soins de spa et des cours de yoga directement dans votre villa ou hôtel de vacances."
        },
        {
          "q": "Qu’est-ce que la guérison sonore ?",
          "a": "Il s'agit d'une séance de méditation utilisant les vibrations acoustiques thérapeutiques des bols chantants pour évacuer le stress physique et mental."
        }
      ],
      "image": "https://images.pexels.com/photos/34777293/pexels-photo-34777293.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "creative-local-moments": {
      "name": "Ateliers créatifs et artisanat local",
      "title": "Ateliers créatifs à Karpathos | Mosaïque, argile et artisanat local",
      "description": "Libérez votre créativité à Karpathos. Rejoignez des ateliers locaux : mosaïque de galets anciens, ateliers d'argile botanique et arts avec des experts locaux.",
      "intro": "Créez de magnifiques souvenirs personnels inspirés de la mer Égée. Rejoignez des artistes locaux dans leurs ateliers de jardinage pour apprendre l'art ancien des mosaïques de galets grecs, sculpter de l'argile à l'aide de fleurs sauvages locales ou fabriquer des carreaux sous des pins.",
      "faqs": [
        {
          "q": "Ai-je besoin d’une expérience préalable pour les ateliers d’art ?",
          "a": "Aucune expérience n'est nécessaire. Les ateliers sont conçus pour tous les âges et tous les niveaux de compétence, avec des conseils conviviaux étape par étape."
        },
        {
          "q": "Les matériaux sont-ils inclus dans le prix ?",
          "a": "Oui, toute l'argile, les pierres naturelles, les peintures et les outils sont fournis. Vous pouvez également conserver et rapporter à la maison tout ce que vous créez."
        }
      ],
      "image": "https://images.pexels.com/photos/30630904/pexels-photo-30630904.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "food-wine": {
      "name": "Dégustations de mets et de vins",
      "title": "Dégustation de vins de Karpathos, expériences de miel et de cuisine locale",
      "description": "Goûtez l'authentique Karpathos. Réservez une dégustation de vin à Scarpanto Winery, des visites d'apiculture et de miel ainsi que des cours de cuisine traditionnelle.",
      "intro": "Savourez les saveurs bio du Dodécanèse. Visitez un domaine viticole biologique familial pour des dégustations au coucher du soleil, enfilez des costumes d'apiculteur pour examiner les ruches locales ou rejoignez une grand-mère locale pour apprendre à rouler des pâtes fraîches dans des fours en argile traditionnels.",
      "faqs": [
        {
          "q": "Pour quels produits locaux Karpathos est-il célèbre ?",
          "a": "L'île est célèbre pour son miel de thym dense et herbacé, ses vins Athiri blancs et rouges secs et ses fromages de chèvre frais."
        },
        {
          "q": "Où se déroule la dégustation de vins ?",
          "a": "Nos dégustations signature ont lieu à Scarpanto Winery dans les paisibles vignobles d'Afiartis."
        }
      ],
      "image": "https://images.pexels.com/photos/8472735/pexels-photo-8472735.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "private-group-days": {
      "name": "Expériences privées en groupe et en villa",
      "title": "Expériences de groupe privé à Karpathos | Invités de la villa, familles et amis",
      "description": "Activités privées organisées à Karpathos. Parfait pour les familles, les groupes de mariage et les invités de la villa. Chartes de bateaux privés et excursions d'une journée personnalisées.",
      "intro": "Vous voyagez avec un groupe d'amis, en famille ou vous organisez une retraite dans une villa ? Nous sommes spécialisés dans l'organisation de hors-bord privés, de visites de groupe, de dîners dans des villas et d'aventures en équipe personnalisées selon vos dates et préférences, avec des minifourgonnettes privées.",
      "faqs": [
        {
          "q": "Pouvez-vous personnaliser des itinéraires pour les familles nombreuses ?",
          "a": "Oui, nous élaborons des plans de journée personnalisés combinant des randonnées légères, des arrêts de baignade en bateau privé et des déjeuners de village adaptés à tous les âges."
        },
        {
          "q": "Organisez-vous la restauration de villas privées ?",
          "a": "Oui, nous pouvons envoyer des chefs privés pour préparer des dîners traditionnels ou des barbecues directement dans votre villa."
        }
      ],
      "image": "https://images.pexels.com/photos/8472735/pexels-photo-8472735.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "hidden-island-rituals": {
      "name": "Rituels et authenticité des îles cachées",
      "title": "Expériences authentiques de Karpathos | Producteurs locaux, Villages & Slow Travel",
      "description": "Découvrez l'authentique voyage lent à Karpathos. Parcourez les anciennes vallées, visitez de petites fermes familiales et apprenez auprès des artisans locaux.",
      "intro": "Sortez des sentiers battus et ralentissez. Connectez-vous avec des apiculteurs locaux, des viticulteurs familiaux et des guides de randonnée qui vous guideront dans des vallées tranquilles et des sentiers oubliés pour découvrir l'âme lente et authentique de Karpathos.",
      "faqs": [
        {
          "q": "Qu’est-ce que le voyage lent à Karpathos ?",
          "a": "Il s’agit de miser sur un lien culturel profond, de rencontrer des producteurs locaux indépendants et de choisir des randonnées non motorisées ou des activités de bien-être."
        },
        {
          "q": "Ces circuits sont-ils respectueux de l'environnement ?",
          "a": "Oui, nous travaillons exclusivement avec des micro-entreprises familiales locales, respectueuses de l'environnement naturel et du patrimoine local."
        }
      ],
      "image": "https://images.pexels.com/photos/31846705/pexels-photo-31846705.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    }
  },
  "de": {
    "sea-days": {
      "name": "Sea Days: Bootsfahrten und Strandkreuzfahrten",
      "title": "Karpathos Bootsausflüge und Meereserlebnisse | Saria, Schnorcheln und Strandkreuzfahrten",
      "description": "Buchen Sie die besten Meereserlebnisse auf Karpathos. Ausflüge zur Insel Saria, Touren mit Glasbodenbooten, Höhlenschnorcheln und Kreuzfahrten nach Apella und Kyra Panagia.",
      "intro": "Gehen Sie an Bord und erleben Sie die wilde Schönheit von Karpathos vom Wasser aus. Machen Sie eine Kreuzfahrt zum unbewohnten Naturschutzgebiet der Insel Saria, schnorcheln Sie durch alte vulkanische Meereshöhlen oder entspannen Sie sich auf einem sonnenverwöhnten Deck, während wir zu einsamen Kiesstränden segeln, die nur auf dem Seeweg erreichbar sind.",
      "faqs": [
        {
          "q": "Was ist die beste Bootsfahrt auf Karpathos?",
          "a": "Sehr zu empfehlen ist die geführte Tour zur Insel Saria mit Canyon-Wanderungen, Schnorcheln in Meereshöhlen und einem traditionellen Barbecue am Meer."
        },
        {
          "q": "Wo starten die Bootsfahrten?",
          "a": "Tägliche Kreuzfahrten und private Charterflüge starten vom Haupthafen in Pigadia (Karpathos-Stadt), wobei einige Fahrten in den Norden von Diafani aus starten."
        }
      ],
      "image": "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "culture-villages": {
      "name": "Kultur und traditionelle Dörfer",
      "title": "Karpathos-Dorftouren und kulturelle Erlebnisse | Olympos, Diafani und lokales Leben",
      "description": "Entdecken Sie das traditionelle Leben auf Karpathos. Buchen Sie Tagesausflüge zum matriarchalischen Bergdorf Olympos, Dorfwanderungen bei Sonnenuntergang und lokale Führer.",
      "intro": "Erkunden Sie einsame Bergkämme, wo die Zeit stehen geblieben ist. Unsere Dorfführer zeigen Ihnen das matriarchalische Dorf Olympos, historische Windmühlen und alte Bauerndörfer, in denen die Einheimischen noch immer einen einzigartigen dodekanesischen Dialekt sprechen und jahrhundertealte griechische Traditionen bewahren.",
      "faqs": [
        {
          "q": "Was ist das Besondere am Dorf Olympos?",
          "a": "Olympos war jahrhundertelang isoliert und bewahrte sein matriarchalisches Erbe, seine alten windgepeitschten Windmühlen und seine traditionelle handgefertigte Kleidung, die noch immer von Frauen täglich getragen wird."
        },
        {
          "q": "Was soll ich bei einem Dorfrundgang essen?",
          "a": "Probieren Sie frische handgemachte Makarounes (lokale Pasta mit karamellisierten Zwiebeln) und traditionelle Honigknödel."
        }
      ],
      "image": "https://images.pexels.com/photos/37037773/pexels-photo-37037773.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "active-karpathos": {
      "name": "Aktives Karpathos: Abenteuer und Sport",
      "title": "Aktive Erlebnisse in Karpathos | Windsurfen, Tauchen, Radfahren und Abenteuer",
      "description": "Planen Sie einen aktiven Urlaub auf Karpathos. Buchen Sie Windsurfen in Chicken Bay, Tauchen in Pigadia, geführte Mountainbiketouren und Klettern in Arkasa.",
      "intro": "Für den aktiven Reisenden bietet Karpathos einen natürlichen Spielplatz. Nutzen Sie die Meltemi-Winde zum Windsurfen in Afiartis, radeln Sie auf Bergpfaden, erklimmen Sie Kalksteinklippen in Arkasa oder tauchen Sie mit PADI-Guides in tiefe Vulkantunnel ein.",
      "faqs": [
        {
          "q": "Wo kann ich auf Karpathos Windsurfen lernen?",
          "a": "Chicken Bay in Afiartis ist aufgrund seines flachen, knietiefen Sandwassers ideal für Anfänger. Devils Bay beherbergt professionelle Speed-Windsurfer."
        },
        {
          "q": "Ist Klettern auf Karpathos für Anfänger sicher?",
          "a": "Ja. Unsere geführten Kletterkurse beinhalten die gesamte Sicherheitsausrüstung und die Routen werden auf der Grundlage Ihres persönlichen Komforts und Ihrer Erfahrung ausgewählt."
        }
      ],
      "image": "https://images.pexels.com/photos/12376921/pexels-photo-12376921.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "wellness-slow-travel": {
      "name": "Wellness, Yoga & Slow Travel",
      "title": "Karpathos Wellness-Erlebnisse | Massage, Yoga & Slow Travel",
      "description": "Erholen Sie sich in Karpathos. Buchen Sie therapeutische Massagen in Pigadia, privates Yoga bei Sonnenuntergang in Adia, Klangheilung und entspannende Wellness-Rituale.",
      "intro": "Verbinden Sie sich wieder mit der Natur und tanken Sie neue Energie. Von therapeutischen Massagesitzungen in Pigadia über netzunabhängige Klangheiltherapie bis hin zu privatem Yoga mit Blick auf die Pinienwälder von Adia – entdecken Sie Slow-Travel-Wellnessrituale, die beruhigend wirken sollen.",
      "faqs": [
        {
          "q": "Können wir Wellness-Sitzungen in unserer Villa buchen?",
          "a": "Ja, wir organisieren private Massagen, Spa-Behandlungen und Yoga-Kurse direkt in Ihrer Ferienvilla oder Ihrem Hotel."
        },
        {
          "q": "What is sound healing?",
          "a": "Es handelt sich um eine Meditationssitzung, bei der therapeutische akustische Schwingungen von Klangschalen genutzt werden, um körperlichen und geistigen Stress abzubauen."
        }
      ],
      "image": "https://images.pexels.com/photos/34777293/pexels-photo-34777293.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "creative-local-moments": {
      "name": "Kreative Workshops und lokales Kunsthandwerk",
      "title": "Kreativworkshops in Karpathos | Mosaik, Ton und lokales Kunsthandwerk",
      "description": "Entfalten Sie Ihre Kreativität in Karpathos. Nehmen Sie an lokalen Workshops teil: antikes Kieselsteinmosaik, botanische Tonateliers und Kunst mit lokalen Experten.",
      "intro": "Kreieren Sie wunderschöne, persönliche Souvenirs, inspiriert von der Ägäis. Begleiten Sie lokale Künstler in ihren Gartenateliers, um die antike Kunst des griechischen Kieselmosaiks zu erlernen, formen Sie Ton mit lokalen Wildblumen oder basteln Sie Fliesen unter Pinien.",
      "faqs": [
        {
          "q": "Benötige ich Vorkenntnisse für Kunstworkshops?",
          "a": "Es ist keine Erfahrung erforderlich. Die Workshops sind für alle Altersgruppen und Könnensstufen konzipiert und werden freundlich Schritt für Schritt angeleitet."
        },
        {
          "q": "Sind Materialien im Preis inbegriffen?",
          "a": "Ja, Ton, Natursteine, Farben und Werkzeuge werden bereitgestellt. Sie können alles, was Sie kreieren, auch behalten und mit nach Hause nehmen."
        }
      ],
      "image": "https://images.pexels.com/photos/30630904/pexels-photo-30630904.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "food-wine": {
      "name": "Speisen- und Weinproben",
      "title": "Karpathos-Weinprobe, Honig und lokale kulinarische Erlebnisse",
      "description": "Probieren Sie authentisches Karpathos. Buchen Sie Weinproben im Weingut Scarpanto, Imkerei- und Honigführungen sowie traditionelle Kochkurse.",
      "intro": "Genießen Sie die Bio-Aromen des Dodekanes. Besuchen Sie ein familiengeführtes Bio-Weingut für Verkostungen bei Sonnenuntergang, schlüpfen Sie in Imkeranzüge, um lokale Bienenstöcke zu untersuchen, oder begleiten Sie eine einheimische Oma, um zu lernen, wie man frische Nudeln in traditionellen Lehmöfen rollt.",
      "faqs": [
        {
          "q": "Für welche lokalen Produkte ist Karpathos berühmt?",
          "a": "Die Insel ist berühmt für ihren dichten, kräuterigen Thymianhonig, ihre trockenen Weiß- und Rotweine Athiri und ihren frischen Ziegenkäse."
        },
        {
          "q": "Wo findet die Weinprobe statt?",
          "a": "Unsere einzigartigen Verkostungen finden im Weingut Scarpanto in den ruhigen Weinbergen von Afiartis statt."
        }
      ],
      "image": "https://images.pexels.com/photos/8472735/pexels-photo-8472735.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "private-group-days": {
      "name": "Private Gruppen- und Villa-Erlebnisse",
      "title": "Private Gruppenerlebnisse in Karpathos | Villa-Gäste, Familien und Freunde",
      "description": "Kuratierte private Aktivitäten in Karpathos. Perfekt für Familien, Hochzeitsgruppen und Villengäste. Private Bootscharter und individuelle Tagesausflüge.",
      "intro": "Reisen Sie mit einer Gruppe von Freunden, der Familie oder veranstalten Sie einen Urlaub in einer Villa? Wir sind auf die Organisation privater Schnellboote, Gruppenreisen, Abendessen in Villen und Teamabenteuer spezialisiert, die auf Ihre Daten und Vorlieben zugeschnitten sind, einschließlich privater Minivans.",
      "faqs": [
        {
          "q": "Können Sie Reiserouten für große Familien anpassen?",
          "a": "Ja, wir erstellen individuelle Tagespläne, die leichte Wanderungen, private Badestopps mit dem Boot und Mittagessen im Dorf für alle Altersgruppen kombinieren."
        },
        {
          "q": "Organisieren Sie privates Villa-Catering?",
          "a": "Ja, wir können private Köche schicken, um traditionelle Abendessen oder Grillgerichte direkt in Ihrer Villa zuzubereiten."
        }
      ],
      "image": "https://images.pexels.com/photos/8472735/pexels-photo-8472735.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "hidden-island-rituals": {
      "name": "Verborgene Inselrituale und Authentizität",
      "title": "Authentische Karpathos-Erlebnisse | Lokale Produzenten, Dörfer und Slow Travel",
      "description": "Entdecken Sie authentisches Slow Travel auf Karpathos. Wandern Sie durch alte Täler, besuchen Sie kleine Familienbauernhöfe und lernen Sie von lokalen Handwerkern.",
      "intro": "Verlassen Sie die ausgetretenen Pfade und machen Sie langsamer. Treffen Sie lokale Imker, Familienweinbauern und Wanderführer, die Sie durch ruhige Täler und vergessene Pfade führen, um die langsame, authentische Seele von Karpathos zu erleben.",
      "faqs": [
        {
          "q": "Was ist Slow Travel auf Karpathos?",
          "a": "Es geht darum, sich auf eine tiefe kulturelle Verbindung zu konzentrieren, unabhängige lokale Produzenten zu treffen und sich für nicht motorisierte Wander- oder Wellnessaktivitäten zu entscheiden."
        },
        {
          "q": "Sind diese Touren umweltfreundlich?",
          "a": "Ja, wir arbeiten ausschließlich mit lokalen, familiengeführten Kleinstunternehmen zusammen, die die natürliche Umwelt und das lokale Erbe respektieren."
        }
      ],
      "image": "https://images.pexels.com/photos/31846705/pexels-photo-31846705.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    }
  }
};

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
