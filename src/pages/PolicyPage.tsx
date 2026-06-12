import { useLanguage } from "../lib/languageContext";
import { useSEO } from "../utils/seo";

type Kind = "terms" | "privacy" | "cancellation" | "safety";

const TRANSLATED_CONTENT: Record<string, Record<Kind, { title: string; intro: string; sections: { h: string; p: string }[] }>> = {
  "en": {
    "terms": {
      "title": "Terms & Conditions",
      "intro": "These Terms govern your use of the Karpathos Adventures website and the booking concierge service. By using the site or sending an inquiry, you agree to these Terms.",
      "sections": [
        {
          "h": "1. Our role",
          "p": "Karpathos Adventures is a curated booking concierge. We connect guests with independent local operators and may also resell their experiences. Operators remain responsible for delivering the activity safely and lawfully."
        },
        {
          "h": "2. Bookings & inquiries",
          "p": "An inquiry is not a confirmed booking. A booking is confirmed only once we reply with date, price and meeting details, and any required deposit has been received."
        },
        {
          "h": "3. Prices",
          "p": "All listed prices are 'from' guide prices and may change with season, group size, route or operator. We'll always confirm the final price before booking."
        },
        {
          "h": "4. Operator responsibility",
          "p": "Activities are operated by independent local partners. We vet operators but do not control day-to-day operations."
        },
        {
          "h": "5. Use of the site",
          "p": "Don't scrape, copy or misuse the site. Don't make false or fraudulent bookings."
        },
        {
          "h": "6. Liability",
          "p": "To the extent permitted by law, our liability for any single booking is limited to the amount you paid to us for that booking."
        },
        {
          "h": "7. Changes",
          "p": "We may update these Terms. The latest version always lives on this page."
        }
      ]
    },
    "privacy": {
      "title": "Privacy Policy",
      "intro": "We respect your privacy. This policy explains what we collect, why, and your rights — including how to delete your data.",
      "sections": [
        {
          "h": "Data we collect",
          "p": "Name, email, phone/WhatsApp, the activity you asked about, your preferred dates and group size, and any message you send us. We may also collect basic analytics to improve the site."
        },
        {
          "h": "Why we collect it",
          "p": "To reply to your inquiry, confirm bookings, and improve the website. We do not sell your data."
        },
        {
          "h": "How long we keep it",
          "p": "Inquiry data is kept for up to 24 months for customer support and reporting, unless you ask us to delete it earlier."
        },
        {
          "h": "Your rights",
          "p": "You can ask for a copy of your data, to correct it, or to delete it at any time by emailing concierge@karpathosadventures.com."
        },
        {
          "h": "Cookies",
          "p": "We use essential cookies and (with your consent) basic analytics. You can change your choice in the cookie banner."
        },
        {
          "h": "Security",
          "p": "The site is served over HTTPS. Access to inquiries is restricted to authorized team members."
        }
      ]
    },
    "cancellation": {
      "title": "Cancellation Policy",
      "intro": "Most activities offer free cancellation up to 24–72 hours before the start time. Each activity page lists its exact policy.",
      "sections": [
        {
          "h": "Free cancellation window",
          "p": "Unless stated otherwise, you can cancel free of charge up to 24 hours before group activities and 72 hours before private experiences (ingredients, charter and chef setups)."
        },
        {
          "h": "Weather cancellations",
          "p": "If we (or the operator) cancel for weather or safety reasons, you get a full refund or a free reschedule."
        },
        {
          "h": "No-shows",
          "p": "No-shows are not refundable. If you're running late, message us on WhatsApp as soon as possible."
        },
        {
          "h": "Late changes",
          "p": "Group size and date changes after the free window may incur a small fee depending on the operator."
        }
      ]
    },
    "safety": {
      "title": "Safety & Insurance",
      "intro": "Your safety is our number one priority. All activities are run by licensed local operators and we re-verify documents every season.",
      "sections": [
        {
          "h": "Licensed operators only",
          "p": "We only list operators with valid local licenses, where required, and verified insurance."
        },
        {
          "h": "Weather & sea conditions",
          "p": "Boat, water sport and mountain activities only run in safe conditions. We will reschedule or refund if conditions are not safe."
        },
        {
          "h": "Safety gear",
          "p": "Helmets, life jackets, harnesses and diving gear are provided as required and must be worn at all times."
        },
        {
          "h": "Health declaration",
          "p": "Some activities (e.g. scuba) require a short health questionnaire. Please answer honestly — it's for your safety."
        },
        {
          "h": "Minors",
          "p": "Minors must always be accompanied by an adult and may have separate age limits per activity."
        }
      ]
    }
  },
  "el": {
    "terms": {
      "title": "Όροι & Προϋποθέσεις",
      "intro": "Αυτοί οι Όροι διέπουν τη χρήση από μέρους σας του ιστότοπου Karpathos Adventures και της υπηρεσίας θυρωρού κρατήσεων. Χρησιμοποιώντας τον ιστότοπο ή στέλνοντας ένα ερώτημα, συμφωνείτε με αυτούς τους Όρους.",
      "sections": [
        {
          "h": "1. Ο ρόλος μας",
          "p": "Το Karpathos Adventures είναι ένα επιμελημένο θυρωρείο κρατήσεων. Συνδέουμε τους επισκέπτες με ανεξάρτητους τοπικούς φορείς και ενδέχεται επίσης να μεταπωλήσουμε τις εμπειρίες τους. Οι χειριστές παραμένουν υπεύθυνοι για την ασφαλή και νόμιμη παράδοση της δραστηριότητας."
        },
        {
          "h": "2. Κρατήσεις & ερωτήσεις",
          "p": "Μια ερώτηση δεν είναι επιβεβαιωμένη κράτηση. Μια κράτηση επιβεβαιώνεται μόνο αφού απαντήσουμε με ημερομηνία, τιμή και λεπτομέρειες συνάντησης και ληφθεί οποιαδήποτε απαιτούμενη κατάθεση."
        },
        {
          "h": "3. Τιμές",
          "p": "Όλες οι αναγραφόμενες τιμές είναι «από» τιμές οδηγών και ενδέχεται να αλλάξουν ανάλογα με την εποχή, το μέγεθος της ομάδας, τη διαδρομή ή τον χειριστή. Θα επιβεβαιώνουμε πάντα την τελική τιμή πριν από την κράτηση."
        },
        {
          "h": "4. Ευθύνη χειριστή",
          "p": "Οι δραστηριότητες λειτουργούν από ανεξάρτητους τοπικούς εταίρους. Ελέγχουμε τους χειριστές αλλά δεν ελέγχουμε τις καθημερινές λειτουργίες."
        },
        {
          "h": "5. Χρήση του ιστότοπου",
          "p": "Μην ξύνετε, αντιγράψετε ή κακοποιήσετε τον ιστότοπο. Μην κάνετε ψευδείς ή δόλιες κρατήσεις."
        },
        {
          "h": "6. Ευθύνη",
          "p": "Στο βαθμό που επιτρέπεται από τη νομοθεσία, η ευθύνη μας για οποιαδήποτε μεμονωμένη κράτηση περιορίζεται στο ποσό που καταβάλατε σε εμάς για αυτήν την κράτηση."
        },
        {
          "h": "7. Αλλαγές",
          "p": "Ενδέχεται να ενημερώσουμε αυτούς τους Όρους. Η πιο πρόσφατη έκδοση μένει πάντα σε αυτή τη σελίδα."
        }
      ]
    },
    "privacy": {
      "title": "Πολιτική Απορρήτου",
      "intro": "Σεβόμαστε το απόρρητό σας. Αυτή η πολιτική εξηγεί τι συλλέγουμε, γιατί και τα δικαιώματά σας — συμπεριλαμβανομένου του τρόπου διαγραφής των δεδομένων σας.",
      "sections": [
        {
          "h": "Δεδομένα που συλλέγουμε",
          "p": "Όνομα, email, τηλέφωνο/WhatsApp, τη δραστηριότητα για την οποία ρωτήσατε, τις προτιμώμενες ημερομηνίες και το μέγεθος της ομάδας σας και οποιοδήποτε μήνυμα μας στέλνετε. Ενδέχεται επίσης να συλλέξουμε βασικά αναλυτικά στοιχεία για να βελτιώσουμε τον ιστότοπο."
        },
        {
          "h": "Γιατί το μαζεύουμε",
          "p": "Για να απαντήσετε στο ερώτημά σας, να επιβεβαιώσετε τις κρατήσεις και να βελτιώσετε τον ιστότοπο. Δεν πουλάμε τα δεδομένα σας."
        },
        {
          "h": "Πόσο καιρό το κρατάμε",
          "p": "Τα δεδομένα ερωτήσεων διατηρούνται για έως και 24 μήνες για υποστήριξη πελατών και αναφορά, εκτός εάν μας ζητήσετε να τα διαγράψουμε νωρίτερα."
        },
        {
          "h": "Τα δικαιώματά σας",
          "p": "Μπορείτε να ζητήσετε αντίγραφο των δεδομένων σας, να τα διορθώσετε ή να τα διαγράψετε ανά πάσα στιγμή, στέλνοντας email στο concierge@karpathosadventures.com."
        },
        {
          "h": "Μπισκότα",
          "p": "Χρησιμοποιούμε βασικά cookies και (με τη συγκατάθεσή σας) βασικά αναλυτικά στοιχεία. Μπορείτε να αλλάξετε την επιλογή σας στο banner cookie."
        },
        {
          "h": "Ασφάλεια",
          "p": "Ο ιστότοπος εξυπηρετείται μέσω HTTPS. Η πρόσβαση σε ερωτήσεις περιορίζεται στα εξουσιοδοτημένα μέλη της ομάδας."
        }
      ]
    },
    "cancellation": {
      "title": "Πολιτική ακύρωσης",
      "intro": "Οι περισσότερες δραστηριότητες προσφέρουν δωρεάν ακύρωση έως και 24–72 ώρες πριν από την ώρα έναρξης. Κάθε σελίδα δραστηριότητας παραθέτει την ακριβή πολιτική της.",
      "sections": [
        {
          "h": "Δωρεάν παράθυρο ακύρωσης",
          "p": "Εκτός εάν αναφέρεται διαφορετικά, μπορείτε να ακυρώσετε δωρεάν έως και 24 ώρες πριν από ομαδικές δραστηριότητες και 72 ώρες πριν από ιδιωτικές εμπειρίες (συστατικά, τσάρτερ και ρυθμίσεις σεφ)."
        },
        {
          "h": "Ακυρώσεις καιρού",
          "p": "Εάν εμείς (ή ο χειριστής) ακυρώσουμε για λόγους καιρού ή ασφάλειας, λαμβάνετε πλήρη επιστροφή χρημάτων ή δωρεάν αναδιάταξη."
        },
        {
          "h": "Μη εμφανίσεις",
          "p": "Οι μη εμφανίσεις δεν επιστρέφονται. Εάν καθυστερείτε, στείλτε μας μήνυμα στο WhatsApp το συντομότερο δυνατό."
        },
        {
          "h": "Καθυστερημένες αλλαγές",
          "p": "Το μέγεθος της ομάδας και οι αλλαγές ημερομηνίας μετά το δωρεάν παράθυρο ενδέχεται να επιφέρουν μικρή χρέωση ανάλογα με τον χειριστή."
        }
      ]
    },
    "safety": {
      "title": "Ασφάλεια & Ασφάλιση",
      "intro": "Η ασφάλειά σας είναι η νούμερο ένα προτεραιότητά μας. Όλες οι δραστηριότητες εκτελούνται από αδειοδοτημένους τοπικούς φορείς και επαληθεύουμε εκ νέου τα έγγραφα κάθε σεζόν.",
      "sections": [
        {
          "h": "Μόνο αδειοδοτημένοι χειριστές",
          "p": "Παραθέτουμε μόνο φορείς με έγκυρες τοπικές άδειες, όπου απαιτείται, και επαληθευμένη ασφάλιση."
        },
        {
          "h": "Καιρικές και θαλάσσιες συνθήκες",
          "p": "Βάρκες, θαλάσσια σπορ και δραστηριότητες στο βουνό εκτελούνται μόνο σε ασφαλείς συνθήκες. Θα επαναπρογραμματίσουμε ή θα επιστρέψουμε τα χρήματα εάν οι συνθήκες δεν είναι ασφαλείς."
        },
        {
          "h": "Εξοπλισμός ασφαλείας",
          "p": "Κράνη, σωσίβια, ιμάντες και καταδυτικός εξοπλισμός παρέχονται όπως απαιτείται και πρέπει να φοριούνται ανά πάσα στιγμή."
        },
        {
          "h": "Δήλωση υγείας",
          "p": "Ορισμένες δραστηριότητες (π.χ. καταδύσεις) απαιτούν ένα σύντομο ερωτηματολόγιο υγείας. Απαντήστε ειλικρινά — είναι για την ασφάλειά σας."
        },
        {
          "h": "Ανήλικοι",
          "p": "Οι ανήλικοι πρέπει πάντα να συνοδεύονται από ενήλικα και μπορεί να έχουν ξεχωριστά όρια ηλικίας ανά δραστηριότητα."
        }
      ]
    }
  },
  "es": {
    "terms": {
      "title": "Términos y condiciones",
      "intro": "Estos Términos rigen el uso del sitio web de Karpathos Adventures y el servicio de conserjería de reservas. Al utilizar el sitio o enviar una consulta, usted acepta estos Términos.",
      "sections": [
        {
          "h": "1. Nuestro papel",
          "p": "Karpathos Adventures es un conserje de reservas curado. Conectamos a los huéspedes con operadores locales independientes y también podemos revender sus experiencias. Los operadores siguen siendo responsables de realizar la actividad de forma segura y legal."
        },
        {
          "h": "2. Reservas y consultas",
          "p": "Una consulta no es una reserva confirmada. Una reserva se confirma solo una vez que respondemos con la fecha, el precio y los detalles de la reunión, y se ha recibido el depósito requerido."
        },
        {
          "h": "3. Precios",
          "p": "Todos los precios indicados son precios guía y pueden cambiar según la temporada, el tamaño del grupo, la ruta o el operador. Siempre confirmaremos el precio final antes de reservar."
        },
        {
          "h": "4. Responsabilidad del operador",
          "p": "Las actividades son operadas por socios locales independientes. Examinamos a los operadores pero no controlamos las operaciones diarias."
        },
        {
          "h": "5. Uso del sitio",
          "p": "No elimine, copie ni haga mal uso del sitio. No realices reservas falsas o fraudulentas."
        },
        {
          "h": "6. Responsabilidad",
          "p": "En la medida en que lo permita la ley, nuestra responsabilidad por cualquier reserva única se limita al monto que usted nos pagó por esa reserva."
        },
        {
          "h": "7. Cambios",
          "p": "Podemos actualizar estos Términos. La última versión siempre se encuentra en esta página."
        }
      ]
    },
    "privacy": {
      "title": "política de privacidad",
      "intro": "Respetamos su privacidad. Esta política explica qué recopilamos, por qué y sus derechos, incluido cómo eliminar sus datos.",
      "sections": [
        {
          "h": "Datos que recopilamos",
          "p": "Nombre, correo electrónico, teléfono/WhatsApp, la actividad por la que preguntaste, tus fechas preferidas y tamaño de grupo, y cualquier mensaje que nos envíes. También podemos recopilar análisis básicos para mejorar el sitio."
        },
        {
          "h": "¿Por qué lo recogemos?",
          "p": "Para responder a su consulta, confirmar reservas y mejorar la web. No vendemos tus datos."
        },
        {
          "h": "¿Cuánto tiempo lo mantendremos?",
          "p": "Los datos de las consultas se conservan durante un máximo de 24 meses para fines de atención al cliente y generación de informes, a menos que nos solicite que los eliminemos antes."
        },
        {
          "h": "Tus derechos",
          "p": "Puede solicitar una copia de sus datos, corregirlos o eliminarlos en cualquier momento enviando un correo electrónico a concierge@karpathosadventures.com."
        },
        {
          "h": "Galletas",
          "p": "Utilizamos cookies esenciales y (con su consentimiento) análisis básicos. Puede cambiar su elección en el banner de cookies."
        },
        {
          "h": "Seguridad",
          "p": "El sitio se sirve a través de HTTPS. El acceso a las consultas está restringido a los miembros autorizados del equipo."
        }
      ]
    },
    "cancellation": {
      "title": "Política de cancelación",
      "intro": "La mayoría de las actividades ofrecen cancelación gratuita hasta 24-72 horas antes de la hora de inicio. Cada página de actividad enumera su política exacta.",
      "sections": [
        {
          "h": "Ventana de cancelación gratuita",
          "p": "Salvo que se indique lo contrario, podrás cancelar sin coste hasta 24 horas antes de las actividades grupales y 72 horas antes de las experiencias privadas (ingredientes, charter y setups del chef)."
        },
        {
          "h": "Cancelaciones por clima",
          "p": "Si nosotros (o el operador) cancelamos por razones climáticas o de seguridad, obtendrá un reembolso completo o una reprogramación gratuita."
        },
        {
          "h": "No presentarse",
          "p": "Las no presentaciones no son reembolsables. Si llegas tarde, envíanos un mensaje por WhatsApp lo antes posible."
        },
        {
          "h": "Cambios tardíos",
          "p": "Los cambios de fecha y tamaño del grupo después del período gratuito pueden generar una pequeña tarifa según el operador."
        }
      ]
    },
    "safety": {
      "title": "Seguridad y seguro",
      "intro": "Su seguridad es nuestra prioridad número uno. Todas las actividades están a cargo de operadores locales autorizados y volvemos a verificar los documentos cada temporada.",
      "sections": [
        {
          "h": "Solo operadores con licencia",
          "p": "Solo enumeramos operadores con licencias locales válidas, cuando sea necesario, y seguro verificado."
        },
        {
          "h": "Condiciones climáticas y del mar",
          "p": "Las actividades en barco, deportes acuáticos y montaña sólo se realizan en condiciones seguras. Reprogramaremos o reembolsaremos si las condiciones no son seguras."
        },
        {
          "h": "Equipo de seguridad",
          "p": "Se proporcionan cascos, chalecos salvavidas, arneses y equipo de buceo según sea necesario y deben usarse en todo momento."
        },
        {
          "h": "Declaración de salud",
          "p": "Algunas actividades (por ejemplo, el buceo) requieren un breve cuestionario de salud. Por favor responda honestamente, es por su seguridad."
        },
        {
          "h": "Menores",
          "p": "Los menores deberán ir siempre acompañados de un adulto y podrán tener límites de edad separados por actividad."
        }
      ]
    }
  },
  "fr": {
    "terms": {
      "title": "Conditions générales",
      "intro": "Les présentes Conditions régissent votre utilisation du site Web de Karpathos Adventures et du service de conciergerie de réservation. En utilisant le site ou en envoyant une demande, vous acceptez ces conditions.",
      "sections": [
        {
          "h": "1. Notre rôle",
          "p": "Karpathos Adventures est un concierge de réservation organisé. Nous mettons les clients en relation avec des opérateurs locaux indépendants et pouvons également revendre leurs expériences. Les opérateurs restent responsables de la prestation de l’activité en toute sécurité et en toute légalité."
        },
        {
          "h": "2. Réservations et demandes de renseignements",
          "p": "Une demande de renseignements n'est pas une réservation confirmée. Une réservation n'est confirmée qu'une fois que nous répondons avec la date, le prix et les détails de la réunion, et que tout dépôt requis a été reçu."
        },
        {
          "h": "3. Tarifs",
          "p": "Tous les prix indiqués sont des prix indicatifs et peuvent changer selon la saison, la taille du groupe, l'itinéraire ou l'opérateur. Nous confirmerons toujours le prix final avant de réserver."
        },
        {
          "h": "4. Responsabilité de l'opérateur",
          "p": "Les activités sont gérées par des partenaires locaux indépendants. Nous contrôlons les opérateurs mais ne contrôlons pas les opérations quotidiennes."
        },
        {
          "h": "5. Utilisation du site",
          "p": "Ne grattez pas, ne copiez pas et n'utilisez pas le site à mauvais escient. Ne faites pas de réservations fausses ou frauduleuses."
        },
        {
          "h": "6. Responsabilité",
          "p": "Dans la mesure permise par la loi, notre responsabilité pour toute réservation unique est limitée au montant que vous nous avez payé pour cette réservation."
        },
        {
          "h": "7. Modifications",
          "p": "Nous pouvons mettre à jour ces conditions. La dernière version est toujours disponible sur cette page."
        }
      ]
    },
    "privacy": {
      "title": "politique de confidentialité",
      "intro": "Nous respectons votre vie privée. Cette politique explique ce que nous collectons, pourquoi et vos droits, y compris comment supprimer vos données.",
      "sections": [
        {
          "h": "Données que nous collectons",
          "p": "Nom, e-mail, téléphone/WhatsApp, l'activité sur laquelle vous avez posé une question, vos dates préférées et la taille du groupe, ainsi que tout message que vous nous envoyez. Nous pouvons également collecter des analyses de base pour améliorer le site."
        },
        {
          "h": "Pourquoi nous le collectons",
          "p": "Pour répondre à votre demande, confirmer les réservations et améliorer le site. Nous ne vendons pas vos données."
        },
        {
          "h": "Combien de temps on le garde",
          "p": "Les données de demande sont conservées jusqu'à 24 mois à des fins d'assistance client et de reporting, sauf si vous nous demandez de les supprimer plus tôt."
        },
        {
          "h": "Vos droits",
          "p": "Vous pouvez demander une copie de vos données, les corriger ou les supprimer à tout moment en envoyant un e-mail à concierge@karpathosadventures.com."
        },
        {
          "h": "Cookies",
          "p": "Nous utilisons des cookies essentiels et (avec votre consentement) des analyses de base. Vous pouvez modifier votre choix dans le bandeau cookie."
        },
        {
          "h": "Sécurité",
          "p": "Le site est servi via HTTPS. L’accès aux demandes de renseignements est limité aux membres autorisés de l’équipe."
        }
      ]
    },
    "cancellation": {
      "title": "Politique d'annulation",
      "intro": "La plupart des activités offrent une annulation gratuite jusqu'à 24 à 72 heures avant l'heure de début. Chaque page d'activité répertorie sa politique exacte.",
      "sections": [
        {
          "h": "Fenêtre d'annulation gratuite",
          "p": "Sauf indication contraire, vous pouvez annuler sans frais jusqu'à 24 heures avant les activités de groupe et 72 heures avant les expériences privées (ingrédients, charte et configuration du chef)."
        },
        {
          "h": "Annulations météorologiques",
          "p": "Si nous (ou l'opérateur) annulons pour des raisons météorologiques ou de sécurité, vous obtenez un remboursement complet ou un report gratuit."
        },
        {
          "h": "Non-présentation",
          "p": "Les non-présentations ne sont pas remboursables. Si vous êtes en retard, envoyez-nous un message sur WhatsApp dès que possible."
        },
        {
          "h": "Modifications tardives",
          "p": "Les changements de taille de groupe et de date après la fenêtre gratuite peuvent entraîner des frais minimes en fonction de l'opérateur."
        }
      ]
    },
    "safety": {
      "title": "Sécurité et assurance",
      "intro": "Votre sécurité est notre priorité numéro un. Toutes les activités sont gérées par des opérateurs locaux agréés et nous revérifions les documents chaque saison.",
      "sections": [
        {
          "h": "Opérateurs agréés uniquement",
          "p": "Nous répertorions uniquement les opérateurs disposant de licences locales valides, le cas échéant, et d'une assurance vérifiée."
        },
        {
          "h": "Conditions météorologiques et maritimes",
          "p": "Les activités nautiques, nautiques et de montagne ne se déroulent que dans des conditions sûres. Nous reporterons ou rembourserons si les conditions ne sont pas sûres."
        },
        {
          "h": "Équipement de sécurité",
          "p": "Des casques, gilets de sauvetage, harnais et équipements de plongée sont fournis selon les besoins et doivent être portés à tout moment."
        },
        {
          "h": "Déclaration de santé",
          "p": "Certaines activités (par exemple la plongée sous-marine) nécessitent un court questionnaire de santé. Veuillez répondre honnêtement, c'est pour votre sécurité."
        },
        {
          "h": "Mineurs",
          "p": "Les mineurs doivent toujours être accompagnés d'un adulte et peuvent avoir des limites d'âge distinctes par activité."
        }
      ]
    }
  },
  "de": {
    "terms": {
      "title": "Allgemeine Geschäftsbedingungen",
      "intro": "Diese Bedingungen regeln Ihre Nutzung der Karpathos Adventures-Website und des Buchungs-Concierge-Service. Durch die Nutzung der Website oder das Senden einer Anfrage stimmen Sie diesen Bedingungen zu.",
      "sections": [
        {
          "h": "1. Unsere Rolle",
          "p": "Karpathos Adventures ist ein kuratierter Buchungs-Concierge. Wir bringen Gäste mit unabhängigen lokalen Betreibern zusammen und können ihre Erlebnisse auch weiterverkaufen. Die Betreiber bleiben für die sichere und rechtmäßige Durchführung der Aktivität verantwortlich."
        },
        {
          "h": "2. Buchungen und Anfragen",
          "p": "Eine Anfrage ist keine bestätigte Buchung. Eine Buchung gilt erst dann als bestätigt, wenn wir mit Datum, Preis und Einzelheiten zum Treffen antworten und die erforderliche Anzahlung eingegangen ist."
        },
        {
          "h": "3. Preise",
          "p": "Alle aufgeführten Preise sind Richtpreise und können sich je nach Saison, Gruppengröße, Route oder Veranstalter ändern. Wir bestätigen den Endpreis immer vor der Buchung."
        },
        {
          "h": "4. Verantwortung des Betreibers",
          "p": "Die Aktivitäten werden von unabhängigen lokalen Partnern durchgeführt. Wir überprüfen die Bediener, kontrollieren aber nicht den täglichen Betrieb."
        },
        {
          "h": "5. Nutzung der Website",
          "p": "Scrapen, kopieren oder missbrauchen Sie die Website nicht. Nehmen Sie keine falschen oder betrügerischen Buchungen vor."
        },
        {
          "h": "6. Haftung",
          "p": "Soweit gesetzlich zulässig, ist unsere Haftung für jede einzelne Buchung auf den Betrag beschränkt, den Sie uns für diese Buchung gezahlt haben."
        },
        {
          "h": "7. Änderungen",
          "p": "Wir können diese Bedingungen aktualisieren. Die neueste Version befindet sich immer auf dieser Seite."
        }
      ]
    },
    "privacy": {
      "title": "Datenschutzrichtlinie",
      "intro": "Wir respektieren Ihre Privatsphäre. In dieser Richtlinie wird erläutert, was wir erfassen, warum und welche Rechte Sie haben – einschließlich der Löschung Ihrer Daten.",
      "sections": [
        {
          "h": "Daten, die wir sammeln",
          "p": "Name, E-Mail, Telefon/WhatsApp, die Aktivität, nach der Sie gefragt haben, Ihre bevorzugten Daten und Gruppengröße sowie jede Nachricht, die Sie uns senden. Wir können auch grundlegende Analysen sammeln, um die Website zu verbessern."
        },
        {
          "h": "Warum wir es sammeln",
          "p": "Um Ihre Anfrage zu beantworten, Buchungen zu bestätigen und die Website zu verbessern. Wir verkaufen Ihre Daten nicht."
        },
        {
          "h": "Wie lange behalten wir es?",
          "p": "Anfragedaten werden für den Kundensupport und die Berichterstattung bis zu 24 Monate aufbewahrt, es sei denn, Sie bitten uns, sie früher zu löschen."
        },
        {
          "h": "Ihre Rechte",
          "p": "Sie können jederzeit eine Kopie Ihrer Daten anfordern, diese korrigieren oder löschen, indem Sie eine E-Mail an Concierge@karpathosadventures.com senden."
        },
        {
          "h": "Kekse",
          "p": "Wir verwenden wesentliche Cookies und (mit Ihrer Zustimmung) grundlegende Analysen. Sie können Ihre Auswahl im Cookie-Banner ändern."
        },
        {
          "h": "Sicherheit",
          "p": "Die Website wird über HTTPS bereitgestellt. Der Zugriff auf Anfragen ist auf autorisierte Teammitglieder beschränkt."
        }
      ]
    },
    "cancellation": {
      "title": "Stornierungsbedingungen",
      "intro": "Die meisten Aktivitäten können bis zu 24–72 Stunden vor Beginn kostenlos storniert werden. Auf jeder Aktivitätsseite sind die genauen Richtlinien aufgeführt.",
      "sections": [
        {
          "h": "Kostenloses Stornierungsfenster",
          "p": "Sofern nicht anders angegeben, können Sie bis zu 24 Stunden vor Gruppenaktivitäten und 72 Stunden vor privaten Erlebnissen (Zutaten, Charter und Kochaufbau) kostenlos stornieren."
        },
        {
          "h": "Wetterstornierungen",
          "p": "Wenn wir (oder der Betreiber) aus Wetter- oder Sicherheitsgründen stornieren, erhalten Sie eine volle Rückerstattung oder eine kostenlose Umbuchung."
        },
        {
          "h": "Nichterscheinen",
          "p": "Bei Nichterscheinen ist keine Rückerstattung möglich. Wenn Sie zu spät kommen, schreiben Sie uns so schnell wie möglich eine Nachricht auf WhatsApp."
        },
        {
          "h": "Späte Änderungen",
          "p": "Für Änderungen der Gruppengröße und des Datums nach dem freien Zeitfenster kann je nach Betreiber eine geringe Gebühr anfallen."
        }
      ]
    },
    "safety": {
      "title": "Sicherheit und Versicherung",
      "intro": "Ihre Sicherheit hat für uns oberste Priorität. Alle Aktivitäten werden von lizenzierten lokalen Betreibern durchgeführt und wir überprüfen die Dokumente jede Saison erneut.",
      "sections": [
        {
          "h": "Nur lizenzierte Betreiber",
          "p": "Wir listen nur Betreiber mit gültigen lokalen Lizenzen (sofern erforderlich) und geprüfter Versicherung auf."
        },
        {
          "h": "Wetter- und Seebedingungen",
          "p": "Boots-, Wassersport- und Bergaktivitäten finden nur unter sicheren Bedingungen statt. Wir werden den Termin verschieben oder eine Rückerstattung vornehmen, wenn die Bedingungen nicht sicher sind."
        },
        {
          "h": "Sicherheitsausrüstung",
          "p": "Helme, Schwimmwesten, Gurte und Tauchausrüstung werden nach Bedarf bereitgestellt und müssen jederzeit getragen werden."
        },
        {
          "h": "Gesundheitserklärung",
          "p": "Für einige Aktivitäten (z. B. Tauchen) ist ein kurzer Gesundheitsfragebogen erforderlich. Bitte antworten Sie ehrlich – es dient Ihrer Sicherheit."
        },
        {
          "h": "Minderjährige",
          "p": "Minderjährige müssen immer von einem Erwachsenen begleitet werden und möglicherweise gelten für jede Aktivität gesonderte Altersgrenzen."
        }
      ]
    }
  }
};

export function PolicyPage({ kind }: { kind: Kind }) {
  const { language, t } = useLanguage();
  const c = TRANSLATED_CONTENT[language]?.[kind] || TRANSLATED_CONTENT["en"][kind];

  useSEO({
    title: `${c.title} | Karpathos Adventures`,
    description: c.intro,
    canonicalPath: `/policies/${kind}`
  });

  return (
    <div className="pt-24 pb-16">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-teal text-xs font-bold uppercase tracking-widest mb-2">
          {t("footer.policies", "Policies")}
        </div>
        <h1 className="font-display font-bold text-4xl sm:text-5xl text-navy leading-tight">{c.title}</h1>
        <p className="text-navy/75 text-lg mt-3">{c.intro}</p>

        <div className="mt-8 space-y-6">
          {c.sections.map((s) => (
            <section key={s.h}>
              <h2 className="font-display font-bold text-xl text-navy mb-1.5">{s.h}</h2>
              <p className="text-navy/80 leading-relaxed">{s.p}</p>
            </section>
          ))}
        </div>

        <div className="mt-10 text-xs text-navy/50">
          {t("policy.lastUpdated", "Last updated:")} {new Date().toLocaleDateString(language === 'el' ? 'el-GR' : 'en-GB', { year: "numeric", month: "long" })}
        </div>
      </article>
    </div>
  );
}
