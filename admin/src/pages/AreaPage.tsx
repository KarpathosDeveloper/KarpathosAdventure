import { useState, useEffect } from "react";
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
}>> = {
  "en": {
    "pigadia": {
      "name": "Pigadia",
      "intro": "Pigadia (also known as Karpathos Town) is the vibrant capital and harbor of Karpathos. Flanked by a long sandy beach, it serves as the ultimate launching point for daily boat trips to Saria Island, scuba diving, and exploring mountain trails. It is perfect for families, couples, and groups seeking dining, nightlife, and convenience.",
      "faqs": [
        {
          "q": "What are the best things to do in Pigadia Karpathos?",
          "a": "Top activities include taking a Saria Island boat tour from the harbor, booking a speedboat snorkeling session, visiting local honey producers, or hiking up nearby pine trails."
        },
        {
          "q": "Are there boat trips from Pigadia?",
          "a": "Yes, Pigadia harbor is the primary departure point for almost all day cruises, snorkeling boat trips, and boat excursions to Saria Island."
        }
      ],
      "image": "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "amoopi": {
      "name": "Amoopi",
      "intro": "Amoopi is famous for its shallow, crystal-clear turquoise waters and calm sandy coves. Nestled on the east coast, it is a protected haven from strong winds, making it the most popular area for families, couples, and snorkeling enthusiasts.",
      "faqs": [
        {
          "q": "Is Amoopi beach suitable for children?",
          "a": "Yes, coves like Little Amoopi have a gentle sandy slope and shallow waters, which is highly recommended for families with kids."
        },
        {
          "q": "What can you do in Amoopi Karpathos?",
          "a": "Enjoy snorkeling in the rocky coves, go on scenic coastal walks, relax with premium massages, or dine at authentic seaside tavernas."
        }
      ],
      "image": "https://images.pexels.com/photos/34777293/pexels-photo-34777293.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "afiartis": {
      "name": "Afiartis",
      "intro": "Afiartis is the windsurfing and watersports heart of Karpathos. Positioned on the flat southern tip of the island, the bay is subject to strong, consistent Meltemi winds. It offers Chicken Bay for flat-water beginners and Devil's Bay for world-class speed trials.",
      "faqs": [
        {
          "q": "Can beginners learn windsurfing in Afiartis?",
          "a": "Absolutely. Chicken Bay features waist-deep, flat water with shelter from waves, making it one of the absolute best spots in Europe to learn windsurfing or wing foiling."
        },
        {
          "q": "What is the wind season in Afiartis?",
          "a": "The strongest winds blow daily from mid-June to early September, but stations open from May to October."
        }
      ],
      "image": "https://images.pexels.com/photos/12376921/pexels-photo-12376921.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "volada-pini": {
      "name": "Volada & Pini",
      "intro": "Volada and Pini are traditional mountain settlements set amidst pine forests and rocky summits. This area is the center of local crafts and art workshops. It is a fantastic destination for hikers climbing Profitis Ilias and travelers seeking authentic Karpathian culture.",
      "faqs": [
        {
          "q": "What workshops can I do in Volada?",
          "a": "Volada hosts creative mosaic workshops, pebble stones workshops, and botanical clay ateliers taught by local artists."
        },
        {
          "q": "Is hiking popular near Volada & Pini?",
          "a": "Yes, the area is the starting point for panoramic mountain trails, including hikes up to Lastos and Aperi."
        }
      ],
      "image": "https://images.pexels.com/photos/30630904/pexels-photo-30630904.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "arkasa": {
      "name": "Arkasa",
      "intro": "Arkasa sits on the sunny southwest coast and is famous for its rich history and dramatic wave beaches. Visitors come to climb the ancient Acropolis of Paleokastro, surf at Agios Nikolaos beach, or go rock climbing on limestone cliffs.",
      "faqs": [
        {
          "q": "What should I see in Arkasa?",
          "a": "Do not miss the ancient basilica mosaics of Agia Sophia, the sunset views from Paleokastro hill, and local seafood in the traditional village square."
        },
        {
          "q": "Is there climbing in Arkasa?",
          "a": "Yes, the cliffs near Arkasa offer excellent guided rock climbing routes for both beginners and experienced climbers."
        }
      ],
      "image": "https://images.pexels.com/photos/31846705/pexels-photo-31846705.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "olympos-diafani": {
      "name": "Olympos & Diafani",
      "intro": "Olympos is an isolated mountain village famous for its preserved matriarchal traditions, windmills, and Dodecanese dialect. Diafani is the quiet harbor port serving Olympos. A day trip here is a journey back in time.",
      "faqs": [
        {
          "q": "Why is Olympos Karpathos matriarchal?",
          "a": "Olympos preserves an inheritance system where houses and customs are passed down through the firstborn daughters, who wear hand-woven costumes daily."
        },
        {
          "q": "How do I get to Olympos and Diafani?",
          "a": "The most scenic way is a day-trip cruise boat from Pigadia harbor to Diafani, followed by a short bus ride up to Olympos."
        }
      ],
      "image": "https://images.pexels.com/photos/37037773/pexels-photo-37037773.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "adia": {
      "name": "Adia",
      "intro": "Adia is a remote, forested valley on the west coast, known for its rugged limestone cliffs, pine forests, and quiet pebble beaches. It is the perfect place for wellness, yoga, meditation, and off-grid relaxation.",
      "faqs": [
        {
          "q": "What wellness options exist in Adia?",
          "a": "We arrange private forest yoga classes, stone massage rituals, and reflexology sessions in Adia's serene pine-wood platforms."
        },
        {
          "q": "Is Adia good for nature lovers?",
          "a": "Yes, it is one of the most forested areas in Karpathos, offering quiet coastal walks and organic tavernas."
        }
      ],
      "image": "https://images.pexels.com/photos/34777293/pexels-photo-34777293.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "saria": {
      "name": "Saria",
      "intro": "Saria is an uninhabited island north of Karpathos, protected as a wildlife sanctuary. It features white pebble beaches, marine caves, a dramatic dry canyon, and the ruins of an ancient Byzantine and Saracen pirate settlement.",
      "faqs": [
        {
          "q": "How can I visit Saria Island?",
          "a": "Book a guided boat excursion departing from Pigadia or Diafani. The tour includes boat transfers, canyon hiking, snorkeling, and a fresh lunch."
        },
        {
          "q": "Is Saria Island suitable for hiking?",
          "a": "Yes, hiking the gorge from Palatia beach up to the vaulted ruins of the historic pirate settlement is a key highlight of the tour."
        }
      ],
      "image": "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    }
  },
  "el": {
    "pigadia": {
      "name": "Πηγάδια",
      "intro": "Τα Πηγάδια (γνωστά και ως Χώρα της Καρπάθου) είναι η ζωντανή πρωτεύουσα και το λιμάνι της Καρπάθου. Πλαισιώνεται από μια μεγάλη αμμώδη παραλία, χρησιμεύει ως το απόλυτο σημείο εκκίνησης για καθημερινές εκδρομές με σκάφος στο νησί Σαρία, καταδύσεις και εξερεύνηση ορεινών μονοπατιών. Είναι ιδανικό για οικογένειες, ζευγάρια και παρέες που αναζητούν φαγητό, νυχτερινή ζωή και άνεση.",
      "faqs": [
        {
          "q": "Ποια είναι τα καλύτερα πράγματα να κάνετε στα Πηγάδια Καρπάθου;",
          "a": "Οι κορυφαίες δραστηριότητες περιλαμβάνουν μια περιήγηση με σκάφος στο νησί της Σαρίας από το λιμάνι, την κράτηση μιας συνεδρίας κολύμβησης με ταχύπλοο, την επίσκεψη σε τοπικούς παραγωγούς μελιού ή την πεζοπορία σε κοντινά μονοπάτια πεύκου."
        },
        {
          "q": "Υπάρχουν εκδρομές με πλοίο από τα Πηγάδια;",
          "a": "Ναι, το λιμάνι των Πηγαδίων είναι το κύριο σημείο αναχώρησης για σχεδόν ολοήμερες κρουαζιέρες, εκδρομές με σκάφος με αναπνευστήρα και εκδρομές με σκάφος στη Σαρία."
        }
      ],
      "image": "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "amoopi": {
      "name": "Αμοοπή",
      "intro": "Η Αμμοοπή φημίζεται για τα ρηχά, κρυστάλλινα γαλαζοπράσινα νερά και τους ήρεμους αμμώδεις κολπίσκους της. Φωλιασμένο στην ανατολική ακτή, είναι ένα προστατευμένο καταφύγιο από τους ισχυρούς ανέμους, καθιστώντας το την πιο δημοφιλή περιοχή για οικογένειες, ζευγάρια και λάτρεις της κολύμβησης με αναπνευστήρα.",
      "faqs": [
        {
          "q": "Είναι η παραλία Αμμοοπή κατάλληλη για παιδιά;",
          "a": "Ναι, όρμοι όπως το Little Amoopi έχουν μια ήπια αμμώδη κλίση και ρηχά νερά, κάτι που συνιστάται ιδιαίτερα για οικογένειες με παιδιά."
        },
        {
          "q": "Τι μπορείτε να κάνετε στην Αμμοοπή Καρπάθου;",
          "a": "Απολαύστε κολύμβηση με αναπνευστήρα στους βραχώδεις κολπίσκους, κάντε γραφικούς περιπάτους στις ακτές, χαλαρώστε με μασάζ υψηλής ποιότητας ή δειπνήστε σε αυθεντικές παραθαλάσσιες ταβέρνες."
        }
      ],
      "image": "https://images.pexels.com/photos/34777293/pexels-photo-34777293.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "afiartis": {
      "name": "Αφιάρτης",
      "intro": "Ο Αφιάρτης είναι η καρδιά της ιστιοσανίδας και των θαλάσσιων σπορ της Καρπάθου. Τοποθετημένος στο επίπεδο νότιο άκρο του νησιού, ο κόλπος υπόκειται σε ισχυρούς, συνεχείς ανέμους Μελτέμι. Προσφέρει Chicken Bay για αρχάριους σε επίπεδο νερό και Devil's Bay για δοκιμές ταχύτητας παγκόσμιας κλάσης.",
      "faqs": [
        {
          "q": "Μπορούν οι αρχάριοι να μάθουν windsurfing στον Αφιάρτη;",
          "a": "Απολύτως. Το Chicken Bay διαθέτει επίπεδο νερό με καταφύγιο από τα κύματα μέχρι τη μέση, καθιστώντας το ένα από τα καλύτερα μέρη στην Ευρώπη για να μάθετε windsurfing ή wing foiling."
        },
        {
          "q": "Ποια είναι η εποχή του ανέμου στον Αφιάρτη;",
          "a": "Οι ισχυρότεροι άνεμοι πνέουν καθημερινά από τα μέσα Ιουνίου έως τις αρχές Σεπτεμβρίου, αλλά οι σταθμοί ανοίγουν από τον Μάιο έως τον Οκτώβριο."
        }
      ],
      "image": "https://images.pexels.com/photos/12376921/pexels-photo-12376921.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "volada-pini": {
      "name": "Βολάδα & Πίνι",
      "intro": "Η Βολάδα και το Πίνι είναι παραδοσιακοί ορεινοί οικισμοί που βρίσκονται ανάμεσα σε πευκοδάση και βραχώδεις κορυφές. Αυτή η περιοχή είναι το κέντρο των τοπικών εργαστηρίων χειροτεχνίας και τέχνης. Είναι ένας φανταστικός προορισμός για πεζοπόρους που αναρριχούνται στον Προφήτη Ηλία και ταξιδιώτες που αναζητούν τον αυθεντικό Καρπάθικο πολιτισμό.",
      "faqs": [
        {
          "q": "Τι εργαστήρια μπορώ να κάνω στη Βολάδα;",
          "a": "Το Volada φιλοξενεί εργαστήρια δημιουργικού ψηφιδωτού, εργαστήρια με βότσαλο και εργαστήρια βοτανικού πηλού που διδάσκονται ντόπιοι καλλιτέχνες."
        },
        {
          "q": "Είναι δημοφιλής η πεζοπορία κοντά σε Volada & Pini;",
          "a": "Ναι, η περιοχή είναι η αφετηρία για πανοραμικά ορεινά μονοπάτια, συμπεριλαμβανομένων πεζοποριών μέχρι τον Λαστό και το Απέρι."
        }
      ],
      "image": "https://images.pexels.com/photos/30630904/pexels-photo-30630904.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "arkasa": {
      "name": "Αρκάσα",
      "intro": "Η Αρκάσα βρίσκεται στην ηλιόλουστη νοτιοδυτική ακτή και είναι διάσημη για την πλούσια ιστορία και τις εντυπωσιακές παραλίες της. Οι επισκέπτες έρχονται να σκαρφαλώσουν στην αρχαία Ακρόπολη του Παλαιοκάστρου, να κάνουν σερφάρισμα στην παραλία του Αγίου Νικολάου ή να κάνουν αναρρίχηση σε ασβεστολιθικούς βράχους.",
      "faqs": [
        {
          "q": "Τι πρέπει να δω στην Αρκάσα;",
          "a": "Μην παραλείψετε τα μωσαϊκά της αρχαίας βασιλικής της Αγίας Σοφίας, τη θέα στο ηλιοβασίλεμα από τον λόφο του Παλαιόκαστρου και τοπικά θαλασσινά στην παραδοσιακή πλατεία του χωριού."
        },
        {
          "q": "Υπάρχει αναρρίχηση στην Αρκάσα;",
          "a": "Ναι, τα βράχια κοντά στην Αρκάσα προσφέρουν εξαιρετικές διαδρομές αναρρίχησης με καθοδήγηση τόσο για αρχάριους όσο και για έμπειρους ορειβάτες."
        }
      ],
      "image": "https://images.pexels.com/photos/31846705/pexels-photo-31846705.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "olympos-diafani": {
      "name": "Όλυμπος & Διαφάνι",
      "intro": "Ο Όλυμπος είναι ένα απομονωμένο ορεινό χωριό διάσημο για τις διατηρημένες μητριαρχικές παραδόσεις, τους ανεμόμυλους και τη δωδεκανησιακή διάλεκτό του. Το Διαφάνι είναι το ήσυχο λιμάνι που εξυπηρετεί τον Όλυμπο. Μια ημερήσια εκδρομή εδώ είναι ένα ταξίδι πίσω στο χρόνο.",
      "faqs": [
        {
          "q": "Γιατί ο Όλυμπος Καρπάθου είναι μητριαρχικός;",
          "a": "Ο Όλυμπος διατηρεί ένα κληρονομικό σύστημα όπου τα σπίτια και τα έθιμα μεταβιβάζονται μέσω των πρωτότοκων κόρες, που φορούν καθημερινά χειροποίητες στολές."
        },
        {
          "q": "Πώς θα πάω στον Όλυμπο και στο Διαφάνι;",
          "a": "Ο πιο γραφικός τρόπος είναι μια ημερήσια κρουαζιερόπλοια από το λιμάνι των Πηγαδίων στο Διαφάνι, ακολουθούμενη από μια σύντομη διαδρομή με το λεωφορείο μέχρι τον Όλυμπο."
        }
      ],
      "image": "https://images.pexels.com/photos/37037773/pexels-photo-37037773.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "adia": {
      "name": "Adia",
      "intro": "Η Άντια είναι μια απομακρυσμένη, δασώδης κοιλάδα στη δυτική ακτή, γνωστή για τους απόκρημνους ασβεστολιθικούς βράχους, τα πευκοδάση και τις ήσυχες παραλίες με βότσαλο. Είναι το τέλειο μέρος για ευεξία, γιόγκα, διαλογισμό και χαλάρωση εκτός δικτύου.",
      "faqs": [
        {
          "q": "Ποιες επιλογές ευεξίας υπάρχουν στην Άντια;",
          "a": "Διοργανώνουμε ιδιωτικά μαθήματα γιόγκα στο δάσος, τελετουργικά μασάζ με πέτρες και συνεδρίες ρεφλεξολογίας στις γαλήνιες πλατφόρμες από ξύλο πεύκου της Adia."
        },
        {
          "q": "Είναι το Adia καλό για τους λάτρεις της φύσης;",
          "a": "Ναι, είναι μια από τις πιο δασωμένες περιοχές της Κάρπαθου, που προσφέρει ήσυχους παραθαλάσσιους περιπάτους και βιολογικές ταβέρνες."
        }
      ],
      "image": "https://images.pexels.com/photos/34777293/pexels-photo-34777293.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "saria": {
      "name": "Σάρια",
      "intro": "Η Σαρία είναι ένα ακατοίκητο νησί βόρεια της Καρπάθου, προστατευμένο ως καταφύγιο άγριας ζωής. Διαθέτει παραλίες με λευκό βότσαλο, θαλάσσιες σπηλιές, ένα εντυπωσιακό ξηρό φαράγγι και τα ερείπια ενός αρχαίου βυζαντινού και σαρακηνικού πειρατικού οικισμού.",
      "faqs": [
        {
          "q": "Πώς μπορώ να επισκεφτώ το νησί Σαρία;",
          "a": "Κάντε κράτηση για εκδρομή με καραβάκι με αναχώρηση από Πηγάδια ή Διαφάνι. Η περιήγηση περιλαμβάνει μεταφορά με σκάφος, πεζοπορία στο φαράγγι, κολύμβηση με αναπνευστήρα και φρέσκο ​​γεύμα."
        },
        {
          "q": "Είναι το νησί Σαρία κατάλληλο για πεζοπορία;",
          "a": "Ναι, η πεζοπορία στο φαράγγι από την παραλία Παλάτια μέχρι τα θολωτά ερείπια του ιστορικού πειρατικού οικισμού είναι ένα βασικό χαρακτηριστικό της περιήγησης."
        }
      ],
      "image": "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    }
  },
  "es": {
    "pigadia": {
      "name": "pigadia",
      "intro": "Pigadia (también conocida como ciudad de Karpathos) es la vibrante capital y puerto de Karpathos. Flanqueada por una larga playa de arena, sirve como el mejor punto de partida para viajes diarios en barco a la isla de Saria, bucear y explorar senderos de montaña. Es perfecto para familias, parejas y grupos que buscan cenas, vida nocturna y comodidad.",
      "faqs": [
        {
          "q": "¿Cuáles son las mejores cosas para hacer en Pigadia Kárpatos?",
          "a": "Las principales actividades incluyen realizar un recorrido en barco por la isla de Saria desde el puerto, reservar una sesión de snorkel en lancha rápida, visitar a los productores locales de miel o caminar por senderos de pinos cercanos."
        },
        {
          "q": "¿Hay excursiones en barco desde Pigadia?",
          "a": "Sí, el puerto de Pigadia es el principal punto de partida para cruceros de casi un día, viajes en barco para hacer snorkel y excursiones en barco a la isla de Saria."
        }
      ],
      "image": "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "amoopi": {
      "name": "Amoopi",
      "intro": "Amoopi es famosa por sus aguas poco profundas y cristalinas de color turquesa y sus tranquilas calas de arena. Ubicado en la costa este, es un refugio protegido de los fuertes vientos, lo que lo convierte en el área más popular para familias, parejas y entusiastas del snorkel.",
      "faqs": [
        {
          "q": "¿La playa de Amoopi es adecuada para niños?",
          "a": "Sí, calas como Little Amoopi tienen una suave pendiente arenosa y aguas poco profundas, lo que es muy recomendable para familias con niños."
        },
        {
          "q": "¿Qué puedes hacer en Amoopi Kárpatos?",
          "a": "Disfrute practicando snorkel en las calas rocosas, realice pintorescos paseos por la costa, relájese con masajes premium o cene en auténticas tabernas junto al mar."
        }
      ],
      "image": "https://images.pexels.com/photos/34777293/pexels-photo-34777293.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "afiartis": {
      "name": "Afiartis",
      "intro": "Afiartis es el corazón del windsurf y los deportes acuáticos de Karpathos. Situada en el extremo sur llano de la isla, la bahía está sujeta a fuertes y constantes vientos Meltemi. Ofrece Chicken Bay para principiantes en aguas tranquilas y Devil's Bay para pruebas de velocidad de clase mundial.",
      "faqs": [
        {
          "q": "¿Pueden los principiantes aprender windsurf en Afiartis?",
          "a": "Absolutamente. Chicken Bay cuenta con aguas planas que llegan hasta la cintura y protegidas de las olas, lo que lo convierte en uno de los mejores lugares de Europa para aprender a hacer windsurf o ala foiling."
        },
        {
          "q": "¿Cuál es la temporada de viento en Afiartis?",
          "a": "Los vientos más fuertes soplan diariamente desde mediados de junio hasta principios de septiembre, pero las estaciones abren de mayo a octubre."
        }
      ],
      "image": "https://images.pexels.com/photos/12376921/pexels-photo-12376921.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "volada-pini": {
      "name": "Volada y Pini",
      "intro": "Volada y Pini son asentamientos tradicionales de montaña ubicados entre bosques de pinos y cumbres rocosas. Esta zona es el centro de talleres de arte y artesanía local. Es un destino fantástico para los excursionistas que escalan Profitis Ilias y los viajeros que buscan la auténtica cultura de los Karpatos.",
      "faqs": [
        {
          "q": "¿Qué talleres puedo hacer en Volada?",
          "a": "Volada alberga talleres creativos de mosaicos, talleres de guijarros y talleres de arcilla botánica impartidos por artistas locales."
        },
        {
          "q": "¿Es popular el senderismo cerca de Volada & Pini?",
          "a": "Sí, la zona es el punto de partida de senderos panorámicos de montaña, incluidas caminatas hasta Lastos y Aperi."
        }
      ],
      "image": "https://images.pexels.com/photos/30630904/pexels-photo-30630904.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "arkasa": {
      "name": "arkasa",
      "intro": "Arkasa se encuentra en la soleada costa suroeste y es famosa por su rica historia y sus espectaculares playas de olas. Los visitantes vienen a escalar la antigua Acrópolis de Paleokastro, surfear en la playa de Agios Nikolaos o escalar acantilados de piedra caliza.",
      "faqs": [
        {
          "q": "¿Qué puedo ver en Arkasa?",
          "a": "No se pierda los mosaicos de la antigua basílica de Agia Sophia, las vistas del atardecer desde la colina Paleokastro y los mariscos locales en la tradicional plaza del pueblo."
        },
        {
          "q": "¿Hay escalada en Arkasa?",
          "a": "Sí, los acantilados cercanos a Arkasa ofrecen excelentes rutas guiadas de escalada en roca tanto para principiantes como para escaladores experimentados."
        }
      ],
      "image": "https://images.pexels.com/photos/31846705/pexels-photo-31846705.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "olympos-diafani": {
      "name": "Olimpo y Diafani",
      "intro": "Olympos es un pueblo de montaña aislado famoso por sus tradiciones matriarcales conservadas, sus molinos de viento y su dialecto del Dodecaneso. Diafani es el tranquilo puerto que sirve a Olympos. Una excursión de un día aquí es un viaje al pasado.",
      "faqs": [
        {
          "q": "¿Por qué Olympos Karpathos es matriarcal?",
          "a": "Olympos conserva un sistema de herencia en el que las casas y costumbres se transmiten a través de las hijas primogénitas, que visten trajes tejidos a mano a diario."
        },
        {
          "q": "¿Cómo llego al Olimpo y a Diafani?",
          "a": "La forma más pintoresca es hacer una excursión de un día en barco desde el puerto de Pigadia hasta Diafani, seguido de un corto viaje en autobús hasta Olympos."
        }
      ],
      "image": "https://images.pexels.com/photos/37037773/pexels-photo-37037773.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "adia": {
      "name": "Adia",
      "intro": "Adia es un valle remoto y boscoso en la costa oeste, conocido por sus escarpados acantilados de piedra caliza, bosques de pinos y tranquilas playas de guijarros. Es el lugar perfecto para el bienestar, el yoga, la meditación y la relajación fuera de la red.",
      "faqs": [
        {
          "q": "¿Qué opciones de bienestar existen en Adia?",
          "a": "Organizamos clases privadas de yoga en el bosque, rituales de masaje con piedras y sesiones de reflexología en las serenas plataformas de madera de pino de Adia."
        },
        {
          "q": "¿Adia es buena para los amantes de la naturaleza?",
          "a": "Sí, es una de las zonas más boscosas de Karpathos y ofrece tranquilos paseos costeros y tabernas orgánicas."
        }
      ],
      "image": "https://images.pexels.com/photos/34777293/pexels-photo-34777293.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "saria": {
      "name": "sara",
      "intro": "Saria es una isla deshabitada al norte de Karpathos, protegida como santuario de vida silvestre. Cuenta con playas de guijarros blancos, cuevas marinas, un espectacular cañón seco y las ruinas de un antiguo asentamiento pirata bizantino y sarraceno.",
      "faqs": [
        {
          "q": "¿Cómo puedo visitar la isla de Saria?",
          "a": "Reserva una excursión guiada en barco con salida desde Pigadia o Diafani. El recorrido incluye traslados en bote, caminatas por el cañón, snorkel y un almuerzo fresco."
        },
        {
          "q": "¿La isla de Saria es apta para practicar senderismo?",
          "a": "Sí, caminar por el desfiladero desde la playa de Palatia hasta las ruinas abovedadas del histórico asentamiento pirata es un punto culminante clave del recorrido."
        }
      ],
      "image": "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    }
  },
  "fr": {
    "pigadia": {
      "name": "Pigadie",
      "intro": "Pigadia (également connue sous le nom de ville de Karpathos) est la capitale animée et le port de Karpathos. Flanqué d'une longue plage de sable, il constitue le point de départ ultime pour des excursions quotidiennes en bateau vers l'île de Saria, de la plongée sous-marine et l'exploration des sentiers de montagne. Il est parfait pour les familles, les couples et les groupes à la recherche de restaurants, de vie nocturne et de commodité.",
      "faqs": [
        {
          "q": "Quelles sont les meilleures choses à faire à Pigadia Karpathos ?",
          "a": "Les principales activités incluent une excursion en bateau sur l'île de Saria depuis le port, la réservation d'une séance de plongée en apnée en hors-bord, la visite des producteurs de miel locaux ou la randonnée sur les sentiers de pins à proximité."
        },
        {
          "q": "Y a-t-il des excursions en bateau depuis Pigadia ?",
          "a": "Oui, le port de Pigadia est le principal point de départ de croisières d'une journée, de sorties en bateau de plongée en apnée et d'excursions en bateau vers l'île de Saria."
        }
      ],
      "image": "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "amoopi": {
      "name": "Amoopi",
      "intro": "Amoopi est célèbre pour ses eaux turquoise peu profondes et cristallines et ses criques de sable calmes. Nichée sur la côte est, c'est un refuge protégé des vents violents, ce qui en fait la zone la plus populaire auprès des familles, des couples et des amateurs de plongée en apnée.",
      "faqs": [
        {
          "q": "La plage d’Amoopi est-elle adaptée aux enfants ?",
          "a": "Oui, les criques comme Little Amoopi ont une pente sablonneuse douce et des eaux peu profondes, ce qui est fortement recommandé aux familles avec enfants."
        },
        {
          "q": "Que pouvez-vous faire à Amoopi Karpathos?",
          "a": "Profitez de la plongée en apnée dans les criques rocheuses, faites des promenades pittoresques sur la côte, détendez-vous avec des massages haut de gamme ou dînez dans d'authentiques tavernes en bord de mer."
        }
      ],
      "image": "https://images.pexels.com/photos/34777293/pexels-photo-34777293.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "afiartis": {
      "name": "Afiartis",
      "intro": "Afiartis est le cœur de la planche à voile et des sports nautiques de Karpathos. Située sur la pointe sud plate de l'île, la baie est soumise à des vents Meltemi forts et constants. Il propose Chicken Bay pour les débutants en eau calme et Devil's Bay pour les essais de vitesse de classe mondiale.",
      "faqs": [
        {
          "q": "Les débutants peuvent-ils apprendre la planche à voile à Afiartis ?",
          "a": "Absolument. Chicken Bay présente des eaux plates jusqu'à la taille et un abri contre les vagues, ce qui en fait l'un des meilleurs endroits d'Europe pour apprendre la planche à voile ou le wing foil."
        },
        {
          "q": "Quelle est la saison du vent à Afiartis?",
          "a": "Les vents les plus forts soufflent quotidiennement de la mi-juin au début septembre, mais les stations ouvrent de mai à octobre."
        }
      ],
      "image": "https://images.pexels.com/photos/12376921/pexels-photo-12376921.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "volada-pini": {
      "name": "Volada et Pini",
      "intro": "Volada et Pini sont des villages de montagne traditionnels situés au milieu de forêts de pins et de sommets rocheux. Cette zone est le centre de l'artisanat local et des ateliers d'art. C'est une destination fantastique pour les randonneurs qui gravissent Profitis Ilias et les voyageurs à la recherche d'une culture authentique des Karpates.",
      "faqs": [
        {
          "q": "Quels ateliers puis-je faire à Volada ?",
          "a": "Volada accueille des ateliers créatifs de mosaïque, des ateliers de galets et des ateliers d'argile botanique enseignés par des artistes locaux."
        },
        {
          "q": "La randonnée est-elle populaire dans les environs de Volada & Pini ?",
          "a": "Oui, la région est le point de départ de sentiers de montagne panoramiques, notamment de randonnées jusqu'à Lastos et Aperi."
        }
      ],
      "image": "https://images.pexels.com/photos/30630904/pexels-photo-30630904.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "arkasa": {
      "name": "Arkasa",
      "intro": "Arkasa se trouve sur la côte ensoleillée du sud-ouest et est célèbre pour sa riche histoire et ses plages de vagues spectaculaires. Les visiteurs viennent escalader l'ancienne Acropole de Paleokastro, surfer sur la plage d'Agios Nikolaos ou faire de l'escalade sur des falaises calcaires.",
      "faqs": [
        {
          "q": "Que voir à Arkasa ?",
          "a": "Ne manquez pas les anciennes mosaïques de la basilique d'Agia Sophia, les couchers de soleil depuis la colline de Paleokastro et les fruits de mer locaux sur la place traditionnelle du village."
        },
        {
          "q": "Est-ce qu'il y a de l'escalade à Arkasa ?",
          "a": "Oui, les falaises près d'Arkasa offrent d'excellents itinéraires d'escalade guidés pour les grimpeurs débutants et expérimentés."
        }
      ],
      "image": "https://images.pexels.com/photos/31846705/pexels-photo-31846705.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "olympos-diafani": {
      "name": "Olympos et Diafani",
      "intro": "Olympos est un village de montagne isolé célèbre pour ses traditions matriarcales préservées, ses moulins à vent et son dialecte du Dodécanèse. Diafani est le port tranquille desservant Olympos. Une excursion d’une journée ici est un voyage dans le temps.",
      "faqs": [
        {
          "q": "Pourquoi Olympos Karpathos est-il matriarcal ?",
          "a": "Olympos préserve un système d'héritage dans lequel les maisons et les coutumes sont transmises par les filles aînées, qui portent quotidiennement des costumes tissés à la main."
        },
        {
          "q": "Comment se rendre à Olympos et Diafani ?",
          "a": "Le moyen le plus pittoresque est une excursion d'une journée en bateau de croisière depuis le port de Pigadia jusqu'à Diafani, suivie d'un court trajet en bus jusqu'à Olympos."
        }
      ],
      "image": "https://images.pexels.com/photos/37037773/pexels-photo-37037773.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "adia": {
      "name": "Adia",
      "intro": "Adia est une vallée boisée isolée de la côte ouest, connue pour ses falaises calcaires escarpées, ses forêts de pins et ses paisibles plages de galets. C'est l'endroit idéal pour le bien-être, le yoga, la méditation et la relaxation hors réseau.",
      "faqs": [
        {
          "q": "Quelles options de bien-être existent à Adia ?",
          "a": "Nous organisons des cours privés de yoga en forêt, des rituels de massage aux pierres et des séances de réflexologie sur les sereines plates-formes en pin d'Adia."
        },
        {
          "q": "Adia est-elle bonne pour les amoureux de la nature ?",
          "a": "Oui, c'est l'une des zones les plus boisées de Karpathos, offrant des promenades côtières tranquilles et des tavernes bio."
        }
      ],
      "image": "https://images.pexels.com/photos/34777293/pexels-photo-34777293.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "saria": {
      "name": "Sara",
      "intro": "Saria est une île inhabitée au nord de Karpathos, protégée en tant que réserve faunique. Il comprend des plages de galets blancs, des grottes marines, un canyon sec spectaculaire et les ruines d'une ancienne colonie de pirates byzantins et sarrasins.",
      "faqs": [
        {
          "q": "Comment puis-je visiter l’île de Saria ?",
          "a": "Réservez une excursion guidée en bateau au départ de Pigadia ou Diafani. La visite comprend les transferts en bateau, la randonnée dans le canyon, la plongée en apnée et un déjeuner frais."
        },
        {
          "q": "L'île de Saria est-elle adaptée à la randonnée ?",
          "a": "Oui, la randonnée dans les gorges depuis la plage de Palatia jusqu'aux ruines voûtées de la colonie de pirates historique est l'un des points forts de la visite."
        }
      ],
      "image": "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    }
  },
  "de": {
    "pigadia": {
      "name": "Pigadia",
      "intro": "Pigadia (auch bekannt als Karpathos-Stadt) ist die pulsierende Hauptstadt und der Hafen von Karpathos. Flankiert von einem langen Sandstrand dient es als ultimativer Ausgangspunkt für tägliche Bootsausflüge zur Insel Saria, zum Tauchen und zur Erkundung von Bergpfaden. Es ist perfekt für Familien, Paare und Gruppen, die Essen, Nachtleben und Komfort suchen.",
      "faqs": [
        {
          "q": "Was kann man am besten in Pigadia Karpathos unternehmen?",
          "a": "Zu den Top-Aktivitäten gehören eine Bootstour zur Insel Saria vom Hafen aus, die Buchung einer Schnellboot-Schnorchelsession, der Besuch lokaler Honigproduzenten oder das Wandern auf den nahegelegenen Kiefernpfaden."
        },
        {
          "q": "Gibt es Bootsfahrten von Pigadia aus?",
          "a": "Ja, der Hafen von Pigadia ist der Hauptausgangspunkt für fast ganztägige Kreuzfahrten, Schnorchel-Bootsausflüge und Bootsausflüge zur Insel Saria."
        }
      ],
      "image": "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "amoopi": {
      "name": "Amoopi",
      "intro": "Amoopi ist berühmt für sein flaches, kristallklares türkisfarbenes Wasser und seine ruhigen Sandbuchten. Es liegt an der Ostküste und ist ein vor starken Winden geschützter Zufluchtsort, was es zum beliebtesten Gebiet für Familien, Paare und Schnorchelbegeisterte macht.",
      "faqs": [
        {
          "q": "Ist der Strand von Amoopi für Kinder geeignet?",
          "a": "Ja, Buchten wie Little Amoopi haben einen sanften Sandhang und flaches Wasser, was für Familien mit Kindern sehr zu empfehlen ist."
        },
        {
          "q": "Was kann man in Amoopi Karpathos unternehmen?",
          "a": "Genießen Sie Schnorcheln in den felsigen Buchten, unternehmen Sie malerische Küstenwanderungen, entspannen Sie sich bei erstklassigen Massagen oder speisen Sie in authentischen Tavernen am Meer."
        }
      ],
      "image": "https://images.pexels.com/photos/34777293/pexels-photo-34777293.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "afiartis": {
      "name": "Afiartis",
      "intro": "Afiartis ist das Windsurf- und Wassersportzentrum von Karpathos. Die Bucht liegt an der flachen Südspitze der Insel und ist starken, beständigen Meltemi-Winden ausgesetzt. Es bietet Chicken Bay für Flachwasser-Anfänger und Devil's Bay für erstklassige Geschwindigkeitsprüfungen.",
      "faqs": [
        {
          "q": "Können Anfänger in Afiartis Windsurfen lernen?",
          "a": "Absolut. Chicken Bay verfügt über hüfttiefes, flaches Wasser mit Schutz vor Wellen, was es zu einem der absolut besten Orte in Europa macht, um Windsurfen oder Wing-Foilen zu lernen."
        },
        {
          "q": "Welche Windsaison herrscht in Afiartis?",
          "a": "Die stärksten Winde wehen täglich von Mitte Juni bis Anfang September, die Stationen sind jedoch von Mai bis Oktober geöffnet."
        }
      ],
      "image": "https://images.pexels.com/photos/12376921/pexels-photo-12376921.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "volada-pini": {
      "name": "Volada & Pini",
      "intro": "Volada und Pini sind traditionelle Bergsiedlungen inmitten von Pinienwäldern und felsigen Gipfeln. Dieser Bereich ist das Zentrum lokaler Handwerks- und Kunstwerkstätten. Es ist ein fantastisches Ziel für Wanderer, die den Profitis Ilias besteigen, und für Reisende, die authentische Karpatenkultur suchen.",
      "faqs": [
        {
          "q": "Welche Workshops kann ich in Volada machen?",
          "a": "In Volada finden kreative Mosaik-Workshops, Kieselsteine-Workshops und botanische Tonateliers statt, die von lokalen Künstlern unterrichtet werden."
        },
        {
          "q": "Ist Wandern in der Nähe von Volada & Pini beliebt?",
          "a": "Ja, die Gegend ist Ausgangspunkt für Panorama-Bergwanderwege, darunter Wanderungen bis nach Lastos und Aperi."
        }
      ],
      "image": "https://images.pexels.com/photos/30630904/pexels-photo-30630904.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "arkasa": {
      "name": "Arkasa",
      "intro": "Arkasa liegt an der sonnigen Südwestküste und ist berühmt für seine reiche Geschichte und dramatischen Wellenstrände. Besucher kommen, um die antike Akropolis von Paleokastro zu besteigen, am Strand von Agios Nikolaos zu surfen oder auf Kalksteinfelsen zu klettern.",
      "faqs": [
        {
          "q": "Was sollte ich in Arkasa sehen?",
          "a": "Verpassen Sie nicht die antiken Basilika-Mosaiken von Agia Sophia, die Aussicht auf den Sonnenuntergang vom Paleokastro-Hügel und lokale Meeresfrüchte auf dem traditionellen Dorfplatz."
        },
        {
          "q": "Gibt es Klettern in Arkasa?",
          "a": "Ja, die Klippen in der Nähe von Arkasa bieten ausgezeichnete geführte Kletterrouten sowohl für Anfänger als auch für erfahrene Kletterer."
        }
      ],
      "image": "https://images.pexels.com/photos/31846705/pexels-photo-31846705.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "olympos-diafani": {
      "name": "Olympos und Diafani",
      "intro": "Olympos ist ein abgelegenes Bergdorf, das für seine erhaltenen matriarchalen Traditionen, Windmühlen und seinen dodekanesischen Dialekt bekannt ist. Diafani ist der ruhige Hafen für Olympos. Ein Tagesausflug hierher ist eine Reise in die Vergangenheit.",
      "faqs": [
        {
          "q": "Warum ist Olympos Karpathos matriarchalisch?",
          "a": "Olympos bewahrt ein Erbsystem, in dem Häuser und Bräuche durch die erstgeborenen Töchter weitergegeben werden, die täglich handgewebte Kostüme tragen."
        },
        {
          "q": "Wie komme ich nach Olympos und Diafani?",
          "a": "Der malerischste Weg ist ein Tagesausflug mit dem Kreuzfahrtschiff vom Hafen von Pigadia nach Diafani, gefolgt von einer kurzen Busfahrt nach Olympos."
        }
      ],
      "image": "https://images.pexels.com/photos/37037773/pexels-photo-37037773.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "adia": {
      "name": "Adia",
      "intro": "Adia ist ein abgelegenes, bewaldetes Tal an der Westküste, das für seine schroffen Kalksteinfelsen, Kiefernwälder und ruhigen Kiesstrände bekannt ist. Es ist der perfekte Ort für Wellness, Yoga, Meditation und Entspannung abseits des Stromnetzes.",
      "faqs": [
        {
          "q": "Welche Wellness-Optionen gibt es in Adia?",
          "a": "Wir organisieren private Wald-Yoga-Kurse, Steinmassage-Rituale und Reflexzonenmassage-Sitzungen auf Adias ruhigen Plattformen aus Kiefernholz."
        },
        {
          "q": "Ist Adia gut für Naturliebhaber?",
          "a": "Ja, es ist eines der waldreichsten Gebiete auf Karpathos und bietet ruhige Küstenwanderungen und Bio-Tavernen."
        }
      ],
      "image": "https://images.pexels.com/photos/34777293/pexels-photo-34777293.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    "saria": {
      "name": "Saria",
      "intro": "Saria ist eine unbewohnte Insel nördlich von Karpathos, die als Naturschutzgebiet geschützt ist. Es verfügt über weiße Kiesstrände, Meereshöhlen, eine dramatische trockene Schlucht und die Ruinen einer alten byzantinischen und sarazenischen Piratensiedlung.",
      "faqs": [
        {
          "q": "Wie kann ich die Insel Saria besuchen?",
          "a": "Buchen Sie einen geführten Bootsausflug ab Pigadia oder Diafani. Die Tour beinhaltet Bootstransfers, Canyon-Wandern, Schnorcheln und ein frisches Mittagessen."
        },
        {
          "q": "Ist die Insel Saria zum Wandern geeignet?",
          "a": "Ja, die Wanderung durch die Schlucht vom Palatia-Strand bis zu den gewölbten Ruinen der historischen Piratensiedlung ist ein wichtiger Höhepunkt der Tour."
        }
      ],
      "image": "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    }
  }
};

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

  useSEO({
    title: `Things to Do in ${area.name}, Karpathos | ${t("nav.concierge", "Karpathos Concierge")}`,
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
