import { useState, useEffect } from "react";
import { CATEGORY_DESCRIPTIONS, CATEGORY_IMAGES, type Category, type Activity } from "../data/activities";
import { activitiesService } from "../services/activitiesService";
import { ActivityCard } from "../components/ActivityCard";
import { Link } from "../lib/router";
import { I } from "../components/Icon";
import { useSEO } from "../utils/seo";
import { useLanguage } from "../lib/languageContext";

function categorySlug(c: string) {
  return c
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function CategoryPage({ category }: { category: Category }) {
  const { t } = useLanguage();
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  const translatedCategoryName = t("category." + category, category);
  const translatedCategoryDesc = t("category.desc." + category, CATEGORY_DESCRIPTIONS[category]);

  useSEO({
    title: `${translatedCategoryName} in Karpathos | Curated Activities & Experiences`,
    description: translatedCategoryDesc,
    canonicalPath: `/category/${categorySlug(category)}`,
    ogImage: CATEGORY_IMAGES[category],
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": translatedCategoryName,
      "description": translatedCategoryDesc,
      "url": `https://karpathosadventures.com/#/category/${categorySlug(category)}`
    }
  });

  useEffect(() => {
    activitiesService.getActivities().then((data) => {
      setActivities(data);
      setLoading(false);
    });
  }, []);

  const items = activities
    .filter((a) => a.category === category)
    .sort((a, b) => b.popularity - a.popularity);

  return (
    <div>
      <section className="relative min-h-[55vh] flex items-end text-white">
        <img src={CATEGORY_IMAGES[category]} alt={translatedCategoryName} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 w-full">
          <nav className="text-xs text-white/80 mb-3">
            <Link to="/" className="hover:text-sand">{t("nav.home", "Home")}</Link>
            <span className="mx-1.5">/</span>
            <Link to="/explore" className="hover:text-sand">{t("nav.explore", "Explore")}</Link>
            <span className="mx-1.5">/</span>
            <span className="text-white">{translatedCategoryName}</span>
          </nav>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight">
            {translatedCategoryName}
          </h1>
          <p className="mt-3 text-white/90 text-lg max-w-2xl">{translatedCategoryDesc}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link to="/explore" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/95 text-navy font-semibold text-sm hover:bg-white">
              {t("home.browse", "See all activities")} <I.Arrow size={15} />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-success text-white font-semibold text-sm">
              <I.Whatsapp size={15} /> {t("nav.concierge", "Ask concierge")}
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {loading ? (
          <div className="text-center py-10 text-navy/50 font-medium">{t("booking.loading", "Loading experiences...")}</div>
        ) : (
          <>
            <div className="text-sm text-navy/70 mb-4">
              <span className="font-semibold text-navy">{items.length}</span>{" "}
              {items.length === 1 ? t("explore.experience", "experience") : t("explore.experiences", "experiences")}{" "}
              {t("category.inThisCategory", "in this category")}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {items.map((a) => <ActivityCard key={a.id} activity={a} />)}
            </div>
          </>
        )}
      </section>
    </div>
  );
}
