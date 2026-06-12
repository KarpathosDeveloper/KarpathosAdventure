import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const enAdditions = {
  // About Page
  "about.title": "About Us | Karpathos Adventures Concierge",
  "about.metaDescription": "Learn about Karpathos Adventures, a curated local marketplace and concierge service for the best tours, hikes, and experiences in Karpathos, Greece.",
  "about.heading": "Karpathos Adventures is a local concierge for the best of the island.",
  "about.intro": "We started Karpathos Adventures because guests kept asking the same questions: \"What's the best boat trip?\", \"Where can we go hiking?\", \"Can someone organize a private chef at our villa?\". So we built a curated marketplace and concierge service for the experiences that make Karpathos special — and we work only with local operators we personally trust.",
  "about.benefit1.t": "Curated, not crowded",
  "about.benefit1.d": "We only list experiences we'd send our family on.",
  "about.benefit2.t": "Real humans on WhatsApp",
  "about.benefit2.d": "No bots — real people who live on Karpathos.",
  "about.benefit3.t": "Weather-aware planning",
  "about.benefit3.d": "We move things if the sea or wind isn't right.",
  "about.cover.h": "What we cover",
  "about.cover.d": "Boat tours (including the iconic Saria Island day and private charters), hiking and land adventures, buggy and ATV safaris, diving and water sports, food & wine, and private villa experiences — chef dinners, drivers and fully custom Karpathos days.",
  "about.operators.h": "Our operators",
  "about.operators.d": "Many of our activities are run by independent local partners. We check licenses, insurance and reputation before listing them, and re-verify every season. If something ever doesn't meet our standard, you'll hear from us — and your booking is protected.",
  "about.cta.h": "Tell us about your trip — we'll do the rest.",
  "about.cta.tag": "Let's plan",
  "about.cta.btn1": "WhatsApp concierge",
  "about.cta.btn2": "Browse activities",

  // Contact Page / Concierge
  "contact.title": "Karpathos Concierge | Local Activity Planning & Private Experiences",
  "contact.metaDescription": "Ask a local Karpathos concierge to help arrange boat trips, tours, watersports, hiking, wine tasting, wellness, workshops, and private group experiences.",
  "contact.heading": "Ask the Karpathos Concierge",
  "contact.intro": "Tell us your dates, group and what kind of holiday you want. Our concierge replies within hours with a curated plan and honest pricing.",
  "contact.formTitle": "Send us a message",
  "contact.formSubtitle": "We reply on WhatsApp or email — usually the same day.",
  "contact.whatsappBtn": "WhatsApp concierge",
  "contact.whatsappSubtitle": "Fastest way to plan & book",
  "contact.emailBtn": "Email us",
  "contact.hoursTitle": "Office hours",
  "contact.hoursSubtitle": "Mon–Sun · 09:00 – 21:00 (local time, EET)",
  "contact.hoursDesc": "Concierge replies within a few hours during summer season.",
  "contact.tipTitle": "Tip",
  "contact.tipDesc": "If you have a villa, send us the location and we'll suggest the best experiences nearby — and arrange pickups, drivers and chefs.",

  // Inquiry Form
  "form.name": "Your name",
  "form.namePlaceholder": "Maria",
  "form.email": "Email",
  "form.emailPlaceholder": "you@email.com",
  "form.phone": "Phone / WhatsApp",
  "form.phonePlaceholder": "+30 ...",
  "form.preferredDate": "Preferred date",
  "form.guests": "Guests",
  "form.pickup": "Pickup / villa area",
  "form.pickupPlaceholder": "e.g. Amoopi villa",
  "form.message": "Message",
  "form.messagePlaceholder": "Anything else we should know?",
  "form.consent": "I agree to be contacted by Karpathos Adventures about this inquiry. See our Privacy Policy.",
  "form.sending": "Sending...",
  "form.submit": "Request availability",
  "form.successTitle": "Inquiry received ✓",
  "form.successDesc": "Thanks {name} — our concierge will reply within a few hours with availability and pricing.",
  "form.successWhatsapp": "Continue on WhatsApp",

  // Booking Page additional
  "booking.metaDescription": "Submit your details and requested date, and our local concierge team will coordinate with the activity supplier to confirm availability.",
  "booking.subtitle_desc": "Submit your desired dates and details, and our team will coordinate with the supplier.",
  "booking.successTitle": "Request Submitted!",
  "booking.successDesc": "Thank you, {name}. Your request for \"{title}\" on {date} is now processing.",
  "booking.successSub": "Our team will verify availability with the local supplier and contact you via email or WhatsApp within the next few hours.",
  "booking.backHome": "Back Home",
  "booking.browseMore": "Browse More",
  "booking.submitting": "Submitting Request...",
  "booking.maxGuestsNote": "Maximum capacity for this activity is {count} guests.",
  "booking.customRequestTitle": "Custom Plan Request",
  "booking.customRequestDesc": "Send details of what you'd like to do, and our concierge will build a custom itinerary matching your dates.",
  "booking.vetted": "🛡️ Safe & Vetted Partners",
  "booking.replyTime": "⚡ Reply in under 4 Hours",
  "booking.modify": "💬 Easy modifications via WhatsApp",
  "booking.startingPrice": "Starting Price",
  "booking.loading": "Loading activity details...",
  "booking.notFound": "Activity not found",
  "booking.notFoundDesc": "We couldn't find the activity you are trying to book.",

  // Explore Page additional
  "explore.subtitle_desc": "Search, filter and sort {count} curated activities — from boat days and sunrise hikes to private chefs and water sports.",
  "explore.filters": "Filters",
  "explore.experience": "experience",
  "explore.resetFilters": "Reset filters",
  "explore.noMatches": "No matching activities",
  "explore.widening": "Try widening your filters or a different search.",
  "filter.maxPrice": "Max price",
  "filter.maxDuration": "Max duration (hours)",
  "filter.showOnly": "Show only",
  "filter.privateAvail": "Private available",
  "filter.pickup": "Pickup available",
  "filter.water": "Water activity",
  "filter.food": "Food included",
  "filter.groups": "Best for groups",
  "filter.weather": "Weather dependent",
  "filter.weather.any": "Any",
  "filter.weather.yes": "Yes",
  "filter.weather.no": "No",
  "filter.showResults": "Show results",
  "sort.popular": "Most popular",
  "sort.priceLow": "Lowest price",
  "sort.premium": "Premium / private",
  "sort.shortest": "Shortest duration",
  "sort.family": "Family-friendly",
  "sort.couples": "Best for couples",
  "sort.nearPigadia": "Closest to Pigadia",
  "sort.nearAmoopi": "Closest to Amoopi",
  "sort.nearDiafani": "Closest to Diafani",
  "map.comingSoon": "Map view coming soon",
  "map.comingSoon.desc": "We'll plot every activity meeting point on a real Karpathos map in the next release. For now, use the list below.",

  // General Category UI labels
  "category.Adventure & Watersports": "Adventure & Watersports",
  "category.Culture & Village Tours": "Culture & Village Tours",
  "category.Fitness & Lifestyle": "Fitness & Lifestyle",
  "category.Food & Wine Tastings": "Food & Wine Tastings",
  "category.Hiking Tours": "Hiking Tours",
  "category.Sea & Boat Trips": "Sea & Boat Trips",
  "category.Watersports & Diving": "Watersports & Diving",
  "category.Wellness & Massage": "Wellness & Massage",
  "category.Workshops & Local Craft": "Workshops & Local Craft",
  "category.Private Villa Experiences": "Private Villa Experiences",

  "category.desc.Adventure & Watersports": "Windsurfing, wing foiling, mountain biking and rock climbing.",
  "category.desc.Culture & Village Tours": "Traditional Olympos, sunset village walks and day trips.",
  "category.desc.Fitness & Lifestyle": "Active training and gym passes in Pigadia.",
  "category.desc.Food & Wine Tastings": "Local family winery tours, honey tastings, and cooking lessons.",
  "category.desc.Hiking Tours": "Panoramic summits, chapel walks, and hidden valleys.",
  "category.desc.Sea & Boat Trips": "Glass-bottom boats, beach cruises, and Saria excursions.",
  "category.desc.Watersports & Diving": "Speedboat snorkeling, beginner PADI scuba, and advanced diving.",
  "category.desc.Wellness & Massage": "Yoga sessions, sound healing, and therapeutic spa massages.",
  "category.desc.Workshops & Local Craft": "Pebble art, creative mosaic, and clay workshops.",
  "category.desc.Private Villa Experiences": "Concierge custom experiences."
};

const LANGUAGES = ['el', 'es', 'fr', 'de'];
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function translateText(text, lang) {
  if (!text || typeof text !== 'string' || text.trim() === '') return text;
  // Preserve placeholder tokens like {count}, {name}, {title}, {date}
  // We can temporarily replace them with stable tokens or translate directly
  // Google Translate is usually fine with {name} or {count}, but let's be careful.
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

async function buildTranslations() {
  const allTranslations = {
    en: enAdditions
  };

  for (const lang of LANGUAGES) {
    console.log(`Translating new UI keys into ${lang}...`);
    const langDict = {};
    for (const [key, val] of Object.entries(enAdditions)) {
      // Small delay to prevent rate limit
      await sleep(50);
      langDict[key] = await translateText(val, lang);
    }
    allTranslations[lang] = langDict;
    console.log(`Finished ${lang}`);
  }

  return allTranslations;
}

const TARGETS = [
  '../src/data/translations.ts',
  '../frontend/src/data/translations.ts',
  '../admin/src/data/translations.ts'
];

async function run() {
  const dictionary = await buildTranslations();
  
  for (const target of TARGETS) {
    const filePath = join(process.cwd(), target);
    console.log(`Updating ${filePath}...`);
    let content = readFileSync(filePath, 'utf8');

    // For each language, find "home.browse": "..." or similar and append new translations
    const anchors = {
      en: '"home.browse": "Browse activities"',
      el: '"home.browse": "Εξερευνήστε δραστηριότητες"',
      es: '"home.browse": "Ver actividades"',
      fr: '"home.browse": "Parcourir les activités"',
      de: '"home.browse": "Aktivitäten durchsuchen"'
    };

    let success = true;
    for (const lang of ['en', ...LANGUAGES]) {
      const anchor = anchors[lang];
      if (!content.includes(anchor)) {
        console.error(`Could not find anchor for ${lang} in ${target}: ${anchor}`);
        success = false;
        break;
      }

      // Serialize additions
      const dict = dictionary[lang];
      const serialized = Object.entries(dict)
        .map(([k, v]) => `\n    ${JSON.stringify(k)}: ${JSON.stringify(v)}`)
        .join(',');

      // Replace anchor with anchor + comma + serialized additions
      content = content.replace(anchor, `${anchor},${serialized}`);
    }

    if (success) {
      writeFileSync(filePath, content, 'utf8');
      console.log(`Successfully updated ${filePath}`);
    }
  }
}

run();
