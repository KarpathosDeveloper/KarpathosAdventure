import { writeFileSync } from 'fs';
import { join } from 'path';

const CONTENT = {
  terms: {
    title: "Terms & Conditions",
    intro:
      "These Terms govern your use of the Karpathos Adventures website and the booking concierge service. By using the site or sending an inquiry, you agree to these Terms.",
    sections: [
      { h: "1. Our role", p: "Karpathos Adventures is a curated booking concierge. We connect guests with independent local operators and may also resell their experiences. Operators remain responsible for delivering the activity safely and lawfully." },
      { h: "2. Bookings & inquiries", p: "An inquiry is not a confirmed booking. A booking is confirmed only once we reply with date, price and meeting details, and any required deposit has been received." },
      { h: "3. Prices", p: "All listed prices are 'from' guide prices and may change with season, group size, route or operator. We'll always confirm the final price before booking." },
      { h: "4. Operator responsibility", p: "Activities are operated by independent local partners. We vet operators but do not control day-to-day operations." },
      { h: "5. Use of the site", p: "Don't scrape, copy or misuse the site. Don't make false or fraudulent bookings." },
      { h: "6. Liability", p: "To the extent permitted by law, our liability for any single booking is limited to the amount you paid to us for that booking." },
      { h: "7. Changes", p: "We may update these Terms. The latest version always lives on this page." },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    intro:
      "We respect your privacy. This policy explains what we collect, why, and your rights — including how to delete your data.",
    sections: [
      { h: "Data we collect", p: "Name, email, phone/WhatsApp, the activity you asked about, your preferred dates and group size, and any message you send us. We may also collect basic analytics to improve the site." },
      { h: "Why we collect it", p: "To reply to your inquiry, confirm bookings, and improve the website. We do not sell your data." },
      { h: "How long we keep it", p: "Inquiry data is kept for up to 24 months for customer support and reporting, unless you ask us to delete it earlier." },
      { h: "Your rights", p: "You can ask for a copy of your data, to correct it, or to delete it at any time by emailing concierge@karpathosadventures.com." },
      { h: "Cookies", p: "We use essential cookies and (with your consent) basic analytics. You can change your choice in the cookie banner." },
      { h: "Security", p: "The site is served over HTTPS. Access to inquiries is restricted to authorized team members." },
    ],
  },
  cancellation: {
    title: "Cancellation Policy",
    intro:
      "Most activities offer free cancellation up to 24–72 hours before the start time. Each activity page lists its exact policy.",
    sections: [
      { h: "Free cancellation window", p: "Unless stated otherwise, you can cancel free of charge up to 24 hours before group activities and 72 hours before private experiences (ingredients, charter and chef setups)." },
      { h: "Weather cancellations", p: "If we (or the operator) cancel for weather or safety reasons, you get a full refund or a free reschedule." },
      { h: "No-shows", p: "No-shows are not refundable. If you're running late, message us on WhatsApp as soon as possible." },
      { h: "Late changes", p: "Group size and date changes after the free window may incur a small fee depending on the operator." },
    ],
  },
  safety: {
    title: "Safety & Insurance",
    intro:
      "Your safety is our number one priority. All activities are run by licensed local operators and we re-verify documents every season.",
    sections: [
      { h: "Licensed operators only", p: "We only list operators with valid local licenses, where required, and verified insurance." },
      { h: "Weather & sea conditions", p: "Boat, water sport and mountain activities only run in safe conditions. We will reschedule or refund if conditions are not safe." },
      { h: "Safety gear", p: "Helmets, life jackets, harnesses and diving gear are provided as required and must be worn at all times." },
      { h: "Health declaration", p: "Some activities (e.g. scuba) require a short health questionnaire. Please answer honestly — it's for your safety." },
      { h: "Minors", p: "Minors must always be accompanied by an adult and may have separate age limits per activity." },
    ],
  },
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

async function run() {
  const translations = {
    en: CONTENT
  };

  for (const lang of LANGUAGES) {
    console.log(`Translating policies into ${lang}...`);
    const langContent = {};
    for (const [kind, data] of Object.entries(CONTENT)) {
      const title = await translateText(data.title, lang);
      const intro = await translateText(data.intro, lang);
      const sections = [];
      for (const sec of data.sections) {
        const h = await translateText(sec.h, lang);
        const p = await translateText(sec.p, lang);
        sections.push({ h, p });
        await sleep(50);
      }
      langContent[kind] = { title, intro, sections };
      await sleep(100);
    }
    translations[lang] = langContent;
    console.log(`Finished translating policies into ${lang}`);
  }

  // Generate PolicyPage.tsx content
  const code = `import { useLanguage } from "../lib/languageContext";
import { useSEO } from "../utils/seo";

type Kind = "terms" | "privacy" | "cancellation" | "safety";

const TRANSLATED_CONTENT: Record<string, Record<Kind, { title: string; intro: string; sections: { h: string; p: string }[] }>> = ${JSON.stringify(translations, null, 2)};

export function PolicyPage({ kind }: { kind: Kind }) {
  const { language, t } = useLanguage();
  const c = TRANSLATED_CONTENT[language]?.[kind] || TRANSLATED_CONTENT["en"][kind];

  useSEO({
    title: \`\${c.title} | Karpathos Adventures\`,
    description: c.intro,
    canonicalPath: \`/policies/\${kind}\`
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
`;

  writeFileSync(join(process.cwd(), '../src/pages/PolicyPage.tsx'), code, 'utf8');
  console.log("PolicyPage.tsx successfully updated in root src/pages/!");
}

run();
