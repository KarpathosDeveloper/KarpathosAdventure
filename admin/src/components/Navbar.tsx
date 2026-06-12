import { useEffect, useState } from "react";
import { Link, useRouter } from "../lib/router";
import { I } from "./Icon";
import { useLanguage, type Language } from "../lib/languageContext";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const { path } = useRouter();
  const { language, setLanguage, t } = useLanguage();

  const isHome = path === "/" || path === "";
  const isSolid = scrolled || open || !isHome;

  const NAV = [
    { label: t("nav.home", "Home"), to: "/" },
    { label: t("nav.explore", "Explore"), to: "/explore" },
    { label: t("nav.boatTrips", "Boat Trips"), to: "/category/sea-boat-trips" },
    { label: t("nav.hikes", "Hikes"), to: "/category/hiking-tours" },
    { label: t("nav.adventure", "Adventure"), to: "/category/adventure-watersports" },
    { label: t("nav.foodWine", "Food & Wine"), to: "/category/food-wine-tastings" },
    { label: t("nav.workshops", "Workshops"), to: "/category/workshops-local-craft" },
    { label: t("nav.wellness", "Wellness"), to: "/category/wellness-massage" },
    { label: t("nav.about", "About"), to: "/about" },
  ];

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "el", name: "Ελληνικά", flag: "🇬🇷" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
  ];

  const currentLangObj = languages.find(l => l.code === language) || languages[0];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setShowLangDropdown(false);
  }, [path]);

  useEffect(() => {
    if (!showLangDropdown) return;
    const clickAway = () => setShowLangDropdown(false);
    window.addEventListener("click", clickAway);
    return () => window.removeEventListener("click", clickAway);
  }, [showLangDropdown]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isSolid
          ? "bg-white/95 backdrop-blur-md border-b border-mist shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal to-navy flex items-center justify-center text-white shadow-md">
              <I.Mountain size={20} />
            </div>
            <div className="leading-tight">
              <div
                className={`font-display font-bold text-[15px] ${
                  isSolid ? "wordmark-grad" : "text-white drop-shadow-md"
                }`}
              >
                Karpathos Adventures
              </div>
              <div
                className={`text-[10px] tracking-widest uppercase ${
                  isSolid ? "text-teal" : "text-white/80 drop-shadow"
                }`}
              >
                Explore · Book · Experience
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => {
              const active =
                path === n.to || (n.to !== "/" && path.startsWith(n.to));
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? isSolid
                        ? "bg-aqua text-teal-dark"
                        : "bg-white/15 text-white"
                      : isSolid
                      ? "text-navy hover:bg-mist"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            {/* Language Selector Dropdown */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setShowLangDropdown(!showLangDropdown)}
                className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer border ${
                  isSolid
                    ? "bg-cream text-navy hover:bg-mist border-mist"
                    : "bg-white/10 text-white hover:bg-white/20 border-white/10"
                }`}
              >
                <span>{currentLangObj.flag}</span>
                <span className="uppercase hidden md:inline text-xs">{currentLangObj.code}</span>
                <I.ChevronDown size={14} className="opacity-70" />
              </button>
              
              {showLangDropdown && (
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-2xl border border-mist shadow-lg py-1.5 z-50">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLanguage(l.code);
                        setShowLangDropdown(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2.5 transition-colors cursor-pointer hover:bg-cream ${
                        language === l.code ? "text-teal font-bold bg-aqua/30" : "text-navy"
                      }`}
                    >
                      <span>{l.flag}</span>
                      <span>{l.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                isSolid
                  ? "bg-teal text-white hover:bg-teal-dark shadow-md"
                  : "bg-white text-navy hover:bg-cream"
              }`}
            >
              <I.Whatsapp size={16} />
              {t("nav.concierge", "Concierge")}
            </Link>
            <button
              onClick={() => setOpen((o) => !o)}
              className={`lg:hidden p-2 rounded-lg ${
                isSolid ? "text-navy" : "text-white"
              }`}
              aria-label="Menu"
            >
              {open ? <I.Close /> : <I.Menu />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="lg:hidden pb-4 grid gap-1 fade-up">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="px-3 py-3 rounded-lg text-navy font-medium hover:bg-mist"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-3 py-3 rounded-lg bg-teal text-white font-semibold mt-1 flex items-center gap-2"
            >
              <I.Whatsapp size={16} /> {t("nav.concierge", "Concierge")}
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
