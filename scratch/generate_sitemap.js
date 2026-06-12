const fs = require("fs");
const path = require("path");

// We can extract activities from activities.ts or manually specify them.
// Let's read frontend/src/data/activities.ts to match the slugs.
const activitiesContent = fs.readFileSync(
  path.join(__dirname, "../frontend/src/data/activities.ts"),
  "utf8"
);

// Extract slugs using regex
const slugRegex = /"slug":\s*"([^"]+)"/g;
const slugs = [];
let match;
while ((match = slugRegex.exec(activitiesContent)) !== null) {
  slugs.push(match[1]);
}

// Unique slugs
const uniqueSlugs = [...new Set(slugs)];

// Guides
const guides = [
  "things-to-do-in-karpathos",
  "best-boat-trips-in-karpathos",
  "best-activities-for-families-in-karpathos",
  "karpathos-for-couples",
  "what-to-do-in-karpathos-for-3-days",
  "best-hikes-in-karpathos",
  "windsurfing-in-karpathos",
  "saria-island-karpathos",
  "olympos-karpathos-day-trip",
  "best-wellness-experiences-in-karpathos",
  "private-group-activities-karpathos",
  "things-to-do-near-amoopi-karpathos",
  "things-to-do-near-pigadia-karpathos",
  "karpathos-water-sports"
];

// Collections
const collections = [
  "sea-days",
  "culture-villages",
  "active-karpathos",
  "wellness-slow-travel",
  "creative-local-moments",
  "food-wine",
  "private-group-days",
  "hidden-island-rituals"
];

// Areas
const areas = [
  "pigadia",
  "amoopi",
  "afiartis",
  "volada-pini",
  "arkasa",
  "olympos-diafani",
  "adia",
  "saria"
];

// Categories
const categories = [
  "adventure-watersports",
  "culture-village-tours",
  "fitness-lifestyle",
  "food-wine-tastings",
  "hiking-tours",
  "sea-boat-trips",
  "watersports-diving",
  "wellness-massage",
  "workshops-local-craft"
];

const dateStr = new Date().toISOString().split("T")[0];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Core pages -->
  <url>
    <loc>https://karpathosadventures.com/</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://karpathosadventures.com/#/explore</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://karpathosadventures.com/#/about</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://karpathosadventures.com/#/contact</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://karpathosadventures.com/#/concierge</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://karpathosadventures.com/#/partners</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://karpathosadventures.com/#/policies/terms</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://karpathosadventures.com/#/policies/privacy</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://karpathosadventures.com/#/policies/cancellation</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://karpathosadventures.com/#/policies/safety</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>
`;

  // Categories
  categories.forEach((cat) => {
    xml += `  <url>
    <loc>https://karpathosadventures.com/#/category/${cat}</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>\n`;
  });

  // Areas
  areas.forEach((area) => {
    xml += `  <url>
    <loc>https://karpathosadventures.com/#/areas/${area}</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
  });

  // Collections
  collections.forEach((col) => {
    xml += `  <url>
    <loc>https://karpathosadventures.com/#/collections/${col}</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
  });

  // Guides
  guides.forEach((guide) => {
    xml += `  <url>
    <loc>https://karpathosadventures.com/#/guides/${guide}</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
  });

  // Experiences (using /experiences/ as canonical URL)
  uniqueSlugs.forEach((slug) => {
    xml += `  <url>
    <loc>https://karpathosadventures.com/#/experiences/${slug}</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
  });

xml += `</urlset>\n`;

fs.writeFileSync(
  path.join(__dirname, "../frontend/public/sitemap.xml"),
  xml,
  "utf8"
);
console.log("Sitemap generated successfully inside frontend/public/sitemap.xml!");
