import { useMemo, useState, useEffect } from "react";
import { CATEGORIES, type Activity, type Category } from "../data/activities";
import { activitiesService } from "../services/activitiesService";
import { ActivityCard } from "../components/ActivityCard";
import { I } from "../components/Icon";
import { useSEO } from "../utils/seo";
import { useLanguage } from "../lib/languageContext";

type SortKey =
  | "popular"
  | "price-low"
  | "premium"
  | "shortest"
  | "family"
  | "couples"
  | "near-pigadia"
  | "near-amoopi"
  | "near-diafani";

type Filters = {
  q: string;
  category: Category | "all";
  priceMax: number;
  durationMax: number; // hours, simple
  difficulty: string[];
  familyFriendly: boolean;
  privateAvail: boolean;
  pickup: boolean;
  water: boolean;
  food: boolean;
  couples: boolean;
  groups: boolean;
  weather: boolean | null;
};

const initialFilters: Filters = {
  q: "",
  category: "all",
  priceMax: 1500,
  durationMax: 24,
  difficulty: [],
  familyFriendly: false,
  privateAvail: false,
  pickup: false,
  water: false,
  food: false,
  couples: false,
  groups: false,
  weather: null,
};

function durationToHours(d: string) {
  const m = d.match(/(\d+(\.\d+)?)\s*h/);
  if (m) return parseFloat(m[1]);
  if (/full day/i.test(d)) return 9;
  if (/half/i.test(d)) return 5;
  if (/minute/i.test(d)) {
    const mm = d.match(/(\d+)\s*minute/);
    if (mm) return parseInt(mm[1]) / 60;
  }
  const h = d.match(/(\d+)\s*hours/i);
  if (h) return parseInt(h[1]);
  return 4;
}

function isWaterActivity(a: Activity) {
  return (
    a.category === "Sea & Boat Trips" ||
    a.category === "Watersports & Diving" ||
    a.category === "Adventure & Watersports" ||
    /swim|snorkel|kayak|boat|dive|surf/i.test(a.title + a.shortDescription)
  );
}

export function ExplorePage({ initialCategory }: { initialCategory?: Category }) {
  const { language, t } = useLanguage();
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  const sortLabels: Record<SortKey, string> = {
    popular: t("sort.popular", "Most popular"),
    "price-low": t("sort.priceLow", "Lowest price"),
    premium: t("sort.premium", "Premium / private"),
    shortest: t("sort.shortest", "Shortest duration"),
    family: t("sort.family", "Family-friendly"),
    couples: t("sort.couples", "Best for couples"),
    "near-pigadia": t("sort.nearPigadia", "Closest to Pigadia"),
    "near-amoopi": t("sort.nearAmoopi", "Closest to Amoopi"),
    "near-diafani": t("sort.nearDiafani", "Closest to Diafani"),
  };

  useSEO({
    title: t("explore.title", "All Activities") + " | Karpathos Adventures",
    description: "Search and filter 30+ curated experiences in Karpathos, Greece. Find beach boat cruises, guided mountain hikes, PADI scuba diving, and wine tastings.",
    canonicalPath: "/explore",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Explore Curated Activities in Karpathos",
      "url": "https://karpathosadventures.com/#/explore",
      "description": "Search and filter 30+ curated experiences in Karpathos, Greece. Find beach boat cruises, guided mountain hikes, PADI scuba diving, and wine tastings."
    }
  });

  useEffect(() => {
    activitiesService.getActivities().then((data) => {
      setActivities(data);
      setLoading(false);
    });
  }, []);

  const [filters, setFilters] = useState<Filters>({
    ...initialFilters,
    category: initialCategory ?? "all",
  });
  const [sort, setSort] = useState<SortKey>("popular");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [view, setView] = useState<"grid" | "map">("grid");

  const filtered = useMemo(() => {
    let list = activities.filter((a) => {
      if (filters.category !== "all" && a.category !== filters.category) return false;
      if (filters.q) {
        const q = filters.q.toLowerCase();
        const titleText = a.translations?.[language]?.title || a.title;
        const descText = a.translations?.[language]?.shortDescription || a.shortDescription;
        const locText = a.translations?.[language]?.locationName || a.locationName;
        const tagText = a.tags.map(tag => t("category." + tag, tag)).join(" ");
        const hay = (titleText + descText + locText + tagText).toLowerCase();
        if (!hay.includes(q)) return false;
      }
      if (a.fromPrice > filters.priceMax) return false;
      const actDur = a.translations?.[language]?.duration || a.duration;
      if (durationToHours(actDur) > filters.durationMax) return false;
      const actDiff = a.translations?.[language]?.difficulty || a.difficulty;
      if (filters.difficulty.length && !filters.difficulty.includes(actDiff)) return false;
      if (filters.familyFriendly && !a.familyFriendly) return false;
      if (filters.privateAvail && a.groupType === "group") return false;
      if (filters.pickup && !a.pickupAvailable) return false;
      if (filters.water && !isWaterActivity(a)) return false;
      if (filters.food && !a.foodIncluded) return false;
      if (filters.couples && !a.bestForCouples) return false;
      if (filters.groups && !a.bestForGroups) return false;
      if (filters.weather !== null && a.weatherDependent !== filters.weather) return false;
      return true;
    });

    switch (sort) {
      case "price-low":
        list = [...list].sort((a, b) => a.fromPrice - b.fromPrice);
        break;
      case "premium":
        list = [...list].sort((a, b) => {
          const pa = a.groupType === "private" ? 0 : a.groupType === "both" ? 1 : 2;
          const pb = b.groupType === "private" ? 0 : b.groupType === "both" ? 1 : 2;
          if (pa !== pb) return pa - pb;
          return b.fromPrice - a.fromPrice;
        });
        break;
      case "shortest":
        list = [...list].sort((a, b) => {
          const durA = a.translations?.[language]?.duration || a.duration;
          const durB = b.translations?.[language]?.duration || b.duration;
          return durationToHours(durA) - durationToHours(durB);
        });
        break;
      case "family":
        list = [...list].sort((a, b) => Number(b.familyFriendly) - Number(a.familyFriendly));
        break;
      case "couples":
        list = [...list].sort((a, b) => Number(!!b.bestForCouples) - Number(!!a.bestForCouples));
        break;
      case "near-pigadia":
      case "near-amoopi":
      case "near-diafani": {
        const target = sort === "near-pigadia" ? "Pigadia" : sort === "near-amoopi" ? "Amoopi" : "Diafani";
        list = [...list].sort((a, b) => {
          const ai = a.closestTo.indexOf(target as never) === -1 ? 99 : a.closestTo.indexOf(target as never);
          const bi = b.closestTo.indexOf(target as never) === -1 ? 99 : b.closestTo.indexOf(target as never);
          return ai - bi;
        });
        break;
      }
      default:
        list = [...list].sort((a, b) => b.popularity - a.popularity);
    }
    return list;
  }, [filters, sort, activities, language]);

  const reset = () => setFilters({ ...initialFilters, category: filters.category });

  return (
    <div className="pt-20 sm:pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6">
          <div className="text-teal text-xs font-bold uppercase tracking-widest mb-2">
            {t("nav.explore", "Explore activities")}
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-navy">
            {t("explore.title", "All Activities")}
          </h1>
          <p className="text-navy/70 mt-2 max-w-2xl">
            {t("explore.subtitle_desc", "Search, filter and sort curated activities — from boat days and sunrise hikes to private chefs and water sports.").replace("{count}", String(activities.length))}
          </p>
        </div>

        {/* Search & controls */}
        <div className="bg-white rounded-2xl border border-mist p-3 sm:p-4 shadow-sm mb-5 flex flex-col sm:flex-row gap-2 sm:items-center">
          <div className="flex-1 flex items-center gap-2 px-3 py-2 bg-cream rounded-xl">
            <I.Search size={18} className="text-navy/50" />
            <input
              type="text"
              value={filters.q}
              onChange={(e) => setFilters({ ...filters, q: e.target.value })}
              placeholder={t("explore.search", "Search activities, beaches, villages…")}
              className="flex-1 bg-transparent outline-none text-sm text-navy placeholder:text-navy/40"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setDrawerOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-mist text-navy font-semibold text-sm hover:bg-aqua"
            >
              <I.Filter size={16} /> {t("explore.filters", "Filters")}
            </button>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="appearance-none pl-9 pr-8 py-2.5 rounded-xl bg-mist text-navy font-semibold text-sm hover:bg-aqua cursor-pointer"
              >
                {Object.entries(sortLabels).map(([k, v]) => (
                  <option key={k} value={k}>{v}</option>
                ))}
              </select>
              <I.Sort size={16} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-navy/60 pointer-events-none" />
            </div>
            <div className="hidden sm:flex bg-mist rounded-xl p-1">
              <button
                onClick={() => setView("grid")}
                className={`px-2.5 py-1.5 rounded-lg transition ${
                  view === "grid" ? "bg-white text-navy shadow-sm" : "text-navy/60"
                }`}
                aria-label="Grid view"
              >
                <I.Grid size={16} />
              </button>
              <button
                onClick={() => setView("map")}
                className={`px-2.5 py-1.5 rounded-lg transition ${
                  view === "map" ? "bg-white text-navy shadow-sm" : "text-navy/60"
                }`}
                aria-label="Map view"
              >
                <I.Map size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Category chips */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 mb-6">
          <Chip
            active={filters.category === "all"}
            onClick={() => setFilters({ ...filters, category: "all" })}
            label={`${t("explore.filter.all", "All Categories")} (${activities.length})`}
          />
          {CATEGORIES.map((c) => {
            const count = activities.filter((a) => a.category === c).length;
            return (
              <Chip
                key={c}
                active={filters.category === c}
                onClick={() => setFilters({ ...filters, category: c })}
                label={`${t("category." + c, c)} (${count})`}
              />
            );
          })}
        </div>

        {/* Results */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm text-navy/70">
            <span className="font-semibold text-navy">{filtered.length}</span> {filtered.length === 1 ? t("explore.experience", "experience") : t("explore.experiences", "experiences")}
          </div>
          <button
            onClick={reset}
            className="text-xs text-teal font-semibold hover:underline"
          >
            {t("explore.resetFilters", "Reset filters")}
          </button>
        </div>

        {loading ? (
          <div className="text-center py-20 text-navy/50 font-medium">Loading activities...</div>
        ) : view === "grid" ? (
          filtered.length === 0 ? (
            <EmptyState onReset={reset} />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {filtered.map((a) => (
                <ActivityCard key={a.id} activity={a} />
              ))}
            </div>
          )
        ) : (
          <MapPlaceholder activities={filtered} />
        )}
      </div>

      {/* Filter drawer */}
      {drawerOpen && (
        <FilterDrawer
          filters={filters}
          setFilters={setFilters}
          onClose={() => setDrawerOpen(false)}
        />
      )}
    </div>
  );
}

function Chip({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition ${
        active
          ? "bg-navy text-white shadow-md"
          : "bg-white border border-mist text-navy hover:border-teal hover:text-teal"
      }`}
    >
      {label}
    </button>
  );
}

function EmptyState({ onReset }: { onReset: () => void }) {
  const { t } = useLanguage();
  return (
    <div className="text-center py-16 bg-white rounded-3xl border border-mist">
      <div className="w-14 h-14 rounded-full bg-mist text-navy flex items-center justify-center mx-auto mb-3">
        <I.Search size={22} />
      </div>
      <h3 className="font-display font-bold text-xl text-navy">{t("explore.noMatches", "No matching activities")}</h3>
      <p className="text-navy/70 text-sm mt-1">{t("explore.widening", "Try widening your filters or a different search.")}</p>
      <button
        onClick={onReset}
        className="mt-4 px-4 py-2 rounded-full bg-teal text-white font-semibold text-sm"
      >
        {t("explore.resetFilters", "Reset filters")}
      </button>
    </div>
  );
}

function MapPlaceholder({ activities }: { activities: Activity[] }) {
  const { language, t } = useLanguage();
  return (
    <div className="relative rounded-3xl overflow-hidden border border-mist bg-aqua/30 min-h-[520px] flex">
      <div className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 40%, rgba(0,124,138,0.15), transparent 50%), radial-gradient(circle at 70% 60%, rgba(217,180,111,0.15), transparent 50%)",
        }}
      />
      <div className="relative p-6 w-full grid lg:grid-cols-[1fr_360px] gap-4">
        <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-white flex items-center justify-center text-center p-10">
          <div>
            <div className="w-12 h-12 mx-auto rounded-full bg-teal text-white flex items-center justify-center mb-3">
              <I.Map size={22} />
            </div>
            <h3 className="font-display font-bold text-navy text-xl">{t("map.comingSoon", "Map view coming soon")}</h3>
            <p className="text-sm text-navy/70 mt-1 max-w-md mx-auto">
              {t("map.comingSoon.desc", "We'll plot every activity meeting point on a real Karpathos map in the next release. For now, use the list below.")}
            </p>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-mist overflow-y-auto max-h-[480px]">
          {activities.slice(0, 12).map((a) => {
            const actTitle = a.translations?.[language]?.title || a.title;
            const actLoc = a.translations?.[language]?.locationName || a.locationName;
            return (
              <a
                key={a.id}
                href={`#/activities/${a.slug}`}
                className="flex gap-3 p-3 border-b border-mist last:border-0 hover:bg-cream transition"
              >
                <img src={a.imageUrls[0]} alt={actTitle} className="w-16 h-16 rounded-lg object-cover" />
                <div className="min-w-0">
                  <div className="font-semibold text-navy text-sm truncate">{actTitle}</div>
                  <div className="text-xs text-navy/60 truncate">{actLoc}</div>
                  <div className="text-xs text-teal-dark font-bold mt-1">
                    {t("activity.priceFrom", "From")} {a.currency}{a.fromPrice}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function FilterDrawer({
  filters,
  setFilters,
  onClose,
}: {
  filters: Filters;
  setFilters: (f: Filters) => void;
  onClose: () => void;
}) {
  const { t } = useLanguage();
  const toggleDiff = (d: string) => {
    setFilters({
      ...filters,
      difficulty: filters.difficulty.includes(d)
        ? filters.difficulty.filter((x) => x !== d)
        : [...filters.difficulty, d],
    });
  };
  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="absolute inset-0 bg-navy/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative ml-auto w-full max-w-md bg-white h-full overflow-y-auto p-6 fade-up">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display font-bold text-xl text-navy">{t("explore.filters", "Filters")}</h3>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-mist">
            <I.Close />
          </button>
        </div>

        <Section title={t("filter.maxPrice", "Max price")}>
          <input
            type="range"
            min={20}
            max={1500}
            step={20}
            value={filters.priceMax}
            onChange={(e) => setFilters({ ...filters, priceMax: Number(e.target.value) })}
            className="w-full accent-teal"
          />
          <div className="text-sm text-navy/80 mt-1">{t("activity.priceFrom", "Up to")} €{filters.priceMax}</div>
        </Section>

        <Section title={t("filter.maxDuration", "Max duration (hours)")}>
          <input
            type="range"
            min={1}
            max={12}
            step={1}
            value={filters.durationMax}
            onChange={(e) => setFilters({ ...filters, durationMax: Number(e.target.value) })}
            className="w-full accent-teal"
          />
          <div className="text-sm text-navy/80 mt-1">{t("activity.priceFrom", "Up to")} {filters.durationMax}h</div>
        </Section>

        <Section title={t("activity.difficulty", "Difficulty")}>
          <div className="flex flex-wrap gap-2">
            {["Easy", "Relaxed", "Moderate", "Challenging"].map((d) => (
              <button
                key={d}
                onClick={() => toggleDiff(d)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                  filters.difficulty.includes(d)
                    ? "bg-navy text-white"
                    : "bg-mist text-navy hover:bg-aqua"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </Section>

        <Section title={t("filter.showOnly", "Show only")}>
          <div className="grid grid-cols-2 gap-2">
            <Toggle label={t("sort.family", "Family-friendly")} v={filters.familyFriendly} onChange={(v) => setFilters({ ...filters, familyFriendly: v })} />
            <Toggle label={t("filter.privateAvail", "Private available")} v={filters.privateAvail} onChange={(v) => setFilters({ ...filters, privateAvail: v })} />
            <Toggle label={t("filter.pickup", "Pickup available")} v={filters.pickup} onChange={(v) => setFilters({ ...filters, pickup: v })} />
            <Toggle label={t("filter.water", "Water activity")} v={filters.water} onChange={(v) => setFilters({ ...filters, water: v })} />
            <Toggle label={t("filter.food", "Food included")} v={filters.food} onChange={(v) => setFilters({ ...filters, food: v })} />
            <Toggle label={t("sort.couples", "Best for couples")} v={filters.couples} onChange={(v) => setFilters({ ...filters, couples: v })} />
            <Toggle label={t("filter.groups", "Best for groups")} v={filters.groups} onChange={(v) => setFilters({ ...filters, groups: v })} />
          </div>
        </Section>

        <Section title={t("filter.weather", "Weather dependent")}>
          <div className="flex gap-2">
            {[
              { v: null, l: t("filter.weather.any", "Any") },
              { v: true, l: t("filter.weather.yes", "Yes") },
              { v: false, l: t("filter.weather.no", "No") },
            ].map((o) => (
              <button
                key={String(o.v)}
                onClick={() => setFilters({ ...filters, weather: o.v as boolean | null })}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                  filters.weather === o.v
                    ? "bg-navy text-white"
                    : "bg-mist text-navy hover:bg-aqua"
                }`}
              >
                {o.l}
              </button>
            ))}
          </div>
        </Section>

        <button
          onClick={onClose}
          className="mt-6 w-full py-3 rounded-full bg-teal text-white font-semibold"
        >
          {t("filter.showResults", "Show results")}
        </button>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-5 pb-5 border-b border-mist last:border-0">
      <div className="text-[11px] font-bold uppercase tracking-wider text-navy/60 mb-2">{title}</div>
      {children}
    </div>
  );
}

function Toggle({ label, v, onChange }: { label: string; v: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!v)}
      className={`text-left px-3 py-2 rounded-xl text-xs font-semibold border transition ${
        v
          ? "bg-aqua border-teal text-teal-dark"
          : "bg-white border-mist text-navy hover:border-teal/50"
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <span>{label}</span>
        {v && <I.Check size={14} />}
      </div>
    </button>
  );
}
